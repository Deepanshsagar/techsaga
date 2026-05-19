"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  { id: "all", label: "All Services" },
  { id: "software", label: "Software & Product Development" },
  { id: "web", label: "IT Infrastructure & Cloud Services" },
  { id: "qa", label: "Testing & QA (Quality Assurance)" },
  { id: "cloud", label: "Digital Marketing & Growth" },
  { id: "str", label: "Strategy & Managed Support" },
];

const servicesData: any = {
  // all: [
  //   {
  //     title: "Custom Software Development",
  //     desc: "Stuck with tools that don't fit? We build software tailored to your workflow.",
  //     img: "/assets/img/service-icon/s11.png",
  //   },
  //   {
  //     title: "Cloud Infrastructure",
  //     desc: "Overpaying for hardware? We optimize your business with affordable cloud storage.",
  //     img: "/assets/img/service-icon/s12.png",
  //   },
  //    {
  //     title: "Devops Services",
  //     desc: "DevOps solutions that improve collaboration, automation, and faster software delivery cycles.",
  //     img: "/assets/img/service-icon/s12.png",
  //     link: "/services/devops",
  //   },
  //   {
  //     title: "Automation Testing",
  //     desc: "Software releases taking too long? We use automation to speed up verification.",
  //     img: "/assets/img/service-icon/s13.png",
  //   },
  //   {
  //     title: "Enterprise Software Development",
  //     desc: "System crashing under heavy loads? We build robust platforms that scale with ease.",
  //     img: "/assets/img/service-icon/s12.png",
  //   },
  //   {
  //     title: "Product Development",
  //     desc: "Have a vision but no team? We transform your ideas into market-ready products.",
  //     img: "/assets/img/service-icon/s13.png",
  //   },
  //   {
  //     title: "Mobile Application Development",
  //     desc: "Missing out on mobile users? We build seamless apps for iOS and Android.",
  //     img: "/assets/img/service-icon/s13.png",
  //   },
  //   {
  //     title: "Web Design and Development",
  //     desc: "Website losing potential customers? We create high-converting sites users love.",
  //     img: "/assets/img/service-icon/s13.png",
  //   },
  //   {
  //     title: "Cloud Application Development",
  //     desc: "Restricted by local servers? We develop secure cloud-native apps.",
  //     img: "/assets/img/service-icon/s13.png",
  //   },

  //    {
  //     title: "Cloud Infrastructure",
  //     desc: "Overpaying for hardware? We optimize your business with flexible and affordable cloud storage.",
  //     img: "/assets/img/service-icon/s12.png",
  //   },
  //   {
  //     title: "Hybrid Infrastructure",
  //     desc: "Need both speed and security? We blend private and public clouds for agility.",
  //     img: "/assets/img/service-icon/s13.png",
  //   },
  //   {
  //     title: "On-Premise Infrastructure",
  //     desc: "Worried about data privacy? We manage your local hardware for complete internal control.",
  //     img: "/assets/img/service-icon/s14.png",
  //   },
  //   {
  //     title: "Migration Services",
  //     desc: "Scared of losing data during moves? We ensure a seamless transition to modern systems.",
  //     img: "/assets/img/service-icon/s_42.png",
  //   },
  //   {
  //     title: "Integration Services",
  //     desc: "Frustrated by disconnected apps? We link your tools to create one unified ecosystem.",
  //     img: "/assets/img/service-icon/s12.png",
  //   },

  //   {
  //     title: "Manual Testing",
  //     desc: "Worried about hidden glitches? Our experts test your software to ensure total reliability.",
  //     img: "/assets/img/service-icon/s_43.png",
  //   },
  //   {
  //     title: "Automation Testing",
  //     desc: "Software releases taking too long? We use automated scripts to speed up verification.",
  //     img: "/assets/img/service-icon/s21.png",
  //   },
  //   {
  //     title: "Continuous Testing",
  //     desc: "Bugs reaching your customers? We integrate quality checks throughout your entire development cycle.",
  //     img: "/assets/img/service-icon/s22.png",
  //   },
  //   {
  //     title: "DevOps Management",
  //     desc: "Struggling with messy deployments? We unify development and operations for faster, stable releases.",
  //     img: "/assets/img/service-icon/s23.png",
  //   },

  //   {
  //     title: "Digital Marketing",
  //     desc: "Brand invisible in search results? We deploy strategies that put you in front.",
  //     img: "/assets/img/service-icon/s51.png",
  //   },
  //   {
  //     title: "Influencer Marketing",
  //     desc: "Struggling to build trust? We connect you with voices your audience already follows.",
  //     img: "/assets/img/service-icon/s52.png",
  //   },
  //   {
  //     title: "Online Reputation Management",
  //     desc: "Seeing negative feedback online? We protect and enhance your brand’s digital image.",
  //     img: "/assets/img/service-icon/s53.png",
  //   },
  //   {
  //     title: "Improved ROI",
  //     desc: "Marketing budget going to waste? We focus on data-driven growth to maximize returns.",
  //     img: "/assets/img/service-icon/s54.png",
  //   },

  //     {
  //     title: "Digital Consultation",
  //     desc: "Expert digital consulting services to guide ...",
  //     img: "/assets/img/service-icon/s54.png",
  //     link: "/services/marketing/digital-consultation",

  //   },

  //   {
  //     title: "Business Technology Consulting",
  //     desc: "Confused by tech options? We provide expert guidance to align technology with goals.",
  //     img: "/assets/img/service-icon/s11.png",
  //   },
  //   {
  //     title: "Digital Transformation",
  //     desc: "Stuck using outdated processes? We modernize your business for a faster, digital-first future.",
  //     img: "/assets/img/service-icon/s12.png",
  //   },
  //   {
  //     title: "Digital Advisory and Consultation",
  //     desc: "Lacking a clear tech roadmap? We provide strategic insights to navigate modern challenges.",
  //     img: "/assets/img/service-icon/s13.png",
  //   },
  //   {
  //     title: "Application Support and Management",
  //     desc: "Software updates causing headaches? We handle maintenance so you can focus on work.",
  //     img: "/assets/img/service-icon/s14.png",
  //   },
  //   {
  //     title: "Customer Support",
  //     desc: "Losing users to slow responses? We provide the fast, helpful support your customers deserve.",
  //     img: "/assets/img/service-icon/s15.png",
  //   },
  // ],
  all: [
    {
      title: "Custom Software Development",
      desc: "Stuck with tools that don't fit? We build software tailored to your workflow.",
      img: "/assets/img/service-icon/s11.png",
      link: "/services/custom-software-development",
    },
    {
      title: "Cloud Infrastructure",
      desc: "Overpaying for hardware? We optimize your business with affordable cloud storage.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/cloud-infrastructure",
    },
    {
      title: "Devops Services",
      desc: "DevOps solutions that improve collaboration, automation, and faster software delivery cycles.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/devops",
    },
    {
      title: "Automation Testing",
      desc: "Software releases taking too long? We use automation to speed up verification.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/automation-testing",
    },
    {
      title: "Enterprise Software Development",
      desc: "System crashing under heavy loads? We build robust platforms that scale with ease.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/enterprise-software-development",
    },
    {
      title: "Product Development",
      desc: "Have a vision but no team? We transform your ideas into market-ready products.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/product-development",
    },
    {
      title: "Mobile Application Development",
      desc: "Missing out on mobile users? We build seamless apps for iOS and Android.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/mobile-application-development",
    },
    {
      title: "Web Design and Development",
      desc: "Website losing potential customers? We create high-converting sites users love.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/web-application-development",
    },
    {
      title: "Cloud Application Development",
      desc: "Restricted by local servers? We develop secure cloud-native apps.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/cloud-application-development",
    },

    {
      title: "Cloud Infrastructure",
      desc: "Overpaying for hardware? We optimize your business with flexible and affordable cloud storage.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/cloud-infrastructure",
    },
    {
      title: "Hybrid Infrastructure",
      desc: "Need both speed and security? We blend private and public clouds for agility.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/hybrid-infrastructure",
    },
    {
      title: "On-Premise Infrastructure",
      desc: "Worried about data privacy? We manage your local hardware for complete internal control.",
      img: "/assets/img/service-icon/s14.png",
      link: "/services/on-premises-infrastructure",
    },
    {
      title: "Migration Services",
      desc: "Scared of losing data during moves? We ensure a seamless transition to modern systems.",
      img: "/assets/img/service-icon/s_42.png",
      link: "/services/migration",
    },
    {
      title: "Integration Services",
      desc: "Frustrated by disconnected apps? We link your tools to create one unified ecosystem.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/integration",
    },

    {
      title: "Manual Testing",
      desc: "Worried about hidden glitches? Our experts test your software to ensure total reliability.",
      img: "/assets/img/service-icon/s_43.png",
      link: "/services/manual-testing",
    },
    {
      title: "Automation Testing",
      desc: "Software releases taking too long? We use automated scripts to speed up verification.",
      img: "/assets/img/service-icon/s21.png",
      link: "/services/automation-testing",
    },
    {
      title: "Continuous Testing",
      desc: "Bugs reaching your customers? We integrate quality checks throughout your entire development cycle.",
      img: "/assets/img/service-icon/s22.png",
      link: "/services/continuous-testing",
    },
    {
      title: "DevOps Management",
      desc: "Struggling with messy deployments? We unify development and operations for faster, stable releases.",
      img: "/assets/img/service-icon/s23.png",
      link: "/services/devops",
    },

    {
      title: "Digital Marketing",
      desc: "Brand invisible in search results? We deploy strategies that put you in front.",
      img: "/assets/img/service-icon/s51.png",
      link: "/services/marketing/digital-marketing",
    },
    {
      title: "Influencer Marketing",
      desc: "Struggling to build trust? We connect you with voices your audience already follows.",
      img: "/assets/img/service-icon/s52.png",
      link: "/services/marketing/influential-marketing",
    },
    {
      title: "Online Reputation Management",
      desc: "Seeing negative feedback online? We protect and enhance your brand’s digital image.",
      img: "/assets/img/service-icon/s53.png",
      link: "/services/marketing/online-reputation-management",
    },
    {
      title: "Improved ROI",
      desc: "Marketing budget going to waste? We focus on data-driven growth to maximize returns.",
      img: "/assets/img/service-icon/s54.png",
      link: "/services/marketing/improved-roi",
    },

    {
      title: "Digital Consultation",
      desc: "Expert digital consulting services to guide ...",
      img: "/assets/img/service-icon/s54.png",
      link: "/services/marketing/digital-consultation",
    },

    {
      title: "Business Technology Consulting",
      desc: "Confused by tech options? We provide expert guidance to align technology with goals.",
      img: "/assets/img/service-icon/s11.png",
      link: "/services/business-technology-consulting",
    },
    {
      title: "Digital Transformation",
      desc: "Stuck using outdated processes? We modernize your business for a faster, digital-first future.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/digital-transformation",
    },
    {
      title: "Digital Advisory and Consultation",
      desc: "Lacking a clear tech roadmap? We provide strategic insights to navigate modern challenges.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/business-technology-consulting",
    },
    {
      title: "Application Support and Management",
      desc: "Software updates causing headaches? We handle maintenance so you can focus on work.",
      img: "/assets/img/service-icon/s14.png",
      link: "/services/application-support",
    },
    {
      title: "Customer Support",
      desc: "Losing users to slow responses? We provide the fast, helpful support your customers deserve.",
      img: "/assets/img/service-icon/s15.png",
      link: "/services/customer-support",
    },
  ],

  software: [
    {
      title: "Custom Software Development",
      desc: "We build software tailored to your workflow.",
      img: "/assets/img/service-icon/s11.png",
      link: "/services/custom-software-development",
    },
    {
      title: "Enterprise Software Development",
      desc: "We build robust enterprise platforms.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/enterprise-software-development",

    },
    {
      title: "Product Development",
      desc: "We transform ideas into market-ready products.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/product-development",

    },
    {
      title: "Mobile Application Development",
      desc: "Seamless mobile apps for Android & iOS.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/mobile-application-development",

    },
    {
      title: "Web Design and Development",
      desc: "High-performing and modern websites.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/web-application-development",

    },
    {
      title: "Cloud Application Development",
      desc: "Secure and scalable cloud apps.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/cloud-application-development",

    },
  ],

  web: [
    {
      title: "IT Infrastructure Support",
      desc: "Reliable support to keep systems running.",
      img: "/assets/img/service-icon/s11.png",
      link: "/services/infrastructure-support",

    },
    {
      title: "Cloud Infrastructure",
      desc: "Flexible cloud infrastructure solutions.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/cloud-infrastructure",

    },
    {
      title: "Hybrid Infrastructure",
      desc: "Blend private and public clouds.",
      img: "/assets/img/service-icon/s13.png",
      link: "/services/hybrid-infrastructure",

    },
    {
      title: "On-Premise Infrastructure",
      desc: "Manage local hardware with complete control.",
      img: "/assets/img/service-icon/s14.png",
      link: "/services/on-premises-infrastructure",

    },
    {
      title: "Migration Services",
      desc: "Seamless migration to modern systems.",
      img: "/assets/img/service-icon/s_42.png",
      link: "/services/migration",

    },
    {
      title: "Integration Services",
      desc: "Connect all your tools into one ecosystem.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/integration",
    },
    {
      title: "Devops Services",
      desc: "DevOps solutions that improve collaboration, automation, and faster software delivery cycles.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/devops",
    },

  ],

  qa: [
    {
      title: "Manual Testing",
      desc: "Ensure software reliability with expert testing.",
      img: "/assets/img/service-icon/s_43.png",
      link: "/services/manual-testing",

    },
    {
      title: "Automation Testing",
      desc: "Automated testing for faster releases.",
      img: "/assets/img/service-icon/s21.png",
      link: "/services/automation-testing",

    },
    {
      title: "Continuous Testing",
      desc: "Integrated quality checks throughout development.",
      img: "/assets/img/service-icon/s22.png",
      link: "/services/continuous-testing",

    },
  ],

  cloud: [
    {
      title: "Digital Marketing",
      desc: "Strategies that improve online visibility.",
      img: "/assets/img/service-icon/s51.png",
      link: "/services/marketing/digital-marketing",

    },
    {
      title: "Influencer Marketing",
      desc: "Connect with trusted audience voices.",
      img: "/assets/img/service-icon/s52.png",
      link: "/services/marketing/influential-marketing",
    },
    {
      title: "Online Reputation Management",
      desc: "Enhance your digital brand image.",
      img: "/assets/img/service-icon/s53.png",
      link: "/services/marketing/online-reputation-management",

    },
    {
      title: "Improved ROI",
      desc: "Data-driven marketing focused on results.",
      img: "/assets/img/service-icon/s54.png",
      link: "/services/marketing/improved-roi",

    },
    {
      title: "Digital Consultation",
      desc: "Expert digital consulting services to guide ...",
      img: "/assets/img/service-icon/s54.png",
      link: "/services/marketing/digital-consultation",

    },
  ],

  str: [
    {
      title: "Business Technology Consulting",
      desc: "Align technology with business goals.",
      img: "/assets/img/service-icon/s11.png",
      link: "/services/business-technology-consulting",

    },
    {
      title: "Digital Transformation",
      desc: "Modernize your business operations.",
      img: "/assets/img/service-icon/s12.png",
      link: "/services/digital-transformation",

    },
    // {
    //   title: "Digital Advisory and Consultation",
    //   desc: "Strategic guidance for modern challenges.",
    //   img: "/assets/img/service-icon/s13.png",
    //   link: "/services/custom-software-development",

    // },
    {
      title: "Application Support and Management",
      desc: "We manage and maintain your applications.",
      img: "/assets/img/service-icon/s14.png",
      link: "/services/application-support",

    },
    {
      title: "Customer Support",
      desc: "Fast and reliable customer assistance.",
      img: "/assets/img/service-icon/s15.png",
      link: "/services/customer-support",

    },
  ],
};

const timelineData = [
  {
    id: "01",
    title: "Engineering Clarity via Discovery",
    desc: `How do you avoid the "wrong turn" in development? We begin by decoding your business requirements to identify optimal, customized solutions.`,
  },
  {
    id: "02",
    title: "Precision Through Planning",
    desc: `How do you maintain control over complexity? Our experts define the project scope and provide detailed roadmaps to keep your vision on time and within budget.`,
  },
  {
    id: "03",
    title: "Engagement Through Intuitive Design",
    desc: `How do you turn users into advocates? We bring vision to life through engaging user experiences designed to increase engagement and drive business forward.`,
  },
  {
    id: "04",
    title: "Performance via High-Tech Development",
    desc: `How do you ensure your tech stack is future-proof? Our team utilizes the latest technologies to deliver solutions that consistently exceed expectations.`,
  },
  {
    id: "05",
    title: "Market-Ready Reliability",
    desc: `How do you guarantee a flawless launch? Through rigorous testing and reviews, we ensure your final product is reliable and performs optimally for your customers.`,
  },
  {
    id: "06",
    title: "Durable Success via Support",
    desc: `How do you sustain momentum after deployment? Our commitment includes ongoing support to ensure your solution is always running smoothly.`,
  },
];

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/solutions-page/WORKDAY.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                A Unified Ecosystem For Engineering, Cloud, And Business Growth.

                {/* Your Trusted Partner
                <span className="block text-[#4291CE]">
                  for Custom Software
                </span>
                Development */}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {/* container mx-auto my-16 px-4 */}
      <section className=" relative max-w-7xl mx-auto px-4 w-full my-16">
        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full border-2 border-[#4291CE] text-sm font-semibold transition-all duration-300
              ${activeTab === tab.id
                  ? "bg-[#4291CE] text-white"
                  : "bg-white text-[#4291CE] hover:bg-[#4291CE] hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
          {servicesData[activeTab]?.map(
            (service: any, index: number) => (
              <div
                key={index}
                className="relative bg-white border-l-[9px] border-l-[#4291CE] border border-[#4291CE] rounded-2xl p-8 pl-20 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* ICON */}
                <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[#4291CE] bg-white flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <h2 className="text-[22px] font-bold mb-3 text-[#111827]">
                    {service.title}
                  </h2>

                  <p className="text-[16px] text-gray-600 leading-7 mb-6 text-sm">
                    {service.desc}
                  </p>
                  {/* <Link href={service.link}>
                  <button className="bg-[#4291CE] hover:bg-[#2f79b2] transition-all duration-300 text-white px-5 py-3 rounded-md text-sm font-semibold">
                    Learn More →
                  </button>
                    </Link> */}
                  {service.link && (
                    <Link
                      href={service.link}
                      className="inline-block bg-[#4291CE] hover:bg-[#2f79b2] transition-all duration-300 text-white px-5 py-3 rounded-md text-sm font-semibold"
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 px-4 bg-[linear-gradient(135deg,#a7c4dd_0%,#8db4d4_45%,#b7d0e5_100%)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="pt-6">
            <div className="">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                Can Technical Strategy Be
                <span className="block text-white/95">
                  Both Agile and Predictable?
                </span>
              </h2>

              <p className="text-sm md:text-[15px] text-white/80 leading-8 max-w-md">
                Agile is at the heart of our software development process,
                ensuring that every project is a collaborative journey toward
                exceptional results.
              </p>
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-[3px] bg-white/60"></div>

            <div className="flex flex-col gap-14 relative z-10">
              {timelineData.map((item, index) => (
                <div key={index} className="flex gap-8">

                  {/* NUMBER */}
                  <div className="relative shrink-0 flex">
                    <div className="w-14 h-14 rounded-full bg-white border-4 border-white flex items-center justify-center text-[#4d94cb] text-xl font-black shadow-lg z-10">
                      {item.id}
                    </div>

                    {/* ARROW */}
                    {/* <div className="absolute top-1/2 left-[52px] -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white"></div> */}
                  </div>

                  {/* CONTENT */}
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
        <div
          style={{
            background:
              "linear-gradient(94.86deg, #F8F8F8 0.48%, #E3EFF8 100%)",
          }}
          className="max-w-4xl rounded-2xl py-14 px-6 mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your Next Great Project Starts With One Conversation
          </h2>

          <p className="text-sm text-gray-500 mb-10 max-w-xl mx-auto">
            Thousands of businesses. 50+ countries. 13+ years of experience.
            We know how to deliver.
          </p>

          <Link
            href="/contact-us"
            className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicePage;