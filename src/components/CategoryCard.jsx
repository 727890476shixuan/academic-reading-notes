import { Link } from 'react-router-dom'
import { TrendingUp, Globe, BarChart3, Briefcase } from 'lucide-react'

const iconMap = {
  TrendingUp: TrendingUp,
  Globe: Globe,
  BarChart3: BarChart3,
  Briefcase: Briefcase,
}

export default function CategoryCard({ category, count }) {
  const Icon = iconMap[category.icon] || Briefcase

  return (
    <Link
      to={`/category/${category.slug}`}
      className="group block bg-white rounded-xl shadow-sm shadow-gray-200/50 border border-gray-100 p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:shadow-gray-200/70"
    >
      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
        <Icon size={26} className="text-accent" />
      </div>
      <h3 className="font-medium text-lg text-charcoal mb-1.5 group-hover:text-accent transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-text-secondary">
        {count} 本笔记
      </p>
    </Link>
  )
}
