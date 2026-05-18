import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function ShopifyPage() {
  const shopifyFeatures = [
    "Offers a comprehensive platform that includes hosting, website design, payment processing, and marketing tools.",
    "Easy-to-use interface and drag-and-drop functionality",
    "Responsive themes ensure your store looks great",
    "Robust security measures and 24/7 monitoring",
    "Integrates with over 100 payment gateways for smooth transactions worldwide.",
    "Explore a wide range of apps and integrations to enhance your store's functionality.",
    "Built-in SEO tools and integration with popular marketing tools help drive traffic to your store.",
    "24/7 customer support is available to assist with any questions or issues.",
    "Gain valuable insights into your store's performance, sales trends, and customer behavior.",
  ];

  const offeringFeatures = [
    "Customized store design and tailored development.",
    "Seamless integration of essential features and functionalities.",
    "Performance optimization for a smooth user experience.",
    "Integration with secure payment gateways for seamless transactions.",
    "Responsive and mobile-friendly design for cross-device compatibility.",
    "SEO optimization to enhance online visibility.",
    "Ongoing maintenance and support for a reliable store operation.",
    "Customized Shopify app development for enhanced store functionality.",
  ];

  const faqs = [
    {
      question: "Is Shopify suitable for small businesses?",
      answer:
        "Yes, Shopify is an excellent choice for small businesses. Its user-friendly interface, scalability, and all-in-one features make it accessible and adaptable for businesses of all sizes.",
    },
    {
      question: "Can I use my own domain name with Shopify?",
      answer:
        "Absolutely! Shopify allows you to use your existing domain name or purchase a new one directly through the platform.",
    },
    {
      question: "How secure is Shopify for processing online payments?",
      answer:
        "Shopify prioritizes security and provides secure SSL encryption for all transactions on your online store.",
    },
    {
      question: "Can I customize the design of my Shopify store?",
      answer:
        "Yes, Shopify offers a wide range of customizable themes and templates.",
    },
    {
      question: "What marketing tools does Shopify provide?",
      answer:
        "Shopify provides built-in marketing features such as SEO optimization, discount codes, email marketing integrations, and social media integration.",
    },
    {
      question: "Can I sell products internationally with Shopify?",
      answer:
        "Absolutely! Shopify supports selling products worldwide with multiple currencies and international shipping.",
    },
    {
      question: "Does Shopify offer customer support?",
      answer:
        "Yes, Shopify offers 24/7 customer support through live chat, email, and phone.",
    },
    {
      question: "Can I integrate third-party apps with my Shopify store?",
      answer:
        "Absolutely! Shopify has a robust App Store that offers a wide selection of apps and integrations.",
    },
    {
      question: "Can I migrate my existing online store to Shopify?",
      answer:
        "Yes, Shopify provides seamless migration options for transferring products and customer data.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "With transparent and fixed pricing, we provide clear and upfront costs, ensuring smooth collaboration.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration based on project needs, optimizing resources and maximizing productivity.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "We help businesses efficiently hire top talent with the right expertise and streamlined processes.",
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
          backgroundImage: "url('/assets/img/Shopify_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                Shopify
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Design stunning product pages effortlessly, ensure secure
                payments through top-notch gateways, and captivate customers
                with effective marketing tools such as email campaigns and
                targeted ads.
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
                    src="/assets/img/shopify-inner1.jpg"
                    alt="Shopify Development"
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
                  src="/assets/img/shopify-inner2.jpg"
                  alt="Shopify"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Shopify Development Company
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
                Grow your business quickly and easily with Shopify’s all-in-one
                development platform.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Shopify offers everything you need to build and scale a
                successful online business including hosting, website design,
                payment processing, and marketing tools.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                With intuitive drag-and-drop capabilities, even beginners can
                launch professional online stores in minutes.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Start building your own e-commerce empire now with Shopify.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Shopify over other Development Services
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
            Shopify provides a complete e-commerce ecosystem with hosting,
            design, payment processing, and marketing tools in one place.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Its user-friendly interface and drag-and-drop features make it easy
            for entrepreneurs of all skill levels to create visually appealing
            and functional online stores.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Shopify also includes secure payment integrations, SEO tools, and
            built-in marketing features to help businesses grow faster.
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
              {shopifyFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                How Shopify Streamlining your journey to Success
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
                Our custom Shopify development service
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Discover our outstanding custom Shopify development service,
                designed to deliver personalized solutions that perfectly align
                with your unique e-commerce requirements.
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

      {/* What We Offer */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                What we are offering
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
                In our Shopify development services, we offer:
              </p>

              <div className="mt-8 space-y-4">
                {offeringFeatures.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="text-[#4291CE] font-bold">✓</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Our comprehensive services ensure your Shopify store remains
                optimized, secure, scalable, and ready for long-term growth.
              </p>
            </div>

            <div>
              <Image
                src="/assets/img/shopify-inner4.jpg"
                alt="Shopify Services"
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