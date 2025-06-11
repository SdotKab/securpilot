import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthProvider';

export default function AccountSettings() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    companyPhone: '',
    contactName: '',
    contactTitle: '',
    contactEmail: '',
    contactPhone: '',
    contactExt: '',
    departments: '',
    numEmployees: '',
    regions: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .eq('user_id', user.id)
        .single();
      if (data) setFormData(data);
    };
    fetchProfile();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const { error } = await supabase
      .from('companies')
      .update(formData)
      .eq('user_id', user?.id);

    if (!error) alert('Profile updated!');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Company Info */}
        <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="input" />
        <input name="companyPhone" value={formData.companyPhone} onChange={handleChange} placeholder="Company Phone" className="input" />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="input" />
        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="input" />
        <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="input" />
        <input name="zipcode" value={formData.zipcode} onChange={handleChange} placeholder="Zip Code" className="input" />
        <input name="departments" value={formData.departments} onChange={handleChange} placeholder="Departments" className="input" />
        <input name="numEmployees" value={formData.numEmployees} onChange={handleChange} placeholder="Number of Employees" className="input" />
        <input name="regions" value={formData.regions} onChange={handleChange} placeholder="Regions/Local Operations" className="input" />

        {/* Contact Info */}
        <input name="contactName" value={formData.contactName} onChange={handleChange} placeholder="Contact Name" className="input" />
        <input name="contactTitle" value={formData.contactTitle} onChange={handleChange} placeholder="Contact Title" className="input" />
        <input name="contactEmail" value={formData.contactEmail} onChange={handleChange} placeholder="Contact Email" className="input" />
        <input name="contactPhone" value={formData.contactPhone} onChange={handleChange} placeholder="Contact Phone" className="input" />
        <input name="contactExt" value={formData.contactExt} onChange={handleChange} placeholder="Extension" className="input" />
      </div>

      <button onClick={handleSave} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  );
}
