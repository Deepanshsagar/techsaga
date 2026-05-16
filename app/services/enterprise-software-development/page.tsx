// app/services/application-support/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Enterprises() {

  const teamPoints = [
    "We have a pool of qualified front-end and back-end experts",
    "We think Out-of-Box facilitating innovative enterprise solutions",
    "We follow the TCLE Principle - Time, Cost & Labor Effective",
    "Dedicated development and digital marketing teams for your business growth",
  ];

  const keyFeatures = [
    "Customization & Scalability",
    "Seamless Integration & Security",
    "Best User Experience",
    "Ongoing Support",
  ];

  const whyChoose = [
    "Tailored Solutions",
    "Enhanced Efficiency",
    "Scalability",
    "Data-Driven Insights",
    "Competitive Advantage",
  ];

  const developmentSteps = [
    "Discovery and Requirements Gathering",
    "Design and Architecture",
    "Development and Testing",
    "Deployment and Integration",
    "Maintenance and Support",
    "Continuous Improvement",
  ];

  const excellenceLeft = [
    "Decades of experience in enterprise software development",
    "Skilled developers with expertise in diverse technologies",
    "Customized enterprise software solutions",
    "Scalable architecture for future business growth",
    "Seamless integration with existing systems",
  ];

  const excellenceRight = [
    "Agile development methodologies",
    "High-quality assurance and testing processes",
    "Long-lasting client relationships",
    "Continuous innovation and learning",
    "Successful delivery across multiple industries",
  ];

  const features = [
    {
      title: "Customisable Tailored Solution",
      description:
        "Customized enterprise software development solutions designed specifically for your business goals and requirements.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Best User Experience",
      description:
        "User-centric enterprise applications with intuitive interfaces for improved usability and productivity.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Continuous Maintenance & Support",
      description:
        "Comprehensive maintenance, updates, optimization, and support for uninterrupted operations.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Cutting Edge Technologies",
      description:
        "Future-ready enterprise solutions powered by the latest tools and technologies.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Proven Track Record",
      description:
        "Strong portfolio of successful enterprise software implementations across industries.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Data Security & Confidentiality",
      description:
        "Robust security systems ensuring maximum protection of sensitive business information.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is enterprise software development?",
      answer:
        "Enterprise software development focuses on building scalable and secure applications that help organizations manage operations, workflows, and business processes efficiently.",
    },
    {
      question: "What are the advantages of enterprise software development?",
      answer:
        "Enterprise software provides customization, scalability, seamless integration, enhanced efficiency, and better business automation.",
    },
    {
      question: "How long does it take to develop enterprise software?",
      answer:
        "The timeline depends on project complexity, required features, integrations, and business requirements. It can range from a few months to over a year.",
    },
    {
      question: "Is enterprise software development scalable?",
      answer:
        "Yes, enterprise software solutions are built with scalable architecture that supports growing business requirements and user demands.",
    },
    {
      question: "What ongoing support is provided for enterprise software?",
      answer:
        "We provide continuous maintenance, updates, security patches, bug fixing, optimization, and technical support services.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear pricing models ensuring complete transparency and timely project delivery within budget.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible engagement models designed to optimize productivity and project resources.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Helping businesses hire top enterprise talent directly and efficiently.",
      image: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div>
      <Header />

      {/* HERO BANNER SAME */}
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
                Enterprise 
                <span className="block text-[#4291CE]">
                 Software development
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Powering Enterprise Innovation
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Revolutionize Your Business By Enterprise Software
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
              <h3 className="text-3xl font-bold mb-8">
                We Have a Team of Industry Professionals
              </h3>

              <p className="leading-8 mb-6">
                At Techsaga, we take pride in our team of industry professionals
                who possess extensive experience in enterprise software development
                and successfully cater to modern business needs.
              </p>

              <ul className="space-y-5">
                {teamPoints.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#4291CE] text-white flex items-center justify-center text-sm mt-1">
                      ✓
                    </div>

                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src="/assets/img/enterprise-q1.jpg"
                alt="solution"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
               src="/assets/img/enterprise-s3.jpg"
                alt="team"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-5">
                Key Features of Our Enterprise Software Development
              </h3>

              <p className="leading-8 mb-6">
                Our enterprise software solutions are fully customizable,
                scalable, secure, and designed for seamless integration
                with your existing systems and workflows.
              </p>

              <div className="space-y-4">
                {keyFeatures.map((item, index) => (
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

      {/* SECTION 3 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Why Use Our Enterprise Software Development Solution
              </h3>

              <p className="leading-8 mb-8">
                Our enterprise solutions streamline workflows, automate business
                operations, improve efficiency, and help businesses gain a strong
                competitive advantage.
              </p>

              <div className="space-y-5">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center">

                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4 className="text-lg font-semibold">
                      {item}
                    </h4>

                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/enterprise-s5.jpg"
                alt="future"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/enterprise-s7.jpg"
                alt="process"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Building the Future With Enterprise Software Development
              </h3>

              <p className="leading-8 mb-8">
                We follow agile methodologies, scalable architecture planning,
                testing, deployment, and continuous support to build future-ready
                enterprise applications.
              </p>

              <div className="space-y-5">
                {developmentSteps.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">

                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4 className="text-lg font-semibold pt-3">
                      {item}
                    </h4>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Decades of Excellence in Software Development
            </h2>

            <p className="text-lg">
              Experience the Power of Software Development Excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="space-y-6">
              {excellenceLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {excellenceRight.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Cutting-Edge Enterprise Software Development Solutions
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Unleash the Power of Innovation for Your Business
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
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

          <div className="max-w-4xl mx-auto text-center mb-14">

            <h2 className="text-4xl font-bold">
              Our Enterprise Software Development Expertise
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

      {/* COLLABORATION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <h2 className="text-4xl font-bold mb-5">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible Budget, Customized Approach. Choose What Works for You.
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