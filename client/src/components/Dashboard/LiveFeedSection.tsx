export default function LiveFeedSection() {
  const threatFeed = [
    {
      id: 1,
      title: "Zero-day in major firewall vendor",
      description: "A new zero-day vulnerability affects several enterprise-grade firewalls. Patch released.",
      date: "2025-06-11",
    },
    {
      id: 2,
      title: "Phishing campaign targeting finance departments",
      description: "Widespread phishing emails impersonating invoice systems reported globally.",
      date: "2025-06-10",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">🛡️ Live Threat Feed</h2>

      {threatFeed.length > 0 ? (
        <ul className="space-y-4">
          {threatFeed.map((item) => (
            <li key={item.id} className="border-b pb-3">
              <h3 className="text-md font-bold text-red-700">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-xs text-gray-500 mt-1">Updated: {item.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No recent updates.</p>
      )}
    </div>
  );
}
