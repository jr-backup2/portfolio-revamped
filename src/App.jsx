function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-8 px-6 text-center">
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
          Vite + React + Tailwind CSS
        </span>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Portfolio Revamped
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            A clean starter ready for building a modern portfolio with React,
            JavaScript, Vite, and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-300">
          <span className="rounded-lg bg-white/10 px-4 py-2">React</span>
          <span className="rounded-lg bg-white/10 px-4 py-2">JavaScript</span>
          <span className="rounded-lg bg-white/10 px-4 py-2">Vite</span>
          <span className="rounded-lg bg-white/10 px-4 py-2">Tailwind CSS</span>
        </div>
      </section>
    </main>
  )
}

export default App
