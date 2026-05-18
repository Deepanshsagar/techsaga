import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function NodeJSPage() {
  const nodeFeatures = [
    "Non-blocking, asynchronous architecture for handling concurrent requests efficiently.",
    "Highly scalable environment suitable for large-scale applications.",
    "JavaScript support on both frontend and backend for code consistency.",
    "Fast and high-performance execution powered by the V8 engine.",
    "Extensive ecosystem of modules and packages through npm.",
    "Event-driven programming model for responsive applications.",
    "Excellent support for microservices architecture.",
    "Ideal for real-time applications like chat and collaboration tools.",
    "Cross-platform compatibility across Windows, macOS, and Linux.",
    "Strong community support with extensive learning resources.",
  ];

  const serviceFeatures = [
    "eCommerce Solutions",
    "Social Networking and Collaboration Applications",
    "Online Business Applications",
    "CMS or Back End System for Data Management",
    "Advanced Node.js Programming",
    "Custom Node.js Programming",
  ];

  const faqs = [
    {
      question: "What is Node.js?",
      answer:
        "Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code on the server side. It provides an event-driven, non-blocking I/O model, making it efficient and scalable for building network applications.",
    },
    {
      question: "What are the benefits of using Node.js for development?",
      answer:
        "Node.js offers high performance, scalability, code reuse with JavaScript, real-time capabilities, and access to a vast ecosystem of npm packages.",
    },
    {
      question: "Can I use Node.js for building web applications?",
      answer:
        "Yes, Node.js is widely used for building web applications, APIs, web servers, and real-time platforms.",
    },
    {
      question: "What is npm, and how does it relate to Node.js?",
      answer:
        "npm (Node Package Manager) is the default package manager for Node.js. It helps developers install and manage libraries, frameworks, and dependencies.",
    },
    {
      question: "Which databases can I use with Node.js?",
      answer:
        "Node.js supports databases like MongoDB, MySQL, PostgreSQL, Redis, and many others through official drivers and libraries.",
    },
    {
      question: "Is Node.js suitable for microservices architecture?",
      answer:
        "Yes, Node.js is an excellent choice for microservices because of its lightweight, scalable, and asynchronous nature.",
    },
    {
      question: "Can I use Node.js for desktop application development?",
      answer:
        "Yes, frameworks like Electron allow developers to build cross-platform desktop applications using Node.js and web technologies.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "With transparent and fixed pricing, we provide clear and upfront costs for smooth project execution.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models that optimize productivity and project responsiveness.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient hiring solutions and recruitment support to help businesses build expert teams.",
      image: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[700px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/nodejs_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                Node.js
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                With our Node.js development services, we minimize complexity,
                reduce costs, and optimize performance & scalability for your
                business applications.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center bg-[#4291CE] hover:bg-[#3279b0] text-white px-8 py-4 rounded-xl transition duration-300 font-semibold"
                >
                  Connect with expert
                  <span className="ml-3">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="grid sm:grid-cols-12 gap-4 items-end">
                <div className="sm:col-span-8">
                  <Image
                    src="/assets/img/nodejs1.jpg"
                    alt="Node.js Development"
                    width={700}
                    height={500}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>

                <div className="sm:col-span-4">
                  <div className="bg-[#4291CE] text-white rounded-2xl py-10 px-6 text-center">
                    <h3 className="text-5xl font-bold">1600</h3>
                    <p className="mt-3 text-lg">Projects Complete</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Image
                  src="/assets/img/nodejs2.jpg"
                  alt="Node.js"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Node.js Development
              </h2>

              <div className="mt-4">
                <Image
                  src="/assets/img/line1.png"
                  alt="line"
                  width={180}
                  height={20}
                />
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Node.js is a powerful JavaScript runtime environment that allows
                developers to execute JavaScript code on the server side.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                It uses an event-driven, non-blocking I/O model, making it
                efficient and scalable for building modern network applications.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Node.js leverages the V8 JavaScript engine for high-performance
                execution and supports a vast ecosystem of modules and packages
                through npm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            TechSaga&apos;s Expertise in Node.js Development and Fundamentals
          </h2>

          <div className="flex justify-center mt-5">
            <Image
              src="/assets/img/line1.png"
              alt="line"
              width={180}
              height={20}
            />
          </div>

          <p className="mt-8 leading-8 text-gray-700">
            TechSaga delivers robust and scalable Node.js development solutions
            powered by deep expertise in asynchronous programming and
            event-driven architecture.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Our experienced developers leverage npm modules and modern Node.js
            technologies to build secure, responsive, and high-performance
            applications.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            We focus on creating scalable backend systems and tailored solutions
            aligned with business goals and industry standards.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/assets/img/index-adhere.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1727]/80"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              {nodeFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Exploring the Enhanced Features
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">FAQs</h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-12 items-start">
            <div className="bg-[#4291CE] rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-5">
                Our Customized Node.js Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                We provide tailored Node.js development services focused on
                scalability, performance, and business-specific functionality.
              </p>

              <Image
                src="/assets/img/faq-mod.png"
                alt="FAQ"
                width={520}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white border-2 rounded-2xl p-6 group shadow-sm"
                >
                  <summary className="cursor-pointer flex justify-between items-center font-semibold text-lg">
                    {faq.question}
                    <span className="group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>

                  <p className="mt-5 text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                What We Adhere to Serve as a Node.js Development Company
              </h2>

              <div className="mt-4">
                <Image
                  src="/assets/img/line1.png"
                  alt="line"
                  width={180}
                  height={20}
                />
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                As a leading Node.js development company, we deliver reliable,
                scalable, and innovative backend solutions tailored to modern
                business requirements.
              </p>

              <div className="mt-8 space-y-4">
                {serviceFeatures.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="text-[#4291CE] font-bold">✓</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/nodejs3.jpg"
                alt="Node.js Services"
                width={600}
                height={600}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-5">
              Let&apos;s Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible budget, customized approach, and seamless collaboration
              tailored to your project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationCards.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-8 text-center hover:shadow-xl transition duration-300"
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