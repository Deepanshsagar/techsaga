import { useEffect, useState } from "react";

const NAV_LINKS = [
  {
    label: "Home",
    url: "/",
  },

  {
    label: "Services",
    url: "/services",
    children: [
      { label: "Software Development", url: "/services/software-development" },
      { label: "Cloud & Infrastructure", url: "/services/cloud-infrastructure" },
      { label: "Testing & QA", url: "/services/testing-qa" },
      { label: "Digital Marketing", url: "/services/digital-marketing" },
      { label: "Digital Transformation", url: "/services/digital-transformation" },
      { label: "Technology Consulting", url: "/services/technology-consulting" },
      { label: "Support & Maintenance", url: "/services/support-maintenance" },
    ],
  },

  {
    label: "Solutions",
    url: "/solutions",
    children: [
      { label: "Workday", url: "/solutions/workday" },
      { label: "SAP", url: "/solutions/sap" },
      { label: "ERPNext", url: "/solutions/erpnext" },
      { label: "Salesforce", url: "/solutions/salesforce" },
      { label: "ServiceNow", url: "/solutions/servicenow" },
      { label: "AWS", url: "/solutions/aws" },
      { label: "Zoho", url: "/solutions/zoho" },
      { label: "Data Solutions", url: "/solutions/data-solutions" },
      { label: "Contract Consulting", url: "/solutions/contract-consulting" },
    ],
  },

  {
    label: "Industries",
    url: "/industries",
    children: [
      { label: "E-Commerce", url: "/industries/ecommerce" },
      { label: "Healthcare", url: "/industries/healthcare" },
      { label: "Banking & Finance", url: "/industries/banking-finance" },
      { label: "Education", url: "/industries/education" },
      { label: "Retail", url: "/industries/retail" },
      { label: "Manufacturing", url: "/industries/manufacturing" },
      { label: "Real Estate", url: "/industries/real-estate" },
      { label: "Logistics", url: "/industries/logistics" },
      { label: "Travel & Tourism", url: "/industries/travel-tourism" },
      { label: "Government", url: "/industries/government" },
    ],
  },

  {
    label: "Resources",
    url: "/resources",
    children: [
      { label: "Blogs", url: "/blog" },
      { label: "Case Studies", url: "/case-studies" },
      { label: "Success Stories", url: "/success-stories" },
      { label: "Web Stories", url: "/web-stories" },
    ],
  },

  {
    label: "Company",
    url: "/company",
    children: [
      { label: "About Us", url: "/about-us" },
      { label: "Management Team", url: "/management-team" },
      { label: "Clients & Portfolio", url: "/clients-portfolio" },
      { label: "Careers", url: "/careers" },
      { label: "Development Approach", url: "/development-approach" },
      { label: "Quality Assurance", url: "/quality-assurance" },
      { label: "How We Work", url: "/how-we-work" },
    ],
  },

  {
    label: "Contact Us",
    url: "/contact-us",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 max-w-7xl mx-auto rounded-2xl transition-all duration-300
      ${
        scrolled
          ? "bg-white/70 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-white/20"
          : "bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-white/10"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="max-w-[180px]" aria-label="TechSaga Home">
            <img
              src="/assets/img/logo.webp"
              alt="TechSaga"
              className="w-full h-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.url}
                  className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[#4291CE] transition-colors"
                >
                  {link.label}

                  {link.children && (
                    <svg
                      className="w-3 h-3 mt-[1px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>

                {/* Underline */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#4291CE] group-hover:w-full transition-all duration-300" />

                {/* Dropdown */}
                {link.children && (
                  <div
                    className="
                    absolute left-0 top-full pt-5 opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                  "
                  >
                    <div
                      className="
                      min-w-[260px]
                      bg-white rounded-2xl border border-gray-100
                      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                      p-3
                    "
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.url}
                          className="
                          block px-4 py-3 rounded-xl
                          text-sm font-medium text-gray-700
                          hover:bg-[#F4F9FD]
                          hover:text-[#4291CE]
                          transition-all duration-200
                        "
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="/contact-us"
              className="
              bg-[#4291CE]
              hover:bg-[#2F7FBC]
              text-white text-sm font-bold
              px-5 py-2.5 rounded-xl
              transition-all duration-200
              hover:-translate-y-px
            "
            >
              Get Consultation
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#4291CE]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          lg:hidden
          bg-white
          border-t
          px-5 py-5
          rounded-b-2xl
          shadow-lg
        "
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-gray-100">
                <button
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === link.label ? "" : link.label
                    )
                  }
                  className="
                    w-full flex items-center justify-between
                    py-4 text-left
                    text-sm font-semibold text-gray-700
                  "
                >
                  <a href={link.url}>{link.label}</a>

                  {link.children && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMobileMenu === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {link.children && openMobileMenu === link.label && (
                  <div className="pb-4 pl-3 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.url}
                        className="
                          py-2 px-3 rounded-lg
                          text-sm text-gray-600
                          hover:bg-[#F4F9FD]
                          hover:text-[#4291CE]
                          transition-all duration-200
                        "
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="/contact-us"
              className="
                mt-5
                bg-[#4291CE]
                text-white
                text-center
                font-bold
                py-3 rounded-xl
                hover:bg-[#2F7FBC]
                transition-all duration-200
              "
            >
              Get Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}