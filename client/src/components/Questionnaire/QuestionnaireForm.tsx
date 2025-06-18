import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from "../../context/AuthProvider";

const categories = [
  "Access Control",
  "Network Security",
  "Data Protection",
  "Endpoint Security",
  "Application Security",
  "Cloud Security",
  "Incident Response",
  "Compliance",
  "User Awareness",
  "Insider Threats",
];

const questions = Array.from({ length: 15 }, (_, i) => `Question ${i + 1}`);

export default function QuestionnaireForm() {
  const { user } = useAuth();
  const [responses, setResponses] = useState<{ [key: string]: number[] }>(() =>
    Object.fromEntries(categories.map((cat) => [cat, Array(15).fill(3)])) // default to neutral
  );
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (category: string, index: number, value: number) => {
    const updated = [...responses[category]];
    updated[index] = value;
    setResponses((prev) => ({ ...prev, [category]: updated }));
  };

  const handleSubmit = async () => {
    if (!user) return;
    setLoading(true);

    for (const category of categories) {
      const score = responses[category].reduce((acc, val) => acc + val, 0);
      const { error } = await supabase.from("questionnaire_results").insert({
        company_id: user.id, // If you store company_id separately, replace this
        category,
        score,
        submitted_at: new Date().toISOString(),
      });

      if (error) {
        console.error("Error saving result:", error);
      }
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="space-y-10 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Security Questionnaire</h2>

      {categories.map((category, cIdx) => (
        <div key={category} className="bg-white p-4 shadow rounded-md">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
          <div className="space-y-4">
            {questions.map((q, qIdx) => (
              <div key={qIdx} className="flex items-center justify-between">
                <label className="text-gray-700">{q}</label>
                <select
                  className="ml-4 border rounded px-2 py-1"
                  value={responses[category][qIdx]}
                  onChange={(e) => handleChange(category, qIdx, Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit All Categories"}
        </button>
        {submitted && <p className="text-green-600 mt-2">Responses submitted successfully!</p>}
      </div>
    </div>
  );
}
