import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RiskScoreBarChart({ data }: { data: { category: string; score: number }[] }) {
  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <h3 className="text-lg font-semibold mb-2">Risk Score by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
