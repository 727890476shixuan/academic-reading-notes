import { ExternalLink } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { categories, books } from '../data/books'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <h1 className="text-3xl font-light text-charcoal mb-8">关于本站</h1>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              这个网站用于记录和分享我的学术阅读笔记。
              阅读是获取知识最系统的途径——每一本好书都是作者多年思考的浓缩，
              而读书笔记则是将这些知识真正内化为自己理解的过程。
            </p>
            <p>
              我的阅读集中在以下几个领域：
            </p>

            {/* Category links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="flex items-center justify-between p-4 rounded-lg bg-card-bg hover:bg-accent/10 transition-colors group"
                >
                  <span className="text-charcoal group-hover:text-accent transition-colors">
                    {cat.name}
                  </span>
                  <span className="text-sm text-text-secondary">
                    {books.filter(b => b.category === cat.slug).length} 本
                  </span>
                </Link>
              ))}
            </div>

            <p>
              笔记内容纯属个人学习记录，如有不准确之处，欢迎交流指正。
              所有书籍信息、封面图片版权归原作者及出版社所有。
            </p>

            <div className="pt-4 border-t border-gray-200">
              <a
                href="https://727890476shixuan.github.io/personal-page/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors"
              >
                访问我的个人主页 <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
