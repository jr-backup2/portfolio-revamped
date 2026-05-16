import SectionHeader from '../common/SectionHeader'
import { projectCombos } from '../../data/portfolio'
import { SECTION_IDS } from '../../constants/theme'

function ProjectsSection() {
  return (
    <section className="px-5 py-24 sm:px-8" id={SECTION_IDS.projects}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Combos"
          title="Starter files ready for premium builds"
          description="Projects, badges, navigation, stats, and section copy are driven by mapped arrays for maintainable expansion."
        />
        <div className="mt-12 space-y-5">
          {projectCombos.map((combo) => (
            <article className="grid gap-5 rounded-[2rem] border border-white/10 bg-black/30 p-6 shadow-xl shadow-black/30 backdrop-blur md:grid-cols-[auto_1fr_auto] md:items-center" key={combo.code}>
              <span className="text-5xl font-black text-red-300">{combo.code}</span>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">{combo.title}</h3>
                <p className="mt-2 max-w-2xl text-slate-300">{combo.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {combo.tags.map((tag) => (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-200" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
