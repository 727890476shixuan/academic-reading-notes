import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { getBookBySlug, getCategoryBySlug } from '../data/books'

function renderNote(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-medium text-charcoal">{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

export default function BookDetail() {
  const { slug } = useParams()
  const book = getBookBySlug(slug)

  if (!book) {
    return (
      <div className="pt-32 px-6 text-center">
        <p className="text-text-secondary">书籍未找到。</p>
        <Link to="/" className="text-accent hover:underline mt-4 inline-block">返回首页</Link>
      </div>
    )
  }

  const category = getCategoryBySlug(book.category)

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <Link
            to={`/category/${book.category}`}
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} /> 返回{category?.name || '分类'}
          </Link>
        </ScrollReveal>

        {/* Book header: cover + info */}
        <div className="flex flex-col sm:flex-row gap-8 mb-12">
          <ScrollReveal>
            <div className="flex-shrink-0 w-40 sm:w-48">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex-1">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-3xl font-light text-charcoal mb-2 leading-tight">
                {book.title}
              </h1>
              <p className="text-text-secondary mb-3">{book.author}</p>
              <p className="text-sm text-text-secondary mb-4">
                {book.publisher} · {book.year}
              </p>
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < book.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed italic">
                "{book.summary}"
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Reading notes */}
        <ScrollReveal>
          <h2 className="text-xl font-normal text-charcoal mb-6">读书笔记</h2>
          <div className="space-y-4">
            {book.notes.map((note, i) => (
              <p
                key={i}
                className="text-text-secondary leading-relaxed pl-4 border-l-2 border-accent/30 hover:border-accent transition-colors"
              >
                {renderNote(note)}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Back button */}
        <ScrollReveal className="mt-12">
          <Link
            to={`/category/${book.category}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-card-bg text-text-secondary hover:bg-accent/10 hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} /> 返回书单
          </Link>
        </ScrollReveal>
      </div>
    </div>
  )
}
