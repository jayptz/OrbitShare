import { NextResponse } from 'next/server'
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase'
import { SupabaseClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    if (!isSupabaseConfigured()) {
      // Return a default count of 20 when Supabase is not configured
      return NextResponse.json({ waitlistCount: 20 })
    }

    const supabaseClient = getSupabaseClient()
    if (!supabaseClient) {
      return NextResponse.json({ waitlistCount: 20 })
    }

    const { count, error } = await (supabaseClient as SupabaseClient)
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error fetching waitlist count:', error)
      return NextResponse.json({ waitlistCount: 20 })
    }

    return NextResponse.json({ waitlistCount: count || 20 })
  } catch (error) {
    console.error('Error in waitlist-count API:', error)
    return NextResponse.json({ waitlistCount: 20 })
  }
}
