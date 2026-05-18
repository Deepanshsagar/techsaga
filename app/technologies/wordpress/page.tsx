import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function WordPressPage() {
  const wordpressFeatures = [
    "WordPress development offers a powerful content management system (CMS).",
    "A vast library of themes is available for easy website customization.",
    "Plugins extend the functionality of websites such as contact forms, e-commerce, and SEO tools.",
    "Extensive customization options allow modifying themes, templates, and stylesheets.",
    "Responsive design ensures optimal viewing on various devices and screen sizes.",
    "Built-in SEO features improve search engine visibility.",
    "User management tools enable the creation and management of multiple user accounts.",
    "Media management capabilities simplify uploading and organizing media.",
    "Multilingual support allows creating websites in different languages.",
    "Advanced blogging tools for content publishing and management.",
    "Strong security support with regular updates and plugins.",
    "A thriving community provides support and documentation resources.",
  ];

  const serviceFeatures = [
    "Custom WordPress Website Development",
    "WordPress Theme Customization",
    "Plugin Development and Integration",
    "Website Migration and Upgrades",
    "SEO Optimization",
    "Theme Customization and Design",
  ];

  const faqs = [
    {
      question: "What is WordPress development?",
      answer:
        "WordPress development refers to the process of creating and customizing websites using the WordPress content management system (CMS).",
    },
    {
      question: "Why should I choose WordPress for my website?",
      answer:
        "WordPress offers a user-friendly interface, a vast library of themes and plugins, robust customization options, and strong community support.",
    },
    {
      question: "Can you help migrate my existing website to WordPress?",
      answer:
        "Yes, we provide seamless website migration services while preserving your content, design, and functionality.",
    },
    {
      question: "Can I update and manage my WordPress website on my own?",
      answer:
        "Absolutely! WordPress provides an intuitive dashboard for easy content and website management.",
    },
    {
      question: "Is WordPress secure for my website?",
      answer:
        "Yes, WordPress is secure when proper best practices, regular updates, and security plugins are implemented.",
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
            "url('/assets/img/Inside-Banner-Technology/Wordpress_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                WordPress
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Start with your vision and let WordPress do the rest. Build
                stunning websites and powerful digital experiences with expert
                WordPress development solutions.
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
                    src="/assets/img/wordpress1.jpg"
                    alt="WordPress Development"
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
                  src="/assets/img/wordpress2.jpg"
                  alt="WordPress"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                WordPress Development Services
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
                WordPress development involves designing, building, and
                customizing websites using the powerful WordPress CMS platform.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                With its flexibility, user-friendly interface, and extensive
                plugin ecosystem, WordPress enables businesses to create dynamic
                websites ranging from blogs to advanced e-commerce platforms.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Our expert team delivers custom websites, theme customization,
                plugin integration, and scalable solutions tailored to your
                business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Our Approach
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
            At Techsaga, our WordPress development approach is rooted in
            understanding your unique business requirements and delivering
            tailored solutions.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            We design and develop responsive websites aligned with your brand
            identity while ensuring functionality, performance, and seamless
            user experiences across devices.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            From deployment to ongoing maintenance and support, we ensure your
            WordPress website remains secure, optimized, and future-ready.
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
              {wordpressFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>

                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Key Features of WordPress Development
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
                Our Customized WordPress Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Experience our tailored WordPress development services with
                customized solutions, stunning design, and advanced
                functionality.
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
                Shaping Digital Landscapes: Pioneering in WordPress Services
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
                We specialize in creating visually appealing, functional, and
                optimized WordPress websites that establish a strong online
                presence for businesses.
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
                src="/assets/img/Wordpress3.jpg"
                alt="WordPress Services"
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