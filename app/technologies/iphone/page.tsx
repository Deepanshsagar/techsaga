import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/technologies/iphone");
}

export default function IphonePage() {
  const iphoneFeatures = [
    "Access to a lucrative and loyal customer base within the iOS ecosystem.",
    "Enhanced user experience with intuitive and visually appealing interfaces.",
    "Integration with Apple's powerful hardware and software capabilities.",
    "Robust security measures and privacy protection for user data.",
    "Seamless App Store distribution and updates.",
    "Opportunities for monetization through in-app purchases and subscriptions.",
    "Integration with Apple's ecosystem of services like iCloud, Siri, and Apple Pay.",
    "Regular updates and support from Apple ensuring compatibility with the latest iOS versions.",
    "Extensive development resources and tools provided by Apple for efficient app development.",
    "Higher potential for app discovery and visibility due to App Store curation and quality control.",
  ];

  const serviceFeatures = [
    "iPhone App UI/UX Design",
    "Custom iPhone App Development",
    "Native iOS Development",
    "Cross-Platform iOS App Development",
    "iPhone App Testing Solution",
    "iPhone App Maintenance and Support",
  ];

  const faqs = [
    {
      question: "What is iPhone app development?",
      answer:
        "iPhone app development refers to creating mobile applications specifically designed and optimized for iOS devices such as iPhones and iPads using technologies like Swift or Objective-C.",
    },
    {
      question: "Why should I choose iPhone app development for my business?",
      answer:
        "iPhone app development offers access to a loyal customer base, seamless performance, strong security, premium user experiences, and smooth App Store distribution.",
    },
    {
      question: "How long does it take to develop an iPhone app?",
      answer:
        "The timeline depends on the complexity, features, and requirements of the application. Development can range from a few weeks to several months.",
    },
    {
      question:
        "Do you provide maintenance and support after the app is developed?",
      answer:
        "Yes, we provide ongoing maintenance and support to ensure compatibility with new iOS versions and smooth app performance.",
    },
    {
      question: "Will my iPhone app work on iPads as well?",
      answer:
        "Yes, we can develop universal iOS applications that work seamlessly across iPhones and iPads.",
    },
    {
      question: "Can you help with App Store submission?",
      answer:
        "Yes, we assist with App Store submission and ensure the application meets Apple's guidelines and approval requirements.",
    },
    {
      question: "Will my iPhone app be secure?",
      answer:
        "Absolutely. We implement strong security standards and best practices to protect your app and user data.",
    },
    {
      question:
        "Can you integrate third-party APIs and services into my iPhone app?",
      answer:
        "Yes, we integrate payment gateways, social platforms, analytics tools, and other third-party APIs to extend app functionality.",
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
          backgroundImage: "url('/assets/img/ios.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                iPhone
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Harness the power of the iOS ecosystem with our skilled
                developers and build customized iPhone applications that create
                a strong and unique digital presence.
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
                    src="/assets/img/iphone-serv1.1.jpg"
                    alt="iPhone App Development"
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
                  src="/assets/img/pythone-serv1.jpg"
                  alt="iPhone Development"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                iPhone App Development
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
                iOS Experiences: Craft exceptional iPhone applications and
                engage users in a world of limitless possibilities.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                iPhone development involves creating applications specifically
                for Apple's iOS ecosystem using technologies such as Swift and
                Objective-C. From UI design and functionality development to
                testing and deployment, every stage is optimized for premium
                performance.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                We craft powerful, secure, and scalable iPhone applications
                that help businesses transform ideas into engaging digital
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Our iPhone App Development Expertise
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
            We are a team of experienced developers focused on delivering
            customized iPhone app development solutions tailored to your
            business requirements.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Our expertise covers modern iOS technologies, scalable application
            architecture, intuitive UI/UX, and seamless integration with Apple
            services and third-party platforms.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            With a commitment to innovation, quality, and performance, we help
            businesses unlock the full potential of the Apple ecosystem.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/assets/img/list-home.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1727]/80"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              {iphoneFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Advantages of iPhone App Development
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
                Our Customized iPhone App Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Experience tailored iPhone application development services
                crafted to meet your business objectives and deliver engaging
                user experiences across Apple's ecosystem.
              </p>

              <Image
                src="/assets/img/list-home.jpg"
                alt="FAQ"
                width={520}
                height={400}
                className="w-full h-auto rounded-2xl"
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
                We Adhere to Serve as the iPhone App Development Company
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
                As your trusted iPhone app development company, we deliver
                innovative and impactful mobile solutions tailored to your
                business goals.
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
                src="/assets/img/iphone-serv3.1.jpg"
                alt="iPhone Services"
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