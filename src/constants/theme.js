export const BRAND_THEME = {
  name: 'Iron Circuit',
  direction: 'Tekken-inspired cinematic split-screen portfolio',
  colors: {
    abyss: '#05040a',
    ember: '#ff3b1f',
    plasma: '#08d9ff',
    violet: '#7c3cff',
    gold: '#f8b84e',
    smoke: '#a8b0c3',
  },
  surfaces: {
    panel: 'bg-white/[0.06] border border-white/10 shadow-2xl shadow-black/40',
    glass: 'bg-slate-950/55 border border-white/10 backdrop-blur-xl',
    glow: 'before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-60',
  },
}

export const SECTION_IDS = {
  hero: 'arena',
  profile: 'fighters',
  projects: 'combos',
  contact: 'challenge',
}
