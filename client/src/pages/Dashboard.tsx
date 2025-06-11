import Navbar from '../components/Navbar';

export default function Dashboard() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to Your Company Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Actions */}
          <div className="bg-white rounded shadow p-4 space-y-4">
            <h2 className="text-lg font-semibold">Actions</h2>
            <button className="bg-blue-600 text-white w-full p-2 rounded">📝 New Survey</button>
            <button className="bg-green-600 text-white w-full p-2 rounded">✅ Start Assessment</button>
          </div>

          {/* Past Records */}
          <div className="bg-white rounded shadow p-4 space-y-4">
            <h2 className="text-lg font-semibold">Your History</h2>
            <ul className="list-disc list-inside text-sm">
              <li>Previous Survey: May 2025</li>
              <li>Assessment Report: Apr 2025</li>
              <li>Threats Updated: Daily</li>
            </ul>
          </div>

          {/* Threat Feed */}
          <div className="bg-white rounded shadow p-4 md:col-span-2">
            <h2 className="text-lg font-semibold">🛡️ Live Threat Feed</h2>
            <div className="text-sm text-gray-600">
              Loading latest cybersecurity incidents...
            </div>
          </div>

          {/* AI Agent and Recommendations */}
          <div className="bg-white rounded shadow p-4 md:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">💡 AI Assistant & Recommendations</h2>
            <p className="text-sm text-gray-700">
              Hello! I'm your cybersecurity AI assistant. How can I help today?
            </p>
            <button className="bg-indigo-600 text-white p-2 rounded">Ask the AI</button>
          </div>
        </div>
      </main>
    </div>
  );
}
