// src/components/SignInForm.tsx
import { useState } from 'react';

interface SignInFormProps {
  onSignIn: (formData: { email: string; password: string }) => void;
}

export default function SignInForm({ onSignIn }: SignInFormProps) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Sign In</h2>

      <label className="block mb-1 font-medium text-gray-700" htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <label className="block mb-1 font-medium text-gray-700" htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
      >
        Sign In
      </button>
    </form>
  );
}
