// src/pages/CompanyProfile.tsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function CompanyProfile() {
  const [profile, setProfile] = useState({
    companyName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    numEmployees: "",
    departments: "",
    regions: "",
    contactName: "",
    contactTitle: "",
    contactEmail: "",
    contactPhone: "",
    contactExt: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from("companies")
        .select("*")
        .eq("user_id", user?.id)
        .single();

      if (data) setProfile(data);
      if (error) console.error("Load error:", error);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase
      .from("companies")
      .update(profile)
      .eq("user_id", user?.id);

    if (error) console.error("Update error:", error);
    else alert("Profile updated!");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Company Profile</h2>

      <div className="grid gap-4">
        <Input name="companyName" value={profile.companyName} onChange={handleChange} placeholder="Company Name" />
        <Input name="address" value={profile.address} onChange={handleChange} placeholder="Address" />
        <div className="grid grid-cols-3 gap-4">
          <Input name="city" value={profile.city} onChange={handleChange} placeholder="City" />
          <Input name="state" value={profile.state} onChange={handleChange} placeholder="State" />
          <Input name="zip" value={profile.zip} onChange={handleChange} placeholder="Zip Code" />
        </div>
        <Input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone Number" />
        <Input name="numEmployees" value={profile.numEmployees} onChange={handleChange} placeholder="Number of Employees" />
        <Input name="departments" value={profile.departments} onChange={handleChange} placeholder="Departments" />
        <Input name="regions" value={profile.regions} onChange={handleChange} placeholder="Regions / Local Ops" />

        <hr className="my-4" />

        <Input name="contactName" value={profile.contactName} onChange={handleChange} placeholder="Contact Person Name" />
        <Input name="contactTitle" value={profile.contactTitle} onChange={handleChange} placeholder="Job Title" />
        <Input name="contactEmail" value={profile.contactEmail} onChange={handleChange} placeholder="Email" />
        <div className="grid grid-cols-2 gap-4">
          <Input name="contactPhone" value={profile.contactPhone} onChange={handleChange} placeholder="Phone" />
          <Input name="contactExt" value={profile.contactExt} onChange={handleChange} placeholder="Extension" />
        </div>

        <Button onClick={handleSave} className="mt-6">Save Changes</Button>
      </div>
    </div>
  );
}
