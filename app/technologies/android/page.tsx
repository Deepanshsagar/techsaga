import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/technologies/android");
}

export default function AndroidPage() {
  const androidFeatures = [
    "Activities: Screen components that represent a single user interface screen.",
    "Fragments: Modular components that can be combined to create a flexible UI.",
    "Intents: Mechanism for communication between components and launching activities.",
    "Views: User interface elements like buttons, text fields, and images.",
    "Layouts: Structures for organizing and positioning views within an activity or fragment.",
    "Resources: External files (e.g., images, strings) used by the app.",
    "Services: Background components that perform long-running operations.",
    "Broadcast Receivers: Listeners that respond to system or app-wide events.",
    "Content Providers: Components for sharing data between apps securely.",
    "Notifications: Alerts and messages displayed to users outside of the app.",
    "Permissions: Security mechanisms that control access to device resources.",
    "Manifest File: XML file containing essential information about the app.",
    "Intent Filters: Specify the types of intents a component can respond to.",
    "App Widgets: Miniature app views embedded in other apps or home screens.",
  ];

  const serviceFeatures = [
    "Wide Market Reach",
    "Lower Development Costs",
    "Easy Customization",
    "Seamless Integration",
    "Multiple Distribution Channels",
    "Innovation Opportunities",
    "Diverse Hardware Compatibility",
  ];

  const faqs = [
    {
      question: "What is Android mobile app development?",
      answer:
        "Android mobile app development refers to the process of creating applications specifically designed to run on Android devices, such as smartphones and tablets. It involves designing interfaces, coding in Java or Kotlin, integrating features, and testing the app for compatibility and performance.",
    },
    {
      question:
        "What programming languages are commonly used for Android app development?",
      answer:
        "The two primary programming languages used for Android app development are Java and Kotlin. Kotlin is now the preferred language for modern Android development.",
    },
    {
      question: "What tools are used for Android app development?",
      answer:
        "Android app development commonly uses Android Studio, Android SDK, emulators, Firebase tools, and version control systems like Git.",
    },
    {
      question: "How long does it take to develop an Android app?",
      answer:
        "The development timeline depends on the app's complexity, features, and integrations. Basic apps may take a few weeks, while advanced apps can take several months.",
    },
    {
      question: "How much does it cost to develop an Android app?",
      answer:
        "The cost varies based on app complexity, UI/UX requirements, features, integrations, and development timelines.",
    },
    {
      question: "How can I publish my Android app?",
      answer:
        "You can publish your app through the Google Play Store by creating a developer account, preparing the APK/AAB file, and submitting it for review.",
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
          backgroundImage: "url('/assets/img/andriod.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                Android
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Ignite success with our Android app development services.
                Transform your ideas into captivating and user-friendly
                applications that drive engagement and business growth.
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
                    src="/assets/img/andriod-e2.2.jpg"
                    alt="Android Development"
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
                  src="/assets/img/android-e3.1.jpg"
                  alt="Android App Development"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Android Mobile App Development
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
                Android mobile app development refers to the process of creating
                applications specifically designed to run on Android devices such
                as smartphones and tablets.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Developers utilize the Android SDK to build and customize apps,
                leveraging platform features and capabilities for seamless
                experiences.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                This includes UI design, Java or Kotlin development, feature
                integration, testing, optimization, and deployment on the Google
                Play Store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Elevate Your App with Our Android Mobile App Development Specialists
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
            Our experienced Android developers provide end-to-end mobile app
            development services tailored to your business requirements.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            From conceptualization and UI/UX design to development, testing, and
            deployment, we manage every aspect of the Android app lifecycle.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Whether you need a gaming app, productivity tool, or enterprise
            platform, we deliver innovative and scalable Android solutions.
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
              {androidFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Core Elements of Android App Development
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
                Our Customized Android Mobile App Development Services
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Experience tailored Android mobile app development solutions
                designed to meet your business goals and deliver exceptional
                user experiences.
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
                Gaining the Edge with Android Mobile App Development
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
                Android app development offers businesses flexibility,
                scalability, broad market reach, and powerful integration
                capabilities.
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
                src="/assets/img/android-e1.1.jpg"
                alt="Android Services"
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