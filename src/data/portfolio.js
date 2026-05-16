import { SECTION_IDS } from '../constants/theme'

export const navItems = [
  { label: 'Arena', href: `#${SECTION_IDS.hero}` },
  { label: 'Fighters', href: `#${SECTION_IDS.profile}` },
  { label: 'Combos', href: `#${SECTION_IDS.projects}` },
  { label: 'Challenge', href: `#${SECTION_IDS.contact}` },
]

export const fighterCards = [
  {
    side: 'Player 1',
    name: 'Frontend Duelist',
    archetype: 'React / Motion / UI Systems',
    signature: 'Pixel-perfect interfaces with cinematic interaction states.',
    accent: 'from-cyan-300 via-sky-500 to-blue-700',
    stats: [
      { label: 'Speed', value: '96' },
      { label: 'Polish', value: '99' },
      { label: 'Flow', value: '94' },
    ],
  },
  {
    side: 'Player 2',
    name: 'Product Strategist',
    archetype: 'UX / Systems / Delivery',
    signature: 'Business-aware builds that feel premium from first load.',
    accent: 'from-orange-300 via-red-500 to-fuchsia-700',
    stats: [
      { label: 'Clarity', value: '97' },
      { label: 'Impact', value: '95' },
      { label: 'Scale', value: '92' },
    ],
  },
]

export const techStack = [
  'Vite',
  'React',
  'JavaScript',
  'Tailwind CSS',
  'Component Mapping',
  'Theme Tokens',
]

export const projectCombos = [
  {
    code: '01',
    title: 'Cinematic Landing System',
    description: 'Split-screen page language with layered glows, panels, and reusable sections.',
    tags: ['Layout', 'Animation-ready', 'Responsive'],
  },
  {
    code: '02',
    title: 'Premium Portfolio Kit',
    description: 'Data-driven content maps for projects, navigation, stats, and badges.',
    tags: ['Mapping', 'Clean data', 'Scalable'],
  },
  {
    code: '03',
    title: 'Theme Direction',
    description: 'A focused neon, ember, and smoke palette built for high-contrast storytelling.',
    tags: ['Brand', 'Tokens', 'Tailwind'],
  },
]
