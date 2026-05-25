import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Target, Calendar } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import BookCard from '../components/BookCard'
import CategoryCard from '../components/CategoryCard'
import { categories, books, getRecentBooks } from '../data/books'

const recentBooks = getRecentBooks(3)
const totalBooks = books.length
const yearlyGoal = 30
const monthlyRead = 3

const stats = [
  { icon: BookOpen, value: totalBooks, label: '已读书籍', suffix: '本' },
  { icon: Target, value: yearlyGoal, label: '今年目标', suffix: '本' },
  { icon: Calendar, value: monthlyRead, label: '本月阅读', suffix: '本' },
]

const Home = () => (
  <>
    {/* Hero */}
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-charcoal mb-6 leading-tight">
            记录阅读，沉淀思考
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl mx-auto font-light">
            这里是我的学术读书笔记，分享我在经济学、跨境电商和数据分析领域的学习心得。
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Categories */}
    <section className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-normal text-charcoal mb-10">分类浏览</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <ScrollReveal key={cat.slug}>
              <CategoryCard
                category={cat}
                count={books.filter(b => b.category === cat.slug).length}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Latest Reading */}
    <section className="py-24 px-6">
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-normal text-charcoal">最新阅读</h2>
            <Link
              to="/category/economics"
              className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 hover:underline transition-all"
            >
              查看全部 <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBooks.map((book) => (
            <ScrollReveal key={book.id}>
              <BookCard book={book} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Reading Stats */}
    <section className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-page mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl font-normal text-charcoal mb-10 text-center">阅读统计</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map(stat => (
            <ScrollReveal key={stat.label}>
              <div className="text-center p-8 bg-card-bg rounded-2xl">
                <stat.icon size={22} className="text-accent/60 mx-auto mb-3" />
                <div className="mb-1">
                  <span className="text-4xl font-semibold text-accent">{stat.value}</span>
                  <span className="text-base text-text-secondary ml-1 font-light">{stat.suffix}</span>
                </div>
                <div className="text-sm text-text-secondary font-light">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default Home
