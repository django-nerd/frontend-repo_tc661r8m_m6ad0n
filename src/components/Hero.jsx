export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,#f97316,transparent_40%),radial-gradient(800px_circle_at_80%_20%,#0ea5e9,transparent_40%)] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">Move To
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600"> Your Best</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-xl">Performance gear engineered for speed, comfort and style. Built to power every run, rep and rest day.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#featured" className="px-5 py-3 rounded-full bg-black text-white font-semibold">Shop Featured</a>
              <a href="#shoes" className="px-5 py-3 rounded-full bg-white border border-black/10 font-semibold">Shop Shoes</a>
            </div>
          </div>
          <div className="relative">
            <img className="w-full rounded-3xl shadow-2xl" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600" alt="Hero shoe" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow p-4">
              <p className="text-sm font-semibold">Air Zoom Pegasus</p>
              <p className="text-xs text-gray-500">Everyday responsive ride</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
