"use client";

import { memo, useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

/* -------------------------------------------------------------------------- */
/*                                    TYPES                                   */
/* -------------------------------------------------------------------------- */

type ServiceCategory =
  | "all"
  | "software"
  | "web"
  | "qa"
  | "cloud"
  | "str";

interface TabItem {
  id: ServiceCategory;
  label: string;
}

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  img: string;
  link?: string;
}

interface TimelineItem {
  id: string;
  title: string;
  desc: string;
}

/* -------------------------------------------------------------------------- */
/*                                     DATA                                   */
/* -------------------------------------------------------------------------- */

const tabs: TabItem[] = [
  { id: "all", label: "All Services" },
  { id: "software", label: "Software & Product Development" },
  { id: "web", label: "IT Infrastructure & Cloud Services" },
  { id: "qa", label: "Testing & QA" },
  { id: "cloud", label: "Digital Marketing & Growth" },
  { id: "str", label: "Strategy & Managed Support" },
];

const softwareServices: ServiceItem[] = [
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    desc: "Stuck with tools that don't fit? We build software tailored to your workflow.",
    img: "/assets/img/service-icon/custom-software-development.png",
    link: "/services/custom-software-development",
  },
  {
    id: "enterprise-software-development",
    title: "Enterprise Software Development",
    desc: "System crashing under heavy loads? We build robust platforms that scale with ease.",
    img: "/assets/img/service-icon/enterprise-software-development.png",
    link: "/services/enterprise-software-development",
  },
  {
    id: "product-development",
    title: "Product Development",
    desc: "Have a vision but no team? We transform your ideas into market-ready products.",
    img: "/assets/img/service-icon/product-development.png",
    link: "/services/product-development",
  },
  {
    id: "mobile-application-development",
    title: "Mobile Application Development",
    desc: "Missing out on mobile users? We build seamless apps for iOS and Android.",
    img: "/assets/img/service-icon/mobile-application-development.png",
    link: "/services/mobile-application-development",
  },
  {
    id: "web-design-development",
    title: "Web Design and Development",
    desc: "Website losing potential customers? We create high-converting sites users love.",
    img: "/assets/img/service-icon/web-design-and-development.png",
    link: "/services/web-application-development",
  },
  {
    id: "cloud-application-development",
    title: "Cloud Application Development",
    desc: "Restricted by local servers? We develop secure cloud-native apps.",
    img: "/assets/img/service-icon/cloud-application-development.png",
    link: "/services/cloud-application-development",
  },
];

const infrastructureServices: ServiceItem[] = [
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    desc: "Overpaying for hardware? We optimize your business with affordable cloud storage.",
    img: "/assets/img/service-icon/cloud-infrastructure.png",
    link: "/services/cloud-infrastructure",
  },
  {
    id: "hybrid-infrastructure",
    title: "Hybrid Infrastructure",
    desc: "Need both speed and security? We blend private and public clouds for agility.",
    img: "/assets/img/service-icon/hybrid-infrastructure.png",
    link: "/services/hybrid-infrastructure",
  },
  {
    id: "on-premise-infrastructure",
    title: "On-Premise Infrastructure",
    desc: "Worried about data privacy? We manage your local hardware for complete internal control.",
    img: "/assets/img/service-icon/on-premise-infrastructure.png",
    link: "/services/on-premises-infrastructure",
  },
  {
    id: "migration-services",
    title: "Migration Services",
    desc: "Scared of losing data during moves? We ensure a seamless transition to modern systems.",
    img: "/assets/img/service-icon/migration-services.png",
    link: "/services/migration",
  },
  {
    id: "integration-services",
    title: "Integration Services",
    desc: "Frustrated by disconnected apps? We link your tools to create one unified ecosystem.",
    img: "/assets/img/service-icon/integration-services.png",
    link: "/services/integration",
  },
  {
    id: "devops-services",
    title: "DevOps Services",
    desc: "DevOps solutions that improve collaboration, automation, and faster software delivery cycles.",
    img: "/assets/img/service-icon/devops-services.png",
    link: "/services/devops",
  },
];

const qaServices: ServiceItem[] = [
  {
    id: "manual-testing",
    title: "Manual Testing",
    desc: "Worried about hidden glitches? Our experts test your software to ensure total reliability.",
    img: "/assets/img/service-icon/manual-testing.png",
    link: "/services/manual-testing",
  },
  {
    id: "automation-testing",
    title: "Automation Testing",
    desc: "Software releases taking too long? We use automated scripts to speed up verification.",
    img: "/assets/img/service-icon/automation-testing.png",
    link: "/services/automation-testing",
  },
  {
    id: "continuous-testing",
    title: "Continuous Testing",
    desc: "Bugs reaching your customers? We integrate quality checks throughout your entire development cycle.",
    img: "/assets/img/service-icon/continuous-testing.png",
    link: "/services/continuous-testing",
  },
];

const marketingServices: ServiceItem[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "Brand invisible in search results? We deploy strategies that put you in front.",
    img: "/assets/img/service-icon/digital-marketing.png",
    link: "/services/marketing/digital-marketing",
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    desc: "Struggling to build trust? We connect you with voices your audience already follows.",
    img: "/assets/img/service-icon/influencer-marketing.png",
    link: "/services/marketing/influential-marketing",
  },
  {
    id: "online-reputation-management",
    title: "Online Reputation Management",
    desc: "Seeing negative feedback online? We protect and enhance your brand’s digital image.",
    img: "/assets/img/service-icon/online-reputation-management.png",
    link: "/services/marketing/online-reputation-management",
  },
  {
    id: "improved-roi",
    title: "Improved ROI",
    desc: "Marketing budget going to waste? We focus on data-driven growth to maximize returns.",
    img: "/assets/img/service-icon/improved-roi.png",
    link: "/services/marketing/improved-roi",
  },
  {
    id: "digital-consultation",
    title: "Digital Consultation",
    desc: "Expert digital consulting services to guide ...",
    img: "/assets/img/service-icon/digital-consultation.png",
    link: "/services/marketing/digital-consultation",
  },
];

const strategyServices: ServiceItem[] = [
  {
    id: "business-technology-consulting",
    title: "Business Technology Consulting",
    desc: "Confused by tech options? We provide expert guidance to align technology with goals.",
    img: "/assets/img/service-icon/business-technology-consulting.png",
    link: "/services/business-technology-consulting",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    desc: "Stuck using outdated processes? We modernize your business for a faster, digital-first future.",
    img: "/assets/img/service-icon/digital-transformation.png",
    link: "/services/digital-transformation",
  },
  {
    id: "digital-advisory-and-consultation",
    title: "Digital Advisory and Consultation",
    desc: "Lacking a clear tech roadmap? We provide strategic insights to navigate modern challenges.",
    img: "/assets/img/service-icon/digital-advisory-and-consultation.png",
    link: "/services/business-technology-consulting",
  },
  {
    id: "application-support",
    title: "Application Support and Management",
    desc: "Software updates causing headaches? We handle maintenance so you can focus on work.",
    img: "/assets/img/service-icon/application-support-and-management.png",
    link: "/services/application-support",
  },
  {
    id: "customer-support",
    title: "Customer Support",
    desc: "Losing users to slow responses? We provide the fast, helpful support your customers deserve.",
    img: "/assets/img/service-icon/customer-support.png",
    link: "/services/customer-support",
  },
];

const servicesData: Record<ServiceCategory, ServiceItem[]> = {
  all: [
    ...softwareServices,
    ...infrastructureServices,
    ...qaServices,
    ...marketingServices,
    ...strategyServices,
  ],
  software: softwareServices,
  web: infrastructureServices,
  qa: qaServices,
  cloud: marketingServices,
  str: strategyServices,
};

const timelineData: TimelineItem[] = [
  {
    id: "01",
    title: "Engineering Clarity via Discovery",
    desc: "We decode business requirements to identify optimal customized solutions.",
  },
  {
    id: "02",
    title: "Precision Through Planning",
    desc: "Detailed roadmaps keep your vision on time and within budget.",
  },
  {
    id: "03",
    title: "Engagement Through Intuitive Design",
    desc: "We craft engaging user experiences that drive growth.",
  },
  {
    id: "04",
    title: "Performance via High-Tech Development",
    desc: "Modern technologies ensure scalable future-proof systems.",
  },
  {
    id: "05",
    title: "Market-Ready Reliability",
    desc: "Rigorous testing guarantees reliable deployments.",
  },
  {
    id: "06",
    title: "Durable Success via Support",
    desc: "Continuous support keeps your systems running smoothly.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                SERVICE CARD                                */
/* -------------------------------------------------------------------------- */

const ServiceCard = memo(
  ({ service }: { service: ServiceItem }) => {
    return (
      <article className="relative bg-white border border-[#4291CE] border-l-[9px] border-l-[#4291CE] rounded-2xl p-8 pl-14 shadow-md hover:shadow-2xl transition-all duration-300">
        <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[#4291CE] bg-white flex items-center justify-center">
          <Image
            src={service.img}
            alt={service.title}
            width={45}
            height={45}
            loading="lazy"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-between min-h-[230px]">
          <div>
            <h2 className="text-[22px] font-bold mb-3 text-[#111827]">
              {service.title}
            </h2>

            <p className="text-md text-gray-600 leading-7 mb-6">
              {service.desc}
            </p>
          </div>

          {service.link && (
            <Link
              href={service.link}
              className="inline-block w-fit bg-[#4291CE] hover:bg-[#2f79b2] transition-all duration-300 text-white px-5 py-3 rounded-md text-sm font-semibold"
            >
              Learn More →
            </Link>
          )}
        </div>
      </article>
    );
  }
);

ServiceCard.displayName = "ServiceCard";


export default function ServicePage() {
  const [activeTab, setActiveTab] =
    useState<ServiceCategory>("all");

  const handleTabChange = useCallback(
    (id: ServiceCategory) => {
      setActiveTab(id);
    },
    []
  );

  const filteredServices = useMemo(() => {
    return servicesData[activeTab];
  }, [activeTab]);

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden">
        <Image
          src="/assets/img/solutions-page/WORKDAY.png"
          alt="Services Hero"
          fill
          priority
          className="object-cover"
        />

        {/* <div className="absolute inset-0 bg-black/40" /> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              A Unified Ecosystem For Engineering, Cloud, And
              Business Growth.
            </h1>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 w-full my-16">
        {/* TABS */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-14"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-pressed={activeTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-6 py-2.5 rounded-full border-2 text-sm font-semibold transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-[#4291CE] text-white border-[#4291CE]"
                    : "bg-white text-[#4291CE] border-[#4291CE] hover:bg-[#4291CE] hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-4 bg-[linear-gradient(135deg,#a7c4dd_0%,#8db4d4_45%,#b7d0e5_100%)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div className="pt-6">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              Can Technical Strategy Be
              <span className="block text-white/95">
                Both Agile and Predictable?
              </span>
            </h2>

            <p className="text-sm md:text-[15px] text-white/80 leading-8 max-w-md">
              Agile is at the heart of our software development
              process.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-[3px] bg-white/60"></div>

            <div className="flex flex-col gap-14 relative z-10">
              {timelineData.map((item) => (
                <div key={item.id} className="flex gap-8">
                  <div className="relative shrink-0 flex">
                    <div className="w-14 h-14 rounded-full bg-white border-4 border-white flex items-center justify-center text-[#4d94cb] text-xl font-black shadow-lg z-10">
                      {item.id}
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-2xl font-extrabold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-7 max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="max-w-4xl rounded-2xl py-14 px-6 mx-auto text-center bg-[linear-gradient(94.86deg,#F8F8F8_0.48%,#E3EFF8_100%)]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your Next Great Project Starts With One
            Conversation
          </h2>

          <p className="text-sm text-gray-500 mb-10 max-w-xl mx-auto">
            Thousands of businesses. 50+ countries. 13+ years of
            experience.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-[#4291CE] hover:bg-[#2f79b2] transition-all duration-300 text-white font-semibold px-7 py-3 rounded-md text-sm"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

