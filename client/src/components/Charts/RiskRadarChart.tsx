import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export default function RiskRadarChart({ data }: { data: { category: string; score: number }[] }) {
  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <h3 className="text-lg font-semibold mb-2">Security Profile (Radar)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis />
          <Radar dataKey="score" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
