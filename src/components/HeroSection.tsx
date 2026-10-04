export default function HeroSection() {
    return (
      <section id="overview" className="relative pt-36 pb-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Side-by-side Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-8 space-y-8">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                We build the tech behind <br className="hidden md:block" />
                your favorite <span className="text-[#22e2b8]">movies,</span> <br className="hidden md:block" />
                <span className="text-[#22e2b8]">animes,</span> and <span className="text-[#22e2b8]">mangas</span>
              </h1>
  
              <p className="text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
                RunTech Pvt Ltd delivers world-class streaming architectures, custom content platforms, and immersive user experiences for the global digital entertainment industry.
              </p>
  
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#services"
                  className="px-8 py-3.5 rounded-full bg-white text-[#050d0a] font-bold text-sm hover:bg-gray-100 transition-all shadow-lg hover:shadow-[#22e2b8]/20"
                >
                  Explore Services
                </a>
                <a
                  href="#about"
                  className="px-8 py-3.5 rounded-full bg-transparent border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Learn About Us
                </a>
              </div>
            </div>
  
            {/* Right Column: Key Stats Callout */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-14">
              <div>
                <div className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
                  40+
                </div>
                <p className="text-xs tracking-widest font-bold uppercase text-[#22e2b8]">
                  ENTERPRISE CLIENTS
                </p>
              </div>
  
              <div>
                <div className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
                  99.9%
                </div>
                <p className="text-xs tracking-widest font-bold uppercase text-[#22e2b8]">
                  STREAMING UPTIME
                </p>
              </div>
            </div>
  
          </div>
  
          {/* Section Label Anchor */}
       
        </div>
      </section>
    );
  }