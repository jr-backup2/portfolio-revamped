import Badge from './Badge'

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
