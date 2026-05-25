import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          &copy; 2026 谢施炫 Sean. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-text-secondary">
          <Link to="/about" className="hover:text-accent transition-colors">关于本站</Link>
          <a
            href="https://727890476shixuan.github.io/personal-page/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            个人主页 &rarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
