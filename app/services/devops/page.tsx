"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomForm from "@/components/BottomForm";
export default function DevOpsDevelopmentPage() {
  const devopsCycle = [
    "Continuous Planning",
    "Continuous Development",
    "Continuous Testing",
    "Continuous Release",
    "Continuous Deployment",
    "Continuous Monitoring",
    "Continuous Feedback",
  ];

  const services = [
    "DevOps S/W Development & Consulting",
    "DevOps Assessment Solution: Infrastructure Automation",
    "Continuous Integration and Continuous Delivery (CI/CD)",
    "max-w-7xlization and Orchestration",
    "DevOps Configuration Management",
    "Monitoring and DevOps Analytics",
  ];

  const whyChoose = [
    "Delivery of Source Code to Clients",
    "Google Affiliate & Microsoft Associate",
    "Response Time Less Than 24 Hours",
    "CMMI Level 3 Requirements",
    "Clients: USA, UK, UAE, Australia, etc.",
  ];

  const devopsBenefits = [
    "Industry-leading expertise",
    "Cutting-edge technologies",
    "Collaborative approach",
    "Agile delivery",
    "Cost Efficiency",
  ];

  const tailoredLeft = [
    "Streamline your software development and IT operations with our unique tailored DevOps solution.",
    "Increase productivity and efficiency by implementing our comprehensive DevOps practices.",
    "Leverage advanced automation tools to accelerate your software delivery process.",
    "Ensure consistent and reliable environments through automated infrastructure provisioning and management.",
    "Achieve faster time to market with seamless integration of code changes and automated testing.",
  ];

  const tailoredRight = [
    "Reduce manual errors and enhance software quality with continuous integration and deployment pipelines.",
    "Simplify application deployment and enhance scalability with max-w-7xlization technologies like Docker.",
    "Optimize resource utilization and improve scalability with orchestration tools like Kubernetes.",
    "Benefit from our extensive expertise in migrating applications and infrastructure to the cloud.",
    "Gain real-time insights into performance and health with robust monitoring and analytics solutions.",
  ];

  const perks = [
    {
      title: "Efficiency Enhancement",
      desc: "DevOps streamlines processes, automates tasks, and optimizes resource utilization, resulting in improved operational efficiency and productivity.",
      img: "/assets/img/service1.jpg",
    },
    {
      title: "Agile Development",
      desc: "DevOps promotes iterative development, enabling faster delivery, rapid feedback loops, and adaptability to changing requirements.",
      img: "/assets/img/ds3.jpg",
    },
    {
      title: "Continuous Integration",
      desc: "Facilitates code integration, faster bug detection, and ensures software is always in a releasable state.",
      img: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Faster Time-to-Market",
      desc: "Accelerate delivery of features and updates while gaining a competitive edge in rapidly evolving markets.",
      img: "/assets/img/services-l1.jpg",
    },
    {
      title: "Improved Collaboration",
      desc: "Break down silos between teams, encouraging better communication, knowledge sharing, and collaboration.",
      img: "/assets/img/services-l2.jpg",
    },
    {
      title: "Enhanced Quality Assurance",
      desc: "Automated testing and monitoring ensure reliable releases and improved customer satisfaction.",
      img: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is DevOps?",
      answer:
        "DevOps combines software development and IT operations to improve collaboration, agility, and software quality.",
    },
    {
      question: "How does DevOps improve collaboration?",
      answer:
        "DevOps breaks down silos between teams, encouraging shared responsibilities, communication, and trust.",
    },
    {
      question: "What are the benefits of choosing DevOps?",
      answer:
        "Benefits include faster deployment, improved reliability, enhanced customer satisfaction, and greater business agility.",
    },
    {
      question: "How does automation play a role in DevOps?",
      answer:
        "Automation streamlines repetitive tasks, reduces errors, and accelerates software delivery.",
    },
    {
      question: "What are some common DevOps tools?",
      answer:
        "Popular tools include Git, Jenkins, Docker, Kubernetes, Ansible, Prometheus, and ELK Stack.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      desc: "Clear, upfront costs ensuring deliverables and value are achieved within your budget.",
      img: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      desc: "Flexible collaboration models optimized for productivity and agile responsiveness.",
      img: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      desc: "Hire top talent efficiently with the right tools, resources, and expertise.",
      img: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <main className="overflow-hidden">
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
                DevOps Development Services
                {/* <span className="block text-[#4291CE]">
                  Support Services
                </span> */}
              </h1>
              <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  DevOps solutions that improve collaboration, automation, and faster software delivery cycles.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
     

      {/* ABOUT */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Innovating Development & Operation
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Techsaga: Your Reliable DevOps Services Partner
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                What Exactly DevOps is!
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                DevOps combines development and operations to improve software
                delivery speed, reliability, and collaboration.
              </p>

              <div className="space-y-3">
                {devopsCycle.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4291CE]"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/assets/img/services/devops-services-img1.png"
                alt="DevOps"
                width={700}
                height={600}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20 md:mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/assets/img/services/devops-services-img3.png"
                alt="Services"
                width={700}
                height={600}
                className="rounded-3xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Our comprehensive range of DevOps services
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Experience the transformative power of DevOps with Techsaga and
                unlock seamless automation, CI/CD, cloud migration, monitoring,
                and orchestration solutions.
              </p>

              <div className="space-y-3">
                {services.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="pb-20 md:mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Hire Techsaga for DevOps Services?
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                We prioritize client satisfaction with fast delivery, expert
                consultation, and world-class development support.
              </p>

              <div className="space-y-4">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/assets/img/services/devops-services-img2.png"
                alt="Why Choose"
                width={700}
                height={600}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#4291CE] py-20 text-white ">
        <div className="max-w-7xl mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Excel with Our Unique Tailored DevOps Solution
            </h2>

            <p className="text-lg text-blue-100">
              Maximise success with our tailored DevOps solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              {tailoredLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {tailoredRight.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              The Perks of Choosing DevOps Solutions
            </h2>

            <p className="text-gray-600">
              Accelerate, innovate, and thrive with DevOps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden border hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>

                  <p className="text-gray-600 leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-20 ">
        <div className="max-w-7xl mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">
              Our DevOps Solution Expertise
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-[#4291CE] rounded-3xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Unwind Business Potential through DevOps Services
              </h3>

              <p className="leading-8 mb-8">
                We provide top-notch bespoke DevOps services to start-ups,
                SMBs, and enterprises worldwide.
              </p>

              <img
                src="/assets/img/services/faq-mod.png"
                alt="FAQ"
                width={500}
                height={400}
              />
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border p-6 shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-3">
                    ✦ {faq.question}
                  </h4>

                  <p className="text-gray-600 leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="py-20 md:mx-auto max-w-7xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-gray-600">
              Flexible budget, customized approach, and seamless collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationCards.map((item, index) => (
              <div
                key={index}
                className="text-center border rounded-3xl p-10 hover:shadow-2xl transition-all"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                </div>

                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>

                <p className="text-gray-600 leading-7">{item.desc}</p>
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
    </main>
  );
}