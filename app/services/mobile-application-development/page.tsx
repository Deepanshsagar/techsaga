// app/services/mobile-application-development/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function MobileApplicationDevelopment() {

  const whyChoose = [
    "Expertise & Custom Solutions",
    "Seamless User Experience",
    "Timely Delivery",
    "Transparent Communication",
    "Cost-Effective Solutions",
  ];

  const process = [
    "Understanding Your Vision",
    "Customized Solutions",
    "User-Centric Design",
    "Ongoing Support and Maintenance",
  ];

  const magicianPoints = [
    "Expert UI Architects",
    "Strong Backend Support",
    "Attractive UI/UX Design with Engaging Graphics",
    "Dedicated Maintenance Team",
    "Cloud Services Wizard",
    "React, Angular, and Many More Experts",
  ];

  const businessLeft = [
    "Increased brand visibility and constant presence on customers' devices.",
    "Enhanced customer engagement through personalized experiences.",
    "Strengthened customer relationships with loyalty programs and offers.",
    "Streamlined business operations such as ordering and scheduling.",
    "Improved efficiency and reduced manual tasks.",
  ];

  const businessRight = [
    "Convenient shopping experiences increasing sales and revenue.",
    "Competitive advantage over businesses without mobile apps.",
    "Valuable insights for data-driven decision making.",
    "Positioning your business as innovative and customer-centric.",
    "Direct communication and instant updates with customers.",
  ];

  const features = [
    {
      title: "Seamless User Experience",
      description:
        "We create engaging and intuitive mobile applications that build strong and long-lasting user relationships.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Enhanced Brand Visibility",
      description:
        "Expand your brand reach and improve customer engagement with powerful mobile app solutions.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "User-Centric & Cost-Effective",
      description:
        "Our development approach balances exceptional user experiences with optimized costs.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Competitive Advantage & Analytics",
      description:
        "Gain insights, improve decisions, and stay ahead of competitors with smart analytics integration.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Data Security",
      description:
        "We prioritize robust security measures to safeguard your app and user data.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Custom Solutions",
      description:
        "Tailor-made mobile applications designed to meet your specific business requirements.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "Why should I invest in mobile application development for my business?",
      answer:
        "Mobile applications help improve customer engagement, enhance visibility, streamline operations, and provide competitive advantages.",
    },
    {
      question: "How long does it take to develop a mobile application?",
      answer:
        "The development timeline depends on app complexity, features, and platforms, usually ranging from weeks to months.",
    },
    {
      question: "Do I need separate apps for iOS and Android?",
      answer:
        "Not always. Cross-platform technologies like React Native and Flutter allow a single codebase for both platforms.",
    },
    {
      question:
        "How can I ensure the security of my mobile application and user data?",
      answer:
        "We use secure coding practices, encryption, authentication, testing, and regular updates for strong app security.",
    },
    {
      question:
        "Can you help with app submission and deployment to app stores?",
      answer:
        "Yes, we handle app deployment and submission for Google Play Store and Apple App Store.",
    },
    {
      question:
        "Do you provide post-launch support and maintenance for mobile applications?",
      answer:
        "Absolutely. We provide updates, bug fixing, optimization, and maintenance after launch.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring delivery within your budget and timeline.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible engagement models optimized for productivity and changing project needs.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient hiring support to help you recruit top technical talent directly.",
      image: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div>
      <Header />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/service-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            <div className="max-w-xl">
              <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight">
                Mobile Application
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Empowering Digital Evolution
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Unlock Your Business Potential with Techsaga
            </h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h3 className="text-3xl font-bold mb-8">
                Cutting Edge Mobile Application Development Team
              </h3>

              <p className="leading-8 mb-6">
                Partner with Techsaga and unlock the true power of your business
                with our exceptional mobile application development services.
                Our team creates mobile apps that perfectly align with your
                business goals.
              </p>

              <ul className="space-y-5">
                <li className="flex gap-3">
                  <div className="text-[#4291CE] font-bold">✓</div>
                  <span>
                    Skilled professionals in React, Angular, JavaScript,
                    Android, iOS, Laravel, PHP, Drupal, Shopify & WooCommerce.
                  </span>
                </li>

                <li className="flex gap-3">
                  <div className="text-[#4291CE] font-bold">✓</div>
                  <span>
                    Talented UI/UX designers and e-commerce developers delivering
                    visually stunning mobile applications.
                  </span>
                </li>

                <li className="flex gap-3">
                  <div className="text-[#4291CE] font-bold">✓</div>
                  <span>
                    Mobile applications built to exceed industry standards and
                    business expectations.
                  </span>
                </li>
              </ul>

            </div>

            <div>
              <Image
                src="/assets/img/app-dev-view-services.jpg"
                alt="mobile"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/app-dev-part-view1.jpg"
                alt="services"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-5">
                Why Choose Techsaga for Mobile Application Development
              </h3>

              <p className="leading-8 mb-8">
                Our experienced developers focus on creating customized mobile
                applications with engaging user experiences, transparent
                communication, and timely delivery.
              </p>

              <div className="space-y-4">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="text-[#4291CE] font-bold">✓</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Our Mobile Application Development Process
              </h3>

              <p className="leading-8 mb-8">
                We design and develop customized mobile applications with
                intuitive interfaces and long-term support.
              </p>

              <div className="space-y-5">
                {process.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center">

                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4 className="text-lg font-semibold">
                      {item}
                    </h4>

                  </div>
                ))}
              </div>

            </div>

            <div>
              <Image
                src="/assets/img/app-dev-services13.jpg"
                alt="future"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/web-app-v-p1.png"
                alt="process"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Unleash the Power of Mobile with Our Expertise
              </h3>

              <p className="leading-8 mb-8">
                Our team combines innovation, design excellence, and strong
                technical expertise to build exceptional mobile applications.
              </p>

              <div className="space-y-5">
                {magicianPoints.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">

                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4 className="text-lg font-semibold pt-3">
                      {item}
                    </h4>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Tap Into Infinite Possibilities with Mobile Applications
            </h2>

            <p className="text-lg">
              Mobile Apps Enhance Customer Experience and Drive Business Growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="space-y-6">
              {businessLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {businessRight.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <h2 className="text-4xl font-bold mt-4">
              Your Gateway to Seamless Mobile App Innovation
            </h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>

            <p className="mt-5 text-gray-600">
              Driving Innovation and Delivering Seamless User Experiences.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
              >

                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-14">

            <h2 className="text-4xl font-bold">
              Our Mobile Application Development Expertise
            </h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>

          </div>

          <div className="max-w-4xl mx-auto space-y-5">

            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm group"
              >

                <summary className="cursor-pointer font-semibold text-lg flex justify-between items-center">
                  {faq.question}
                  <span className="group-open:rotate-45 transition">+</span>
                </summary>

                <p className="mt-4 text-gray-600 leading-7">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <h2 className="text-4xl font-bold mb-5">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible Budget, Customized Approach. Choose What Works for You.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {collaborationCards.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-8 text-center hover:shadow-xl transition"
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