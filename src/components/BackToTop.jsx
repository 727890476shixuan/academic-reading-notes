import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full bg-accent text-white shadow-md shadow-accent/25 flex items-center justify-center hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all ${visible ? 'visible' : ''}`}
      aria-label="回到顶部"
    >
      <ArrowUp size={18} />
    </button>
  )
}
