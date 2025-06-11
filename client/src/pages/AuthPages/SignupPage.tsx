// src/pages/signup.tsx
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import SignupForm from '../../components/AuthForms/SignUpForm';
import { supabase } from '../../lib/supabaseClient';


export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignup(formData: any) {
    setLoading(true);
    setError(null);

    try {
      // 1. Signup user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('No user returned from signup');

      const userId = authData.user.id;

      // 2. Insert company + contact info into your Supabase DB table (e.g. "companies")
      const { error: insertError } = await supabase.from('companies').insert({
        user_id: userId,
        company_name: formData.companyName,
        address: formData.companyAddress,
        city: formData.companyCity,
        state: formData.companyState,
        zipcode: formData.companyZip,
        phone_number: formData.companyPhone,
        contact_name: formData.contactName,
        contact_job_title: formData.contactJobTitle,
        contact_email: formData.contactEmail,
        contact_phone: formData.contactPhone,
        contact_phone_ext: formData.contactPhoneExt,
      });

      if (insertError) throw insertError;

      alert('Signup successful! Please check your email to verify your account.');
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-4">
        <SignupForm onSignup={handleSignup} />
        {loading && <p className="mt-4 text-center text-indigo-600">Signing up...</p>}
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </main>
    </>
  );
}
