export const Footers = () => {
    return (
      <footer className="relative z-10 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            
            {/* Brand Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo-footer.png" alt="RunTech logo" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg leading-none">
                    <span className="text-white">Run</span><span className="text-[#22e2b8]">Tech</span>
                  </span>
                  <span className="text-[10px] text-[#8aa39b] tracking-wider">Technologies Pvt Ltd</span>
                </div>
              </div>

              <p className="text-[#8aa39b] text-sm max-w-sm leading-relaxed mb-6">
                RunTech is an independent streaming platform delivering pristine high-fidelity experiences for anime, movies, dramas, and manga to fans worldwide.
              </p>

              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-[#22e2b8]/30 flex items-center justify-center text-[#22e2b8] hover:bg-[#22e2b8] hover:text-[#050d0a] transition-all duration-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#22e2b8]/30 flex items-center justify-center text-[#22e2b8] hover:bg-[#22e2b8] hover:text-[#050d0a] transition-all duration-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-[#22e2b8]/30 flex items-center justify-center text-[#22e2b8] hover:bg-[#22e2b8] hover:text-[#050d0a] transition-all duration-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-[#22e2b8]/30 flex items-center justify-center text-[#22e2b8] hover:bg-[#22e2b8] hover:text-[#050d0a] transition-all duration-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.94 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.41z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
              </div>
            </div>
  
            {/* Navigation Column */}
            <div>
              <h4 className="text-white font-bold text-base mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm text-[#8aa39b]">
                <li><a href="#" className="hover:text-white transition-colors">Anime Series</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Movies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dramas</a></li>
              </ul>
            </div>
  
            {/* Company Column */}
            <div>
              <h4 className="text-white font-bold text-base mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-[#8aa39b]">
                <li><a href="#" className="hover:text-white transition-colors">About RunTech</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
  
            {/* Legal Column */}
            <div>
              <h4 className="text-white font-bold text-base mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-[#8aa39b]">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ad choices</a></li>
              </ul>
            </div>
  
          </div>
  
          {/* Copyright */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8aa39b] gap-4">
            <p>© 2026 RunTech Entertainment LLC. All trademarks are properties of their respective owners.</p>
          
          </div>
        </div>
      </footer>
    );
  };
  