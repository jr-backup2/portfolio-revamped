import SectionHeader from '../common/SectionHeader'
import { SECTION_IDS } from '../../constants/theme'

function ContactSection() {
  return (
    <section className="px-5 py-24 sm:px-8" id={SECTION_IDS.contact}>
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-white/[0.06] to-red-500/15 p-8 text-center shadow-2xl shadow-black/40 sm:p-12">
        <SectionHeader
          eyebrow="Challenge"
          title="Now start building the final portfolio"
          description="Swap the starter data with real projects, add motion, and layer in your finished Tekken-style interactions."
        />
        <a
          className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:scale-105 hover:bg-cyan-100"
          href="mailto:hello@example.com"
        >
          Enter the arena
        </a>
      </div>
    </section>
  )
}

export default ContactSection
