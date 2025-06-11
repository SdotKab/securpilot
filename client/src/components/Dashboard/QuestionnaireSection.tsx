import { Link } from "react-router-dom";

export default function QuestionnaireSection() {
  // Placeholder data – to be replaced with Supabase fetch
  const questionnaires = [
    { id: "q1", date: "2025-06-01", score: 68 },
    { id: "q2", date: "2025-05-15", score: 72 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">🧠 Security Questionnaire</h2>
        <Link
          to="/questionnaire"
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          + Start New Questionnaire
        </Link>
      </div>

      <ul className="divide-y">
        {questionnaires.length > 0 ? (
          questionnaires.map((q) => (
            <li key={q.id} className="py-3 flex justify-between">
              <span>Questionnaire on {q.date}</span>
              <span>Score: {q.score}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No questionnaires yet.</p>
        )}
      </ul>
    </div>
  );
}
