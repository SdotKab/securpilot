import { Link } from "react-router-dom";

export default function SurveySection() {
  // Placeholder data – later you'll fetch from Supabase
  const surveys = [
    { id: "1", date: "2025-06-01", assetsCount: 12 },
    { id: "2", date: "2025-05-20", assetsCount: 9 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">📋 Company Asset Surveys</h2>
        <Link to="/survey" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          + Start New Survey
        </Link>
      </div>

      <ul className="divide-y">
        {surveys.length > 0 ? (
          surveys.map((survey) => (
            <li key={survey.id} className="py-3 flex justify-between">
              <span>Survey on {survey.date}</span>
              <span>{survey.assetsCount} assets listed</span>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No surveys yet.</p>
        )}
      </ul>
    </div>
  );
}
