"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Callout */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400">
              GET IN TOUCH
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Are you ready to start? <br />
              Submit your request.
            </h2>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Have a product launch coming up or need to scale your streaming capacity? Our engineering consultants are ready to assist.
            </p>
            <button className="px-8 py-3.5 rounded-full bg-white text-[#050d0a] font-bold text-sm hover:bg-gray-100 transition-colors">
             <a href="mailto:contact@runtech.com">Get Started</a>
            </button>
          </div>

          {/* Right Dark Teal Floating Form Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-10 space-y-7 shadow-2xl bg-gradient-to-b from-[#0e4a3e] to-[#06231e]">
              <h3 className="text-xl font-bold text-center text-white">
                Let&apos;s Start your <span className="text-[#22e2b8]">journey today</span>
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-full bg-white text-[#050d0a] placeholder-gray-500 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#22e2b8]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-6 py-4 rounded-full bg-white text-[#050d0a] placeholder-gray-500 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#22e2b8]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#2fe8c4] to-[#14b598] text-[#050d0a] font-bold text-sm hover:opacity-90 transition-opacity !mt-7"
                >
                  Start Watching Free
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}