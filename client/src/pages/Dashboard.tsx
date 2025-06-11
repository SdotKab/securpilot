import DashboardLayout from "../components/Dashboard/DashboardLayout";
import QuestionnaireSection from "../components/Dashboard/QuestionnaireSection";
import Recommendations from "../components/Dashboard/Recommendations";
import SurveySection from "../components/Dashboard/SurveySection";
import AssessmentReports from "../components/Reports/AssessmentReports";
import LiveFeedSection from "../components/Dashboard/LiveFeedSection";


export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back! Here's your security overview:</h1>
        <SurveySection />
        <QuestionnaireSection />
        <LiveFeedSection />
        <AssessmentReports />
        <Recommendations />
      </div>
    </DashboardLayout>
  );
}
