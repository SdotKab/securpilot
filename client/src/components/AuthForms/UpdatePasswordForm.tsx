import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function UpdatePasswordForm() {
  const [password, setPassword] = useState('');

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });
    if (!error) alert('Password updated successfully!');
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4 max-w-md mx-auto mt-10">
      <input
        type="password"
        placeholder="New Password"
        className="w-full px-4 py-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded">
        Update Password
      </button>
    </form>
  );
}
