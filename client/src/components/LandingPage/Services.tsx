export default function Services() {
  return (
    <section className="bg-blue-50 py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">Free Self-Assessment & Services</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold text-lg text-blue-800">📝 Self-Assessment Tool</h3>
          <p className="text-sm mt-2 text-gray-700">Use our free survey and questionnaire to identify key assets and get your first risk score report.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold text-lg text-blue-800">🔧 Available Services</h3>
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
            <li>Penetration Testing</li>
            <li>Legacy System Upgrade</li>
            <li>Security Awareness Training</li>
            <li>Network Reconfiguration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
