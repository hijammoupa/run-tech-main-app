'use client';

export default function MangaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#22E2B8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-bold tracking-widest uppercase mb-5 text-gray-400">
              INTERACTIVE READERS
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Unleashing the potential of next generation manga experiences
            </h2>
          </div>

          <a
            href="#services"
            className="self-start md:self-auto px-8 py-3.5 rounded-full bg-white text-[#020907] font-bold text-sm hover:bg-gray-100 transition-colors shrink-0"
          >
            Explore Services
          </a>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Reader Mockup Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/manga-reader.png"
                alt="Interactive Manga Reader UI"
                className="w-full h-[420px] md:h-[540px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Feature Detail */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ultra-Responsive Caching &amp; Vector Rendering
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-base">
              Our advanced CDN architecture slices volume files into micro-optimized packets. Readers experience zero scroll lag, pixel perfect scaling on retina displays, and instant localized page pre-fetching even on poor networks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}