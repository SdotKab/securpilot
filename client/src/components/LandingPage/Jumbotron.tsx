// src/components/Jumbotron.tsx
export default function Jumbotron() {
  return (
    // <section className="bg-blue-900 text-white text-center py-16 px-4">
    //   <h2 className="text-4xl font-bold mb-4">Empower Your Company’s Cybersecurity</h2>
    //   <p className="text-lg">Identify vulnerabilities, assess risks, and take control—automatically and intelligently.</p>
    // </section>
    <section className="py-8 sm:py-16 md:py-24 flex items-center justify-center">
    <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
            <h1
                className="my-3 sm:my-4 md:my-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-10 tracking-tight text-black">
                Empower Your Company’s Cyber
                <span className="text-blue-700">security</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-500">Identify vulnerabilities, assess risks, and take control—automatically and intelligently.
            </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
            <button
                className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xl leading-tight hover:bg-blue-600 cursor-pointer hover:shadow-sm focus:bg-blue-600 focus:shadow-sm focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-sm disabled:opacity-25 transition duration-150 disabled:pointer-events-none ease-in-out">
                Get started!
            </button>
        </div>
    </div>
</section>
  );
}
