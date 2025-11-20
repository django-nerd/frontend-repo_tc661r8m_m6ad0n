import { useEffect, useState } from 'react'

export default function Categories() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/categories`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section id="featured" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((c) => (
            <a key={c.id} href={`#${c.slug}`} className="group relative overflow-hidden rounded-2xl bg-white shadow border border-black/5">
              <img src={c.image} alt={c.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-semibold">{c.name}</p>
                <p className="text-sm text-white/80">Explore</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
