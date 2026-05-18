import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function BigCommercePage() {
  const bigCommerceFeatures = [
    "Enhanced e-commerce functionality",
    "Customization options for a unique online store",
    "Scalability and flexibility to grow with your business",
    "SEO optimization to improve search engine visibility",
    "Mobile responsiveness for a seamless user experience",
    "Efficient store setup and configuration",
    "Custom app and plugin development for added features",
    "Seamless payment gateway integration",
    "Streamlined product management and catalog setup",
    "Expertise in migration to BigCommerce",
    "Ongoing support and maintenance for a reliable online presence",
  ];

  const serviceFeatures = [
    "Store setup and configuration",
    "Theme customization and design",
    "Custom app and plugin development",
    "Payment gateway integration",
    "Product management and catalog setup",
    "SEO optimization",
    "Migration to BigCommerce",
    "Ongoing support and maintenance",
  ];

  const faqs = [
    {
      question: "What is BigCommerce?",
      answer:
        "BigCommerce is a leading e-commerce platform that allows businesses to create and manage online stores, sell products, and grow their online presence.",
    },
    {
      question: "Do I need technical expertise to use BigCommerce?",
      answer:
        "No, you don't need extensive technical expertise. BigCommerce provides user-friendly tools and interfaces that allow you to manage your store easily.",
    },
    {
      question: "Can you migrate my existing store to BigCommerce?",
      answer:
        "Yes, we offer migration services to seamlessly transfer your store from other platforms to BigCommerce while preserving your data.",
    },
    {
      question:
        "Can I customize the design and appearance of my BigCommerce store?",
      answer:
        "Absolutely! BigCommerce offers customizable themes, and our development services further tailor the design to match your branding.",
    },
    {
      question: "How long does it take to develop a BigCommerce store?",
      answer:
        "The timeline depends on your project requirements and complexity. We provide estimated delivery timelines after understanding your needs.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "We provide clear and upfront pricing with no hidden costs, ensuring maximum value for your investment.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models designed to optimize productivity and align with evolving project requirements.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "We help businesses efficiently hire top talent with streamlined recruitment and expert hiring support.",
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
          backgroundImage:
            "url('/assets/img/Inside-Banner-Technology/magento_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                BigCommerce
                <span className="block text-[#4291CE]">Development</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Empower your online business with scalable BigCommerce
                development solutions tailored for performance, growth, and
                exceptional customer experiences.
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
                    src="/assets/img/BigCommerce1.jpg"
                    alt="BigCommerce Development"
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
                  src="/assets/img/BigCommerce2.jpg"
                  alt="BigCommerce"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                BigCommerce Development
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
                At Techsaga, we are the leading provider of BigCommerce
                development services, delivering tailored solutions for modern
                e-commerce businesses.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Our experienced team helps businesses optimize their online
                presence with scalable, secure, and feature-rich BigCommerce
                stores.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                We work closely with clients to provide personalized
                recommendations and build impactful online stores aligned with
                their business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Why Choose Our BigCommerce Development Services
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
            We provide comprehensive BigCommerce development solutions designed
            to enhance user experience, improve store performance, and maximize
            conversions.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Our customer-centric approach ensures seamless collaboration
            throughout the development process while delivering scalable and
            customized e-commerce experiences.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            With transparent pricing and flexible engagement models, we help
            businesses achieve long-term growth without compromising quality.
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
              {bigCommerceFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>

                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Drive E-commerce Success with BigCommerce Development Services
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
                Our Custom BigCommerce Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Our custom BigCommerce development services empower your online
                business with tailored solutions for seamless growth, enhanced
                functionality, and increased conversions.
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
                Ignite Your E-commerce Potential with Tailored BigCommerce
                Solutions
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
                We specialize in providing comprehensive BigCommerce development
                services that empower businesses to unlock their online
                potential and maximize e-commerce capabilities.
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
                src="/assets/img/BigCommerce3.jpg"
                alt="BigCommerce Services"
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

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

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