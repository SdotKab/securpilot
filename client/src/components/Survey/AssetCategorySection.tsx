
interface AssetCategorySectionProps {
  category: string;
  assets: string[];
  onChange: (category: string, index: number, value: string) => void;
  onAddField: (category: string) => void;
}

export default function AssetCategorySection({
  category,
  assets,
  onChange,
  onAddField,
}: AssetCategorySectionProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">{category}</h2>
      {assets.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => onChange(category, index, e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder={`Enter ${category} asset`}
        />
      ))}
      <button
        type="button"
        onClick={() => onAddField(category)}
        className="text-sm text-blue-600 hover:underline"
      >
        + Add another asset
      </button>
    </div>
  );
}
