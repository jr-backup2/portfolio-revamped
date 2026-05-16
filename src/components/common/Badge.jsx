import { cn } from '../../utils/cn'

function Badge({ children, className = '' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 shadow-lg shadow-black/20',
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
