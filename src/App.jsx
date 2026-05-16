import PageShell from './components/layout/PageShell'
import ContactSection from './components/sections/ContactSection'
import HeroArena from './components/sections/HeroArena'
import ProfileSection from './components/sections/ProfileSection'
import ProjectsSection from './components/sections/ProjectsSection'

function App() {
  return (
    <PageShell>
      <HeroArena />
      <ProfileSection />
      <ProjectsSection />
      <ContactSection />
    </PageShell>
  )
}

export default App
