"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  // {
  //   label: "Home",
  //   url: "/",
  // },

  {
    label: "Services",
    url: "/services",
    children: [
      {
        label: "Software Development",
        url: "#",
        children: [
          {
            label: "Custom Software Development",
            url: "/services/custom-software-development",
          },
          {
            label: "Enterprise Software Development",
            url: "/services/enterprise-software-development",
          },
          {
            label: "Product Development",
            url: "/services/product-development",
          },
          {
            label: "Web Application Development",
            url: "/services/web-application-development",
          },
          {
            label: "Mobile Application Development",
            url: "/services/mobile-application-development",
          },
          {
            label: "Cloud Application Development",
            url: "/services/cloud-application-development",
          },
        ],
      },

      {
        label: "Infrastructure",
        url: "#",
        children: [
          {
            label: "Cloud Infrastructure",
            url: "/services/cloud-infrastructure",
          },
          {
            label: "Hybrid Infrastructure",
            url: "/services/hybrid-infrastructure",
          },
          {
            label: "On-Premises Infrastructure",
            url: "/services/on-premises-infrastructure",
          },
          {
            label: "Integration",
            url: "/services/integration",
          },
          {
            label: "Migration",
            url: "/services/migration",
          },
          {
            label: "Devops",
            url: "/services/devops",
          },
        ],
      },

      {
        label: "Marketing Solutions",
        url: "#",
        children: [
          {
            label: "Digital Marketing",
            url: "/services/marketing/digital-marketing",
          },
          {
            label: "Influential Marketing",
            url: "/services/marketing/influential-marketing",
          },
          {
            label: "Online Reputation Management",
            url: "/services/marketing/online-reputation-management",
          },
          {
            label: "Digital Consultation",
            url: "/services/marketing/digital-consultation",
          },
          {
            label: "Improved ROI",
            url: "/services/marketing/improved-roi",
          },
        ],
      },

      {
        label: "Maintenance and Support",
        url: "#",
        children: [
          {
            label: "Application Support",
            url: "/services/application-support",
          },
          {
            label: "Infrastructure Support",
            url: "/services/infrastructure-support",
          },
          {
            label: "Customer Support",
            url: "/services/customer-support",
          },
        ],
      },

      {
        label: "Testing",
        url: "#",
        children: [
          {
            label: "Manual Testing",
            url: "/services/manual-testing",
          },
          {
            label: "Automation Testing",
            url: "/services/automation-testing",
          },
          {
            label: "Continuous Testing",
            url: "/services/continuous-testing",
          },
        ],
      },

      {
        label: "Advisory",
        url: "#",
        children: [
          {
            label: "Digital Transformation",
            url: "/services/digital-transformation",
          },
          {
            label: "Business Technology Consulting",
            url: "/services/business-technology-consulting",
          },
          {
            label: "Cloud Strategy Consulting",
            url: "/services/cloud-strategy-consulting",
          },
        ],
      },
    ],
  },

  {
    label: "Solutions",
    url: "#",
    children: [
      { label: "Workday", url: "/solutions/workday" },
      { label: "Salesforce", url: "/solutions/salesforce" },
      { label: "Zoho", url: "/solutions/zoho" },
      { label: "SAP", url: "/solutions/sap" },
      { label: "Data Solutions", url: "/solutions/data-solutions" },
      { label: "ERPNext", url: "/solutions/erpnext" },
      { label: "ServiceNow", url: "/solutions/servicenow" },
      { label: "AWS", url: "/solutions/aws-amazon-web-services" },
      { label: "Contract Consulting", url: "/solutions/contract-consulting" },
    ],
  },

  {
    label: "Industries",
    url: "/industries",
    children: [
      { label: "E-Commerce", url: "/industries/e-commerce-solution" },
      { label: "Healthcare", url: "/industries/healthcare" },
      { label: "Banking & Finance", url: "/industries/banking-finance" },
      { label: "Education", url: "/industries/education-e-learning" },
      { label: "Retail", url: "/industries/retail-and-consumer-goods" },
      { label: "Manufacturing", url: "/industries/manufacturing" },
      { label: "Real Estate", url: "/industries/real-estate" },
      { label: "Logistics", url: "/industries/logistics-and-transportation" },
      { label: "Travel & Tourism", url: "/industries/travel-tourism" },
      { label: "Government", url: "/industries/government" },
    ],
  },

  {
    label: "Resources",
    url: "#",
    children: [
      { label: "Blogs", url: "https://resources.techsaga.co.in/blog/" },
      { label: "Case Studies", url: "https://resources.techsaga.co.in/case-study/" },
      { label: "Success Stories", url: "#" },
      { label: "Web Stories", url: "https://resources.techsaga.co.in/web-stories/" },
    ],
  },

  {
    label: "Company",
    url: "#",
    children: [
      { label: "About Us", url: "/about-us" },
      { label: "Management Team", url: "/management-team" },
      { label: "Clients & Portfolio", url: "/portfolio" },
      { label: "Careers", url: "/careers" },
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
  const [fetchHeader, setFetchHeader] = useState([]);
  const [openMobileMenu, setOpenMobileMenu] = useState("");

  // console.log("fetchHeader",fetchHeader)


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useEffect(() => {
  //   fetch("/api/header")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFetchHeader(data.data);
  //     });
  // }, []);

  return (
    <header
    // fixed top-5 left-0 right-0 z-50 mx-5 md:mx-auto max-w-6xl  xl:max-w-7xl rounded-2xl transition-all duration-300
      className={`fixed top-5 left-[5px] right-[5px] lg:left-5 lg:right-5 z-50 mx-auto max-w-6xl xl:max-w-7xl rounded-2xl transition-all duration-300 bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-white/10
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
            <div className="relative group">
              <Link
                href={`/`}
                className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[#4291CE] transition-colors"
              >
                Home
              </Link>
            </div>
            {/* {fetchHeader.map((link: any) => (
              <div key={link.slug} className="relative group">
                <Link
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
                </Link>

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
                                    <Link
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
                                    </Link>
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
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                <Link
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
                </Link>

                {/* Underline */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#4291CE] group-hover:w-full transition-all duration-300" />

                {/* Level 1 Dropdown */}
                {link.children && (
                  <div
                    className="
          absolute left-0 top-full pt-5 opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-200 z-50
        "
                  >
                    <div
                      className="
            min-w-[300px]
            bg-white rounded-2xl border border-gray-100
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            p-3
          "
                    >
                      {link.children.map((child) => (
                        <div key={child.label} className="relative group/sub">
                          <Link
                            href={child.url}
                            className="
                  flex items-center justify-between
                  px-4 py-3 rounded-xl
                  text-sm font-medium text-gray-700
                  hover:bg-[#F4F9FD]
                  hover:text-[#4291CE]
                  transition-all duration-200
                "
                          >
                            {child.label}

                            {"children" in child && child.children && (
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
                          </Link>

                          {/* Level 2 Dropdown */}
                          {"children" in child && child.children && (
                            <div
                              className="
                    absolute left-full top-0 pl-3
                    opacity-0 invisible
                    group-hover/sub:opacity-100
                    group-hover/sub:visible
                    transition-all duration-200
                  "
                            >
                              <div
                                className="
                      min-w-[320px]
                      bg-white rounded-2xl border border-gray-100
                      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                      p-3
                    "
                              >
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.label}
                                    href={subChild.url}
                                    className="
                          block px-4 py-3 rounded-xl
                          text-sm font-medium text-gray-700
                          hover:bg-[#F4F9FD]
                          hover:text-[#4291CE]
                          transition-all duration-200
                        "
                                  >
                                    {subChild.label}
                                  </Link>
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
                  <Link href={link.url}>{link.label}</Link>

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
                      <Link
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
                      </Link>
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