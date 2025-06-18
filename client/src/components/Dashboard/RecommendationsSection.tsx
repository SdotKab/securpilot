// src/components/dashboard/RecommendationsSection.tsx
export default function RecommendationsSection() {
  // Placeholder data — in real app, this would come from AI or backend logic
  const recommendations = [
    {
      id: "r1",
      title: "Patch Outdated Systems",
      description:
        "Apply critical updates to Windows servers and workstations running versions older than 2021.",
    },
    {
      id: "r2",
      title: "Employee Security Awareness Training",
      description:
        "Schedule quarterly training sessions on phishing, password hygiene, and social engineering.",
    },
    {
      id: "r3",
      title: "Network Configuration Review",
      description:
        "Perform a full review of firewall and router configurations to block known malicious IPs.",
    },
    {
      id: "r4",
      title: "Legacy System Upgrade",
      description:
        "Replace unsupported on-premise applications with cloud-based, secure alternatives.",
    },
    {
      id: "r5",
      title: "Penetration Testing",
      description:
        "Hire a certified penetration tester to uncover hidden vulnerabilities in your infrastructure.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">🛠️ Security Recommendations</h2>

      <ul className="space-y-4">
        {recommendations.map((rec) => (
          <li key={rec.id} className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-blue-600">{rec.title}</h3>
            <p className="text-gray-700 text-sm mt-1">{rec.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
