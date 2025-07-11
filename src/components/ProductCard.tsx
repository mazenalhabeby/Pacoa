import type {LucideIcon} from "lucide-react"

interface ProductCardProps {
  grade: string
  title: string
  description: string
  icon: LucideIcon
  color: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  grade,
  title,
  description,
  icon: Icon,
  color,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div
        className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${color}`}
      >
        Qualität {grade}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className={`p-2 rounded bg-[#f4efe3]`}>
          <Icon className="w-6 h-6 text-[#b85b16]" />
        </div>
        <h3 className="text-lg font-bold text-[#b85b16]">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  )
}

export default ProductCard
