export default function AboutSection() {
    return (
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400">
                ABOUT US
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                We power the world&apos;s most engaging media platforms
              </h2>
            </div>
  
            {/* Right Column: Narrative */}
            <div className="lg:col-span-6 lg:pt-8">
              <p className="text-lg text-gray-300 leading-relaxed font-normal">
                RunTech Pvt Ltd is a premier digital technology partner. From high-capacity video distribution engines to interactive reading applications, we deliver robust solutions designed with engineering excellence and an unwavering passion for digital storytelling.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }