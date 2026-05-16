import { navItems } from '../../data/portfolio'

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05040a]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a className="group flex items-center gap-3" href="#arena" aria-label="Go to arena section">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-red-500 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">
            TK
          </span>
          <span className="hidden text-sm font-black uppercase tracking-[0.28em] text-white sm:block">
            Tekken Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-300 transition hover:bg-white/10 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
