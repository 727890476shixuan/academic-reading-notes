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
      className="group block bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
    >
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon size={24} className="text-accent" />
      </div>
      <h3 className="font-medium text-lg text-charcoal mb-1 group-hover:text-accent transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-text-secondary">
        {count} 本笔记
      </p>
    </Link>
  )
}
