// src/components/DailyStats.tsx
export default function DailyStats() {
  return (
    <section className="bg-white py-10 px-4 grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
      <div>
        <h3 className="text-3xl font-bold text-red-600">2,300+</h3>
        <p className="text-gray-700">Incidents / Day</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-yellow-600">5,600+</h3>
        <p className="text-gray-700">Threats / Day</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-green-600">$8.5M</h3>
        <p className="text-gray-700">Avg Daily Loss</p>
      </div>
    </section>
  );
}
