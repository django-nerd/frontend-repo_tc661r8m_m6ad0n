import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onSearch={setQuery} />
      <main>
        <Hero />
        <Categories />
        <ProductGrid category="Shoes" query={query} />
        <ProductGrid category="Clothing" query={query} />
        <ProductGrid category="Accessories" query={query} />
      </main>
      <footer className="border-t border-black/5 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} nike — Demo experience</p>
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="/test" className="hover:text-gray-900">System Check</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
