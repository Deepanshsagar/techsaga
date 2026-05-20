// app/services/cloud-srategy-consulting/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";


import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/services/cloud-strategy-consulting");
}

export default function CloudStrategyConsultingPage() {
  const processSteps = [
    "Assessment",
    "Goal Alignment",
    "Platform Selection",
    "Roadmap Development",
    "Migration and Integration",
    "Optimization and Innovation",
  ];

  const cloudBenefits = [
    "Cost optimization through efficient pricing models and resource optimization",
    "Scalability and flexibility to quickly adapt to changing business needs",
    "Enhanced security measures for data protection and compliance",
    "Improved efficiency through automation and cloud-based tools",
    "Innovation and access to advanced technologies for a competitive edge",
  ];

  const consultantFactors = [
    "Expertise and Experience",
    "Comprehensive Approach",
    "Customization and Flexibility",
    "Strong Communication and Collaboration",
    "Client References and Case Studies",
    "Alignment with Cloud Providers",
    "Clear Pricing and Deliverables",
  ];

  const cloudAdvantages = [
    "Enhanced scalability",
    "Improved data accessibility",
    "Increased collaboration",
    "Reduced infrastructure costs",
  ];

  const blueLeft = [
    "Cloud infrastructure encompasses hardware, software, and networking resources for cloud computing services.",
    "It provides a foundation for delivering cloud-based applications, platforms, and data storage over the Internet.",
    "Cloud infrastructure components include servers, storage devices, networking components, virtualization software, and management tools.",
    "Cloud infrastructure allows remote access to computing resources without the need for on-premises infrastructure.",
    "Cloud infrastructure management involves efficient resource allocation, monitoring, and administration.",
  ];

  const blueRight = [
    "Effective management minimizes unnecessary costs and maximizes returns on investment.",
    "Techsaga offers cutting-edge cloud infrastructure services for businesses.",
    "Techsaga's services enable agility, cost optimization, and scalability.",
    "Expertise in cloud infrastructure management ensures efficient resource allocation and monitoring.",
    "Techsaga empowers businesses to innovate, scale, and transform their operations in the cloud-driven era.",
  ];

  const features = [
    {
      title: "Scalability",
      description:
        "It allows for easy scalability, enabling businesses to quickly and efficiently adjust their computing resources based on demand. This flexibility ensures that organizations can effectively handle periods of high traffic or increased workload without disruptions.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Cost Efficiency",
      description:
        "With cloud infrastructure, businesses can avoid significant upfront investments in hardware and infrastructure. Instead, they can pay for the resources they consume on a pay-as-you-go basis, making it a cost-effective solution.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Accessibility and Flexibility",
      description:
        "It enables users to access their applications and data from anywhere, at any time, as long as they have an internet connection. This accessibility and flexibility support remote work and collaboration.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Reliability and High Availability",
      description:
        "Cloud providers typically have redundant systems and data centers in multiple locations. This redundancy ensures high availability and reliability of services.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Security",
      description:
        "Cloud providers invest heavily in robust security measures to protect data and applications through encryption, access controls, and compliance frameworks.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Simplified Management",
      description:
        "Cloud infrastructure includes management tools and services that simplify the administration and monitoring of resources.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "What is the role of a Cloud Strategy Consultant?",
      answer:
        "A Cloud Strategy Consultant guides organizations in developing and implementing effective cloud strategies.",
    },
    {
      question:
        "Why should I consider Cloud Strategy Consulting for my organization?",
      answer:
        "Cloud Strategy Consulting optimizes IT infrastructure, enhances efficiency, and accelerates digital transformation.",
    },
    {
      question:
        "How can Cloud Strategy Consulting benefit my business?",
      answer:
        "It improves scalability, security, agility, and innovation while reducing operational costs.",
    },
    {
      question:
        "When is the right time to engage a Cloud Strategy Consultant?",
      answer:
        "When considering cloud migration, developing a cloud roadmap, or optimizing existing cloud infrastructure.",
    },
    {
      question:
        "How can a Cloud Strategy Consultant ensure a successful cloud transformation?",
      answer:
        "Through assessment, customized strategies, implementation guidance, and ongoing support.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "With transparent and fixed pricing, we provide clear, upfront costs, ensuring that deliverables and value are achieved within the time and budget invested by our clients.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Our Adaptive Hourly Engagement offers flexible collaboration based on project needs, optimizing resources and maximizing productivity with agile responsiveness.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "We facilitate Direct Recruitment by providing the tools, resources, and expertise to help you efficiently hire top talent without intermediaries.",
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
          backgroundImage: "url('/assets/img/advisory.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Cloud Strategy Consulting
                {/* <span className="block text-[#4291CE]">
                  Consulting
                </span> */}
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  Cloud strategy consulting to help businesses adopt secure, scalable, and cost-effective cloud solutions.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Elevating Cloud Excellence
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Cloud Solutions: Your Trusted Transformation Partner
            </h2>

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
              <h3 className="text-3xl font-bold mb-6">
                Simplified Cloud Strategy Consulting Process
              </h3>

              <p className="leading-8 mb-8">
                We conduct a comprehensive assessment of your IT landscape,
                business goals, and security requirements to develop a tailored
                cloud strategy. By aligning your objectives with cloud benefits,
                we create a plan that maximizes value and supports your vision.
              </p>

              <p className="leading-8 mb-8">
                Our experienced team ensures minimal disruption during migration,
                handling data transfer and system integration while optimizing
                your cloud environment for efficiency, governance, innovation,
                and long-term scalability.
              </p>

              <ul className="space-y-4">
                {processSteps.map((item, index) => (
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
                src="/assets/img/clo_t1.png"
                alt="Cloud Strategy Consulting"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/clo-t2.png"
                alt="Cloud Strategy"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Envisioning the Future: The Transformative Potential of Cloud
                Strategy Consulting
              </h3>

              <p className="leading-8 mb-8">
                Cloud Strategy Consulting helps organizations optimize costs,
                improve scalability, enhance security, and increase operational
                efficiency through automation and advanced cloud technologies.
              </p>

              <div className="space-y-4">
                {cloudBenefits.map((item, index) => (
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

      {/* Consultant Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Tap into the Realm of Visionary Cloud Strategy Consultants
              </h3>

              <p className="leading-8 mb-8">
                When selecting a Cloud Strategy Consultant, businesses should
                evaluate expertise, industry experience, communication,
                customization capabilities, and alignment with cloud providers
                to ensure long-term success.
              </p>

              <div className="space-y-5">
                {consultantFactors.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="min-w-[45px] h-[45px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/clo-t3.png"
                alt="Cloud Consultant"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Techsaga Cloud */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/clo-t4.png"
                alt="Cloud Services"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Harness Techsaga's Advanced Cloud Strategy Consulting
              </h3>

              <p className="leading-8 mb-8">
                We help businesses leverage cloud-native technologies, optimize
                infrastructure costs, improve collaboration, and accelerate
                innovation while maintaining security and compliance standards.
              </p>

              <div className="space-y-5">
                {cloudAdvantages.map((item, index) => (
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

      {/* Blue Section */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Harness our Cutting-Edge Cloud Strategy Consulting
            </h2>

            <p className="text-lg">
              Optimize performance, scalability, and security while unlocking
              new possibilities for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {blueLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {blueRight.map((item, index) => (
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Cloud Strategy : Key Characteristics and Benefits
            </h2>

            <p className="text-lg text-gray-600">
              Scalability, flexibility, cost-efficiency, and enhanced data
              security empower businesses to thrive in the digital era.
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
                  <h3 className="text-xl font-bold mb-4">
                    {item.title}
                  </h3>

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
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Cloud Strategy Consulting Expertise
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-5">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible budget and customized engagement models tailored to your
              business requirements.
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

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
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
    </div>
  );
}