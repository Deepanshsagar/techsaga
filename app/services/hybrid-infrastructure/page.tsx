"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function HybridInfrastructurePage() {
  const features = [
    {
      title: "Agility and Innovation",
      desc: "Leverage hybrid infrastructure solutions to rapidly deploy services and adapt to evolving business demands.",
      img: "https://www.techsaga.co.in/public/assets/images/my-img/services/service1.jpg",
    },
    {
      title: "Enhanced Customer Experience",
      desc: "Deliver reliable and personalized experiences with seamless hybrid infrastructure integration.",
      img: "https://www.techsaga.co.in/public/assets/images/my-img/services/ds3.jpg",
    },
    {
      title: "Data Security and Compliance",
      desc: "Protect sensitive business and customer data with robust security and compliance measures.",
      img: "https://www.techsaga.co.in/public/assets/images/my-img/services/competative-advantage.jpg",
    },
    {
      title: "Competitive Edge",
      desc: "Gain market advantage with scalable and cost-efficient hybrid infrastructure solutions.",
      img: "https://www.techsaga.co.in/public/assets/images/my-img/services/services-l1.jpg",
    },
    {
      title: "Collaboration and Integration",
      desc: "Enable seamless collaboration and workflow efficiency through integrated hybrid systems.",
      img: "https://www.techsaga.co.in/public/assets/images/my-img/services/services-l2.jpg",
    },
    {
      title: "Strategic Growth",
      desc: "Scale operations and customer reach effectively with future-ready hybrid infrastructure.",
      img: "https://www.techsaga.co.in/public/assets/images/my-img/services/services-l3.jpg",
    },
  ];

  const faqData = [
    {
      q: "What is a hybrid infrastructure service?",
      a: "A hybrid infrastructure service combines on-premises infrastructure with cloud services, offering businesses flexibility and scalability.",
    },
    {
      q: "How does a hybrid infrastructure service work?",
      a: "It integrates on-premises systems with cloud resources through networking and management solutions.",
    },
    {
      q: "What are the benefits of hybrid infrastructure?",
      a: "Hybrid infrastructure provides scalability, flexibility, cost optimization, enhanced disaster recovery, and improved control over sensitive data.",
    },
    {
      q: "Can I integrate my existing infrastructure?",
      a: "Yes, hybrid infrastructure seamlessly integrates with existing on-premises environments.",
    },
    {
      q: "Is data security ensured in hybrid infrastructure?",
      a: "Yes, hybrid infrastructure combines cloud security measures with on-premises protection protocols.",
    },
  ];

  return (
    <main className="w-full overflow-hidden">
 <Header />
      {/* HERO SECTION */}
       <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center Our DevOps Solution Expertise
"
        style={{
          backgroundImage: "url('/assets/img/service-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Hybrid Infrastructure Services
                {/* <span className="block text-[#4291CE]">
                  Support Services
                </span> */}
              </h1>
            </div>
          </div>
        </div>
      </section>
     

      {/* SECTION 1 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase">
              Empowering Hybrid Infrastructure
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Partner with Techsaga for your Hybrid Infrastructure
            </h2>

            <div className="w-24 h-1 bg-[#4291CE] mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Simplifying Your Hybrid Infrastructure
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Hybrid Infrastructure empowers businesses to scale
                resources, optimize IT costs, and maintain enhanced
                security through a combination of on-premises and
                cloud-based services.
              </p>

              <ul className="space-y-4">
                {[
                  "Flexibility and Scalability",
                  "Cost Optimization",
                  "Enhanced Security",
                  "Improved Performance",
                  "Business Continuity",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-[#4291CE] rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src="https://www.techsaga.co.in/public/assets/images/my-img/services/hybrid-infa-services1.png"
                alt="hybrid"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="https://www.techsaga.co.in/public/assets/images/my-img/services/hybrid-infa-services3.png"
                alt="hybrid"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                What do Hybrid Infrastructure Services Entail?
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Hybrid cloud architecture combines on-premises data centers,
                private clouds, and public cloud services for a scalable
                and automated infrastructure ecosystem.
              </p>

              <ul className="space-y-4">
                {[
                  "Cloud infrastructure services (IaaS)",
                  "Managed cloud services",
                  "Robust storage and networking",
                  "Comprehensive infrastructure management",
                  "Highly automated and scalable solutions",
                  "On-demand resource allocation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-[#4291CE] rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Effective Management of Hybrid Infrastructure Services
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Managed hybrid infrastructure services provide automation,
                orchestration, monitoring, and operational efficiency for
                complex hybrid cloud deployments.
              </p>

              <ul className="space-y-6">

                {[
                  {
                    title: "Automation of IT Service Support",
                    desc: "Optimize ITSM processes and improve user experience through automated workflows.",
                  },
                  {
                    title: "Automation of IT Operations",
                    desc: "Manage infrastructure elements and enable dynamic workload orchestration.",
                  },
                  {
                    title: "Automation of Provisioning",
                    desc: "Automate requests, provisioning, compliance, and infrastructure operations.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">

                    <span className="text-blue-600 font-bold text-xl">
                      0{index + 1}
                    </span>

                    <div>
                      <h4 className="font-semibold text-lg">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 mt-1 leading-7">
                        {item.desc}
                      </p>
                    </div>

                  </li>
                ))}

              </ul>
            </div>

            <div>
              <img
                src="https://www.techsaga.co.in/public/assets/images/my-img/services/hybrid-infa-services2.png"
                alt="hybrid"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="https://www.techsaga.co.in/public/assets/images/my-img/services/hybrid-infa-services4.png"
                alt="hybrid"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Our Hybrid Infrastructure Solutions?
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                We design and implement tailored Hybrid Infrastructure
                solutions that align with your business needs while
                ensuring scalability, flexibility, and security.
              </p>

              <ul className="space-y-4">
                {[
                  "Tailored Solutions",
                  "Industry Expertise",
                  "Scalability and Flexibility",
                  "Cost Optimization",
                  "Enhanced Security and Compliance",
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-blue-600 font-bold">
                      0{index + 1}
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BLUE SECTION */}
      <section className="py-20 bg-[#4291CE]">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white">
              Expand Customer Reach with Hybrid Infrastructure
            </h2>

            <p className="text-white/90 mt-6 leading-8">
              Leverage the power of cloud and on-premises systems for
              unmatched scalability, agility, and customer engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <ul className="space-y-5">
              {[
                "Scale resources based on demand",
                "Expand customer base globally",
                "Ensure uninterrupted service availability",
                "Optimize performance and response times",
                "Reduce operational expenses",
              ].map((item, index) => (
                <li key={index} className="flex gap-4 text-white">
                  <span className="text-2xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-5">
              {[
                "Maintain secure customer environments",
                "Provide unified experiences across platforms",
                "Gain valuable customer insights",
                "Stay ahead of competitors",
                "Simplify infrastructure management",
              ].map((item, index) => (
                <li key={index} className="flex gap-4 text-white">
                  <span className="text-2xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl font-bold">
              Techsaga Ensures A Seamless Hybrid Infrastructure
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Innovative hybrid infrastructure solutions built to exceed
              expectations with scalability, performance, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="p-7">

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Hybrid Infrastructure Expertise
            </h2>

            <p className="text-gray-600 mt-5">
              Unlock business potential with scalable hybrid
              infrastructure solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            <div className="bg-[#4291CE] rounded-3xl p-8 text-white">

              <h3 className="text-3xl font-bold mb-5">
                Unwind Business Potential through Hybrid Infrastructure
              </h3>

              <p className="leading-8 mb-6">
                We provide top-notch bespoke Hybrid Infrastructure
                services to startups, SMBs, and enterprises with
                reliable and scalable solutions.
              </p>

              <img
                src="https://www.techsaga.co.in/public/assets/images/my-img/faq-mod.png"
                alt="faq"
                width={500}
                height={400}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-5">

              {faqData.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow"
                >
                  <summary className="font-semibold text-lg cursor-pointer">
                    ✦ {item.q}
                  </summary>

                  <p className="text-gray-600 mt-4 leading-7">
                    {item.a}
                  </p>
                </details>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center max-w-4xl mx-auto">

            <h2 className="text-4xl font-bold">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Flexible budgets, customized approaches, and seamless
              collaboration for successful project delivery.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <img
                src="https://www.techsaga.co.in/public/assets/images/my-img/Inside-Banner-Technology/best-price.png"
                alt="pricing"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                Transparent Pricing
              </h3>

              <p className="text-gray-600 leading-7">
                Clear pricing with no hidden charges and guaranteed value.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <img
                src="https://www.techsaga.co.in/public/assets/images/my-img/Inside-Banner-Technology/hourly-eng.png"
                alt="hourly"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                Adaptive Hourly Engagement
              </h3>

              <p className="text-gray-600 leading-7">
                Flexible collaboration tailored to your evolving project needs.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <img
                src="https://www.techsaga.co.in/public/assets/images/my-img/Inside-Banner-Technology/direct-requirement.png"
                alt="recruitment"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                Direct Recruitment
              </h3>

              <p className="text-gray-600 leading-7">
                Hire top infrastructure experts directly for your business.
              </p>

            </div>

          </div>
        </div>
      </section>
      <Footer />

    </main>
  );
}