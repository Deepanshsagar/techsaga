"use client"
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
      { label: "Software & Product Development", url: "#" },
      { label: "IT Infrastructure & Cloud Services", url: "#" },
      { label: "Testing & QA (Quality Assurance)", url: "#" },
      { label: "Digital Marketing & Growth", url: "#" },
      { label: "Strategy & Managed Support", url: "#" },
    ],
  },

  {
    label: "Solutions",
    url: "/solutions",
    children: [
      { label: "Workday", url: "#" },
      { label: "Salesforce", url: "#" },
      { label: "Zoho", url: "#" },
      { label: "SAP", url: "#" },
      { label: "Data Solutions", url: "#" },
      { label: "ERPNext", url: "#" },
      { label: "ServiceNow", url: "#" },
      { label: "AWS", url: "#" },
      { label: "Contract Consulting", url: "#" },
    ],
  },

  {
    label: "Industries",
    url: "/industries",
    children: [
      { label: "E-Commerce", url: "#" },
      { label: "Healthcare", url: "#" },
      { label: "Banking & Finance", url: "#" },
      { label: "Education", url: "#" },
      { label: "Retail", url: "#" },
      { label: "Manufacturing", url: "#" },
      { label: "Real Estate", url: "#" },
      { label: "Logistics", url: "#" },
      { label: "Travel & Tourism", url: "#" },
      { label: "Government", url: "#" },
    ],
  },

  {
    label: "Resources",
    url: "#",
    children: [
      { label: "Blogs", url: "#" },
      { label: "Case Studies", url: "#" },
      { label: "Success Stories", url: "#" },
      { label: "Web Stories", url: "#" },
    ],
  },

  {
    label: "Company",
    url: "#",
    children: [
      { label: "About Us", url: "/about-us" },
      { label: "Management Team", url: "#" },
      { label: "Clients & Portfolio", url: "#" },
      { label: "Careers", url: "/careers" },
      { label: "Development Approach", url: "#" },
      { label: "Quality Assurance", url: "#" },
      { label: "How We Work", url: "#" },
    ],
  },

  {
    label: "Contact Us",
    url: "#",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [fetchHeader, setFetchHeader] = useState([]);
  const [openMobileMenu, setOpenMobileMenu] = useState("");

  // console.log("fetchHeader",fetchHeader)


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("/api/header")
      .then((res) => res.json())
      .then((data) => {
        setFetchHeader(data.data);
      });
  }, []);

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 max-w-7xl mx-auto rounded-2xl transition-all duration-300
      ${scrolled
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
                      min-w-[270px]
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

            {/* {fetchHeader.map((link: any) => (
              <div key={link.slug} className="relative group">
                <a
                  href={`/${link.slug}`}
                  className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[#4291CE] transition-colors"
                >
                  {link.title}

                  {link.subCategories && link.subCategories.length > 0 && (
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

                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#4291CE] group-hover:w-full transition-all duration-300" />

                {link.subCategories && link.subCategories.length > 0 && (
                  <div
                    className="
          absolute left-0 top-full pt-5
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-200 z-50
        "
                  >
                    <div
                      className="
            min-w-[270px]
            bg-white rounded-2xl border border-gray-100
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            p-3
          "
                    >
                      {link.subCategories.map((child: any) => (
                        <div key={child.slug} className="relative group/sub">
                          <a
                            // href={`/${link.slug}/${child.slug}`}
                            className="
                  flex items-center justify-between cursor-pointer
                  px-4 py-3 rounded-xl
                  text-sm font-medium text-gray-700
                  hover:bg-[#F4F9FD]
                  hover:text-[#4291CE]
                  transition-all duration-200
                "
                          >
                            <span>{child.title}</span>

                            {child.subCategories &&
                              child.subCategories.length > 0 && (
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              )}
                          </a>

                          {child.services &&
                            child.services.length > 0 && (
                              <div
                                className="
                      absolute top-0 left-full pl-3
                      opacity-0 invisible
                      group-hover/sub:opacity-100
                      group-hover/sub:visible
                      transition-all duration-200
                    "
                              >
                                <div
                                  className="
                        min-w-[250px]
                        bg-white rounded-2xl border border-gray-100
                        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                        p-3
                      "
                                >
                                  {child.services.map((sub: any) => (
                                    <a
                                      key={sub.slug}
                                      href={`/${link.slug}/${sub.slug}`}
                                      className="
                            block px-4 py-3 rounded-xl
                            text-sm font-medium text-gray-700
                            hover:bg-[#F4F9FD]
                            hover:text-[#4291CE]
                            transition-all duration-200
                          "
                                    >
                                      {sub.title}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))} */}
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
                      className={`w-4 h-4 transition-transform duration-200 ${openMobileMenu === link.label ? "rotate-180" : ""
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