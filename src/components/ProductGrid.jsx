import { useEffect, useState, useMemo } from 'react'

function ProductCard({ p }) {
  return (
    <div className="group bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={p.images?.[0]} alt={p.title} className="w-full h-56 object-cover" />
        {p.featured && <span className="absolute top-3 left-3 text-xs font-semibold bg-black text-white px-2 py-1 rounded-full">Featured</span>}
      </div>
      <div className="p-4">
        <h3 className="font-semibold tracking-tight">{p.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 min-h-[2.5rem]">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">${p.price.toFixed(2)}</span>
          <button className="px-3 py-1.5 text-sm rounded-full bg-black text-white">Add</button>
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid({ category, query }) {
  const [products, setProducts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const url = new URL(`${baseUrl}/api/products`)
        if (category) url.searchParams.set('category', category)
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setProducts([])
      }
    }
    load()
  }, [category])

  const filtered = useMemo(() => {
    if (!query) return products
    const q = query.toLowerCase()
    return products.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  }, [products, query])

  if (!filtered.length) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gray-500">No products found.</p>
        </div>
      </section>
    )
  }

  return (
    <section id={category?.toLowerCase() || 'products'} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{category || 'Products'}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
