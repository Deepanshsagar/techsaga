import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/technologies/python");
}
export default function PythonPage() {
  const pythonFeatures = [
    "Versatility for web development, data analysis, machine learning, automation, and more.",
    "Clean and readable syntax that improves development efficiency and collaboration.",
    "Extensive ecosystem of libraries including Django, Flask, NumPy, Pandas, and TensorFlow.",
    "Cross-platform compatibility across Windows, macOS, and Linux.",
    "Rapid development cycles with simplified coding structure.",
    "Easy integration with third-party systems and existing applications.",
    "Scalable and high-performance application development capabilities.",
    "Strong community support with extensive documentation and resources.",
    "Extensibility through C/C++ integration for performance-critical modules.",
    "Open-source and cost-effective technology for businesses of all sizes.",
  ];

  const serviceFeatures = [
    "Python Software Development",
    "Dynamic Website Development",
    "Enterprise Web Application Development",
    "Python PHP Integration",
    "Python CMS Development",
    "Maintenance and Support for Python",
  ];

  const faqs = [
    {
      question: "What is Python development?",
      answer:
        "Python development refers to building applications, websites, automation tools, machine learning models, and data-driven solutions using the Python programming language.",
    },
    {
      question: "Why should I choose Python for development projects?",
      answer:
        "Python offers versatility, rapid development, readability, scalability, and a vast ecosystem of frameworks and libraries for modern application development.",
    },
    {
      question: "What types of projects can be built with Python?",
      answer:
        "Python can be used for web development, AI and machine learning, automation, data analysis, enterprise applications, APIs, and cloud-based platforms.",
    },
    {
      question:
        "Can you customize Python solutions for specific business requirements?",
      answer:
        "Yes, we provide fully customized Python development services tailored to your business objectives, workflows, and scalability requirements.",
    },
    {
      question:
        "How do you ensure security and quality in Python applications?",
      answer:
        "We follow industry best practices, perform rigorous testing, and implement secure coding standards to deliver reliable and secure Python applications.",
    },
    {
      question: "What development approach do you follow?",
      answer:
        "We use agile methodologies that ensure transparency, collaboration, faster delivery cycles, and adaptability throughout the development process.",
    },
    {
      question:
        "How can I get started with your Python development services?",
      answer:
        "You can contact our team through the contact page to discuss your project requirements and get a tailored consultation.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring predictable project costs and smooth execution.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible engagement models designed to optimize collaboration and maximize productivity.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Hire top technical talent efficiently with our direct recruitment support and expertise.",
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
          backgroundImage: "url('/assets/img/python_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                Python
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Harness the agility, simplicity, and versatility of Python to
                revolutionize your business with scalable and future-ready
                digital solutions.
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
                    src="/assets/img/pythone-serv1.jpg"
                    alt="Python Development"
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
                  src="/assets/img/iphone-serv-2.1.jpg"
                  alt="Python Services"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Python Development
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
                Python development offers a versatile and powerful solution for
                businesses seeking to innovate and thrive in the digital era.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                With its clean syntax, vast library ecosystem, and strong
                community support, Python enables the creation of scalable web
                applications, automation tools, machine learning models, and
                enterprise-grade platforms.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Our expert Python developers deliver secure, scalable, and
                customized solutions tailored to your unique business goals and
                digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Python Experts at Your Service
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
            Our experienced Python developers specialize in delivering powerful
            solutions across web development, machine learning, data analysis,
            automation, and enterprise application development.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            We follow agile methodologies and industry best practices to ensure
            efficient collaboration, faster delivery cycles, and scalable
            application architecture.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Whether you need a modern web platform, AI-powered solution, or
            business automation system, we leverage Python to create innovative
            applications that drive measurable business growth.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/assets/img/list-home.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1727]/80"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              {pythonFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                What Makes Python a Powerful Technology
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
                Our Customized Python Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Experience tailored Python development solutions designed to
                meet your business requirements, improve operational efficiency,
                and accelerate innovation.
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
                Leading the Way in Python Development
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
                We combine innovation, technical expertise, and customer-focused
                development practices to deliver exceptional Python solutions
                that help businesses grow and scale efficiently.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Our Python development services are designed to deliver secure,
                scalable, and high-performance applications tailored to your
                business goals.
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
                src="/assets/img/python-serve3.jpg"
                alt="Python Services"
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
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible budget, customized approach, and seamless collaboration
              tailored to your project requirements and business objectives.
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