// src/components/dashboard/AssessmentReportsSection.tsx
export default function AssessmentReportsSection() {
  // Placeholder static data — in production, fetch from Supabase
  const assessments = [
    {
      id: "a1",
      date: "2025-05-20",
      category: "Full Security Audit",
      score: "Moderate Risk",
      nistScore: 57,
    },
    {
      id: "a2",
      date: "2025-04-12",
      category: "Cloud Systems Assessment",
      score: "High Risk",
      nistScore: 33,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📊 Past Assessments & AI Reports</h2>

      {assessments.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {assessments.map((report) => (
            <li key={report.id} className="py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">{report.category}</h3>
                  <p className="text-sm text-gray-600">Date: {report.date}</p>
                  <p className="text-sm text-gray-600">Risk Level: {report.score}</p>
                  <p className="text-sm text-gray-600">NIST Score: {report.nistScore}/100</p>
                </div>
                <button className="mt-2 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  View Report
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No assessments found yet. Run a questionnaire to generate a report.</p>
      )}
    </div>
  );
}
