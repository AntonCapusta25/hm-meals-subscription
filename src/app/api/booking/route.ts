import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  // Debug logging for Vercel
  console.log('Environment check:', {
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    hasSendGridKey: !!process.env.SENDGRID_API_KEY,
    supabaseUrlPrefix: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30),
  });

  try {
    const body = await request.json()
    const {
      name,
      email,
      plan,
      mealsPerWeek,
      deliveryDays,
      message,
      phone,
      locale,
      source
    } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Store in Supabase - meal_subscription_requests table
    const { data, error: dbError } = await supabaseAdmin
      .from('meal_subscription_requests')
      .insert([
        {
          name: name,
          email: email,
          plan: plan || null,
          meals_per_week: mealsPerWeek || null,
          delivery_days: deliveryDays || null,
          message: message || null,
          phone: phone || null,
          locale: locale || null,
          source: source || null,
        },
      ])
      .select()

    if (dbError) {
      console.error('Supabase error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save request', details: dbError },
        { status: 500 }
      )
    }

    try {
      // Invoke Supabase Edge Function for emails
      const { data: fnData, error: fnError } = await supabaseAdmin.functions.invoke(
        'send-meal-subscription-email',
        {
          body: {
            name,
            email,
            phone,
            plan,
            meals_per_week: mealsPerWeek,
            delivery_days: deliveryDays,
            message,
          },
        }
      )

      if (fnError) {
        console.error('Edge Function error:', fnError)
        return NextResponse.json(
          { success: true, warning: 'Request saved but email failed', error: fnError },
          { status: 200 }
        )
      }
    } catch (emailError: any) {
      console.error('Email error:', emailError)
      // Don't fail the request if email fails, booking is already saved
      return NextResponse.json(
        {
          success: true,
          warning: 'Request saved but email notification failed',
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Meal subscription request received!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing booking:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
