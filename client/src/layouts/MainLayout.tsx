import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">🔐 Security Assessment</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/questionnaire" className="hover:underline">Questionnaire</Link>
          <Link to="/report" className="hover:underline">Report</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
