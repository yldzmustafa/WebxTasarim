import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function FadeUp({ children, delay = 0, className = '', style = {} }) {
  const [ref, visible] = useScrollAnimation()
  const d = delay ? ` d${delay}` : ''
  return (
    <div
      ref={ref}
      className={`fade-up${visible ? ' visible' : ''}${d}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}
