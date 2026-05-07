import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", url: "/services" },
  { label: "Solutions", url: "/solutions" },
  { label: "Industries", url: "/industries" },
  { label: "Case Studies", url: "/case-studies" },
  { label: "About", url: "/about" },
  { label: "Careers", url: "/careers" },
  { label: "Blog", url: "/blog" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header
            className={`max-w-7xl mx-auto rounded-2xl fixed top-5 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
                    ? "bg-white/70 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-white/20"
                    : "bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-white/10"}
          `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    {/* className="flex items-center gap-0.5 flex-shrink-0"  */}
                    <a href="/" className="max-w-[180px]" aria-label="TechSaga Home">
                        {/* <span className="text-[#4291CE] font-display font-bold text-xl tracking-tight">TECH</span>
                          <span className="font-display font-bold text-xl tracking-tight text-gray-900">SAGA</span> */}
                        <img src="assets/img/logo.webp" className="w-full h-auto" />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link?.label}
                                href={link?.url}
                                className="text-sm font-semibold text-gray-600 hover:text-[#4291CE] relative group transition-colors"
                            >
                                {link?.label}
                                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-[#4291CE] group-hover:w-full transition-all duration-200" />
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center">
                        <a
                            href="#"
                            className="bg-[#4291CE] hover:bg-[#4291CE] text-white text-sm font-bold px-5 py-2.5 rounded transition-all duration-200 hover:-translate-y-px"
                        >
                            Get Consultation
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="lg:hidden p-2 text-gray-600 hover:text-[#4291CE] transition-colors"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-gray-700 shadow-lg">
                    {NAV_LINKS.map((link) => (
                        <a key={link?.label} href={link?.url} className="hover:text-[#4291CE] transition-colors">{link?.label}</a>
                    ))}
                    <a href="#" className="bg-[#4291CE] text-white px-5 py-2.5 rounded text-center font-bold hover:bg-[#4291CE] transition-colors">
                        Get Free Quote
                    </a>
                </div>
            )}
        </header>
    )
}