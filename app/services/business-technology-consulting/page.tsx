// app/services/business-technology-consulting/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function BusinessTechnologyConsultingPage() {
  const services = [
    "Strategy",
    "Planning",
    "Implementation",
    "Support",
  ];

  const consultingBenefits = [
    "Expertise",
    "Save time and money",
    "Reduce risk",
    "Improve performance",
  ];

  const consultantFactors = [
    "Experience",
    "Expertise",
    "Reputation",
    "Cost",
  ];

  const clientIndustries = [
    "E-commerce solution expertise",
    "Real estate and healthcare industry specialization",
    "Catering to logistics, travel, banking, and education sectors",
    "Enhancing online presence for retail and consumer goods",
    "Assisting media and entertainment businesses",
  ];

  const blueLeft = [
    "Business technology consulting offers expertise in leveraging technology to drive growth and success for businesses.",
    "Consultants assess existing technology infrastructure and develop tailored strategies aligned with business goals.",
    "Services include IT strategy formulation, software selection and implementation, data analytics, cybersecurity, cloud migration, and digital transformation.",
    "Consultants help businesses save time and money by avoiding costly mistakes and optimizing technology investments.",
    "They provide guidance and support in implementing new technologies, including training employees for effective utilization.",
  ];

  const blueRight = [
    "Ongoing support and maintenance ensure the long-term success and optimal performance of implemented technologies.",
    "Consultants have experience across various industries, enabling them to understand unique challenges and requirements.",
    "They assist with process improvements, efficiency enhancement, and innovation through technology adoption.",
    "Business technology consulting helps businesses stay competitive by keeping them abreast of evolving technology trends.",
    "Consultants prioritize client satisfaction, striving to deliver measurable results and empowering businesses to thrive in the digital age.",
  ];

  const features = [
    {
      title: "Enhanced Brand Reputation",
      description:
        "We create a positive online presence, engage with your audience, and deliver a seamless customer experience, building trust and credibility in your industry.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Competitive Advantage",
      description:
        "With our expertise and innovative strategies, we help you stand out in the market and stay ahead of your competitors.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Cost Effectiveness",
      description:
        "Our solutions generate high ROI by optimizing your budget, targeting the right audience, and monitoring campaigns for maximum efficiency.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Benefits of Improved ROI",
      description:
        "Enhance brand reputation, gain a competitive advantage, receive strategic guidance, and ongoing collaboration and support.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Strategic Guidance",
      description:
        "Our digital experts offer insights, recommendations, and actionable strategies to align your technology efforts with your business goals.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Latest Trend",
      description:
        "Our team stays updated with the latest trends, technologies, and best practices, providing cutting-edge strategies for optimal results.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "What is business technology consulting, and how can it benefit my organization?",
      answer:
        "Business technology consulting helps organizations leverage technology to achieve business goals through strategy, implementation, and optimization, improving efficiency, productivity, and competitiveness.",
    },
    {
      question:
        "How do business technology consultants determine the right solutions for my business?",
      answer:
        "Consultants assess your goals, infrastructure, and operational challenges to recommend scalable and cost-effective solutions aligned with your objectives.",
    },
    {
      question:
        "Can business technology consulting improve operational efficiency?",
      answer:
        "Yes. Consultants streamline workflows, automate repetitive tasks, and implement systems that enhance productivity and operational performance.",
    },
    {
      question:
        "What role does business technology consulting play in digital transformation?",
      answer:
        "Consultants guide businesses in adopting modern technologies, integrating systems, improving customer experiences, and enabling successful digital transformation initiatives.",
    },
    {
      question:
        "How do consultants ensure technology security and data integrity?",
      answer:
        "They implement cybersecurity measures, assess vulnerabilities, ensure compliance, and provide ongoing monitoring and support to protect systems and business data.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring deliverables and business value are achieved within your budget and timeline.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models designed around project requirements with agile responsiveness and optimized productivity.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "We help businesses recruit top technology talent efficiently with the right tools, expertise, and streamlined hiring support.",
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
                Business Technology Consulting
                {/* <span className="block text-[#4291CE]">
                  Consulting
                </span> */}
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                Technology consulting services that align business goals with the right digital solutions.
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
              Innovating Business Solutions
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Need for Business Technology Consulting
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
                Exquisite Guidance From Expert Business Technology Consultants
              </h3>

              <p className="leading-8 mb-8">
                Business technology consultants offer valuable support across
                various areas. They assist businesses in developing a technology
                strategy aligned with organizational goals, planning
                implementations, budgeting, staffing, and training employees to
                effectively adopt modern technologies.
              </p>

              <p className="leading-8 mb-8">
                Consultants also provide ongoing post-implementation support,
                troubleshooting, and training updates to ensure long-term
                success and maximum value from technology investments.
              </p>

              <ul className="space-y-4">
                {services.map((item, index) => (
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
                src="/assets/img/tech_v1.png"
                alt="Business Technology Consulting"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/tech-v.1.png"
                alt="Technology Consulting"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Optimise Business Performance By Technology Consulting
              </h3>

              <p className="leading-8 mb-8">
                Working with a business technology consultant provides
                expertise, reduces costly mistakes, minimizes risks, and helps
                organizations optimize performance through effective technology
                implementation and support.
              </p>

              <div className="space-y-4">
                {consultingBenefits.map((item, index) => (
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
                Navigating the Right Path With Best Business Technology
                Consultant
              </h3>

              <p className="leading-8 mb-8">
                Choosing the right consultant requires evaluating experience,
                expertise, reputation, and cost. Businesses should ensure the
                consultant aligns with organizational goals and can deliver
                practical, scalable, and transparent solutions.
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
                src="/assets/img/tech-v2.1.png"
                alt="Business Consultant"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Base */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/tech-v4.1.png"
                alt="Diverse Client Base"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Expanding Horizons: Serving a Diverse Client Base
              </h3>

              <p className="leading-8 mb-8">
                At Techsaga, we help businesses improve operations, optimize ROI,
                reduce investment costs, and accelerate growth through tailored
                technology consulting strategies across multiple industries.
              </p>

              <div className="space-y-5">
                {clientIndustries.map((item, index) => (
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
              Tech Transformation Catalyst
            </h2>

            <p className="text-lg">
              Unleashing Business Potential through Innovative Consulting
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
              Unleash Business Potential with Business Technology Consulting
            </h2>

            <p className="text-lg text-gray-600">
              Strategic consulting solutions designed to improve ROI, strengthen
              business operations, and accelerate digital growth.
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
              Our Business Technology Consulting Expertise
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