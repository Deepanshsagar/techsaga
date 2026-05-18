import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function PHPFrameworksPage() {
  const phpFeatures = [
    "Easy to use syntax for rapid and efficient web development.",
    "Wide platform compatibility across operating systems and web servers.",
    "Extensive frameworks and libraries for faster and scalable development.",
    "Seamless database integration for efficient data handling.",
    "Powerful server-side scripting for dynamic and interactive applications.",
    "Scalable architecture capable of handling high-traffic applications.",
    "Strong community support with vast resources and documentation.",
  ];

  const serviceFeatures = [
    "PHP Website Development and Maintenance",
    "Software Development",
    "PHP E-commerce Website Development",
    "PHP-Based CRM Software",
    "Website Application Development",
  ];

  const faqs = [
    {
      question: "What is PHP?",
      answer:
        "PHP is a server-side scripting language used for web development. It enables the creation of dynamic and interactive web applications.",
    },
    {
      question: "What PHP frameworks do you specialize in?",
      answer:
        "We specialize in Laravel, Symfony, CodeIgniter, and other modern PHP frameworks that provide efficient and scalable development solutions.",
    },
    {
      question: "Can you develop custom PHP web applications?",
      answer:
        "Yes, we build custom PHP web applications tailored to your business requirements and optimized for performance and scalability.",
    },
    {
      question: "How do you ensure the security of PHP applications?",
      answer:
        "We follow secure coding practices, perform rigorous testing, and implement industry-standard security measures for all PHP applications.",
    },
    {
      question: "What is the timeframe for PHP development projects?",
      answer:
        "Project timelines depend on complexity and scope. We define clear milestones and ensure timely delivery without compromising quality.",
    },
    {
      question: "How can I get started with your PHP development services?",
      answer:
        "You can contact our team through the contact page to discuss your requirements and receive expert consultation for your project.",
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
          backgroundImage: "url('/assets/img/Php_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                PHP
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Unlock the full potential of PHP with our expert development
                services. Crafting dynamic and secure web solutions that deliver
                exceptional performance and engaging user experiences.
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
                    src="/assets/img/php1.jpg"
                    alt="PHP Development"
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
                  src="/assets/img/php2.jpg"
                  alt="PHP Development"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                PHP Development
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
                PHP development refers to creating web applications and websites
                using the PHP programming language. PHP is a popular server-side
                scripting language specifically designed for dynamic web
                development.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                It enables developers to build scalable, interactive, and
                data-driven applications with features such as database
                integration, authentication systems, and dynamic content
                generation.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Bring your business to life with custom PHP development
                solutions tailored for performance, flexibility, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            We Adhere to Serve the Best PHP Development Services
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
            At Techsaga, we are dedicated to delivering high-quality PHP
            development services tailored to your unique business requirements.
            Our experienced PHP developers create secure, scalable, and dynamic
            web applications using modern development practices.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Our services include custom PHP web development, PHP framework
            development, CMS development, and eCommerce solutions designed to
            maximize business growth and online performance.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Partner with us to leverage the full power of PHP development with
            timely project delivery, seamless communication, and ongoing support.
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
              {phpFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Key Features - Harnessing the Power of PHP Development
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
                Our Customized PHP Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Tailored PHP development solutions designed to create powerful
                and personalized web applications that match your business
                objectives.
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
                Comprehensive PHP Development Solutions
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
                Our PHP development services cover a wide range of solutions
                tailored to meet your specific business needs with modern,
                scalable, and secure architectures.
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
                src="/assets/img/php3.jpg"
                alt="PHP Services"
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