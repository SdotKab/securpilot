import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function PasswordResetRequestForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });
    if (!error) setSent(true);
  };

  return (
    <form onSubmit={handleReset} className="space-y-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Email address"
        className="w-full px-4 py-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded">
        Send Reset Link
      </button>
      {sent && <p className="text-green-600">Reset link sent to your email!</p>}
    </form>
  );
}
