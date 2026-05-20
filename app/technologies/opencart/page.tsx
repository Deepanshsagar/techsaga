import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/technologies/opencart");
}
export default function OpenCartPage() {
  const opencartFeatures = [
    "Custom store design for a unique and visually appealing online presence.",
    "Seamless integration of features like payment gateways and shipping methods.",
    "Multi-store management from a single admin panel.",
    "Mobile responsiveness for a smooth user experience across devices.",
    "SEO optimization to improve visibility and search engine rankings.",
    "Easy content management for effortless updates.",
    "Built-in analytics and reporting for valuable insights.",
    "Ongoing support and updates to keep your store secure and up-to-date.",
  ];

  const serviceFeatures = [
    "OpenCart Theme Development",
    "OpenCart Migration Solutions",
    "OpenCart App Development",
    "OpenCart CMS Development",
    "OpenCart Extension Development",
    "OpenCart Payment Gateway Integration",
    "Custom OpenCart Online Store Development",
    "OpenCart Maintenance & Support",
  ];

  const faqs = [
    {
      question: "What is OpenCart?",
      answer:
        "OpenCart is an open-source e-commerce platform that allows businesses to create and manage online stores with powerful features and flexibility.",
    },
    {
      question: "Why should I choose OpenCart for my e-commerce store?",
      answer:
        "OpenCart offers a user-friendly interface, customization options, scalability, built-in features, and cost-effective solutions for businesses of all sizes.",
    },
    {
      question: "Can I customize the design of my OpenCart store?",
      answer:
        "Yes, OpenCart allows complete customization through themes and custom design implementations tailored to your brand identity.",
    },
    {
      question: "Does OpenCart support multiple payment gateways?",
      answer:
        "Yes, OpenCart supports integration with multiple payment gateways including PayPal, Stripe, and Authorize.net.",
    },
    {
      question: "Is OpenCart SEO-friendly?",
      answer:
        "Yes, OpenCart includes SEO-friendly features such as customizable URLs, meta tags, and keyword optimization.",
    },
    {
      question: "Can I manage multiple stores with OpenCart?",
      answer:
        "Yes, OpenCart allows you to manage multiple stores from a single admin panel efficiently.",
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
        "Flexible collaboration models designed to optimize productivity and project responsiveness.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "We help businesses efficiently recruit top talent with streamlined hiring support and expertise.",
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
          backgroundImage: "url('/assets/img/opencart_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                OpenCart
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Build scalable and feature-rich eCommerce websites with our
                expert OpenCart development services tailored for modern online
                businesses.
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
                    src="/assets/img/opencart-inner2.jpg"
                    alt="OpenCart Development"
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
                  src="/assets/img/open-cart-inner3.jpg"
                  alt="OpenCart"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                OpenCart Development
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
                OpenCart development offers a versatile and feature-rich
                platform for building powerful eCommerce websites with unlimited
                scalability.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Secure payment gateways ensure safe transactions while the
                intuitive content management system allows effortless updates
                and management.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                OpenCart provides extensive customization options, flexible
                architecture, and robust features to help businesses establish a
                strong online presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Our Commitment to Exceptional OpenCart Development Services
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
            We are dedicated to delivering high-quality OpenCart development
            services tailored to your business goals and eCommerce
            requirements.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Our expert OpenCart developers stay updated with the latest trends
            and best practices to provide cutting-edge and scalable solutions.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            From seamless feature integrations to robust security and ongoing
            support, we ensure a reliable and optimized OpenCart experience.
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
              {opencartFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Unveiling the Power of OpenCart Development Services
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
                Our custom OpenCart development service
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Experience the excellence of our custom OpenCart development
                service tailored to meet your unique eCommerce needs.
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
                OpenCart Development Services: What It Entails!
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
                Our core OpenCart development services help businesses create
                secure, scalable, and feature-rich eCommerce platforms.
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
                src="/assets/img/open-cart-inner1.jpg"
                alt="OpenCart Services"
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