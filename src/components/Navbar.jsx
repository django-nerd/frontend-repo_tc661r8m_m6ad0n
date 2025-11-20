import { useState } from 'react'
import { Menu, ShoppingBag, Search } from 'lucide-react'

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
            <a href="/" className="font-black text-2xl tracking-tight">nike</a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#shoes" className="hover:text-gray-900 text-gray-600">Shoes</a>
            <a href="#clothing" className="hover:text-gray-900 text-gray-600">Clothing</a>
            <a href="#accessories" className="hover:text-gray-900 text-gray-600">Accessories</a>
            <a href="#featured" className="hover:text-gray-900 text-gray-600">Featured</a>
          </nav>

          <div className="flex items-center gap-4">
            <form onSubmit={submit} className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5">
              <Search className="w-4 h-4 text-gray-500" />
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search" className="bg-transparent outline-none text-sm" />
            </form>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Cart">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5">
          <div className="px-4 py-3 space-y-2">
            <a href="#shoes" className="block py-2">Shoes</a>
            <a href="#clothing" className="block py-2">Clothing</a>
            <a href="#accessories" className="block py-2">Accessories</a>
            <a href="#featured" className="block py-2">Featured</a>
          </div>
        </div>
      )}
    </header>
  )
}
