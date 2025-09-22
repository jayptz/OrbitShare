import { NextResponse } from 'next/server'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

export async function GET() {
  try {
    if (!isSupabaseConfigured()) {
      // Return a default count when Supabase is not configured
      return NextResponse.json({ waitlistCount: 0 })
    }

    const { count, error } = await supabase!
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error fetching waitlist count:', error)
      return NextResponse.json({ waitlistCount: 0 })
    }

    return NextResponse.json({ waitlistCount: count || 0 })
  } catch (error) {
    console.error('Error in waitlist-count API:', error)
    return NextResponse.json({ waitlistCount: 0 })
  }
}
