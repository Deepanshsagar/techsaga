import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";

export default function HireMobileAppDevelopers() {
  return (
    <main>
      <Header />

      {/* Hero Banner */}
     <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/service-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Empower Your Mobile Projects with Dedicated Mobile App Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we offer dedicated mobile app developers with
                versatile expertise in creating innovative and user-centric
                mobile applications for iOS and Android platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Skyrocket Your Success with Talented Mobile App Developers
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our dedicated mobile app developers have extensive experience in
              mobile app development, specializing in programming languages like
              Swift, Java, and Kotlin.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our developers become an extension of your team, working closely
              with you to understand your goals and requirements while
              delivering exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Scale Up Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div>
              <img
                src="/assets/img/hire/hiremobileapp1.1.png"
                alt="Mobile Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Scale Up Development Capacity with Mobile App Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our exceptional dedicated mobile app developers, you can
                scale your development capacity according to your project’s
                needs.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Focused solely on your mobile projects and ensuring success.",
                  },
                  {
                    title: "Versatile Expertise",
                    desc: "Expertise in mobile app technologies and frameworks.",
                  },
                  {
                    title: "Seamless Collaboration",
                    desc: "Working as an extension of your internal team.",
                  },
                  {
                    title: "Scalable Capacity",
                    desc: "Flexible support for evolving project needs.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Leveraging Swift, Kotlin, Java, Flutter & React Native.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-[#4291CE]">✔</span>

                    <p className="text-gray-700 leading-7">
                      <span className="font-semibold">
                        {item.title}:
                      </span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#4291CE] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Capture the Mobile Market with Our Unrivaled App Development
              Services
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                "Highly skilled and experienced mobile app developers.",
                "Expertise in iOS and Android app development.",
                "Customized app solutions for unique requirements.",
                "Agile and efficient development process.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 text-white">
                  <span className="text-2xl">✔</span>
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                "Seamless communication and collaboration.",
                "Proven track record of successful projects.",
                "Scalable app development capacity.",
                "Helping businesses achieve remarkable growth.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 text-white">
                  <span className="text-2xl">✔</span>
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Empowering Mobile App Developers for Triumph!
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Techsaga stands at the forefront of mobile app development,
                creating captivating, user-friendly, and high-performance
                applications across iOS and Android platforms.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Customized Development",
                    desc: "Tailored services based on business goals.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Agile workflows ensuring deadlines are achieved.",
                  },
                  {
                    title: "Skilled Developers",
                    desc: "Experts in React Native, Flutter, Swift & Kotlin.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Following coding standards and modern architecture.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Building innovative and scalable mobile solutions.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-[#4291CE]">✔</span>

                    <p className="text-gray-700 leading-7">
                      <span className="font-semibold">
                        {item.title}:
                      </span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div>
              <img
                src="/assets/img/hire/hiremobile-app2.1.png"
                alt="Mobile App Development"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <CommonCta />

      <Footer />
    </main>
  );
}