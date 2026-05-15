// app/services/infrastructure-support/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function InfrastructureSupportPage() {
  const supportServices = [
    "24/7 Monitoring and Maintenance",
    "Incident Response and Troubleshooting",
    "Infrastructure Design and Implementation",
    "Performance Optimization",
    "Security and Compliance",
    "Disaster Recovery and Business Continuity",
  ];

  const whyChoose = [
    "Reduced Infrastructure Cost",
    "Assistance to Customers",
    "Expertise and Experience",
    "Tailored Solutions",
    "Reliability and Trust",
  ];

  const processSteps = [
    "A thorough assessment",
    "Collaborative planning and design",
    "Expert assistance in H/W and S/W procurement",
    "Seamless implementation and configuration",
    "Ongoing monitoring and maintenance",
    "Incident response and performance optimization",
    "Security measures",
  ];

  const empowerBusiness = [
    "Investing in reliable and efficient infrastructure.",
    "Top-notch infrastructure support commitment.",
    "Helping customers maximize profitability.",
    "Reduction in infrastructure operational costs.",
    "We handle infrastructure complexities for you.",
  ];

  const benefitsLeft = [
    "Enhanced reliability and minimized downtime for uninterrupted business operations.",
    "Improved performance and efficiency through continuous monitoring and optimization.",
    "Proactive issue detection and resolution to prevent major disruptions.",
    "Scalable solutions that adapt to changing organizational needs.",
    "Cost savings by outsourcing infrastructure support instead of maintaining in-house teams.",
  ];

  const benefitsRight = [
    "Positive return on investment through reduced downtime and minimized data loss risks.",
    "Strengthened security measures to protect against cyber threats and ensure compliance.",
    "Access to expertise and industry best practices for effective infrastructure management.",
    "Allows internal IT teams to focus on strategic business initiatives.",
    "Stable and optimized IT infrastructure that supports business growth and innovation.",
  ];

  const features = [
    {
      title: "Reduced Infrastructure Cost",
      description:
        "Achieve cost savings through efficient resource allocation, streamlined procurement, and optimized infrastructure management.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Positive ROI",
      description:
        "Maximize returns by minimizing downtime, increasing productivity, and leveraging technology for business growth.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "IT Infrastructure Design",
      description:
        "Design scalable, secure, and resilient infrastructure aligned with your business objectives.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Scalable & Tailored Solutions",
      description:
        "Receive customized infrastructure solutions that adapt seamlessly to your evolving business needs.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "24/7 Monitoring & Maintenance",
      description:
        "Continuous monitoring and proactive issue detection ensure smooth infrastructure operations.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Performance Optimization",
      description:
        "Enhance infrastructure efficiency, responsiveness, and reliability with optimization strategies.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "What types of infrastructure support services are typically offered?",
      answer:
        "We offer 24/7 monitoring, incident response, infrastructure design, performance optimization, security management, disaster recovery, and ongoing maintenance support.",
    },
    {
      question:
        "How can infrastructure support help reduce costs for businesses?",
      answer:
        "Infrastructure support optimizes costs through efficient resource utilization, minimized downtime, and proactive maintenance strategies.",
    },
    {
      question:
        "How does infrastructure support contribute to long-term cost reduction?",
      answer:
        "Continuous monitoring, optimization, and preventive maintenance reduce expensive system failures and emergency repairs.",
    },
    {
      question:
        "How does infrastructure support ensure data security and compliance?",
      answer:
        "Infrastructure support includes firewall management, encryption, vulnerability assessments, and compliance-focused security measures.",
    },
    {
      question:
        "Can infrastructure support services accommodate business growth?",
      answer:
        "Yes, infrastructure support services are designed to scale with your business and support future growth requirements.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring deliverables and business value are achieved within your budget.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models designed around project requirements and evolving business needs.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient hiring support to help you recruit top infrastructure and IT talent without intermediaries.",
      image: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Banner */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/service-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Infrastructure
                <span className="block text-[#4291CE]">
                  Support Services
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Dynamic Infrastructure Solution
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Business Challenges in Infrastructure Support
            </h1>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Approach to Infrastructure Support
              </h2>

              <p className="mb-5 leading-8">
                Techsaga provides proactive infrastructure support services to
                manage, monitor, and optimize your IT infrastructure across
                diverse technologies and business environments.
              </p>

              <p className="mb-8 leading-8">
                Our experts proactively identify issues, ensure system
                reliability, optimize performance, strengthen security, and
                provide disaster recovery strategies to maintain uninterrupted
                business operations.
              </p>

              <ul className="space-y-4">
                {supportServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4291CE] text-white flex items-center justify-center text-sm mt-1">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src="/assets/img/infrastructure-s1.png"
                alt="Infrastructure Support"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/infrastructure-s2.png"
                alt="Why Choose Infrastructure Support"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Us for Infrastructure Support?
              </h2>

              <p className="leading-8 mb-8">
                We deliver scalable, cost-effective, and reliable infrastructure
                solutions tailored to your business goals while ensuring maximum
                operational efficiency and security.
              </p>

              <div className="space-y-4">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="text-[#4291CE] font-bold">✓</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Techsaga's Infrastructure Support Process
              </h2>

              <p className="leading-8 mb-5">
                Our process focuses on designing, implementing, monitoring, and
                optimizing robust infrastructure environments for long-term
                business success.
              </p>

              <p className="leading-8 mb-8">
                Through proactive monitoring, maintenance, security, and
                performance optimization, we ensure infrastructure stability and
                scalability.
              </p>

              <div className="space-y-5">
                {processSteps.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-lg font-semibold pt-3">{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/infrastructure-s3.png"
                alt="Infrastructure Process"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empower */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/infrastructure-s4.png"
                alt="Infrastructure Benefits"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Take Your IT Infrastructure to the Next Level
              </h2>

              <p className="leading-8 mb-8">
                We empower businesses with reliable infrastructure support that
                reduces operational complexity, improves uptime, and drives
                sustainable growth.
              </p>

              <div className="space-y-5">
                {empowerBusiness.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="min-w-[45px] h-[45px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Get The Top-Notch Infrastructure Support
            </h2>

            <p className="text-lg">
              Unleashing the Power of Seamless IT Operations & Benefits
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {benefitsLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {benefitsRight.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Boost IT Success with Infrastructure Support
            </h2>

            <p className="text-lg text-gray-600">
              Reduced Costs, Positive ROI, Monitoring & Optimal Performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
              >
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Infrastructure Support Expertise
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm group"
              >
                <summary className="cursor-pointer font-semibold text-lg flex justify-between items-center">
                  {faq.question}
                  <span className="group-open:rotate-45 transition">+</span>
                </summary>

                <p className="mt-4 text-gray-600 leading-7">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-5">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible budget and customized engagement models tailored to your
              project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationCards.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-8 text-center hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={90}
                    height={90}
                  />
                </div>

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}