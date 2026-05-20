import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/technologies/laravel");
}


export default function LaravelPage() {
  const laravelFeatures = [
    "Elegant Syntax: Laravel offers a clean and expressive syntax that enhances developer productivity and simplifies maintenance.",
    "MVC Architecture: Laravel follows the Model-View-Controller pattern for modular and organized application structure.",
    "Database Abstraction and ORM: Work seamlessly with databases using Laravel's Eloquent ORM and expressive PHP syntax.",
    "Powerful Routing System: Simplifies URL management and RESTful API development.",
    "Blade Templating Engine: Create reusable layouts and dynamic interfaces efficiently.",
    "Robust Security: Built-in protection against XSS, CSRF, and SQL injection vulnerabilities.",
    "Caching and Session Management: Improve application performance with flexible caching systems.",
    "Task Scheduling: Automate repetitive tasks like backups, notifications, and cron jobs.",
    "Testing and Debugging Tools: Includes excellent testing support and debugging capabilities.",
    "Scalability and Flexibility: Ideal for enterprise-grade applications and growing businesses.",
  ];

  const serviceFeatures = [
    "Laravel Application Development",
    "Custom Website Development",
    "Laravel CMS Development",
    "Laravel E-commerce Development",
    "Laravel Consulting Solutions",
    "Laravel Maintenance and Support",
  ];

  const faqs = [
    {
      question: "What is Laravel?",
      answer:
        "Laravel is a popular PHP framework known for its elegant syntax and comprehensive set of tools that simplify modern web application development.",
    },
    {
      question: "What are the benefits of using Laravel?",
      answer:
        "Laravel improves developer productivity, offers strong security, modern architecture, reusable components, and excellent scalability.",
    },
    {
      question: "Can Laravel handle large-scale applications?",
      answer:
        "Yes, Laravel is highly scalable and supports enterprise-level applications with features like caching, queues, task scheduling, and database optimization.",
    },
    {
      question: "Is Laravel suitable for e-commerce development?",
      answer:
        "Yes, Laravel is widely used for e-commerce platforms with features such as shopping carts, payment integrations, and order management systems.",
    },
    {
      question: "How does Laravel ensure security?",
      answer:
        "Laravel includes built-in security protections against vulnerabilities like XSS, CSRF, SQL injection, and unauthorized access.",
    },
    {
      question: "Does Laravel support API development?",
      answer:
        "Yes, Laravel provides robust tools for RESTful API development, authentication, middleware handling, and third-party integrations.",
    },
    {
      question: "Is Laravel suitable for CMS development?",
      answer:
        "Absolutely. Laravel is ideal for building custom CMS platforms with user management, dynamic content handling, and SEO-friendly URLs.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring predictable costs and smooth project execution.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible engagement models designed to maximize productivity and collaboration.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient hiring support and expert recruitment solutions for growing teams.",
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
          backgroundImage: "url('/assets/img/laravel_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                Laravel
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Leverage Laravel’s powerful features to create scalable, secure,
                and high-performance web applications with seamless user
                experiences.
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
                    src="/assets/img/laravel2.jpg"
                    alt="Laravel Development"
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
                  src="/assets/img/laravel1.jpg"
                  alt="Laravel"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Laravel Application Development
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
                Laravel is renowned for its elegance and simplicity. It provides
                a comprehensive ecosystem that streamlines modern web
                application development.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                With expressive syntax, modular architecture, and robust
                built-in features, Laravel enables developers to build scalable
                and secure applications efficiently.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                From routing and authentication to caching and database
                management, Laravel delivers everything needed for enterprise
                applications and dynamic websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Why Laravel Over Other Website Development Frameworks
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
            Laravel stands out because of its clean syntax, extensive ecosystem,
            and security-first architecture that accelerates development while
            maintaining code quality.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Its MVC architecture promotes reusable and organized code, while
            built-in tools simplify authentication, routing, database handling,
            and API development.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Combined with a strong developer community and modern development
            practices, Laravel remains one of the best choices for secure and
            scalable web development.
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
              {laravelFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>

                  <p className="text-white leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Laravel: Empowering Web Development with Cutting-Edge Features
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
                Our Customized Laravel Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Tailored Laravel development solutions designed to build secure,
                scalable, and high-performing web applications for your
                business.
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
                Drive Growth and Engagement With Our Laravel Solutions
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
                We provide comprehensive Laravel development services tailored
                to your business requirements and growth objectives.
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
                src="/assets/img/laravel3.jpg"
                alt="Laravel Services"
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
              tailored to your business requirements.
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