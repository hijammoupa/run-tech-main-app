import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030506]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-14">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="RunTech logo" className="h-9 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-200">
            <Link href="#overview" className="hover:text-white transition-colors">Overview</Link>
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#team" className="hover:text-white transition-colors">Team</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Sign In CTA */}
        <button className="px-7 py-2.5 rounded-full bg-white text-[#050d0a] font-semibold text-sm hover:bg-gray-100 transition-colors">
          Sign In
        </button>
      </div>
    </nav>
  );
}
