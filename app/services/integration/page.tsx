"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Image from "next/image";

export default function InfrastructureIntegrationPage() {
  const counters = [
    { number: "900+", label: "Happy Clients" },
    { number: "350+", label: "Employees" },
    { number: "1600+", label: "Finished Projects" },
  ];

  const integrationBenefits = [
    "Streamlined Operations",
    "Enhanced Scalability",
    "Increased Agility",
    "Cost Optimization",
  ];

  const cloudServices = [
    "Comprehensive Assessment",
    "Seamless Integration",
    "Data Migration and Transformation",
    "Workflow Automation",
    "Continuous Monitoring and Support",
  ];

  const whyChooseUs = [
    "Cutting edge tools",
    "Professional consulting",
    "Prompt delivery",
    "Client Satisfaction",
    "Up-to-date Experts",
  ];

  const futureReady = [
    "Cloud Expertise",
    "Platform Selection",
    "Cost Savings",
    "Performance Boost",
    "Customized Apps",
  ];

  const integrationFeaturesLeft = [
    "Streamline Operations",
    "Improve Efficiency",
    "Enhance Collaboration",
    "Scalability and Flexibility",
    "Data Accessibility",
  ];

  const integrationFeaturesRight = [
    "Cost Optimization",
    "Security and Compliance",
    "Simplified Management",
    "Faster Time-to-Market",
    "Innovation and Future-Readiness",
  ];

  const perks = [
    {
      title: "Accessibility",
      desc: "Cloud-based products and services can be accessed from anywhere and on any platform for uninterrupted productivity.",
      img: "/assets/img/service1.jpg",
    },
    {
      title: "Competitive Edge",
      desc: "Leverage cloud scalability, performance, and cost-efficiency to gain a strong competitive advantage.",
      img: "/assets/img/ds3.jpg",
    },
    {
      title: "Accelerated Time to Market",
      desc: "Cloud infrastructure reduces deployment timelines and helps deliver updates faster and more efficiently.",
      img: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Scalability",
      desc: "Easily scale resources based on business demand and optimize infrastructure performance efficiently.",
      img: "/assets/img/services-l1.jpg",
    },
    {
      title: "Security",
      desc: "Advanced cloud security solutions safeguard your applications and sensitive business data.",
      img: "/assets/img/services-l2.jpg",
    },
    {
      title: "Strategic Growth",
      desc: "Build a future-ready infrastructure that supports expansion, innovation, and digital transformation.",
      img: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is infrastructure integration?",
      answer:
        "Infrastructure integration is the process of seamlessly connecting and consolidating different IT systems and applications to improve efficiency and streamline operations.",
    },
    {
      question: "Why is infrastructure integration important?",
      answer:
        "It enables efficient data sharing, better collaboration, optimized workflows, and faster time-to-market for businesses.",
    },
    {
      question: "How does infrastructure integration benefit organizations?",
      answer:
        "It improves operational efficiency, scalability, security, accessibility, and overall business agility.",
    },
    {
      question: "How long does the integration process take?",
      answer:
        "The duration depends on the complexity, scale, and specific requirements of the infrastructure environment.",
    },
    {
      question: "Is infrastructure integration a one-time process?",
      answer:
        "No. Infrastructure integration is an ongoing process that evolves as businesses adopt new systems and technologies.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      desc: "Clear, upfront pricing ensures complete transparency and predictable project delivery.",
      img: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      desc: "Flexible engagement models tailored to your project needs for maximum efficiency.",
      img: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      desc: "Efficient hiring support to help you recruit top talent without intermediaries.",
      img: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <main>
        
 <Header />
   {/* HERO SECTION */}
       <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/service-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Infrastructure Integration Services
                {/* <span className="block text-[#4291CE]">
                  Support Services
                </span> */}
              </h1>
              <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  Seamless system integration services that connect platforms, applications, and business workflows.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}


      {/* Intro Section */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Enabling Digital Evolution
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Trusted Partner for Infrastructure Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                Streamlining & Enhancing Cloud Integration
              </h3>

              <p className="mb-6 text-gray-600 leading-8">
                Cloud infrastructure integration improves collaboration,
                scalability, operational efficiency, and data accessibility
                across organizations. It removes silos, automates workflows,
                and allows businesses to adapt quickly to market demands while
                reducing operational costs.
              </p>

              <ul className="space-y-3">
                {integrationBenefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4291CE] text-sm text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src="/assets/img/services/integration-services-img1.png"
                alt="Infrastructure Integration"
                width={700}
                height={500}
                className="rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src="/assets/img/services/integation-services-img2.png"
                alt="Cloud Integration Services"
                width={700}
                height={500}
                className="rounded-3xl object-cover shadow-xl"
              />
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                Our Cloud Infrastructure Integration Services
              </h3>

              <p className="mb-6 text-gray-600 leading-8">
                We seamlessly connect systems, applications, and cloud
                environments while automating workflows and ensuring secure
                data migration for maximum efficiency and productivity.
              </p>

              <ul className="space-y-4">
                {cloudServices.map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                Why Choose Us for Integration Services?
              </h3>

              <p className="mb-6 text-gray-600 leading-8">
                We deliver modern cloud integration solutions using cutting-edge
                technologies, industry best practices, and expert consultation
                to ensure smooth migration and efficient infrastructure
                management.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4291CE] font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="font-medium text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/assets/img/services/integation-services-img3.png"
                alt="Why Choose Us"
                width={700}
                height={500}
                className="rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Ready */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src="/assets/img/services/integation-services-img4.png"
                alt="Future Ready"
                width={700}
                height={500}
                className="rounded-3xl object-cover shadow-xl"
              />
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                Embrace Integration Solutions: Be Future Ready
              </h3>

              <p className="mb-6 text-gray-600 leading-8">
                Our cloud experts help businesses adopt scalable infrastructure,
                optimize performance, reduce operational costs, and develop
                customized applications tailored to business requirements.
              </p>

              <div className="space-y-4">
                {futureReady.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4291CE] font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="font-medium text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="bg-[#4291CE] py-20 text-white">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Enable Remote Work With Infrastructure Integration
            </h2>

            <p className="text-lg text-blue-100">
              We help businesses streamline operations and improve productivity
              with advanced cloud infrastructure integration solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ul className="space-y-5">
              {integrationFeaturesLeft.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-5">
              {integrationFeaturesRight.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              The Perks of Cloud Infrastructure Integration
            </h2>

            <p className="text-lg text-gray-600">
              Cloud solutions ensure performance, security, scalability, and
              strategic growth for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Infrastructure Integration Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#4291CE] p-10 text-white">
              <h3 className="mb-6 text-3xl font-bold">
                Unlock Business Potential Through Integration
              </h3>

              <p className="mb-8 leading-8 text-blue-100">
                We provide enterprise-grade infrastructure integration services
                for startups, SMBs, and large enterprises with seamless
                scalability and modern cloud expertise.
              </p>

              <img
                src="/assets/img/faq-mod.png"
                alt="FAQ"
                width={500}
                height={400}
                className="mx-auto"
              />
            </div>

            <div className="space-y-5">
              {faqs.map((item, index) => (
                <details
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  open={index === 0}
                >
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                    ✦ {item.question}
                  </summary>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible engagement models tailored to your business needs and
              project goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {collaborationCards.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="mx-auto mb-6"
                />

                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
          <Footer />
    </main>
  );
}