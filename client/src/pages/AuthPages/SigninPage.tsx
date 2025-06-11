// src/pages/SignIn.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SignInForm from '../../components/AuthForms/SignInForm';
import { supabase } from '../../lib/supabaseClient';

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSignIn({ email, password }: { email: string; password: string }) {
    setLoading(true);
    setError(null);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) throw signInError;

      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Sign-in failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-4">
        <SignInForm onSignIn={handleSignIn} />
        {loading && <p className="mt-4 text-center text-indigo-600">Signing in...</p>}
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </main>
    </>
  );
}
