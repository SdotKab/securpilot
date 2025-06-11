import { useState } from 'react';

export default function SignupForm({ onSignup }: { onSignup: (data: any) => void }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    companyName: '',
    companyAddress: '',
    companyCity: '',
    companyState: '',
    companyZip: '',
    companyPhone: '',
    contactName: '',
    contactJobTitle: '',
    contactEmail: '',
    contactPhone: '',
    contactPhoneExt: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSignup(form);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Sign Up</h2>

      <div>
        <label className="block mb-1 font-medium text-gray-700" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700" htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="text-lg font-semibold text-gray-700 mb-2">Company Information</legend>

        <div className="mb-4">
          <label htmlFor="companyName" className="block mb-1 font-medium text-gray-700">Company Name</label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={form.companyName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="companyAddress" className="block mb-1 font-medium text-gray-700">Address</label>
            <input
              id="companyAddress"
              name="companyAddress"
              type="text"
              value={form.companyAddress}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="companyCity" className="block mb-1 font-medium text-gray-700">City</label>
            <input
              id="companyCity"
              name="companyCity"
              type="text"
              value={form.companyCity}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="companyState" className="block mb-1 font-medium text-gray-700">State</label>
            <input
              id="companyState"
              name="companyState"
              type="text"
              value={form.companyState}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="companyZip" className="block mb-1 font-medium text-gray-700">Zipcode</label>
            <input
              id="companyZip"
              name="companyZip"
              type="text"
              value={form.companyZip}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="companyPhone" className="block mb-1 font-medium text-gray-700">Phone Number</label>
            <input
              id="companyPhone"
              name="companyPhone"
              type="tel"
              value={form.companyPhone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="text-lg font-semibold text-gray-700 mb-2">Contact Person</legend>

        <div className="mb-4">
          <label htmlFor="contactName" className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            value={form.contactName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactJobTitle" className="block mb-1 font-medium text-gray-700">Job Title</label>
          <input
            id="contactJobTitle"
            name="contactJobTitle"
            type="text"
            value={form.contactJobTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactEmail" className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            id="contactEmail"
            name="contactEmail"
            type="email"
            value={form.contactEmail}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="contactPhone" className="block mb-1 font-medium text-gray-700">Phone Number</label>
            <input
              id="contactPhone"
              name="contactPhone"
              type="tel"
              value={form.contactPhone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="contactPhoneExt" className="block mb-1 font-medium text-gray-700">Ext.</label>
            <input
              id="contactPhoneExt"
              name="contactPhoneExt"
              type="text"
              value={form.contactPhoneExt}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
      >
        Create Account
      </button>
    </form>
  );
}
