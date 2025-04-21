export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-8">
      <header className="border-b border-gray-700 pb-6 mb-10">
        <h1 className="text-5xl font-extrabold text-yellow-400">The Reset Ledger</h1>
        <p className="text-lg text-gray-400 mt-2">Hard Intel. Sharp Edges. Zero Narratives.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🧠 This Week's Intelligence Drop</h2>
        <div className="bg-gray-900 border border-yellow-400 p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Top Flashpoint: Gold Breaches $3,350</h3>
          <p className="text-gray-300 text-base">
            The fiat containment line is cracking. Gold’s surge confirms global de-risking and institutional rotation.
            GSR remains above 100. Fed’s Goolsbee issues coded pre-BRRR warning.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Module title="Monetary Reset Watch" summary="BRICS plays, gold repricing, Fed disempowerment." />
        <Module title="GSR Tracker" summary="Gold/silver ratio pressure zones, silver shock map." />
        <Module title="Printer Panic Indicator" summary="Reverse repo drain, stealth QE, Powell signal flips." />
        <Module title="Fed BS Translator" summary="Fed speak decoded line-by-line with narrative markers." />
        <Module title="Geopolitical Recalibrations" summary="Realignments, leverage moves, BRICS friction." />
        <Module title="Soundboard" summary="Flatulence index, toastlines, panic tells." />
      </section>

      <footer className="mt-20 border-t border-gray-800 pt-6 text-xs text-gray-500 text-center">
        <p>&copy; 2025 The Reset Ledger. Operated off-grid. Updated weekly.</p>
      </footer>
    </main>
  );
}

function Module({ title, summary }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 hover:bg-gray-700 transition">
      <h4 className="text-xl font-semibold text-yellow-300 mb-2">{title}</h4>
      <p className="text-sm text-gray-300 leading-relaxed">{summary}</p>
    </div>
  );
}