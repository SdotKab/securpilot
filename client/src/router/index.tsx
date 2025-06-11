import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignupPage from '../pages/AuthPages/SignupPage';
import PasswordResetPage from '../pages/AuthPages/PasswordResetPage';
import UpdatePasswordPage from '../pages/AuthPages/UpdatePasswordPage';
import MagicLinkPage from '../pages/AuthPages/MagicLinkPage';
import ProtectedRoute from '../components/ProtectedRoutes';
import Landing from '../pages/Landing';
import SignInPage from '../pages/AuthPages/SigninPage';
import AccountSettings from '../pages/AccoutingSetting';
import SurveyPage from '../pages/SurveyPage';
import QuestionnairePage from '../pages/QuestionnairePage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Landing />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
        <Route path="/update-password" element={<UpdatePasswordPage />} />
        <Route path="/magic-link" element={<MagicLinkPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route 
          path= "/account-settings"
          element= {
            <ProtectedRoute>
              <AccountSettings />
            </ProtectedRoute>
          }
        />
        <Route 
          path= "/survey"
          element= {
            <ProtectedRoute>
              <SurveyPage />
            </ProtectedRoute>
          }
        />
        <Route 
          path= "/questionnaire"
          element= {
            <ProtectedRoute>
              <QuestionnairePage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}
