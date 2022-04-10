import type { ReactNode, CSSProperties } from 'react'

export interface EnuCardProps {
  title?: string
  children: ReactNode
  className?: string
  style?: CSSProperties
}

const EnuCard = ({ className, style, title, children }: EnuCardProps) => {
  return (
    <div className={`px-6 py-4 neu-card-mini ${className}`} style={style}>
      {title ? (
        <h1 className="inline-block text-2xl font-bold mb-6 text-center w-full">{title}</h1>
      ) : null}
      {children}
    </div>
  )
}

export default EnuCard
