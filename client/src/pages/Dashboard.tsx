// import { useEffect, useState } from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import QuestionnaireSection from "../components/Dashboard/QuestionnaireSection";
import SurveySection from "../components/Dashboard/SurveySection";
import LiveFeedSection from "../components/Dashboard/LiveFeedSection";
import AssessmentReportsSection from "../components/Dashboard/AssessmentReportsSection";
import RecommendationsSection from "../components/Dashboard/RecommendationsSection";
//import RiskScoreBarChart from "../components/Charts/RiskScoreBarChart";
import AssessmentDashboard from "../components/Dashboard/AssessmentDashboard";


export default function Dashboard() {
  // const [riskData, setRiskData] = useState<{ category: string; score: number }[]>([]);

  // useEffect(() => {
  //   async function fetchAssessment() {
  //     // Replace 'assessments' and columns with your actual Supabase table and fields
  //     const { data, error } = await supabase
  //       .from('assessments')
  //       .select('category, score')
  //       .eq('company_id', YOUR_COMPANY_ID) // filter for the signed-in company
  //       .order('created_at', { ascending: false })
  //       .limit(1)
  //       .single();

  //     if (error) {
  //       console.error('Error fetching assessment:', error);
  //       return;
  //     }

  //     if (data) {
  //       // Transform data as needed to match chart props
  //       setRiskData(data.scores); // example assuming 'scores' is array [{category, score}]
  //     }
  //   }

  //   fetchAssessment();
  // }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back!</h1>
          <p className="text-gray-600">Here’s your latest cybersecurity overview:</p>
        </div>

        {/* <RiskScoreBarChart data={riskData} /> */}
        <AssessmentDashboard />
        <SurveySection />
        <QuestionnaireSection />
        <LiveFeedSection />
        <AssessmentReportsSection />
        <RecommendationsSection />
      </div>
    </DashboardLayout>
  );
}
