"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Image from "next/image";

export default function OnPremisesInfrastructurePage() {
  const counters = [
    { number: "900", label: "Happy Clients" },
    { number: "350", label: "Employees" },
    { number: "1600", label: "Finished Projects" },
  ];

  const streamlinedPoints = [
    "Data Control and Security",
    "Customization and Flexibility",
    "Performance and Latency",
    "Cost Control",
    "Compliance and Regulatory Requirements",
  ];

  const considerationPoints = [
    "Upfront Investment",
    "IT Expertise",
    "Scalability",
    "Disaster Recovery",
    "Business Continuity",
  ];

  const managementServices = [
    "Full oversight",
    "Efficient management",
    "Proactive maintenance",
    "Secure backups",
    "Efficient delegation",
  ];

  const choosePoints = [
    "Robust Performance",
    "Enhanced Security",
    "Customized Configuration",
    "Scalability and Flexibility",
    "Reliable Support",
  ];

  const excellenceLeft = [
    "Control your data and applications with reliability, security, and customization in our on-premises infrastructure services.",
    "Considerations for on-premises infrastructure: upfront investment, IT expertise, scalability, disaster recovery, and business continuity.",
    "On-premises infrastructure management services: full oversight, efficient management, proactive maintenance, secure backups, and efficient delegation.",
    "Seamless operations and efficient resource utilization with our high-performance on-premises infrastructure solutions.",
    "Advanced security measures and stringent protocols to safeguard sensitive data and protect against cyber threats.",
  ];

  const excellenceRight = [
    "Customized infrastructure setup to optimize hardware, software, and network configurations based on your specific requirements.",
    "Scalability options and flexibility to accommodate your business growth and adapt to evolving needs.",
    "A dedicated team providing proactive monitoring, troubleshooting, and round-the-clock support for uninterrupted operations and swift issue resolution.",
    "Experience the benefits of complete data control, enhanced security, and tailored infrastructure with our on-premises services.",
    "Maximize your IT investments and ensure compliance with industry regulations through our on-premises infrastructure solutions.",
  ];

  const featureCards = [
    {
      title: "Seamless Integration",
      desc: "Our expertise lies in seamlessly integrating and customizing on-premises infrastructure to align with your unique business requirements, ensuring optimal performance and efficiency.",
      icon: "flaticon-data",
      bg: "/assets/img/services/service1.jpg",
    },
    {
      title: "Enhanced Security",
      desc: "Techsaga prioritizes data security and compliance, implementing robust measures to protect sensitive information and meet industry-specific regulations.",
      icon: "flaticon-author",
      bg: "/assets/img/services/ds3.jpg",
    },
    {
      title: "Scalability and Flexibility",
      desc: "Our on-premises infrastructure solutions are designed to scale and adapt as your business grows, allowing for seamless expansion and flexibility to accommodate evolving needs.",
      icon: "flaticon-icon-149196",
      bg: "/assets/img/services/competative-advantage.jpg",
    },
    {
      title: "Proactive Monitoring",
      desc: "With our proactive monitoring and dedicated support, we ensure smooth operations, quick issue resolution, and minimized downtime for uninterrupted productivity.",
      icon: "flaticon-chart",
      bg: "/assets/img/services/services-l1.jpg",
    },
    {
      title: "Compliance Assurance",
      desc: "Ensure compliance with industry regulations and prioritize data privacy with our on-premises infrastructure solutions, providing peace of mind and regulatory compliance for your business.",
      icon: "flaticon-design",
      bg: "/assets/img/services/services-l2.jpg",
    },
    {
      title: "Unleashing Business Potential",
      desc: "Optimize resource utilization for enhanced operational efficiency and unlock business growth potential with our on-premises infrastructure solutions.",
      icon: "flaticon-group",
      bg: "/assets/img/services/services-l3.jpg",
    },
  ];

  const faqData = [
    {
      question: "What is on-premises infrastructure?",
      answer:
        "On-premises infrastructure refers to the physical hardware, software, and network infrastructure owned and operated by an organization within its own premises.",
    },
    {
      question: "What are the benefits of on-premises infrastructure?",
      answer:
        "Benefits include data control, enhanced security, customization options, compliance adherence, and direct access to infrastructure.",
    },
    {
      question:
        "How does on-premises infrastructure differ from cloud solutions?",
      answer:
        "On-premises infrastructure is maintained in-house, while cloud solutions are hosted and managed by third-party providers.",
    },
    {
      question:
        "What factors should be considered when choosing between on-premises and cloud?",
      answer:
        "Consider data security needs, compliance requirements, budget, scalability, and IT strategy.",
    },
    {
      question:
        "What are the challenges of managing on-premises infrastructure?",
      answer:
        "Challenges include resource allocation, maintenance costs, updates and backups, and potential hardware failures or disasters.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      desc: "With transparent and fixed pricing, we provide clear, upfront costs, ensuring that deliverables and value are achieved within the time and budget invested by our clients.",
      img: "/assets/img/services/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      desc: "Our Adaptive Hourly Engagement offers flexible collaboration based on project needs, optimizing resources and maximizing productivity with agile responsiveness.",
      img: "/assets/img/services/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      desc: "We facilitate Direct Recruitment by providing the tools, resources, and expertise to help you efficiently hire top talent without intermediaries.",
      img: "/assets/img/services/direct-requirement.png",
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
                On-Premises Infrastructure Services
                {/* <span className="block text-[#4291CE]">
                  Support Services
                </span> */}
              </h1>
              <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  Robust on-premises infrastructure solutions designed for security, control, and reliability.
                </p>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section */}
   

      {/* Partner Section */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Enhancing Infrastructure Solutions
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Techsaga: Partner for On-Premises Infrastructure
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#4291CE]"></div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                Streamlined Solutions With On-Premises Infrastructure
              </h3>

              <p className="mb-6 leading-8 text-gray-600">
                With on-premises infrastructure, businesses gain complete
                control over their data and implement robust security measures,
                ensuring compliance and peace of mind.
              </p>

              <ul className="space-y-4">
                {streamlinedPoints.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4291CE] text-sm text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src="/assets/img/services/on-premises-services1.png"
                alt="Infrastructure"
                width={700}
                height={500}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Considerations */}
      <section className="pb-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src="/assets/img/services/onpremises-services4.png"
                alt="Considerations"
                width={700}
                height={500}
                className="rounded-3xl"
              />
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                Considerations for On-Premises Infrastructure
              </h3>

              <p className="mb-6 leading-8 text-gray-600">
                Implementing an on-premises infrastructure necessitates upfront
                investment in hardware, software licenses, and setup.
              </p>

              <div className="space-y-4">
                {considerationPoints.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-blue-600">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section className="pb-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                On-Premises Infrastructure Management Services
              </h3>

              <p className="mb-8 leading-8 text-gray-600">
                On-Premises infrastructure management services involve the
                comprehensive oversight and maintenance of an organization&apos;s
                on-site IT infrastructure.
              </p>

              <div className="space-y-5">
                {managementServices.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4291CE] font-bold text-white">
                      {index + 1}
                    </span>

                    <div>
                      <h4 className="font-semibold text-gray-900">{item}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/assets/img/services/onpremises-services2.png"
                alt="Management"
                width={700}
                height={500}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="pb-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src="/assets/img/services/onpremises-services3.png"
                alt="Why Choose"
                width={700}
                height={500}
                className="rounded-3xl"
              />
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                Why Choose Our On-Premises Infrastructure Solutions?
              </h3>

              <p className="mb-8 leading-8 text-gray-600">
                Our on-premises infrastructure solutions ensure high-performance
                computing, enabling seamless operations and efficient resource
                utilization.
              </p>

              <div className="space-y-5">
                {choosePoints.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4291CE] font-bold text-white">
                      {index + 1}
                    </span>

                    <p className="font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="bg-[#4291CE] py-20">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-white">
              Decades of Excellence In On-Premises Infrastructure
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              We deliver robust and reliable solutions that optimize operations,
              enhance security, and achieve IT objectives for businesses.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              {excellenceLeft.map((item, index) => (
                <div key={index} className="flex gap-4 text-white">
                  <span>✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {excellenceRight.map((item, index) => (
                <div key={index} className="flex gap-4 text-white">
                  <span>✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Pioneering On-Premises Infrastructure Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Innovative on-premises infrastructure solutions empower businesses
              with secure, customizable systems tailored to their needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bg})` }}
                />

                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 p-8">
                  <div className="mb-6 text-4xl text-white">
                    <i className={item.icon}></i>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-gray-200">{item.desc}</p>
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
              Our On-Premises Infrastructure Expertise
            </h2>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#4291CE] p-10 text-white">
              <h3 className="mb-6 text-3xl font-bold">
                Unwind Business Potential through On-Premises Infrastructure
              </h3>

              <p className="mb-8 leading-8 text-blue-100">
                We provide top-notch bespoke On-Premises Infrastructure services
                to start-ups, SMBs, and large corporations.
              </p>

              <img
                src="/assets/img/services/faq-mod.png"
                alt="FAQ"
                width={500}
                height={400}
                className="mx-auto"
              />
            </div>

            <div className="space-y-5">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h4 className="mb-3 text-lg font-semibold text-gray-900">
                    ✦ {faq.question}
                  </h4>

                  <p className="leading-7 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Let&apos;s Get Started: Collaborating on Your Project
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Flexible budget, customized approach. Choose what works for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {collaborationCards.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>

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