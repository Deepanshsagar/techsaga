"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import SplitTextReveal from "@/components/SplitTextReveal"
import AutoSplitText from "@/components/AutoSplitText"
import SplitContainer from "@/components/SplitContainer"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionTag } from "./utils/utils";

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
  list: string[];
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
  { icon: "🔍", title: "Enterprise Solutions", desc: "Develop scalable systems that support complex business operations.", list: [], tags: ["ERP Solutions", "CRM Solutions", "Business Application Development", "Workflow Automation"] },
  { icon: "🎧", title: "Product Development", desc: "Turn ideas into fully functional digital products.", tags: ["MVP Development", "Product Design", "Prototyping", "Product Scaling"], list: [] },
  { icon: "🎨", title: "Web & Mobile Applications", desc: "Create responsive web and mobile experiences for modern users.", tags: ["Web Application Development", "Mobile Application Development", "Cloud Application Development"], list: [] },
  { icon: "📈", title: "Cloud & Infrastructure", desc: "Set up and manage secure, flexible cloud environments.", tags: ["Cloud Infrastructure", "Hybrid Infrastructure", "On-Premises Infrastructure", "Cloud Migration"], list: [] },
];

const PRODUCTST: ProductCard[] = [
  { icon: "🎥", title: "System Integration", desc: "Connect platforms and tools for smooth data flow and operations", tags: ["System Integration", "API Development & Integration", "Third-Party Integration"], list: [] },
  { icon: "📣", title: "DevOps & Automation", desc: "Improve speed, efficiency, and reliability in development cycles", tags: ["DevOps Services", "CI/CD Implementation", "Deployment Automation"], list: [] },
  { icon: "📣", title: "Testing & Quality Assurance", desc: "Ensure performance, security, and seamless user experience.", tags: ["Application Support", "Infrastructure Support", "Customer Support"], list: [] },
  { icon: "📣", title: "Support & Managed Services", desc: "Maintain, monitor, and optimize systems for long-term success.", tags: ["Application Support", "Infrastructure Support", "Customer Support"], list: [] },
];

const TESTIMONIALS: Testimonial[] = [
  { name: "Sara Timothy", role: "VP, Digital Transformation", avatar: "https://randomuser.me/api/portraits/women/44.jpg", stars: 5, quote: "TechSaga completely transformed our Salesforce environment. Their deep expertise and commitment to outcomes was unparalleled. We saw a 40% jump in team efficiency." },
  { name: "Greg Phillips", role: "CTO, ScaleUp Technologies", avatar: "https://randomuser.me/api/portraits/men/32.jpg", stars: 5, quote: "From cloud migration to analytics, TechSaga handled every phase with precision. Their project management and communication standards are the best we've experienced." },
  { name: "Laura Hoffman", role: "Director, Global Operations", avatar: "https://randomuser.me/api/portraits/women/68.jpg", stars: 5, quote: "Working with TechSaga felt like having an internal team that genuinely cared about outcomes. Their digital marketing campaigns drove a 3x increase in qualified leads." },
  { name: "Greg Phillipss", role: "CTO, ScaleUp Technologies", avatar: "https://randomuser.me/api/portraits/men/32.jpg", stars: 5, quote: "From cloud migration to analytics, TechSaga handled every phase with precision. Their project management and communication standards are the best we've experienced." },
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
  { name: "aakar", logo: "/assets/img/logo/aakar.png" },
  { name: "al-jash-trading", logo: "/assets/img/logo/al-jash-trading.png" },
  { name: "austin-community", logo: "/assets/img/logo/austin-community.png" },
  { name: "b-online", logo: "/assets/img/logo/b-online.png" },
  { name: "career abroad", logo: "/assets/img/logo/career-abroad.png" },
  { name: "cc avenue", logo: "/assets/img/logo/cc-avenue.png" },
  { name: "docum care", logo: "/assets/img/logo/docum-care.png" },
  { name: "dsm", logo: "/assets/img/logo/dsm.png" },
  { name: "ecadema", logo: "/assets/img/logo/ecadema.png" },
  { name: "forever", logo: "/assets/img/logo/forever.png" },
  { name: "formdox", logo: "/assets/img/logo/formdox.png" },
  { name: "fortinet", logo: "/assets/img/logo/fortinet.png" },
  { name: "greecepropertiesgate", logo: "/assets/img/logo/greecepropertiesgate.png" },
  { name: "iitr", logo: "/assets/img/logo/iitr.png" },
  { name: "indian-exhibition", logo: "/assets/img/logo/indian-exhibition.png" },
  { name: "ipsa", logo: "/assets/img/logo/ipsa.png" },
  { name: "khanna-jewellers", logo: "/assets/img/logo/khanna-jewellers.png" },
  { name: "kpmg", logo: "/assets/img/logo/kpmg.png" },
  { name: "kwabey", logo: "/assets/img/logo/kwabey.png" },
  { name: "mdra", logo: "/assets/img/logo/mdra.png" },
  { name: "novartis", logo: "/assets/img/logo/novartis.png" },
  { name: "peak8", logo: "/assets/img/logo/peak8.png" },
  { name: "premier-consultancy", logo: "/assets/img/logo/premier-consultancy.png" },
  { name: "star-behavioral", logo: "/assets/img/logo/star-behavioral.png" },
  { name: "taj-bank", logo: "/assets/img/logo/taj-bank.png" },
  { name: "uba", logo: "/assets/img/logo/uba.png" },
  { name: "viseart", logo: "/assets/img/logo/viseart.png" },
  { name: "bakeeeeery-hill-dental", logo: "/assets/img/logo/bakeeeeery-hill-dental.png" },
  { name: "bbc", logo: "/assets/img/logo/bbc.png" },
  { name: "bcd", logo: "/assets/img/logo/bcd.png" },
  { name: "blue-shift", logo: "/assets/img/logo/blue-shift.png" },
  { name: "doxrix", logo: "/assets/img/logo/doxrix.png" },
  { name: "dss-roofing", logo: "/assets/img/logo/dss-roofing.png" },
  { name: "edtia", logo: "/assets/img/logo/edtia.png" },
  { name: "exordior", logo: "/assets/img/logo/exordior.png" },
  { name: "fact", logo: "/assets/img/logo/fact.png" },
  { name: "farm-source", logo: "/assets/img/logo/farm-source.png" },
  { name: "intercambio", logo: "/assets/img/logo/intercambio.png" },
  { name: "manifestvision", logo: "/assets/img/logo/manifestvision.png" },
  { name: "meilleur-events", logo: "/assets/img/logo/meilleur-events.png" },
  { name: "panels", logo: "/assets/img/logo/panels.png" },
  { name: "pma-india", logo: "/assets/img/logo/pma-india.png" },
  { name: "protiviti", logo: "/assets/img/logo/protiviti.png" },
  { name: "rug-mart", logo: "/assets/img/logo/rug-mart.png" },
  { name: "the-mt-kenya", logo: "/assets/img/logo/the-mt-kenya.png" },
  { name: "tsh", logo: "/assets/img/logo/tsh.png" },
  { name: "url", logo: "/assets/img/logo/url.png" },
  { name: "zuhd", logo: "/assets/img/logo/zuhd.png" },
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

  const firstRow = CLIENTS.slice(0, Math.ceil(CLIENTS.length / 2));
  const secondRow = CLIENTS.slice(Math.ceil(CLIENTS.length / 2));

  const triggerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true, align: "start" });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true, align: "start" });
  const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi1 || !emblaApi2 || !emblaApi3) return;

    const i1 = setInterval(() => emblaApi1.scrollNext(), 2000);
    const i2 = setInterval(() => emblaApi2.scrollNext(), 2000); // reverse
    const i3 = setInterval(() => emblaApi3.scrollNext(), 2000); // reverse

    return () => {
      clearInterval(i1);
      clearInterval(i2);
      clearInterval(i3);
    };
  }, [emblaApi1, emblaApi2, emblaApi3]);

  return (
    <div className="font-[Manrope,sans-serif] text-gray-800 bg-white antialiased">

      <main >
        <div style={{
          background: 'linear-gradient(358.62deg, #7EB8E5 19.22%, #4291CE 72.93%)'

        }}>


          <Header />
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

              <SectionTag className="">About Techsaga</SectionTag>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                A Trusted Partner for Enterprise-Grade Digital Transformation
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Founded in 2012 and headquartered in Noida, India, Techsaga Corporation is a global digital transformation and enterpriseenablement company. We bridge strategy, technology, and execution for enterprises, governments, and institutions across North
                America, the Middle East, Europe, Australia, and India — operating with maturity, scale, and accountability.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Enterprise IT", "Digital Marketing", "Managed Services", "ERP & Cloud", "AI Solutions", "PR & Comms"].map((tag) => (
                  <span key={tag} className="bg-[#E6F3FB] text-[#1A4D78] text-xs font-medium uppercase px-3 py-1 rounded">{tag}</span>
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
              <SplitContainer className="">
                <SectionTag>Enterprise Enablement</SectionTag>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#5A5757]">
                  Platform Implementation and Managed Services
                </h2>
              </SplitContainer>
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
      py-1 px-2 w-fit transition-colors duration-200 rounded-sm tracking-widest font-bold
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
                  className="border-2 border-white bg-[#4291CE] text-white hover:bg-white hover:text-[#4291CE] text-sm font-bold px-7 py-3 rounded transition-all duration-200 whitespace-nowrap flex-shrink-0 rounded-md"
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
          id="my-custom-trigger"
          style={{ background: "linear-gradient(162deg, rgb(255 255 255 / 90%) 40%, rgba(227, 239, 248, 0.9) 60%)" }}

          aria-label="Product Engineering & Marketing"
        >
          <div ref={triggerRef} className="max-w-7xl rounded-xl overflow-hidden mx-auto px-0 sm:px-0 lg:px-0">
            <FadeUp className="text-center mb-12">

              {/* <SplitTextReveal
                text="Product Engineering, Marketing and Technology Solutions"
                type="words"
                stagger={1}
                duration={0.9}
                className="font-display text-3xl lg:text-4xl font-bold text-[#383535]"
              /> */}
              <SplitContainer>
                <SectionTag>Digital Services</SectionTag>
              </SplitContainer>
              <SplitContainer
                className="font-display text-3xl lg:text-4xl font-bold text-[#383535]"
              // triggerElement={triggerRef}
              >
                Product Engineering, Marketing and Technology Solutions
              </SplitContainer>
              {/* <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#383535]">
                Product Engineering, Marketing and Technology Solutions
              </h2> */}
              {/* <a href="#" className="text-blue-400 text-sm font-semibold mt-2 inline-block hover:underline">All Products →</a> */}
            </FadeUp>

            <div className="grid lg:grid-cols-2 rounded-t-xl overflow-hidden  gap-0 items-start">
              {/* Featured */}
              <FadeUp>
                <article
                  className="relative h-111 overflow-hidden bg-cover bg-center flex items-end"
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
                      Custom Software Development
                    </h3>

                    <p className="text-sm text-white/80 mb-4 max-w-lg">
                      Build tailored applications designed around your business needs.
                    </p>
                    {/* <ul className="flex text-[12px] mb-3 text-white/50 flex-wrap">
                      <li className="basis-[50%]"><span className="bg-[#4291CE] rounded-full w-2 h-2 inline-block mr-1.5" />Custom Software Development</li>
                      <li className="basis-[50%]"><span className="bg-[#4291CE] rounded-full w-2 h-2 inline-block mr-1.5" />Enterprise Software Development</li>
                      <li className="basis-[50%]"><span className="bg-[#4291CE] rounded-full w-2 h-2 inline-block mr-1.5" />Product Development</li>
                    </ul> */}

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
                          className="border text-white/80 border-gray-400 text-xs px-2 py-1 rounded"
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
                      <ul className="flex text-[10px] mb-3 text-black/50 flex-wrap">
                        {p.list.map((t, ti) => (
                          <li className="basis-[50%]"><span className="bg-[#4291CE] rounded-full w-1.5 h-1.5 inline-block mr-1.5" key={t} />{t}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        {p.tags.map((t, ti) => (
                          <span className="bg-[#E6F3FB] text-[#1A4D78] text-[9px] font-medium uppercase px-2 py-1 rounded-sm " key={t}>{ti > 0 && ""}{t}</span>
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
                      <ul className="flex text-[10px] mb-3 text-black/50 flex-wrap">
                        {p.list.map((t, ti) => (
                          <li className="basis-[50%]"><span className="bg-[#4291CE] rounded-full w-1.5 h-1.5 inline-block mr-1.5" key={t} />{t}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        {p.tags.map((t, ti) => (
                          <span className="bg-[#E6F3FB] text-[#1A4D78] text-[9px] font-medium uppercase px-2 py-1 rounded-sm" key={t}>{ti > 0 && ""}{t}</span>
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
              <SplitContainer>
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#4291CE] mb-2">
                  Sectors We Serve
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-black">Industry Expertise</h2>
              </SplitContainer>
            </FadeUp>
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-xl overflow-hidden">

                {[
                  {
                    img: "/assets/img/industry-1.png",
                    icon: "/assets/img/in-icon-2.png",
                    title: "Healthcare",
                    desc: "We build secure, compliant healthcare systems that improve patient care and streamline operations."
                  },
                  {
                    img: "/assets/img/industry-3.png",
                    icon: "/assets/img/in-icon-4.png",
                    title: "Education & E-learning",
                    desc: "We enable institutions to deliver engaging and accessible learning platforms."
                  },
                  {
                    img: "/assets/img/industry-2.png",
                    icon: "/assets/img/in-icon-1.png",
                    title: "E-commerce Solutions",
                    desc: "We develop scalable platforms that enhance user experience and simplify selling."
                  },
                  {
                    img: "/assets/img/industry-4.png",
                    icon: "/assets/img/in-icon-3.png",
                    title: "Banking & Finance",
                    desc: "Secure, high-performance systems for digital banking and transactions."
                  }
                ].map((item, i) => (

                  <div key={i} className="relative group h-72 overflow-hidden">

                    {/* Image */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">

                      <img src={item.icon} className="mb-4 w-12 h-12" />

                      <h3 className="text-white text-lg font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-200 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 delay-100">
                        {item.desc}
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            </div>
            {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80", imgtitle: "Enterprise & Government", title: "Healthcare", tags: ["Healthcare management systems", "Patient portals and mobile apps", "Data security and compliance solutions"] },
                { img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&q=80", imgtitle: "Media & Entertainment", title: "Education & E-learning", tags: ["Learning Management Systems (LMS)", "E-learning and training platforms", "Student and course management systems"] },
                { img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80", imgtitle: "E-commerce & Retail", title: "E-commerce Solutions", tags: ["Custom e-commerce platform development", "Payment gateway integration", "Order and inventory management systems"] },
                { img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80", imgtitle: "Healthcare & NGOs", title: "Banking & Finance", tags: ["Digital banking applications", "Secure payment and transaction systems", "Financial data management solutions"] },
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
            </div> */}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            LEADING CLIENTS
        ══════════════════════════════════════════════════ */}
        <section className="bg-white py-14" aria-label="Our partner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-10">
              <SplitContainer>
                <SectionTag>Our partner</SectionTag>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">Few Of Our Leading Clients</h2>
              </SplitContainer>
            </FadeUp>
            {/* Row 1 */}
            <div className="overflow-hidden" ref={emblaRef1}>
              <div className="flex">
                {firstRow.map((c) => (
                  <div key={c.name} className="flex-[0_0_16.6667%] px-3 h-32 relative">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="overflow-hidden mt-6" ref={emblaRef2}>
              <div className="flex">
                {secondRow.map((c) => (
                  <div key={c.name} className="flex-[0_0_16.6667%] px-3 h-32 relative">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition"
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
              <SplitContainer>
                <SectionTag>Testimonials</SectionTag>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-black">What Our Partners Say</h2>
              </SplitContainer>
            </FadeUp>
            <div className="overflow-hidden" ref={emblaRef3}>
              <div className="flex">
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={t.name}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
                  >
                    <FadeUp delay={i * 80}>
                      <blockquote className="p-6 border border-gray-300 rounded-xl duration-200 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={t.avatar}
                              alt={t.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        </div>

                        <div className="h-1 w-8 mb-4 bg-[#4291CE]" />

                        <p className="text-black/60 text-sm leading-relaxed flex-1 mb-2">
                          &ldquo;{t.quote}&rdquo;
                        </p>

                        <div>
                          <div className="font-bold text-black text-sm">{t.name}</div>
                          <div className="text-xs text-black/40">{t.role}</div>
                        </div>
                      </blockquote>
                    </FadeUp>
                  </div>
                ))}
              </div>
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
            <div className="grid lg:grid-cols-2 rounded-t-xl overflow-hidden">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <section style={{ background: 'linear-gradient(86.93deg, #D9D9D9 1.32%, #FFFFFF 50.09%, #4291CE 98.86%)' }} className="border-[#B7D2E8] border max-w-7xl mx-auto py-15 relative mb-19 rounded-2xl" aria-label="Join the TechSaga Team">
            {/* <div className="absolute top-0"><Image src={'/assets/img/element.png'} width={200} height={300} /></div> */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <FadeUp>
                {/* <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">Join Our Team</p> */}
                <h2 className="font-display text-xl lg:text-xl font-extrabold text-black mb-4 leading-snug">
                  Be part of what we are building and help us<br />
                  <span className="uppercase">think beyond the obvious.</span>
                </h2>
                <a
                  href="#"
                  // className="inline-block border-1 border-white/60 bg-transparent  rounded-md bg-white/5 shadow-[inset_-1px_-1px_2px_2px_#ffffff,inset_1px_1px_2px_1px_#dfdfdfbd] text-[#4291CE] px-50 py-3 font-bold text-[15px] mt-4 transition-all "
                  className="inline-block bg-white/5 px-50 py-3 rounded-md shadow-[inset_-1px_-1px_2px_1px_#ffffff,inset_1px_1px_2px_1px_#dfdfdfbd] border-1 border-white/50 "
                >
                  Explore Career Page
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
              <SplitContainer>
                <SectionTag>Latest trends</SectionTag>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
                  Explore Latest News, Articles, And Blogs
                </h2>
              </SplitContainer>
            </FadeUp>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 rounded-2xl">
              {BLOGS.map((b, i) => (
                <FadeUp key={b.title} delay={i * 80}>
                  <article className="overflow-hidden rounded hover:-translate-y-1 transition-all duration-200 group flex flex-col">
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
                Ready to Move from
                Ideas to Execution?
              </h2>

              <p className="text-black/80 text-sm leading-relaxed max-w-xl">
                Build scalable digital solutions with a team that understands your business, simplifies complexity, and delivers with consistency. Trusted globally, with offices in 6 countries and delivery across 50+.
              </p>
            </div>

            {/* RIGHT SIDE */}
            {/* <div className="bg-blue-500 "></div> */}
            <div className="px-6 lg:px-12 py-12 flex justify-center">
              <div className="">

                <div className="flex items-center gap-4 p-5 mb-4 rounded-xl bg-white/30 shadow-[inset_-2px_-2px_5px_2px_#ffffff,inset_2px_2px_4px_2px_#dfdfdfbd] border-2 border-white">

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
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#4291CE" className="w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                </div>
                <div className="flex items-center gap-4 p-5 mb-4 rounded-xl bg-white/30 shadow-[inset_-2px_-2px_5px_2px_#ffffff,inset_2px_2px_4px_2px_#dfdfdfbd] border-2 border-white">

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
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#4291CE" className="w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                </div>
                <div className="flex items-center gap-4 p-5 mb-4 rounded-xl bg-white/30 shadow-[inset_-2px_-2px_5px_2px_#ffffff,inset_2px_2px_4px_2px_#dfdfdfbd] border-2 border-white">

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
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#4291CE" className="w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
        <Footer />
      </main >
    </div >
  );
}
