export default function ThreatFeed() {
  return (
    // <section className="bg-red-900 text-white py-6 px-4 text-center">
    //   <h2 className="text-xl font-bold mb-2">🛑 Most Recent Threat Detected</h2>
    //   <p className="text-sm italic">
    //     "[ALERT] Ransomware variant targeting healthcare systems in North America — Patch CVE-2025-1234 immediately."
    //   </p>
    // </section>
    <section className="grid grid-cols-1 p-1 w-full">
      <div className="p-6 bg-red-300">
        <h2 className="font-semibold text-lg text-center text-gray-800 mt-2">
          🛑 Most Recent Threat Detected
        </h2>

        <p className="mt-2 text-gray-800 text-center">
          "[ALERT] Ransomware variant targeting healthcare systems in North America — Patch CVE-2025-1234 immediately."
        </p>
      </div>
    </section>
  );
}
