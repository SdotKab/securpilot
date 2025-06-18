import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from "../../context/AuthProvider";

interface Questionnaire {
  id: number;
  created_at: string;
  score: number;
}

export default function QuestionnaireSection() {
  const [questionnaires, setQuestionnaires] = useState<Questionnaire[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchQuestionnaires = async () => {
      if (!user) return;

      // Optional: fetch company_id from user metadata if stored
      const { data, error } = await supabase
        .from("questionnaires")
        .select("id, created_at, score")
        .eq("company_id", user.id) // or user.user_metadata.company_id if applicable
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) {
        console.error("Error fetching questionnaires:", error.message);
      } else {
        setQuestionnaires(data || []);
      }

      setLoading(false);
    };

    fetchQuestionnaires();
  }, [user]);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Security Questionnaires</h2>
        <Link to="/questionnaire" className="text-blue-600 hover:underline font-medium">
            ➕New
          </Link>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : questionnaires.length > 0 ? (
        <div className="space-y-2">
          {questionnaires.map((q) => (
            <div
              key={q.id}
              className="flex justify-between items-center border rounded-md px-4 py-2"
            >
              <div>
                <p className="font-medium text-gray-700">Questionnaire #{q.id}</p>
                <p className="text-sm text-gray-500">
                  Date: {new Date(q.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="text-sm text-gray-600">Score: {q.score}%</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No questionnaires found. Start your first one!</p>
      )}
    </div>
  );
}
