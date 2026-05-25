import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import BookCard from '../components/BookCard'
import { getBooksByCategory, getCategoryBySlug } from '../data/books'

export default function Category() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const bookList = getBooksByCategory(slug)

  if (!category) {
    return (
      <div className="pt-32 px-6 text-center">
        <p className="text-text-secondary">分类未找到。</p>
        <Link to="/" className="text-accent hover:underline mt-4 inline-block">返回首页</Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent hover:underline transition-all mb-8"
          >
            <ArrowLeft size={16} /> 返回首页
          </Link>
          <h1 className="text-3xl font-light text-charcoal mb-2 tracking-tight">{category.name}</h1>
          <p className="text-text-secondary mb-12">
            共 {bookList.length} 本书籍笔记
          </p>
        </ScrollReveal>

        {bookList.length === 0 ? (
          <p className="text-text-secondary text-center py-20">暂无该分类的书籍笔记。</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookList.map(book => (
              <ScrollReveal key={book.id}>
                <BookCard book={book} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
