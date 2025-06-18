// src/components/Dashboard/SurveySection.tsx
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

interface Survey {
  id: string;
  created_at: string;
  assets: any; // You can type this more specifically if needed
}

export default function SurveySection() {
  const { user } = useAuth();
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSurveys = async () => {
      setLoading(true);
      setError("");

      // Fetch the current user's company ID
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("company_id")
        .eq("id", user?.id)
        .single();

      if (profileError || !profile?.company_id) {
        setError("Failed to get company information.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("surveys")
        .select("*")
        .eq("company_id", profile.company_id)
        .order("created_at", { ascending: false });

      if (error) {
        setError("Error fetching surveys.");
      } else {
        setSurveys(data);
      }

      setLoading(false);
    };

    if (user) {
      fetchSurveys();
    }
  }, [user]);

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Asset Survey</h2>
        <Link to="/survey" className="text-blue-600 hover:underline font-medium">
          ➕New
        </Link>
      </div>

      {loading && <p>Loading surveys...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && surveys.length === 0 && (
        <p className="text-gray-600">No surveys submitted yet.</p>
      )}

      <ul className="space-y-2">
        {surveys.map((survey) => (
          <li
            key={survey.id}
            className="border p-3 rounded hover:shadow transition bg-gray-50"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">
                Survey ID: {survey.id.slice(0, 8)}...
              </span>
              <span className="text-sm text-gray-500">
                {new Date(survey.created_at).toLocaleDateString()}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
