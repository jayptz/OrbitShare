'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <Button 
      onClick={handleLogout}
      variant="outline"
      className="border-white/20 text-white hover:bg-white/10"
    >
      Logout
    </Button>
  );
}
