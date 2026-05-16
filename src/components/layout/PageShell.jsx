import SiteHeader from './SiteHeader'

function PageShell({ children }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#05040a] text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_20%,rgba(8,217,255,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,59,31,0.2),transparent_30%),linear-gradient(115deg,rgba(8,217,255,0.08),transparent_42%,rgba(255,59,31,0.08))]" />
      <div className="scanlines pointer-events-none fixed inset-0 z-0 opacity-30" />
      <SiteHeader />
      <main className="relative z-10">{children}</main>
    </div>
  )
}

export default PageShell
