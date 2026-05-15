// app/services/application-support/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function ApplicationSupportPage() {

  // =========================
  // UPDATED CONTENT ONLY
  // =========================


  const designSolutions = [
    "We take the time to understand your business processes, challenges, and goals.",
    "Through in-depth consultations, we gather insights to create a comprehensive development plan.",
    "Our skilled designers collaborate with you to create intuitive and visually appealing interfaces.",
    "We focus on user experience, ensuring that the software is user-friendly and enhances productivity.",
  ];

  const skilledTeam = [
    "Delivering projects in a time-bound manner",
    "Expert Android developers",
    "Competent iOS development",
    "User-friendly UI/UX design",
  ];

  const futureBenefits = [
    "Enhanced Efficiency",
    "Competitive Advantage",
    "Integration Capabilities",
    "Data Security and Confidentiality",
  ];

  const processSteps = [
    "Requirement Analysis",
    "Design and Development",
    "Quality Assurance",
    "Deployment and Support",
  ];

  const empowerLeft = [
    "Tailor-made solutions to meet your specific business needs",
    "Enhanced efficiency and productivity through optimized workflows",
    "Improved customer experience with personalized features",
    "Streamlined business processes and automation of tasks",
    "Scalable solutions that can grow with your business",
  ];

  const empowerRight = [
    "Integration of multiple systems for seamless data flow",
    "Increased security and protection of sensitive information",
    "Competitive advantage with unique software solutions",
    "Ongoing support and maintenance to ensure smooth operations",
    "Empowerment to innovate and stay ahead in the digital landscape",
  ];

  const features = [
    {
      title: "Enhanced Efficiency",
      description:
        "Streamlined solutions tailored to automate workflows, remove bottlenecks, and enhance productivity.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Data Security & Confidentiality",
      description:
        "Robust security measures ensure the confidentiality and integrity of your business data.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Competitive Advantage",
      description:
        "Unique features and functionalities help your business stand out from competitors.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Integration Capabilities",
      description:
        "Smooth data flow and communication between systems eliminate silos and improve operations.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce manual processes, optimize resources, and eliminate unnecessary software costs.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Agile Approach",
      description:
        "Iterative development cycles ensure flexibility, continuous feedback, and refinement.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "Why should I opt for custom software development instead of using off-the-shelf software?",
      answer:
        "Custom software gives complete control over features and functionality while ensuring scalability, flexibility, and seamless integration with your existing systems.",
    },
    {
      question:
        "How long does the custom software development process typically take?",
      answer:
        "The timeline depends on project complexity, required features, customization level, and available resources. It may range from weeks to months.",
    },
    {
      question: "How much does custom software development cost?",
      answer:
        "The cost depends on project scope, complexity, technology stack, features, and level of customization required.",
    },
    {
      question:
        "What ongoing support and maintenance are provided for custom software?",
      answer:
        "We provide bug fixes, updates, enhancements, and technical support through various communication channels.",
    },
    {
      question:
        "Can custom software be integrated with existing systems and databases?",
      answer:
        "Yes, custom software can integrate seamlessly with existing systems for smooth data flow and operations.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring deliverables are achieved within your budget and timeline.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models that optimize productivity and project resources.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "We help businesses efficiently hire top talent without intermediaries.",
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
                Application
                <span className="block text-[#4291CE]">
                  Support Services
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 1 */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Crafting Digital Advancement
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Custom Software Delivering Exceptional Results for Your Growth
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
                Designing a Tailor Made Solution
              </h3>

              <ul className="space-y-5">
                {designSolutions.map((item, index) => (
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
                src="/assets/img/cust-div.jpg"
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
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/q.jpg"
                alt="team"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-5">
                We Have a Skilled Team
              </h3>

              <p className="leading-8 mb-5">
                Our team of skilled developers, engineers, and designers work
                closely with you to understand your business processes,
                challenges, and goals.
              </p>

              <p className="leading-8 mb-5">
                We pride ourselves on delivering projects within the designated
                timeframe while maintaining the highest quality standards.
              </p>

              <div className="space-y-4">
                {skilledTeam.map((item, index) => (
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
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Transforming Future With the Custom Software Development
              </h3>

              <p className="leading-8 mb-8">
                Custom software development offers enhanced efficiency,
                scalability, flexibility, and security while providing a strong
                competitive advantage.
              </p>

              <div className="space-y-5">
                {futureBenefits.map((item, index) => (
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
                src="/assets/img/06.jpg"
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
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/04.jpg"
                alt="process"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Our Custom Development Journey Blueprint
              </h3>

              <p className="leading-8 mb-8">
                Our custom development journey begins with analyzing your
                business requirements and objectives while following an agile
                development approach.
              </p>

              <div className="space-y-5">
                {processSteps.map((item, index) => (
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
        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Experience the Power of Custom Software Development
            </h2>

            <p className="text-lg">
              Harness Innovation and Efficiency with Custom Software Solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="space-y-6">
              {empowerLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {empowerRight.map((item, index) => (
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
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Fuel Your Business Success with Our Tailor-Made Software Solutions
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Skyrocket Your Business Growth with Our Custom Software Development Services
            </h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/04.jpg"
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
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-14">

            <h2 className="text-4xl font-bold">
              Our Custom Software Development Expertise
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
        <div className="container mx-auto px-4">

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

      <Footer />
    </div>
  );
}