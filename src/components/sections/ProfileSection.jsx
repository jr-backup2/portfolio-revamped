import SectionHeader from '../common/SectionHeader'
import { SECTION_IDS } from '../../constants/theme'

const pillars = [
  'Reusable component folders for common UI, layout, and page sections.',
  'Centralized theme constants for premium colors, surfaces, and section ids.',
  'Mapped data files so portfolio content scales without JSX duplication.',
]

function ProfileSection() {
  return (
    <section className="px-5 py-24 sm:px-8" id={SECTION_IDS.profile}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Architecture"
          title="Built like a character select screen"
          description="The starter is organized so visual polish, content, and layout stay separated while remaining easy to animate."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20" key={pillar}>
              <span className="text-4xl font-black text-cyan-200">0{index + 1}</span>
              <p className="mt-5 text-base leading-8 text-slate-300">{pillar}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
