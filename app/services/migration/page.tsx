"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function CloudMigrationPage() {
  const perks = [
    {
      title: "Accessibility",
      desc: "Cloud-based services can be accessed from anywhere and on any device, enabling seamless connectivity and productivity.",
      img: "/assets/img/services/service1.jpg",
    },
    {
      title: "Scalability",
      desc: "Cloud systems easily adapt to workload spikes, allowing organizations to scale resources efficiently based on demand.",
      img: "/assets/img/services/ds3.jpg",
    },
    {
      title: "Accelerated Time to Market",
      desc: "Cloud infrastructure reduces deployment time for new apps and updates, helping businesses innovate faster.",
      img: "/assets/img/services/competative-advantage.jpg",
    },
    {
      title: "Security",
      desc: "Modern cloud platforms provide advanced security features and tools to protect sensitive business data.",
      img: "/assets/img/services/services-l1.jpg",
    },
    {
      title: "Competitive Edge",
      desc: "Cloud migration empowers businesses with scalability and cost efficiency, helping them outperform competitors.",
      img: "/assets/img/services/services-l2.jpg",
    },
    {
      title: "Strategic Growth",
      desc: "Cloud migration creates opportunities for business expansion, innovation, and improved customer reach.",
      img: "/assets/img/services/services-l3.jpg",
    },
  ];

  const services = [
    "Cloud Migration Discovery & Analysis",
    "Natural Language Processing",
    "Sovereign Cloud Services",
    "Cloud Migration and Strategy",
    "Cloud Computing Service",
    "Cloud-Enabled App Development",
  ];

  const benefits = [
    "Scalability & Cost-efficiency",
    "Agility and Innovation",
    "Business Continuity",
    "Collaboration and Remote Accessibility",
    "Focus on Core Competencies",
  ];

  const whyChoose = [
    "Cutting edge tools",
    "Professional consulting",
    "Prompt delivery",
    "Client Satisfaction",
    "Up-to-date experts",
  ];

  const futureReady = [
    "Cloud Expertise",
    "Platform Selection",
    "Cost Savings",
    "Performance Boost",
    "Customized Apps",
  ];

  const faqs = [
    {
      q: "What is cloud migration and why is it important for businesses?",
      a: "Cloud migration involves moving data, applications, and infrastructure from on-premises systems to the cloud. It offers scalability, cost savings, enhanced collaboration, and access to advanced technologies.",
    },
    {
      q: "What are the key benefits of migrating to the cloud?",
      a: "Cloud migration provides flexibility, scalability, cost savings, improved security, simplified management, and better collaboration.",
    },
    {
      q: "How can cloud migration improve scalability and flexibility?",
      a: "It enables rapid deployment, scalable resources, and business agility to adapt to changing market demands.",
    },
    {
      q: "What challenges should businesses consider during migration?",
      a: "Businesses should consider data security, downtime, compatibility, transfer complexity, and employee training.",
    },
    {
      q: "What are the steps in a successful cloud migration process?",
      a: "Assessment, planning, testing, execution, monitoring, and optimization are key migration stages.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
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
                Cloud Migration Services
                {/* <span className="block text-[#4291CE]">
                  Support Services
                </span> */}
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  Smooth and secure migration services for applications, data, and infrastructure modernization.
                </p>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION */}
   

      {/* INTRO */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Delivering Cloud Solutions
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Techsaga: Trusted Partner For Your Cloud Migration
            </h2>

            <p className="text-gray-600 leading-8">
              Cloud migration enables businesses to scale operations, improve
              flexibility, reduce infrastructure costs, and accelerate digital
              transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Scale Up Business With Cloud Migration
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Cloud migration helps organizations modernize infrastructure,
                improve collaboration, and ensure business continuity through
                scalable and secure cloud environments.
              </p>

              <ul className="space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#4291CE] text-white flex items-center justify-center text-sm">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src="/assets/img/services/migration-services-img1.png"
                alt="Cloud Migration"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src="/assets/img/services/migration-services-img2.png"
                alt="Services"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Our Cloud Migration Services
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                We provide end-to-end cloud migration solutions including
                discovery, strategy, consulting, cloud-native development, and
                deployment support.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 shadow-md border"
                  >
                    <div className="flex gap-3 items-start">
                      <span className="text-blue-600 text-xl">✓</span>
                      <p className="font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Us for Migration Services?
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                We use advanced cloud technologies and industry best practices
                to ensure smooth, secure, and scalable migration experiences
                for businesses worldwide.
              </p>

              <div className="space-y-4">
                {whyChoose.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 border rounded-2xl p-4"
                  >
                    <span className="text-blue-600 font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/assets/img/services/migration-servicws-img3.png"
                alt="Why Choose Us"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE READY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src="/assets/img/services/migration-services-img4.png"
                alt="Future Ready"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Embrace Cloud Migration Solutions
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                Future-proof your business with customized cloud platforms,
                scalable architecture, and modern cloud-native applications.
              </p>

              <div className="space-y-4">
                {futureReady.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 border rounded-2xl p-4 bg-white"
                  >
                    <span className="text-blue-600 font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-5">
              The Perks of Choosing Cloud
            </h2>

            <p className="text-gray-600 leading-8">
              Cloud solutions provide scalability, security, performance, and
              accessibility for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden shadow-lg border bg-white hover:-translate-y-2 transition duration-300"
              >
                <div className="relative h-64 overflow-hidden ">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-gray-600 leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-5">
              Our Cloud Migration Expertise
            </h2>

            <p className="text-gray-600 leading-8">
              Answers to the most common questions about cloud migration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md group"
              >
                <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                  {faq.q}
                </summary>

                <p className="text-gray-600 leading-7 mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Let’s Get Started: Collaborating on Your Project
            </h2>

            <p className="text-gray-600 leading-8">
              Flexible budgets, transparent pricing, and adaptive engagement
              models tailored to your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparent and Fixed Pricing",
                desc: "Clear and upfront pricing ensuring maximum value within your budget.",
                img: "/assets/img/services/best-price.png",
              },
              {
                title: "Adaptive Hourly Engagement",
                desc: "Flexible collaboration models optimized for project requirements.",
                img: "/assets/img/services/hourly-eng.png",
              },
              {
                title: "Direct Recruitment",
                desc: "Hire top talent directly with our expert recruitment support.",
                img: "/assets/img/services/direct-requirement.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>

                <h4 className="text-xl font-bold mb-4">{item.title}</h4>

                <p className="text-gray-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
          <Footer />
    </main>
  );
}