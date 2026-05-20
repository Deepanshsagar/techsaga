import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/technologies/joomla");
}


export default function JoomlaPage() {
  const joomlaFeatures = [
    "Customizable templates and themes for creating unique website designs.",
    "Extensive library of extensions and plugins to enhance functionality.",
    "User-friendly administrative interface for easy content management.",
    "Multi-language support to cater to a global audience.",
    "SEO-friendly structure and built-in optimization features.",
    "Robust security measures and regular updates for safe development.",
    "Scalability to handle websites of varying sizes and complexities.",
    "Integration capabilities with third-party APIs and services.",
    "Responsive and mobile-friendly designs for all devices.",
    "Strong community support with continuous improvements and resources.",
  ];

  const serviceFeatures = [
    "Joomla Template Development",
    "Joomla Theme Development Service",
    "Joomla CMS Development",
    "Custom Website Development",
    "Module Development",
    "Consulting Services",
    "Extension Development",
    "Migration and Upgradation",
    "Maintenance and Support",
  ];

  const faqs = [
    {
      question: "What is Joomla?",
      answer:
        "Joomla is a popular open-source content management system (CMS) used for creating dynamic and interactive websites.",
    },
    {
      question: "What are the advantages of Joomla development?",
      answer:
        "Joomla offers a user-friendly interface, customizable templates, a wide range of extensions, multi-language support, SEO-friendly architecture, and strong community support.",
    },
    {
      question: "What types of websites can be built with Joomla?",
      answer:
        "Joomla can be used to develop blogs, business websites, e-commerce platforms, community portals, educational websites, and more.",
    },
    {
      question:
        "Can you customize Joomla templates to match our brand identity?",
      answer:
        "Yes, we provide customized Joomla templates and themes tailored to your brand identity and business requirements.",
    },
    {
      question:
        "Can you integrate custom features into a Joomla website?",
      answer:
        "Absolutely. We can integrate custom features like e-commerce systems, memberships, social media integrations, and third-party APIs.",
    },
    {
      question: "What sets your Joomla development services apart?",
      answer:
        "Our Joomla development services stand out through our expertise, tailored solutions, technical excellence, and commitment to delivering successful projects.",
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
          backgroundImage: "url('/assets/img/joomla_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                Joomla
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Take your business to the next level with a professional
                website designed and developed by experts using Joomla
                development services.
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
                    src="/assets/img/Joomla1.jpg"
                    alt="Joomla Development"
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
                  src="/assets/img/Joomla2.jpg"
                  alt="Joomla"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Joomla Development
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
                Joomla is a popular content management system (CMS) used for
                website development. It is an open-source platform that allows
                users to create dynamic and interactive websites with ease.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Joomla offers customizable templates, extensions, and
                user-friendly administrative tools that help businesses build
                engaging digital experiences efficiently.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Whether it's a simple business website or a complex e-commerce
                platform, Joomla provides a scalable and flexible framework for
                modern web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Joomla Over Other Development Services
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
            Joomla benefits from continuous updates, strong community support,
            and a vast ecosystem of developers, designers, and extensions.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Its built-in SEO capabilities help improve website visibility,
            search rankings, and online reach through optimized structures and
            metadata management.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Joomla’s scalability and modular architecture allow businesses to
            expand functionality easily while adapting to evolving requirements.
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
              {joomlaFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Unleash the Power of Joomla with Advanced Features
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
                Our Customized Joomla Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                We offer tailored Joomla development solutions designed to meet
                your business goals and create exceptional digital experiences.
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
                Techsaga Adheres to Serve the Joomla Development Services
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
                We specialize in delivering tailored Joomla development
                solutions, from custom themes and modules to enterprise-grade
                CMS development and support services.
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
                src="/assets/img/Joomla3.jpg"
                alt="Joomla Services"
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