import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

export default function BookCard({ book }) {
  return (
    <Link
      to={`/book/${book.slug}`}
      className="group block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
    >
      <div className="aspect-[2/3] overflow-hidden bg-card-bg">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-charcoal leading-snug mb-1 group-hover:text-accent transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-text-secondary mb-2">{book.author}</p>
        <div className="flex items-center gap-0.5 mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={14}
              className={i < book.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
          {book.summary}
        </p>
      </div>
    </Link>
  )
}
