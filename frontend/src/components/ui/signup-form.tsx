"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";
import { SupabaseClient } from '@supabase/supabase-js';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);

  // Refactored! Now a function you can re-use.
  async function fetchWaitlistCount() {
    const res = await fetch("/api/waitlist-count");
    const data = await res.json();
    setWaitlistCount(data.waitlistCount);
  }

  useEffect(() => {
    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (!isSupabaseConfigured()) {
      // Show user-friendly message when Supabase is not configured
      alert('Signup is temporarily unavailable. Please try again later or contact us directly.');
      setLoading(false);
      return;
    }
    
      try {
        const supabaseClient = getSupabaseClient();
        if (supabaseClient) {
          const { error } = await (supabaseClient as SupabaseClient).from("waitlist").insert([{ email }]);
          if (error) {
            throw error;
          }
          setJoined(true);
          await fetchWaitlistCount(); // <-- Refresh the count immediately!
        } else {
          throw new Error('Supabase client not available');
        }
      } catch (error) {
        console.error('Error submitting email:', error);
        alert('Failed to join waitlist. Please try again or contact us directly.');
      }
    
    setLoading(false);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link href="/" className="flex items-center gap-2 font-medium text-white">
              <span className="text-2xl font-bold">Orbit<span className="text-purple-600">Share</span></span>
            </Link>
            <div className="text-center text-sm text-gray-300">
              Join OrbitShare and take control of your screens.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                value={email}
                ref={emailInput}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                // disabled={loading || joined}
              />
            </div>
            <Button
              type="submit"
              className="w-full h-10 relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white border-0"
            //   disabled={loading || joined}
            >
              <span
                className={`absolute left-0 right-0 top-0 transition-all duration-300
                  ${joined ? "-translate-y-6 opacity-0" : "translate-y-2.5 opacity-100"}`}
              >
                {loading ? "Joining Waitlist..." : "Join Waitlist"}
              </span>
              <span
                className={`absolute left-0 right-0 top-0 transition-all duration-300
                  ${joined ? "translate-y-2.5 opacity-100 text-black font-regular" : "translate-y-6 opacity-0"}`}
              >
                Joined Waitlist!
              </span>
            </Button>
          </div>
          <div className="after:border-gray-700 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-black text-gray-400 relative z-10 px-2">
              Details
            </span>
          </div>
          {/* Waitlist live count with animated dot */}
          <div className="flex items-center justify-center text-center text-sm">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-gray-400 font-medium text-xs sm:text-sm">
              {waitlistCount === null
                ? "20 people"
                : `${waitlistCount.toLocaleString()} people`} have joined the waitlist
            </span>
          </div>
        </div>
      </form>
      <div className="text-gray-400 *:[a]:hover:text-purple-400 text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By joining the waitlist, you agree to recieve emails related to beta-access
      </div>
    </div>
  );
}