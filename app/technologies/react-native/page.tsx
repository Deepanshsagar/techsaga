import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/technologies/react-native");
}
export default function ReactNativePage() {
  const reactNativeFeatures = [
    "Cross-platform compatibility for both iOS and Android using a single codebase.",
    "Native-like performance with access to device APIs and native modules.",
    "Hot-reloading support for faster development and real-time changes.",
    "Pre-built UI components for efficient and scalable UI development.",
    "Third-party library integration for enhanced app functionality.",
    "JavaScript and React-based architecture with reduced learning curve.",
    "Over-the-air live updates without app store deployment delays.",
    "Performance optimization using lazy loading and efficient rendering.",
    "Access to native modules for device-specific features and capabilities.",
    "Strong community support with extensive resources and libraries.",
  ];

  const serviceFeatures = [
    "Modular code organization",
    "Consistent UI/UX design",
    "Performance optimization",
    "Error handling and debugging",
    "Testing and quality assurance",
    "Continuous integration and deployment",
    "Version control and collaboration",
  ];

  const faqs = [
    {
      question: "What is React Native?",
      answer:
        "React Native is an open-source framework developed by Facebook for building mobile applications using JavaScript and React. It enables developers to create cross-platform apps for both iOS and Android.",
    },
    {
      question:
        "What are the benefits of using React Native for mobile app development?",
      answer:
        "React Native offers code reusability, native-like performance, hot-reloading, faster development cycles, access to native device features, and strong community support.",
    },
    {
      question:
        "Can React Native apps achieve the same performance as native apps?",
      answer:
        "Yes, React Native apps can achieve native-like performance by accessing native components and APIs through its bridge architecture.",
    },
    {
      question:
        "Is React Native suitable for all types of mobile apps?",
      answer:
        "React Native is suitable for most mobile applications including eCommerce, social media, productivity, and enterprise apps. However, highly specialized native functionalities may require native development.",
    },
    {
      question:
        "Can I update my React Native app without app store approval?",
      answer:
        "Yes, React Native supports over-the-air updates, allowing developers to push updates without requiring users to download a new app version.",
    },
    {
      question:
        "How do I ensure the security of my React Native app?",
      answer:
        "Implement secure APIs, authentication, encryption, dependency updates, and regular security testing to maintain app security.",
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
          backgroundImage: "url('/assets/img/react-native.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                React Native
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Supercharge your mobile app development process with React
                Native, the game-changing technology that brings unparalleled
                efficiency and versatility to your projects.
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
                    src="/assets/img/react-native-e1.1.jpg"
                    alt="React Native Development"
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
                  src="/assets/img/react-native-e2.1.jpg"
                  alt="React Native"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                React Native Mobile App Development
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
                React Native Mobile App Development is a framework developed by
                Facebook that allows developers to build mobile applications
                using JavaScript and React.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                It enables cross-platform development, allowing businesses to
                deploy apps on both iOS and Android using a single codebase,
                reducing development costs and timelines.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                With native-like performance, real-time hot reloading, and
                access to device APIs, React Native delivers high-performance
                applications with excellent user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Delivering Excellence in Every Pixel with React Native
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
            Transform your ideas into world-class mobile applications with
            React Native. Our experienced team develops scalable, feature-rich,
            and high-performance applications tailored to your business goals.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            By leveraging React Native’s cross-platform capabilities, we create
            applications that run seamlessly on both iOS and Android devices
            while reducing development time and cost.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Our focus on delivering native-like performance and intuitive user
            experiences ensures apps that engage users and drive business
            growth.
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
              {reactNativeFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Functionalities of React Native
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
                Our Customized React Native Mobile App Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Experience the power of our customized React Native app
                development services designed to deliver scalable, secure,
                and feature-rich mobile applications.
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
                Leveraging Contemporary Mobile App Development Practices
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
                React Native development empowers businesses with modern mobile
                app development practices focused on scalability, performance,
                and maintainability.
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
                src="/assets/img/react-native-e3.1.jpg"
                alt="React Native Services"
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