// src/components/Survey/AssetCategorySection.tsx
import { useState } from "react";

interface AssetCategorySectionProps {
  category: string;
  onAssetsChange: (category: string, assets: string[]) => void;
}

export default function AssetCategorySection({ category, onAssetsChange }: AssetCategorySectionProps) {
  const [assets, setAssets] = useState<string[]>(["", ""]);

  const handleChange = (index: number, value: string) => {
    const updated = [...assets];
    updated[index] = value;
    setAssets(updated);
    onAssetsChange(category, updated);
  };

  const addAssetField = () => {
    const updated = [...assets, ""];
    setAssets(updated);
  };

  return (
    <div className="mb-6 p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold text-blue-600 mb-2">{category}</h3>
      {assets.map((asset, index) => (
        <input
          key={index}
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          placeholder={`Enter asset ${index + 1}`}
          value={asset}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
      <button
        type="button"
        className="text-sm text-blue-500 hover:underline mt-2"
        onClick={addAssetField}
      >
        + Add another asset
      </button>
    </div>
  );
}
