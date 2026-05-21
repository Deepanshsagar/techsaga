
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomForm from "@/components/BottomForm";


import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/services/cloud-infrastructure");
}

export default function CloudInfrastructurePage() {
  const features = [
    {
      title: "Scalability",
      desc: "Cloud infrastructure allows for easy scalability, enabling businesses to quickly and efficiently adjust their computing resources based on demand.",
      img: "/assets/img/services/service1.jpg",
    },
    {
      title: "Cost Efficiency",
      desc: "With cloud infrastructure, businesses can avoid significant upfront investments in hardware and infrastructure while benefiting from pay-as-you-go models.",
      img: "/assets/img/services/ds3.jpg",
    },
    {
      title: "Accessibility & Flexibility",
      desc: "Cloud infrastructure enables users to access applications and data from anywhere with internet connectivity.",
      img: "/assets/img/services/competative-advantage.jpg",
    },
    {
      title: "Reliability & High Availability",
      desc: "Redundant systems and multiple data centers ensure maximum uptime and operational continuity.",
      img: "/assets/img/services/services-l1.jpg",
    },
    {
      title: "Security",
      desc: "Advanced security technologies, encryption, and compliance frameworks protect sensitive business data.",
      img: "/assets/img/services/services-l2.jpg",
    },
    {
      title: "Simplified Management",
      desc: "Cloud infrastructure simplifies administration, monitoring, and deployment through advanced management tools.",
      img: "/assets/img/services/services-l3.jpg",
    },
  ];

  const faqData = [
    {
      q: "What is cloud infrastructure service and how does it differ from traditional on-premises infrastructure?",
      a: "Cloud infrastructure service refers to the provision of computing resources by a cloud service provider over the Internet instead of relying on physical on-premises infrastructure.",
    },
    {
      q: "What are the key benefits of adopting cloud infrastructure services?",
      a: "Key benefits include scalability, cost efficiency, accessibility, flexibility, reliability, and enhanced security.",
    },
    {
      q: "How does cloud infrastructure ensure data security and compliance?",
      a: "Cloud infrastructure uses encryption, authentication, access controls, and industry-standard compliance frameworks.",
    },
    {
      q: "Can cloud infrastructure integrate with existing systems?",
      a: "Yes, cloud services provide APIs, tools, and compatibility features for seamless integration.",
    },
    {
      q: "How does cloud infrastructure handle scalability and resource management?",
      a: "Cloud infrastructure dynamically allocates and scales resources based on business demand and workload.",
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      <Header />
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/infrastructure-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Cloud Infrastructure
                {/* <span className="block text-[#4291CE]">
                  Cloud Infrastructure
                </span> */}
              </h1>
              <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  Secure and scalable cloud infrastructure solutions for modern business environments.
                </p>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION */}


      {/* SECTION 1 */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase">
              Customized Cloud Solutions
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Cloud Infrastructure’s Working Mechanism
            </h2>

            <div className="w-24 h-1 bg-[#4291CE] mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h3 className="text-3xl font-bold mb-6">
                What does Managing Cloud Infrastructure Entail?
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Cloud infrastructure management plays a vital role in
                efficiently allocating and delivering important resources
                wherever and whenever they are needed.
              </p>

              <p className="text-gray-600 leading-8 mb-6">
                The user interface dashboard acts as a control panel for
                deploying, configuring, and managing cloud infrastructure.
              </p>

              <ul className="space-y-4">
                {[
                  "Efficient allocation and delivery of resources",
                  "Dashboard-based cloud infrastructure control",
                  "Benefits for developers and businesses",
                  "Seamless cloud accessibility",
                  "Support for clients and collaborators",
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
                src="/assets/img/services/cloud-support-services1.png" 
                               alt="cloud"
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
                src="/assets/img/services/cloud-support-services2.png"
                alt="cloud"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Should I Control My Cloud Infrastructure?
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Cloud infrastructure management is essential for maximizing
                the advantages of cloud computing while reducing unnecessary
                expenses and improving scalability.
              </p>

              <ul className="space-y-4">
                {[
                  "Flexibility, scalability, and cost savings",
                  "Reduced wasted resources",
                  "Effective multi-cloud management",
                  "Optimized cloud investments",
                  "Improved operational efficiency",
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
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h3 className="text-3xl font-bold mb-6">
                What does cloud infrastructure management do?
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Cloud infrastructure management oversees provisioning,
                deployment, monitoring, optimization, and scalability of
                cloud resources.
              </p>

              <ul className="space-y-4">
                {[
                  "Command center for cloud environments",
                  "Tools for managing pooled resources",
                  "Operational flexibility",
                  "Agility while saving costs",
                  "Multi-cloud and hybrid cloud strategies",
                  "Supports smaller teams with web-scale services",
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

            <div>
              <img
                src="/assets/img/services/cloud-support-services3.png"
                alt="cloud"
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
                src="/assets/img/services/cloud-support-services4.png"
                alt="cloud"
                width={700}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Harness Techsaga's Advanced Cloud Infrastructure Services
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Techsaga provides scalable and reliable cloud infrastructure
                services that help businesses innovate, optimize costs, and
                improve operational efficiency.
              </p>

              <ul className="space-y-4">
                {[
                  "Enhanced agility and cost optimization",
                  "Improved accessibility",
                  "Efficient resource allocation",
                  "Maximized ROI",
                  "Innovation and digital transformation",
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

      {/* BENEFITS */}
      <section className="py-20 bg-[#4291CE]">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white">
              Harness our Cutting-Edge Cloud Infrastructure
            </h2>

            <p className="text-white/90 mt-6 leading-8">
              Optimize performance, scalability, and security with advanced
              cloud solutions built for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <ul className="space-y-5">
              {[
                "Cloud infrastructure includes hardware, software, and networking resources.",
                "Provides a foundation for cloud applications and storage.",
                "Supports remote access without on-premises infrastructure.",
                "Enables efficient resource allocation and monitoring.",
                "Improves scalability and operational performance.",
              ].map((item, index) => (
                <li key={index} className="flex gap-4 text-white">
                  <span className="text-2xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-5">
              {[
                "Minimizes unnecessary operational costs.",
                "Supports innovation and transformation.",
                "Provides high availability and reliability.",
                "Improves cloud investment returns.",
                "Empowers businesses to scale efficiently.",
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
              Cloud Infrastructure Benefits
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Scalability, flexibility, security, and cost-efficiency
              empower businesses to thrive in the digital era.
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
      <section className="py-20 bg-gray-100 ">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Cloud Infrastructure Expertise
            </h2>

            <p className="text-gray-600 mt-5">
              Unwind business potential through modern cloud infrastructure
              services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            <div className="bg-[#4291CE] rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-5">
                Unwind Business Potential through Cloud Infrastructure
              </h3>

              <p className="leading-8 mb-6">
                We provide bespoke cloud infrastructure solutions for
                startups, SMBs, and enterprises with scalable and secure
                architecture.
              </p>

              <img
                src="/assets/img/services/faq-mod.png"
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
                  <summary className="font-semibold text-lg cursor-pointer list-none">
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
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Flexible budget, customized approach, and seamless
              collaboration to ensure project success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <img
                src="/assets/img/services/best-price.png"
                alt="pricing"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                Transparent Pricing
              </h3>

              <p className="text-gray-600 leading-7">
                Clear and upfront pricing without hidden charges.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <img
                src="/assets/img/services/hourly-eng.png"
                alt="hourly"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                Adaptive Hourly Engagement
              </h3>

              <p className="text-gray-600 leading-7">
                Flexible collaboration tailored to project requirements.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <img
                src="/assets/img/services/direct-requirement.png"
                alt="recruitment"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                Direct Recruitment
              </h3>

              <p className="text-gray-600 leading-7">
                Hire top cloud experts directly for your business.
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="pt-15 px-4 pb-20 bg-gradient-to-b from-[#f3f4f6] to-transparent">
        <div className="text-3xl font-bold text-gray-900 text-center mb-2">
          Get In Touch With Us.
        </div>
        <p className="text-gray-500 text-sm leading-relaxed text-center mb-10">
          Turn every digital interaction into a competitive advantage with high-velocity financial engines built to scale.
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-full md:w-1/2 mx-auto">
          <BottomForm />
        </div>
      </section>
      <Footer />

    </main>

  );
}