import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import RiskScoreBarChart from "../Charts/RiskScoreBarChart";
import RiskRadarChart from "../Charts/RiskRadarChart";
import { useAuth } from "../../context/AuthProvider";

export default function AssessmentDashboard() {
  const { user } = useAuth();
  const [scores, setScores] = useState<{ category: string; score: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchScores = async () => {
      const { data, error } = await supabase
        .from("questionnaire_results")
        .select("category, score")
        .eq("company_id", user.id)
        .order("submitted_at", { ascending: false });

      if (error) {
        console.error("Error fetching scores:", error);
        return;
      }

      const latest = data.reduce((acc: Record<string, number>, row) => {
        acc[row.category] = row.score;
        return acc;
      }, {});

      const formatted = Object.entries(latest).map(([category, score]) => ({
        category,
        score,
      }));

      setScores(formatted);
      setLoading(false);
    };

    fetchScores();
  }, [user]);

  if (loading) return <p className="text-gray-500">Loading assessment data...</p>;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <RiskScoreBarChart data={scores} />
      <RiskRadarChart data={scores} />
    </div>
  );
}
