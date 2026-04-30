"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface ServiceCard {
  icon: string;
  service: string;
  title: string;
  desc: string;
  points: string[];
}
interface ProductCard {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}
interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  stars: number;
  quote: string;
}
interface BlogPost {
  tag: string;
  title: string;
  excerpt: string;
  img: string;
}
interface ValueItem {
  icon: string;
  title: string;
  desc: string;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#4291CE] mb-2">
      {children}
    </p>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Services", "Industries", "Case Studies", "About", "Careers", "Blog"];

const SERVICES: ServiceCard[] = [
  {
    icon: "🤝",
    service: "Workday",
    title: "Contract Consulting & Resource Solutions",
    desc: "Access skilled tech professionals on demand to support projects, fill gaps, and scale teams without long-term hiring commitments.",
    points: [
      "IT contract staffing solutions",
      "Dedicated tech resource hiring",
      "Project-based consulting services",
      "Offshore and remote teams"
    ]
  },
  {
    icon: "☁️",
    service: "AWS",
    title: "Cloud Platform Implementation (AWS)",
    desc: "Set up, migrate, and manage secure cloud environments on AWS to improve performance, flexibility, and cost efficiency.",
    points: [
      "AWS cloud setup and configuration",
      "Cloud migration and deployment",
      "Cloud architecture design",
      "Multi-cloud and hybrid setup"
    ]
  },
  {
    icon: "⚙️",
    service: "ERPNext & SAP",
    title: "ERP & Business Systems (SAP & ERPNext)",
    desc: "Implement and optimize ERP systems to streamline operations, automate processes, and improve business visibility.",
    points: [
      "SAP implementation and customization",
      "ERPNext implementation and module setup",
      "Business process automation",
      "Data migration and system upgrades"
    ]
  },
  {
    icon: "👥",
    service: "AI & Data",
    title: "CRM & Customer Platforms (Salesforce)",
    desc: "Deploy and customize CRM solutions to manage customer data, improve sales processes, and drive better engagement.",
    points: [
      "Salesforce CRM implementation",
      "Sales and marketing automation",
      "Customer data management systems",
      "CRM customization and workflows"
    ]
  },
  {
    icon: "🔀",
    service: "SAP",
    title: "HR & Workforce Platforms (Workday)",
    desc: "Simplify HR operations with Workday solutions that handle payroll, employee data, and workforce management in one place.",
    points: [
      "Workday implementation and setup",
      "HR and payroll system automation",
      "Payment gateway integration",
      "Employee lifecycle management"
    ]
  },
  {
    icon: "📊",
    service: "ERPNext",
    title: "System Integration & API Solutions",
    desc: "Connect different systems and tools to ensure smooth data flow, better automation, and seamless business operations.",
    points: [
      "API development and integration",
      "Third-party software integration",
      "Payment gateway integration",
      "Data synchronization across systems"
    ]
  },
  {
    icon: "🤖",
    service: "Cloud",
    title: "Data & Analytics Solutions",
    desc: "Turn raw data into useful insights with structured pipelines, dashboards, and analytics tools that support smarter decisions.",
    points: [
      "Data engineering and pipeline setup",
      "Data warehousing solutions",
      "Business intelligence dashboards",
      "Predictive analytics solutions"
    ]
  },
  {
    icon: "💻",
    service: "Data Solutions",
    title: "DevOps, Custom Development & Managed Services",
    desc: "Build, deploy, and maintain scalable applications with ongoing support, automation, and performance optimization.",
    points: [
      "Custom web and SaaS application development",
      "Frontend and backend development",
      "CI/CD pipeline setup and automation",
      "Infrastructure and performance management"
    ]
  }
];

const PRODUCTS: ProductCard[] = [
  { icon: "🔍", title: "Advertising & Media", desc: "Paid media planning, digital ads, DOOH & OOH, production and design, and online reputation management.", tags: ["Paid Media", "ORM", "Production", "UI/UX"] },
  { icon: "🎧", title: "Sales Support & CRM", desc: "Lead generation, CRO, referral & reward programs, and full marketing automation across  CRM platforms.", tags: ["Lead Gen", "CRO", "Automation", "Loyalty"] },
  { icon: "🎨", title: "PR & Crisis Management", desc: "Strategic comms, press release management, social listening, brand reputation protection, and crisis response.", tags: ["Press Release", "Crisis Comms", "ORM"] },
  { icon: "📈", title: "Performance Marketing", desc: "ROI-driven campaigns across Google, Meta, Bing, Taboola, Amazon and regional marketplace platforms.", tags: ["Google Ads", "Meta Ads", "Analytics"] },
];

const PRODUCTST: ProductCard[] = [
  { icon: "🎥", title: "Training & Workshops", desc: "Expert-led programs on digital marketing, social media, influencer marketing, and brand reputation for senior executives.", tags: ["Social Media", "Influencer Mktg", "Brand Reputation"] },
  { icon: "📣", title: "Influencer & Content Marketing", desc: "UGC, influencer campaigns, blogging, storytelling, video and graphics  creation across all major platforms and formats.", tags: ["UGC Campaigns", "Video Creation", "Copywriting"] },
  { icon: "📣", title: "Event & Campaign Management", desc: "End-to-end execution for entertainment, government, and corporate campaigns — from strategy to trending hashtags.", tags: ["Event Promotion", "Twitter Trending", "Amplification"] },
  { icon: "📣", title: "Analytics & Marketing Intelligence", desc: "Google Analytics, Looker Studio, HotJar, SEMRush — full analytics stacksetup, dashboards, and data-driven decision support.", tags: ["GA4 Setup", "Looker Dashboards", "SEO Audits"] },
];

const TESTIMONIALS: Testimonial[] = [
  { name: "Sara Timothy", role: "VP, Digital Transformation", avatar: "https://randomuser.me/api/portraits/women/44.jpg", stars: 5, quote: "TechSaga completely transformed our Salesforce environment. Their deep expertise and commitment to outcomes was unparalleled. We saw a 40% jump in team efficiency." },
  { name: "Greg Phillips", role: "CTO, ScaleUp Technologies", avatar: "https://randomuser.me/api/portraits/men/32.jpg", stars: 5, quote: "From cloud migration to analytics, TechSaga handled every phase with precision. Their project management and communication standards are the best we've experienced." },
  { name: "Laura Hoffman", role: "Director, Global Operations", avatar: "https://randomuser.me/api/portraits/women/68.jpg", stars: 5, quote: "Working with TechSaga felt like having an internal team that genuinely cared about outcomes. Their digital marketing campaigns drove a 3x increase in qualified leads." },
];

const BLOGS: BlogPost[] = [
  { tag: "Salesforce CRM", title: "How Salesforce CRM Helps Businesses Improve Sales and Customer Satisfaction", excerpt: "Discover how Salesforce CRM empowers sales teams to close deals faster and deliver exceptional customer experiences at scale.", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80" },
  { tag: "Marketing", title: "What are the Principles of Marketing?", excerpt: "Explore the foundational principles that guide modern digital marketing strategies and drive brand growth.", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80" },
  { tag: "Salesforce", title: "Top Benefits of Salesforce Certification for Career Advancement", excerpt: "Understand how Salesforce certifications can accelerate your career and unlock higher-value opportunities.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" },
];

const VALUES: ValueItem[] = [
  { icon: "icon-shield.svg", title: "Integrity First", desc: "We operate with full transparency, honesty, and ethical standards in every engagement." },
  { icon: "icon-star.svg", title: "Excellence Strategy", desc: "We pursue excellence in every solution, strategy, and client interaction." },
  { icon: "icon-user.svg", title: "Collective Wisdom", desc: "Our strength comes from diverse perspectives and collaborative global thinking." },
  { icon: "icon-time.svg", title: "Client First Success", desc: "Your success is our success. We are relentlessly focused on delivering real, measurable value." },
];

const CLIENTS = [
  { name: "KPMG", logo: "/assets/img/logo/01.jpg" },
  { name: "Zscaler", logo: "/assets/img/logo/02.jpg" },
  { name: "Accenture", logo: "/assets/img/logo/03.jpg" },
  { name: "Gartner", logo: "/assets/img/logo/04.jpg" },
  { name: "Wipro", logo: "/assets/img/logo/05.jpg" },
  { name: "Tata", logo: "/assets/img/logo/06.jpg" },
  { name: "Tata1", logo: "/assets/img/logo/07.jpg" },
  { name: "Tata2", logo: "/assets/img/logo/08.jpg" },
  { name: "Tata3", logo: "/assets/img/logo/09.jpg" },
  { name: "Tata4", logo: "/assets/img/logo/10.jpg" },
  { name: "Tata5", logo: "/assets/img/logo/011.jpg" },
  { name: "Tata6", logo: "/assets/img/logo/012.jpg" },
  { name: "Tata7", logo: "/assets/img/logo/013.jpg" },
  { name: "Tata8", logo: "/assets/img/logo/014.jpg" },
  { name: "Tata9", logo: "/assets/img/logo/016.jpg" },
  { name: "Tata10", logo: "/assets/img/logo/017.jpg" },
  { name: "Tata11", logo: "/assets/img/logo/018.jpg" },
  { name: "Tata12", logo: "/assets/img/logo/019.jpg" },
  { name: "Tata13", logo: "/assets/img/logo/020.jpg" },
  { name: "Tata14", logo: "/assets/img/logo/021.jpg" },
  { name: "Tata15", logo: "/assets/img/logo/022.jpg" },
  { name: "Tata16", logo: "/assets/img/logo/023.jpg" },
  { name: "Tata17", logo: "/assets/img/logo/024.jpg" },
  { name: "Tata18", logo: "/assets/img/logo/025.jpg" },
];

const TEAM_IMAGES = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
];

// ─── Main Component ──────────────────────────────────────────────────────────

export default function TechSagaHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Optional autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="font-[Manrope,sans-serif] text-gray-800 bg-white antialiased">

      <main >
        <div style={{
          background: 'linear-gradient(358.62deg, #7EB8E5 19.22%, #4291CE 72.93%)'

        }}>

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
                <a href="#" className="max-w-[180px]" aria-label="TechSaga Home">
                  {/* <span className="text-[#4291CE] font-display font-bold text-xl tracking-tight">TECH</span>
                  <span className="font-display font-bold text-xl tracking-tight text-gray-900">SAGA</span> */}
                  <img src="assets/img/logo.webp" className="w-full h-auto"  />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-sm font-semibold text-gray-600 hover:text-[#4291CE] relative group transition-colors"
                    >
                      {link}
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
                  <a key={link} href="#" className="hover:text-[#4291CE] transition-colors">{link}</a>
                ))}
                <a href="#" className="bg-[#4291CE] text-white px-5 py-2.5 rounded text-center font-bold hover:bg-[#4291CE] transition-colors">
                  Get Free Quote
                </a>
              </div>
            )}
          </header>

          <div className="pt-16">
            {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
            <section
              className="relative overflow-hidden min-h-[500px] flex items-center"

              aria-labelledby="hero-heading"
            >
              {/* Glow blobs */}
              {/* <div className="absolute top-12 right-16 w-72 h-72 rounded-full bg-[#4291CE] opacity-10 blur-3xl pointer-events-none" /> */}
              {/* <div className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-amber-400 opacity-10 blur-3xl pointer-events-none" /> */}

              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-0 w-full py-20 lg:py-0 grid lg:grid-cols-2 gap-6 items-center z-10">
                <div>
                  <div className="flex items-center gap-3 pb-4">
                    <span className="w-8 border-t-2 border border-[#fff]"></span>
                    <p className="text-[#fff] text-[14px] uppercase tracking-widest font-medium">
                      Trusted by 500+ companies across 50+ countries
                    </p>
                  </div>
                  <h1 id="hero-heading" className="font-bold tracking-tight text-4xl sm:text-4xl lg:text-4xl text-white leading-tight mb-5 hero-animate">
                    Building Trust.<br />
                    <span className="text-[#fff]">Enabling</span> Transformation.
                  </h1>
                  <p className="text-white/60 text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                    We don't just build software - we engineer momentum. From strategy to deployment, TechSaga partners with forward-thinking businesses to turn complex challenges into scalable digital solutions that actually move the needle.
                  </p>
                  <div className="flex flex-wrap gap-4 hero-animate-3">
                    <a href="#" className="bg-[#fff] hover:bg-[#fff] text-[#4291CE] text-sm font-bold px-7 py-3 rounded transition-all hover:-translate-y-px">
                      Get Started Today
                    </a>
                    <a href="#" className="border border-white/50 text-white hover:bg-white hover:text-[#4291CE] text-sm font-bold px-7 py-3 rounded transition-all duration-200">
                      Explore Our Work
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white p-4 absolute text-center mx-auto -left-3 md:-left-15 rounded-sm sm:-bottom-6 -bottom-6 md:bottom-6">
                    <img src="assets/img/software-development-icon.png" className="mx-auto mb-2" />
                    <p className="text-[12px] font-semibold">Software Development</p>
                  </div>
                  <div className="h-full">
                    <img
                      src="/assets/img/mainimg.png"
                      alt="Team collaborating in a modern office"
                      className="object-cover w-full left-auto h-full"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>

        <section className="bg-white py-16 lg:py-20" aria-label="Why TechSaga">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="relative w-full h-90 shadow-lg">

                {/* Main Image */}
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80"
                  alt="Enterprise digital transformation team"
                  fill
                  className="object-cover"
                  unoptimized
                />

                {/* Top-left box */}
                <div className="absolute top-2 rounded-sm -left-6 bg-white text-[#4291CE] px-4 py-2  shadow-md">
                  <p className="font-semibold  text-xl text-[#4291CE] text-center">6</p>
                  <p className="text-xs text-black/80 uppercase text-center">Countries</p>
                </div>

                {/* Bottom-right small image */}
                <div className="absolute -bottom-5 -right-5 w-44 h-30 overflow-hidden border-3 border-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&q=80"
                    alt="Team working"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <SectionTag>About Techsaga</SectionTag>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                A Trusted Partner for Enterprise-Grade Digital Transformation
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Founded in 2012 and headquartered in Noida, India, Techsaga Corporation is a global digital transformation and enterpriseenablement company. We bridge strategy, technology, and execution for enterprises, governments, and institutions across North
                America, the Middle East, Europe, Australia, and India — operating with maturity, scale, and accountability.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Enterprise IT", "Digital Marketing", "Managed Services", "ERP & Cloud", "AI Solutions", "PR & Comms"].map((tag) => (
                  <span key={tag} className="bg-[#E6F3FB] text-[#1A4D78] text-xs font-medium uppercase px-3 py-1 ">{tag}</span>
                ))}
              </div>
              <p className="text-[#4291CE] block text-sm font-semibold mt-6 cursor-pointer">View Portfolio →</p>
            </FadeUp>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PLATFORM IMPLEMENTATION
        ══════════════════════════════════════════════════ */}
        <section className="bg-[#E3EFF8] py-16 lg:py-20" aria-label="Platform Implementation Services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <SectionTag>Enterprise Enablement</SectionTag>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#5A5757]">
                Platform Implementation and Managed Services
              </h2>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {SERVICES.map((svc, i) => {
                const cols = 4;

                const isLastColumn = (i + 1) % cols === 0;
                const isLastRow = i >= SERVICES.length - (SERVICES.length % cols || cols);
                const isFirstRow = i < cols;

                return (
                  <FadeUp key={svc.title} delay={i * 50}>
                    <article
                      className={`
          p-6 h-full flex flex-col transition-all duration-200 group

          ${!isLastColumn ? "border-r border-[#B3D3EC]" : ""}
          
          ${!isFirstRow ? "border-t border-[#B3D3EC]" : ""}

          hover:bg-[#fff]
        `}
                    >

                      {/* Service Badge */}
                      <div
                        className="
      uppercase text-[10px]
      text-[#4291CE] bg-[#4291CE26] border border-[#4291CE40]
      py-1 px-2 w-fit transition-colors duration-200 rounded-sm
    "
                      >
                        {svc.service}
                      </div>

                      {/* Title */}
                      <h3 className="font-bold group-hover:text-[#4291CE] text-[#211D1D] mt-3 text-sm mb-2 leading-snug">
                        {svc.title}
                      </h3>

                      {/* Description */}
                      <p className="text-black/60 text-xs leading-relaxed mb-4 flex-1">
                        {svc.desc}
                      </p>

                      <ul className="space-y-1">
                        {svc.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-xs group-hover:text-[#4291CE] text-black/50 flex items-start gap-2"
                          >
                            <span className="mt-[2px]">→</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                    </article>
                  </FadeUp>
                )
              })}
            </div>

            {/* CTA Banner */}
            <FadeUp delay={100}>
              <div className="mt-10 bg-[#fff] border-2 border-[#4291CE] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 p-6 lg:p-8">
                <p className="text-black font-medium text-base max-w-3xl">
                  <span className="text-[#4291CE] font-semibold">Need a custom enterprise solution?</span> Our certified architects scope, design, and deliver implementations aligned to your business outcomes.
                </p>
                <a
                  href="#"
                  className="border-2 border-white bg-[#4291CE] text-white hover:bg-white hover:text-[#4291CE] text-sm font-bold px-7 py-3 rounded transition-all duration-200 whitespace-nowrap flex-shrink-0 rounded-4xl"
                >
                  Talk to an Enterprise Architect →
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PRODUCT ENGINEERING
        ══════════════════════════════════════════════════ */}
        <section
          className="py-16 lg:py-20"
          style={{ background: "linear-gradient(162deg, rgb(255 255 255 / 90%) 40%, rgba(227, 239, 248, 0.9) 60%)" }}

          aria-label="Product Engineering & Marketing"
        >
          <div className="max-w-7xl rounded-xl overflow-hidden mx-auto px-0 sm:px-0 lg:px-0">
            <FadeUp className="text-center mb-12">
              <SectionTag>Digital Services</SectionTag>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#383535]">
                Product Engineering, Marketing and Technology Solutions
              </h2>
              {/* <a href="#" className="text-blue-400 text-sm font-semibold mt-2 inline-block hover:underline">All Products →</a> */}
            </FadeUp>

            <div className="grid lg:grid-cols-2 rounded-t-xl overflow-hidden  gap-0 items-start">
              {/* Featured */}
              <FadeUp>
                <article
                  className="relative h-[353px] overflow-hidden bg-cover bg-center flex items-end"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80')",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60"></div>

                  {/* Content */}
                  <div className="relative z-10 p-6 text-white">
                    <p className="text-xs tracking-widest text-[#4291CE] mb-2">
                      01 — CORE SERVICE
                    </p>

                    <h3 className="text-2xl font-semibold mb-2">
                      Digital Marketing Management
                    </h3>

                    <p className="text-sm text-gray-300 mb-4 max-w-lg">
                      Full-funnel digital marketing from SEO to paid media, social, content,
                      and marketplace audience growth and revenue outcomes
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "SEO / SEM",
                        "Social Media",
                        "Content Marketing",
                        "Marketplace",
                        "Email & Whatsapp",
                      ].map((t) => (
                        <span
                          key={t}
                          className="border border-gray-400 text-xs px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeUp>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 gap-0">
                {PRODUCTS.map((p, i) => (
                  <FadeUp key={p.title} delay={i * 60}>
                    <article className="bg-[#fff] h-full p-5 hover:-translate-y-1 transition-all duration-200 shadow-sm">
                      <div className="rounded-lg text-[#4291CE] flex items-center justify-start text-xs">
                        {/* {p.icon} */}
                        0{i + 2}
                      </div>
                      <h3 className="font-bold text-black text-sm mb-2">{p.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-3">{p.desc}</p>
                      <div className="flex flex-wrap gap-1 text-xs text-gray-500">
                        {p.tags.map((t, ti) => (
                          <span className="bg-[#E6F3FB] text-[#1A4D78] text-[10px] font-medium uppercase px-2 py-1 rounded-sm " key={t}>{ti > 0 && ""}{t}</span>
                        ))}
                      </div>
                    </article>
                  </FadeUp>
                ))}
              </div>

            </div>
            <div className="grid lg:grid-cols-1 gap-0 items-start">
              <div className="grid sm:grid-cols-4 gap-0">
                {PRODUCTST.map((p, i) => (
                  <FadeUp key={p.title} delay={i * 60}>
                    <article className="bg-[#fff] h-full p-5 hover:-translate-y-1 transition-all duration-200 shadow-sm">
                      <div className="rounded-lg text-[#4291CE] flex items-center justify-start text-xs">
                        {/* {p.icon} */}
                        0{i + 6}
                      </div>
                      <h3 className="font-bold text-black text-sm mb-2">{p.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-3">{p.desc}</p>
                      <div className="flex flex-wrap gap-1 text-xs text-gray-500">
                        {p.tags.map((t, ti) => (
                          <span className="bg-[#E6F3FB] text-[#1A4D78] text-[10px] font-medium uppercase px-2 py-1 rounded-sm" key={t}>{ti > 0 && ""}{t}</span>
                        ))}
                      </div>
                    </article>
                  </FadeUp>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            INDUSTRY EXPERTISE
        ══════════════════════════════════════════════════ */}
        <section style={{
          background: 'linear-gradient(278.7deg, rgba(126, 184, 229, 0.4) 29.46%, #E3EFF9 82.94%, rgba(248, 248, 248, 1) 91.39%)'

        }} className="bg-white py-16 lg:py-20" aria-label="Industry Expertise">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#4291CE] mb-2">
                Sectors We Serve
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-black">Industry Expertise</h2>
            </FadeUp>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80", imgtitle: "Enterprise & Government", title: "Large-Scale Digital Revolution", tags: ["Digital Governance Programs", "Smart City Initiatives", "ERP for Public Sector"] },
                { img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&q=80", imgtitle: "Media & Entertainment", title: "Excellent Generations at Scale", tags: ["OTT Platform Campaigns", "Film & Series Promotion", "News Channel Growth"] },
                { img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80", imgtitle: "E-commerce & Retail", title: "Revenue-Driven Digital Growth", tags: ["Marketplace Management", "Performance Campaigns", "Conversion Optimization"] },
                { img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80", imgtitle: "Healthcare & NGOs", title: "Purpose-Led Brand Building", tags: ["Healthcare Digital Marketing", "NGO Communications", "Community Engagement"] },
              ].map((item, i) => (
                <FadeUp key={item.title} delay={i * 70}>
                  <article className="overflow-hidden shadow-md group cursor-pointer rounded-2xl">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-400"
                        unoptimized
                      />
                      <span className="absolute bottom-2 text-white left-2 text-xs uppercase">{item.imgtitle}</span>
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                      <div className="flex-wrap gap-2 text-xs text-[#4291CE]">
                        {item.tags.map((t, ti) => (
                          <div className="mb-1" key={t}>→ {t}</div>
                        ))}
                      </div>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            LEADING CLIENTS
        ══════════════════════════════════════════════════ */}
        <section className="bg-white py-14" aria-label="Our partner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-10">
              <SectionTag>Our  partner</SectionTag>
              <h2 className="font-display text-3xl font-bold text-gray-900">Few Of Our Leading Clients</h2>
            </FadeUp>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {CLIENTS.map((c) => (
                  <div
                    key={c.name}
                    className="flex-[0_0_16.6667%] px-3 relative h-60"
                  >
                    <Image
                      src={c.logo}
                      alt={`${c.name} logo`}
                      fill
                      className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════════════════ */}
        <section style={{
          background: 'rgba(236, 242, 247, 1)',
        }} className="bg-white py-16 lg:py-20" aria-label="Partner Testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <SectionTag>Testimonials</SectionTag>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-black">What Our Partners Say</h2>
            </FadeUp>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 ">
              {TESTIMONIALS.map((t, i) => (
                <FadeUp key={t.name} delay={i * 80}>
                  <blockquote className=" p-6 border mr-3 border-gray-300 duration-200 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                      </div>
                    </div>
                    {/* <StarRating count={t.stars} /> */}
                    <div className="h-1 w-8 mb-4 block bg-[#4291CE]"></div>
                    <p className="text-black/60 text-sm leading-relaxed flex-1 mb-2">&ldquo;{t.quote}&rdquo;</p>

                    <div>
                      <div className="font-bold text-black text-sm">{t.name}</div>
                      <div className="text-xs text-black/40">{t.role}</div>
                    </div>
                  </blockquote>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            MISSION, VISION & VALUES
        ══════════════════════════════════════════════════ */}
        <section className="bg-white pt-16 lg:pt-20 mb-0" aria-label="Mission Vision Values">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <SectionTag>Who We Are</SectionTag>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">Mission, Vision & Values</h2>
            </FadeUp>
            <div className="grid lg:grid-cols-2">
              <FadeUp>
                <div className="bg-[#4291CE] text-white p-8 h-full">
                  <SectionTag>Our Mission</SectionTag>
                  <h3 className="font-display text-2xl font-bold mb-3">To Enable Confident Transformation at Global Scale</h3>
                  <p className="text-white/60 text-sm leading-relaxed">We exist to eliminate the friction between great ideas and their execution. Whether you are a fast-growing startup or a legacy enterprise, TechSaga provides the technical depth and strategic clarity to help you transform — not incrementally, but boldly.</p>
                </div>
              </FadeUp>
              <FadeUp delay={100}>
                <div className="bg-[#E6F3FB] p-8 shadow-sm h-full">
                  <SectionTag>Our Vision</SectionTag>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">A World Where Every Organisation Leads with Digital Confidence</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We envision a future where digital transformation is not a disruption, but a natural evolution-where organizations collaborate, adapt, and grow in an environment shaped by trust and technology.</p>
                </div>
              </FadeUp>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <FadeUp key={v.title} delay={i * 60}>
                  <div className="bg-white p-5 py-10 border-r border-l border-gray-100">
                    {/* <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-3 text-xl"> */}
                    {/* <Image src={`/assets/img/${v.icon}`} width={18} height={18} alt="" /> */}
                    {/* </div> */}
                    <h4 className="font-bold text-gray-900 text-xs tracking-widest mb-2 uppercase">{v.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

         {/* ══════════════════════════════════════════════════
            JOIN TEAM CTA
        ══════════════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section style={{background: 'linear-gradient(86.93deg, #D9D9D9 1.32%, #FFFFFF 50.09%, #4291CE 98.86%)'}} className="border-[#B7D2E8] border max-w-7xl mx-auto py-18 relative my-19 rounded-2xl" aria-label="Join the TechSaga Team">
          {/* <div className="absolute top-0"><Image src={'/assets/img/element.png'} width={200} height={300} /></div> */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              {/* <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">Join Our Team</p> */}
              <h2 className="font-display text-3xl lg:text-3xl font-bold text-black mb-4 leading-snug">
                Be part of what we are building and help us<br />
                <span className="uppercase">think beyond the obvious.</span>
              </h2>
              <a
                href="#"
                className="inline-block bg-[#4291CE] hover:bg-[#4291CE] text-white px-8 py-3 rounded font-bold text-sm mt-4 transition-all hover:-translate-y-px"
              >
                Explore Career Types
              </a>
            </FadeUp>
          </div>
        </section>
         </div>

        {/* ══════════════════════════════════════════════════
            BLOG
        ══════════════════════════════════════════════════ */}
        <section style={{
          background: `linear-gradient(
    45deg,
    rgba(108, 169, 217, 0.28) 8%,
    rgba(147, 192, 227, 0.7) 51%,
    rgba(180, 205, 225, 1) 74%
  )` }} className="bg-white py-16 lg:py-20" aria-label="News Articles and Blogs" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <SectionTag>Latest trends</SectionTag>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
                Explore Latest News, Articles, And Blogs
              </h2>
            </FadeUp>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-5 rounded-2xl">
              {BLOGS.map((b, i) => (
                <FadeUp key={b.title} delay={i * 80}>
                  <article className="overflow-hidden  hover:-translate-y-1 transition-all duration-200 group flex flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={b.img}
                        alt={b.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-400"
                        unoptimized
                      />
                    </div>
                    <div className="pt-2 flex flex-col flex-1">
                      {/* <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{b.tag}</span> */}
                      <h3 className="font-bold text-gray-900 text-base mt-2 mb-2 leading-snug">{b.title}</h3>
                      {/* <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{b.excerpt}</p> */}
                      {/* <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Read More →</a> */}
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
            <FadeUp className="text-center mt-10">
              <a href="#" className="inline-flex items-center gap-2 bg-[#4291CE] hover:bg-[#4291CE] text-white px-8 py-3 rounded font-semibold text-sm transition-colors">
                View All Blogs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </FadeUp>
          </div>
        </section>

       

        {/* ══════════════════════════════════════════════════
            TEAM STATS
        ══════════════════════════════════════════════════ */}
        <section className="bg-white py-16 lg:py-20" aria-label="Our Global Team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <SectionTag>People & Culture</SectionTag>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                750+ Dedicated Thinkers Worldwide
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Our global team of 750+ professionals brings together expertise across technology, strategy, and creativity. Every individual at TechSaga is empowered to think boldly and deliver brilliantly.
              </p>
              <p className="text-[#4291CE] font-semibold text-sm">Meet Our Leadership →</p>
              <div className="flex gap-8 flex-wrap">
                {/* {[["750+", "Team Members"], ["30+", "Countries"], ["12+", "Years of Excellence"]].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-blue-600 font-bold text-2xl">{num}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{label}</div>
                  </div>
                ))} */}
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="grid grid-cols-4 gap-3">
                {TEAM_IMAGES.map((src, i) => (
                  <div key={i} className="relative h-40 overflow-hidden group">

                    <Image
                      src={src}
                      alt={`TechSaga team member ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />

                    {/* Overlay Panel */}
                    <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white px-3 py-2">
                      <p className="text-sm font-semibold leading-tight">Priya S.</p>
                      <p className="text-xs text-gray-300">Strategy Lead</p>
                    </div>

                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CONTACT CTA
        ══════════════════════════════════════════════════ */}
        <section className="max-w-7xl rounded-2xl  mx-auto " style={{ background: 'linear-gradient(95.27deg, #F8F8F8 0.18%, #E3EFF8 99.82%)' }}>
          <div className="grid lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="px-6 lg:px-12 py-12 flex flex-col justify-center">
              <h2 className="text-[#4291CE] text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Ready to Transform Your <br /> Organization?
              </h2>

              <p className="text-black/80 text-sm leading-relaxed max-w-xl">
                Stop letting your potential customers find your competitors.
                Let&apos;s build enduring partnerships and resilient digital systems — together.
                Offices in 6 countries, delivery across 50+.
              </p>
            </div>

            {/* RIGHT SIDE */}
            {/* <div className="bg-blue-500 "></div> */}
            <div className="px-6 lg:px-12 py-12 flex justify-center">
              <div className="">

                <div className="flex items-center gap-4 mb-4 p-5 rounded-xl 
      bg-white/30 backdrop-blur-lg border border-white/20 shadow-md">

                  {/* Image */}
                  <div className="w-16 flex-shrink-0">
                    <img
                      src="assets/img/vec1.png"
                      alt="consultation"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <button className="text-[#4291CE] font-semibold text-sm text-left hover:underline">
                      Request a Consultation
                    </button>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      Book a quick session to discuss your needs and get personalized guidance.
                    </p>
                  </div>

                </div>
                <div className="flex items-center gap-4 p-5 mb-4 rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-md">

                  {/* Image */}
                  <div className="w-16 flex-shrink-0">
                    <img
                      src="assets/img/vec2.png"
                      alt="consultation"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <button className="text-[#4291CE] font-semibold text-sm text-left hover:underline">
                      View Our Portfolio
                    </button>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      Explore our past work to see the quality and range of projects we’ve delivered.
                    </p>
                  </div>

                </div>
                <div className="flex items-center gap-4 p-5 mb-4 rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-md">

                  {/* Image */}
                  <div className="w-16 flex-shrink-0">
                    <img
                      src="assets/img/vec3.png"
                      alt="consultation"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <button className="text-[#4291CE] font-semibold text-sm text-left hover:underline">
                      View Case Studies
                    </button>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      Dive into real examples that show our process, approach, and results.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
        <footer style={{
          background: 'linear-gradient(75.57deg, rgba(66, 145, 206, 0.76) 5.34%, rgba(66, 145, 206, 0.24) 43.05%, rgba(66, 145, 206, 0.21) 65.88%)'
        }} className=" mt-15 text-gray-400 font-sans" role="contentinfo">

          {/* Top marquee bar */}
          {/* <div className="bg-[#4291CE] text-white text-xs py-2 overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-marquee">
              Building Trust &nbsp;·&nbsp; Enabling Transformation &nbsp;·&nbsp; Leading Globally &nbsp;&nbsp;&nbsp;&nbsp;
              Building Trust &nbsp;·&nbsp; Enabling Transformation &nbsp;·&nbsp; Leading Globally &nbsp;&nbsp;&nbsp;&nbsp;
              Building Trust &nbsp;·&nbsp; Enabling Transformation &nbsp;·&nbsp; Leading Globally &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div> */}

          {/* Main footer body */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">

              {/* Left: Brand + contact */}
              <div>
                <div className="flex items-center gap-0.5 mb-2">
                  <span className="text-[#4291CE] font-black text-2xl tracking-tight">TECH</span>
                  <span className="font-black text-2xl tracking-tight text-white">SAGA</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em]  text-black/80 mb-5">Inspired for Innovation</p>
                <p className="text-sm leading-relaxed mb-6  text-black/80 max-w-[260px]">
                  Global digital transformation and enterprise enablement partner delivering outcome-driven technology, marketing, and managed services since 2012. Serving enterprises, governments, and institutions across 50+ countries.
                </p>

                {/* Contact */}
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5  text-black/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+919718688880" className="hover:text-black/60 text-black/80 transition-colors">+91 971 868 8880</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-black/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@techsaga.co.in" className="hover:text-black/60 text-black/80 transition-colors">info@techsaga.co.in</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-black/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://www.techsaga.co.in" className="hover:text-black/60 text-black/80 transition-colors">www.techsaga.co.in</a>
                  </li>
                </ul>

                {/* Social icons */}
                <div className="flex gap-2">
                  {[
                    { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                    { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                    { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a1 1 0 011 1v9a1 1 0 01-1 1h-11a1 1 0 01-1-1v-9a1 1 0 011-1z" },
                    { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="w-8 h-8 border border-black/10 rounded flex items-center justify-center hover:border-[#4291CE] hover:text-[#4291CE] text-black transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: 4-column nav grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                {/* Enterprise Services */}
                <div>
                  <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">Enterprise Services</h4>
                  <ul className="space-y-1.5 text-[13px]">
                    {[
                      "Workday Implementation", "HCM & Core HR", "Financial Management",
                      "Workday Integrations", "Post Go-Live Support", "",
                      "Salesforce Services", "Sales & Service Cloud", "Marketing Cloud",
                      "Custom Development", "",
                      "AWS Cloud Solutions", "Cloud Migration", "DevOps & CI/CD", "",
                      "SAP Implementation", "SAP S/4HANA", "SAP SuccessFactors", "",
                      "ERPNext / Frappe", "", "AI & ML Solutions", "", "Data Warehousing", "", "Multi-Cloud Strategy"
                    ].map((item, i) =>
                      item === "" ? <li key={i} className="h-2" /> : (
                        <li key={i}><a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">{item}</a></li>
                      )
                    )}
                  </ul>
                </div>

                {/* Digital Services */}
                <div>
                  <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">Digital Services</h4>
                  <ul className="space-y-1.5 text-[13px]">
                    {[
                      "Digital Marketing", "SEO & SEM", "Social Media Marketing",
                      "Content Marketing", "Email / WhatsApp", "",
                      "Advertising Services", "Paid Media Planning", "Production & Design",
                      "Online Reputation Mgmt", "",
                      "Performance Marketing", "",
                      "Sales Support & CRM", "Lead Generation", "CRO", "Marketing Automation", "",
                      "PR & Crisis Management", "",
                      "Influencer Marketing", "",
                      "Event Management", "",
                      "Training & Workshops"
                    ].map((item, i) =>
                      item === "" ? <li key={i} className="h-2" /> : (
                        <li key={i}><a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">{item}</a></li>
                      )
                    )}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">Company</h4>
                  <ul className="space-y-1.5 text-[13px]">
                    {[
                      "About Techsaga", "Mission & Vision", "Leadership Team",
                      "Our Values", "Global Presence", "Technology Partners",
                      "Agency Partners", "Certifications", "Awards & Recognition",
                      "CSR Initiatives", "Media & Press", "Brand Guidelines",
                      "Investor Relations"
                    ].map((item) => (
                      <li key={item}><a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">{item}</a></li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">Resources</h4>
                  <ul className="space-y-1.5 text-[13px]">
                    {[
                      "Case Studies", "Blog & Insights", "Whitepapers",
                      "Webinars & Events", "Agency Profile (PDF)", "Workday Deck",
                      "FAQs", "Client Portal Login", "Request a Proposal",
                      "Schedule a Demo", "Newsletter Signup", "Careers",
                      "Life at Techsaga"
                    ].map((item) => (
                      <li key={item}><a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">{item}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Office locations bar */}
          <div className="border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-[12px]">
                {[
                  { city: "Noida, India (HQ)", addr: "B-132, Sector 2, Noida UP 201301" },
                  { city: "Dubai, UAE", addr: "Bay Square, Business Bay, Bldg 7" },
                  { city: "Abu Dhabi, UAE", addr: "Office 115, Level 1, Incubator Bldg" },
                  { city: "London, UK", addr: "82 Uxbridge Road, Hanwell W7 3SU" },
                  { city: "Leander, Texas USA", addr: "2728 Steece Way, TX 78641" },
                  { city: "Victoria, Australia", addr: "106 Anniversary Ave, Wyndham Vale" },
                ].map((o) => (
                  <div key={o.city}>
                    <p className=" text-black/80 font-semibold mb-0.5">{o.city}</p>
                    <p className="text-black/60  text-[11px] leading-snug">{o.addr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partner network bar */}
          <div className="border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4">
              <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-[10px] uppercase tracking-widest text-gray-500">
                {[
                  "Google Advertising Partner", "SEMrush Agency Network",
                  "Klaviyo Agency Partner", "Salesforce Partner",
                  "Zoho CRM Partner", "AWS Partner Network",
                  "DAN Digital Agency Network", "DesignRush Agency Network",
                  "InviteReferrals Partner",
                ].map((p) => (
                  <span key={p} className="flex items-center gap-1">
                    <span className="text-[#4291CE]">•</span> {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-600">
              <p>© 2012–2025 Techsaga Corporation. All rights reserved.</p>
              <div className="flex gap-5">
                {["Privacy Policy", "Terms of Use"].map((item) => (
                  <a key={item} href="#" className="hover:text-[#4291CE] transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </div>

          <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
        </footer>
      </main >
    </div >
  );
}
