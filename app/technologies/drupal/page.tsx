import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/technologies/drupal");
}

export default function DrupalPage() {
  const drupalFeatures = [
    "Scalability that allows your website to grow as your business expands.",
    "Flexible modular architecture for custom features and advanced functionality.",
    "Robust security measures to protect websites and sensitive data.",
    "Powerful content management tools for organizing website content efficiently.",
    "Built-in SEO-friendly structure to improve search engine rankings.",
    "Strong community support with extensive resources and documentation.",
    "Easy integration with third-party systems, APIs, and business tools.",
    "Responsive design support for seamless mobile experiences.",
    "Long-term reliability backed by continuous development and innovation.",
  ];

  const serviceFeatures = [
    "Drupal Web Design & Development",
    "Custom Web Application Development",
    "Drupal Theme Development",
    "Drupal T&B Development",
    "Drupal Consulting and Strategy",
    "Custom CMS Development",
    "Drupal AI Integration",
    "Drupal Distribution Customization",
    "Drupal Maintenance & Support",
    "Drupal Migration Services",
  ];

  const faqs = [
    {
      question: "What is Drupal?",
      answer:
        "Drupal is a powerful and flexible open-source content management system (CMS) that allows for the creation of highly customizable websites and web applications.",
    },
    {
      question: "Why should I choose Drupal for my website?",
      answer:
        "Drupal offers advanced functionality, scalability, robust security, and flexibility, making it ideal for complex and feature-rich websites.",
    },
    {
      question: "What kind of websites can be built using Drupal?",
      answer:
        "Drupal can be used to build corporate websites, e-commerce platforms, government portals, educational websites, and community platforms.",
    },
    {
      question: "Can you migrate my existing website to Drupal?",
      answer:
        "Yes, we provide migration services that ensure smooth data transfer while preserving SEO rankings and website integrity.",
    },
    {
      question: "Can I update and manage my Drupal website myself?",
      answer:
        "Yes, Drupal provides a user-friendly administrative interface that allows you to manage content without technical expertise.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer ongoing maintenance and support services to keep your Drupal website secure, updated, and optimized.",
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
          backgroundImage: "url('/assets/img/drupal_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                Drupal
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Unleash the full potential of Drupal with professional
                development services that deliver scalable, secure, and dynamic
                digital experiences.
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
                    src="/assets/img/drupal2.jpg"
                    alt="Drupal Development"
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
                  src="/assets/img/drupal1.jpg"
                  alt="Drupal"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Drupal Development
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
                Drupal development involves creating, customizing, and
                maintaining websites using the Drupal content management system.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Drupal is a highly scalable and flexible open-source CMS that
                enables developers to build enterprise-grade digital solutions
                with advanced functionality and seamless integrations.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                From custom themes and modules to content management and
                security configurations, Drupal provides everything needed to
                create dynamic and feature-rich websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Our Approach For Delivering Exceptional Drupal Development Services
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
            At Techsaga, we focus on understanding your unique goals and
            requirements to deliver tailored Drupal development solutions.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Our process includes strategic planning, user-focused design,
            custom development, testing, and deployment while following modern
            industry standards and best practices.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            We also provide continuous maintenance and support to ensure your
            Drupal website remains secure, optimized, and future-ready.
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
              {drupalFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Harness the Potential of Drupal
              </h2>

              <p className="mt-6 text-lg text-white/80 leading-8">
                Elevate your online presence with scalable, secure, and highly
                customizable Drupal development services.
              </p>
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
                Our Customized Drupal Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Empower your website with tailored Drupal development solutions
                designed to meet your business goals and deliver exceptional
                digital experiences.
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
                Drupal Development Services Tailored For Modern Businesses
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
                We provide comprehensive Drupal development solutions designed
                to help businesses build scalable, secure, and engaging digital
                platforms.
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
                src="/assets/img/drupal3.jpg"
                alt="Drupal Services"
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
              Flexible budget, customized engagement models, and seamless
              collaboration tailored to your project requirements.
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