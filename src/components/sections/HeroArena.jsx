import Badge from '../common/Badge'
import { fighterCards, techStack } from '../../data/portfolio'
import { SECTION_IDS } from '../../constants/theme'

function HeroArena() {
  return (
    <section
      className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8"
      id={SECTION_IDS.hero}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        {fighterCards.map((fighter, index) => (
          <article
            className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/40 backdrop-blur-md"
            key={fighter.side}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${fighter.accent} opacity-20 transition duration-500 group-hover:opacity-30`} />
            <div className="absolute inset-x-8 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative z-10 flex h-full min-h-[472px] flex-col justify-between">
              <div className={index === 1 ? 'text-right' : ''}>
                <Badge>{fighter.side}</Badge>
                <h2 className="mt-6 text-4xl font-black uppercase leading-none tracking-tighter sm:text-6xl">
                  {fighter.name}
                </h2>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.28em] text-cyan-100/80">
                  {fighter.archetype}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur">
                <p className="text-lg font-semibold leading-8 text-slate-100">
                  {fighter.signature}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {fighter.stats.map((stat) => (
                    <div className="rounded-2xl bg-white/10 p-3 text-center" key={stat.label}>
                      <strong className="block text-2xl font-black text-white">{stat.value}</strong>
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-300">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className="order-first flex flex-col items-center justify-center text-center lg:order-none">
          <span className="versus-glow text-7xl font-black uppercase italic tracking-tighter text-white sm:text-8xl">
            VS
          </span>
          <p className="mt-4 max-w-xs text-sm font-bold uppercase tracking-[0.28em] text-slate-300">
            cinematic split-screen portfolio starter
          </p>
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-8 mx-auto flex max-w-6xl flex-wrap justify-center gap-3 sm:inset-x-8">
        {techStack.map((tech) => (
          <span className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-200 backdrop-blur" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}

export default HeroArena
