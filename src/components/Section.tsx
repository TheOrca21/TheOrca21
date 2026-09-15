import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
  compact?: boolean
}

export default function Section({
  id,
  title,
  children,
  className = '',
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${compact ? 'section-compact' : ''} ${className}`.trim()}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <h2 id={`${id}-heading`} className="section-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
