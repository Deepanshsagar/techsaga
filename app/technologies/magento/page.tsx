import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function MagentoPage() {
  const magentoFeatures = [
    "Flexible and scalable e-commerce platform",
    "Extensive customization options for design and functionality",
    "Seamless integration with various payment gateways",
    "Mobile-responsive design for enhanced user experience",
    "Advanced SEO features for better search engine visibility",
    "Multi-store management capabilities for efficient operations",
    "Robust security features to protect customer data",
    "Active community support and resources for continuous learning and improvement",
    "Comprehensive features for product management and customer engagement",
  ];

  const perfectFitFeatures = [
    "Mobile Responsive Design",
    "Advanced SEO Features",
    "Robust Security",
    "Open source – Highly customization",
    "Freedom to choose hosting services",
    "Easy multi-platform integration",
    "Increase Website Speed",
  ];

  const faqs = [
    {
      question: "Is Magento suitable for small businesses?",
      answer:
        "Yes, Magento offers flexibility and scalability, making it suitable for businesses of all sizes, including small businesses.",
    },
    {
      question: "Can I customize the design of my Magento store?",
      answer:
        "Absolutely! Magento offers extensive customization options allowing you to create a unique and visually appealing online store.",
    },
    {
      question: "Is Magento SEO-friendly?",
      answer:
        "Yes, Magento provides advanced SEO features and tools to optimize your store for search engines and improve rankings.",
    },
    {
      question: "How secure is Magento for customers' data?",
      answer:
        "Magento prioritizes security with secure payment gateways, encryption, and regular updates to protect sensitive customer data.",
    },
    {
      question: "Can I integrate Magento with other applications?",
      answer:
        "Yes, Magento supports seamless integration with payment gateways, CRM systems, shipping providers, and many third-party tools.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring value-driven deliverables within your timeline and budget.",
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
          backgroundImage: "url('/assets/img/magento_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                Magento
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Amplify your online visibility and take your business to new
                heights with our expert Magento development services. We create
                customized, high-performing Magento websites that drive growth
                and maximize online presence.
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
                    src="/assets/img/magento-inner.jpg"
                    alt="Magento Development"
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
                  src="/assets/img/magento-inner2.jpg"
                  alt="Magento"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Magento Development Company
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
                Magento provides businesses with the tools and functionalities
                needed for creating robust online stores. Magento is highly
                flexible and customizable, making it suitable for businesses of
                all sizes and industries.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                It offers comprehensive features for product management, order
                processing, and customer engagement. Magento enables businesses
                to scale efficiently while staying competitive in the evolving
                e-commerce landscape.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Take advantage of Magento development services today and get the
                most out of your online store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Maximizing E-commerce Potential with Magento Development
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
            Welcome to our vibrant digital realm, where Magento development
            services empower businesses to achieve e-commerce success. Our
            comprehensive Magento solutions provide businesses with the tools
            and functionalities needed to create high-performing online stores.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            From custom website development and theme customization to extension
            development and migration services, we tailor our solutions to your
            business goals while ensuring performance optimization and security.
          </p>
        </div>
      </section>

      {/* Blue Feature Section */}
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
              {magentoFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Harness the Power of Magento
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
                Our Customized Magento Development Service
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Experience the power of customized Magento development tailored
                to your business needs and unlock the full potential of this
                robust platform.
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

      {/* Perfect Fit */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Magento - Perfect Fit For Business Success
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
                Magento is the perfect choice for businesses due to its
                flexibility, scalability, extensive customization options, and
                robust security features that empower brands to succeed in the
                competitive digital marketplace.
              </p>

              <div className="mt-8 space-y-4">
                {perfectFitFeatures.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="text-[#4291CE] font-bold">✓</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/magento-inner3.jpg"
                alt="Magento Success"
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
              Flexible budget and customized engagement models tailored to your
              business requirements.
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