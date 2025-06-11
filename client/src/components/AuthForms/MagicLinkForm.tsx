import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function MagicLinkForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleMagicLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) setSent(true);
  };

  return (
    <form onSubmit={handleMagicLogin} className="space-y-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Email address"
        className="w-full px-4 py-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded">
        Send Magic Link
      </button>
      {sent && <p className="text-green-600">Check your email for the magic link!</p>}
    </form>
  );
}
