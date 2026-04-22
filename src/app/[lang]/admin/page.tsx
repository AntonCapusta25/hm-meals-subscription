import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type RequestRow = {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  plan: string | null;
  meals_per_week: string | null;
  delivery_days: string | null;
  source: string | null;
  locale: string | null;
  created_at: string | null;
};

type DayPoint = {
  key: string;
  label: string;
  count: number;
};

function startOfTodayISO() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
}

function daysAgoISO(days: number) {
  const now = new Date();
  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - days);
  return date.toISOString();
}

function formatDate(value: string | null) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleString('nl-NL', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function countBy(rows: RequestRow[], key: keyof RequestRow) {
  const map = new Map<string, number>();
  for (const row of rows) {
    const raw = row[key];
    const label = (raw && String(raw).trim()) || 'Unknown';
    map.set(label, (map.get(label) || 0) + 1);
  }
  return Array.from(map.entries())
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

function formatDayLabel(date: Date) {
  return date.toLocaleDateString('nl-NL', { month: 'short', day: '2-digit' });
}

function buildDailySeries(rows: RequestRow[], days: number) {
  const counts = new Map<string, number>();
  for (const row of rows) {
    if (!row.created_at) continue;
    const key = row.created_at.slice(0, 10);
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  const now = new Date();
  const series: DayPoint[] = [];
  for (let i = days - 1; i >= 0; i -= 1) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - i));
    const key = d.toISOString().slice(0, 10);
    series.push({
      key,
      label: formatDayLabel(d),
      count: counts.get(key) || 0,
    });
  }
  return series;
}

export default async function AdminPage() {
  const [allRes, todayRes, weekRes] = await Promise.all([
    supabaseAdmin
      .from('meal_subscription_requests')
      .select('id, name, email, phone, plan, meals_per_week, delivery_days, source, locale, created_at')
      .order('created_at', { ascending: false })
      .limit(500),
    supabaseAdmin
      .from('meal_subscription_requests')
      .select('id', { count: 'exact', head: true })
      .gte('created_at', startOfTodayISO()),
    supabaseAdmin
      .from('meal_subscription_requests')
      .select('id', { count: 'exact', head: true })
      .gte('created_at', daysAgoISO(7)),
  ]);

  const rows = (allRes.data || []) as RequestRow[];
  const total = rows.length;
  const todayCount = todayRes.count || 0;
  const weekCount = weekRes.count || 0;

  const bySource = countBy(rows, 'source').slice(0, 6);
  const byPlan = countBy(rows, 'plan').slice(0, 6);
  const dailySeries = buildDailySeries(rows, 14);
  const maxDailyCount = Math.max(...dailySeries.map((day) => day.count), 1);
  const sourceTotal = bySource.reduce((acc, item) => acc + item.count, 0) || 1;

  const chartWidth = 760;
  const chartHeight = 220;
  const xStep = dailySeries.length > 1 ? chartWidth / (dailySeries.length - 1) : chartWidth;
  const points = dailySeries
    .map((day, index) => {
      const x = index * xStep;
      const y = chartHeight - (day.count / maxDailyCount) * (chartHeight - 16) - 8;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const loadError = allRes.error || todayRes.error || weekRes.error;

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans text-dark">
      <Navbar />

      <div className="flex-1 w-full max-w-7xl mx-auto px-5 pt-28 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Track meal subscription requests and lead sources.</p>
          </div>
          <Link
            href="/en/quote"
            className="inline-flex items-center justify-center rounded-xl bg-orange text-white px-5 py-3 font-semibold hover:bg-orange/90 transition-colors"
          >
            Open Form
          </Link>
        </div>

        {loadError && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3">
            Failed to load dashboard data. Check Supabase credentials/table setup.
          </div>
        )}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Requests</p>
            <p className="text-3xl font-bold mt-2">{total}</p>
          </div>
          <div className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Today</p>
            <p className="text-3xl font-bold mt-2">{todayCount}</p>
          </div>
          <div className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Last 7 Days</p>
            <p className="text-3xl font-bold mt-2">{weekCount}</p>
          </div>
          <div className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Recent Loaded</p>
            <p className="text-3xl font-bold mt-2">{rows.length}</p>
          </div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm xl:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Requests Trend (Last 14 Days)</h2>
            <div className="rounded-xl border border-dark/10 bg-[#fafafa] p-3">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-56">
                <polyline
                  fill="none"
                  stroke="#FB6A2A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={points}
                />
                {dailySeries.map((day, index) => {
                  const x = index * xStep;
                  const y = chartHeight - (day.count / maxDailyCount) * (chartHeight - 16) - 8;
                  return <circle key={day.key} cx={x} cy={y} r="4" fill="#FB6A2A" />;
                })}
              </svg>
              <div
                className="grid gap-1 mt-2 text-[10px] text-gray-500"
                style={{ gridTemplateColumns: `repeat(${dailySeries.length}, minmax(0, 1fr))` }}
              >
                {dailySeries.map((day) => (
                  <div key={day.key} className="text-center">{day.label}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Source Share</h2>
            <div className="space-y-3">
              {bySource.length === 0 && <p className="text-gray-500 text-sm">No data yet.</p>}
              {bySource.map((item) => {
                const pct = Math.round((item.count / sourceTotal) * 100);
                return (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-700">{item.label}</span>
                      <span className="text-sm font-semibold">{pct}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-orange" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Top Sources</h2>
            <div className="space-y-3">
              {bySource.length === 0 && <p className="text-gray-500 text-sm">No data yet.</p>}
              {bySource.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <span className="text-sm font-semibold">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Top Plans</h2>
            <div className="space-y-3">
              {byPlan.length === 0 && <p className="text-gray-500 text-sm">No data yet.</p>}
              {byPlan.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <span className="text-sm font-semibold">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dark/10 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Requests</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b border-dark/10">
                  <th className="py-3 pr-4 font-semibold">Created</th>
                  <th className="py-3 pr-4 font-semibold">Name</th>
                  <th className="py-3 pr-4 font-semibold">Email</th>
                  <th className="py-3 pr-4 font-semibold">Plan</th>
                  <th className="py-3 pr-4 font-semibold">Meals</th>
                  <th className="py-3 pr-4 font-semibold">Delivery</th>
                  <th className="py-3 pr-4 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-gray-500">No requests yet.</td>
                  </tr>
                )}
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-dark/5 align-top">
                    <td className="py-3 pr-4 whitespace-nowrap">{formatDate(row.created_at)}</td>
                    <td className="py-3 pr-4">{row.name || '—'}</td>
                    <td className="py-3 pr-4">{row.email || '—'}</td>
                    <td className="py-3 pr-4">{row.plan || '—'}</td>
                    <td className="py-3 pr-4">{row.meals_per_week || '—'}</td>
                    <td className="py-3 pr-4">{row.delivery_days || '—'}</td>
                    <td className="py-3 pr-4">{row.source || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
