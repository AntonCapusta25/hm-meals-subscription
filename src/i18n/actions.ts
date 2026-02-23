"use server";

import { cookies } from "next/headers";

export async function setCookie(name: string, value: string) {
    const cookieStore = await cookies();
    cookieStore.set(name, value, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
    });
}
