import { useState } from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthProvider";
import AssetCategorySection from "../components/Survey/AssetCategorySection";

const categories = [
  "Hardware Assets",
  "Software Assets",
  "Data Assets",
  "Network Assets",
  "Users and Access Controls",
  "Policies and Documentation",
  "Other Intangible Assets",
];

export default function Survey() {
  const { user } = useAuth();
  const [assets, setAssets] = useState<Record<string, string[]>>(
    Object.fromEntries(categories.map((category) => [category, ["", ""]]))
  );
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAssetChange = (category: string, index: number, value: string) => {
    const updated = [...assets[category]];
    updated[index] = value;
    setAssets({ ...assets, [category]: updated });
  };

  const handleAddField = (category: string) => {
    setAssets({
      ...assets,
      [category]: [...assets[category], ""],
    });
  };

  const handleSubmit = async () => {
    setSaving(true);
    const company_id = user?.id;
    if (!company_id) return;

    const payload = [];

    for (const category of categories) {
      for (const asset of assets[category]) {
        if (asset.trim()) {
          payload.push({
            company_id,
            category,
            asset_name: asset,
          });
        }
      }
    }

    const { error } = await supabase.from("company_assets").insert(payload);

    setSaving(false);
    if (!error) {
      setSubmitted(true);
    } else {
      console.error("Error saving assets:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800">Company Asset Survey</h1>

        <section className="text-gray-700 space-y-4">
          <p>
            For IT security companies, robust cybersecurity asset management (CSAM) is essential for:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Understanding the attack surface</li>
            <li>Prioritizing security efforts</li>
            <li>Effective incident response</li>
            <li>Maintaining compliance</li>
            <li>Optimizing resource allocation</li>
            <li>Continuous security improvement</li>
          </ul>
        </section>

        {categories.map((category) => (
          <AssetCategorySection
            key={category}
            category={category}
            assets={assets[category]}
            onChange={handleAssetChange}
            onAddField={handleAddField}
          />
        ))}

        <div className="pt-6">
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {saving ? "Saving..." : "Submit Survey"}
          </button>
          {submitted && (
            <p className="mt-4 text-green-600 font-medium">Survey submitted successfully!</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
