// app/services/continuous-testing/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function ContinuousTestingPage() {
  const significance = [
    "Efficiency Boost",
    "Early Detection",
    "Vulnerability Prevention",
    "Agile Development",
    "Reliable Software",
  ];

  const workflowBenefits = [
    "Efficiency Boost",
    "Risk Reduction",
    "Real-time Feedback",
    "Faster Delivery",
    "Improved Quality",
  ];

  const whyChoose = [
    "Expertise and Experience",
    "Tailored Solutions",
    "Cutting-Edge Tools",
    "Collaborative Approach",
    "Customer Satisfaction",
  ];

  const devopsBenefits = [
    "Enhanced efficiency",
    "Faster feedback",
    "High-quality Software products",
    "Seamless integration",
    "Agile development",
  ];

  const leftBenefits = [
    "Continuous testing maximizes software development quality at every stage.",
    "Testing integration enables faster feedback loops and early bug detection.",
    "Continuous testing fosters collaboration between developers and testers.",
    "It accelerates time-to-market and delivery of new features.",
    "It improves reliability and performance through real-time issue resolution.",
  ];

  const rightBenefits = [
    "Continuous testing promotes agility and adaptability to changing requirements.",
    "It reduces risks of failures and security vulnerabilities.",
    "It streamlines development with automated repetitive testing tasks.",
    "Continuous testing provides insights for data-driven decisions and improvement.",
    "Organizations deliver higher-quality software and improved user experiences.",
  ];

  const features = [
    {
      title: "Enhanced Quality",
      description:
        "Ensure superior software quality across the complete software development lifecycle with continuous testing excellence.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Agile Development",
      description:
        "Enable faster feedback loops and issue resolution with agile continuous testing workflows.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Risk Reduction",
      description:
        "Reduce software failures and vulnerabilities through proactive monitoring and real-time testing.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Streamlined Process",
      description:
        "Automate repetitive testing tasks to improve efficiency and optimize development resources.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Competitive Advantage",
      description:
        "Accelerate time-to-market and innovation with efficient and scalable testing solutions.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Collaboration and Insight",
      description:
        "Empower teams with continuous improvement, data-driven insights, and collaborative workflows.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is continuous testing?",
      answer:
        "Continuous testing is the ongoing process of testing software throughout the development lifecycle to ensure quality, detect issues early, and accelerate releases.",
    },
    {
      question:
        "How does continuous testing benefit software development?",
      answer:
        "It improves software quality, accelerates feedback cycles, enhances collaboration, and supports faster releases.",
    },
    {
      question:
        "How does continuous testing integrate with DevOps?",
      answer:
        "Continuous testing integrates testing activities into every stage of the DevOps pipeline to improve agility and software quality.",
    },
    {
      question:
        "What role does automation play in continuous testing?",
      answer:
        "Automation enables fast, reliable, and repeatable test execution while reducing manual effort and improving accuracy.",
    },
    {
      question:
        "How does continuous testing mitigate risks?",
      answer:
        "Continuous monitoring and testing reduce failures, security vulnerabilities, and quality-related issues.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring deliverables and value are achieved within budget.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models designed around evolving project requirements.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient hiring support to recruit top testing talent without intermediaries.",
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
                Continuous Testing
                {/* <span className="block text-[#4291CE]">
                  Testing Services
                </span> */}
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                Continuous testing practices integrated into development for faster and reliable releases.
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
              Delivering Error-Free Softwares
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Quality and Speed: Continuous Testing Excellence
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
                Profound Significance of Continuous Testing
              </h3>

              <p className="leading-8 mb-5">
                Continuous testing identifies vulnerabilities, logic flaws,
                and runtime issues early in the development lifecycle while
                supporting secure and reliable software delivery.
              </p>

              <p className="leading-8 mb-5">
                Integrated with DevOps and CI/CD workflows, continuous testing
                accelerates feedback, improves efficiency, and reduces testing
                bottlenecks.
              </p>

              <p className="leading-8 mb-8">
                Automation-driven testing enables organizations to achieve
                scalability, security, and faster releases with confidence.
              </p>

              <ul className="space-y-4">
                {significance.map((item, index) => (
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
                src="/assets/img/continuous-services-img1.png"
                alt="Continuous Testing"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/continuous-services-img2.png"
                alt="Development Workflow"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Streamlining Development Workflows With Continuous Testing
              </h3>

              <p className="leading-8 mb-5">
                Continuous testing automates testing immediately after code
                integration, reducing delays and aligning perfectly with
                DevOps principles.
              </p>

              <p className="leading-8 mb-5">
                Developers receive real-time feedback, enabling proactive issue
                resolution and concurrent workflows for improved productivity.
              </p>

              <p className="leading-8 mb-8">
                Continuous testing minimizes risks by validating software
                throughout the SDLC instead of only during isolated phases.
              </p>

              <div className="space-y-4">
                {workflowBenefits.map((item, index) => (
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

      {/* Why Choose */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Us for Continuous Testing?
              </h3>

              <p className="leading-8 mb-8">
                Our experienced team delivers reliable continuous testing
                solutions using advanced methodologies, collaborative
                workflows, and cutting-edge testing tools.
              </p>

              <div className="space-y-5">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-lg font-semibold pt-3">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/continuous-services-img3.png"
                alt="Why Choose Continuous Testing"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DevOps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/continuous-services-img4.png"
                alt="DevOps Integration"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Continuous Testing&apos;s Role in DevOps/DevSecOps
              </h3>

              <p className="leading-8 mb-5">
                Continuous testing strengthens DevOps pipelines by enabling
                testing across every stage of software development and
                deployment.
              </p>

              <p className="leading-8 mb-8">
                Integrating testing early within DevOps and DevSecOps improves
                agility, accelerates delivery, and ensures high-quality secure
                software products.
              </p>

              <div className="space-y-5">
                {devopsBenefits.map((item, index) => (
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
              Unlocking Maximum Potential Through Continuous Testing
            </h2>

            <p className="text-lg">
              Continuous testing promotes agility, quality, security, and
              reliable software delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {leftBenefits.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {rightBenefits.map((item, index) => (
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
              Unleash Continuous Testing&apos;s Dynamic Potential
            </h2>

            <p className="text-lg text-gray-600">
              Embrace continuous improvement and accelerate high-quality
              software delivery.
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Continuous Testing Expertise
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
              Let&apos;s Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible budget and customized engagement models tailored to
              your project requirements.
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