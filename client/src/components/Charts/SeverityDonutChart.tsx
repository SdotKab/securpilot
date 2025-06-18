// src/components/SeverityDonutChart.tsx

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const severityData = [
  { name: 'Low', value: 10 },
  { name: 'Medium', value: 25 },
  { name: 'High', value: 30 },
  { name: 'Critical', value: 15 },
];

const COLORS = ['#34D399', '#FBBF24', '#F87171', '#EF4444']; // green, yellow, red, deep red

export default function SeverityDonutChart() {
  return (
    <div className="w-full h-96 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Severity Breakdown</h2>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={severityData}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            nameKey="name"
            label
          >
            {severityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
