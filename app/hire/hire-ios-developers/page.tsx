import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/hire/hire-ios-developers");
}
export default function HireIosDevelopers() {
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
                Empower Your Mobile Projects with Dedicated iOS Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we offer dedicated iOS developers with versatile
                expertise in crafting visually stunning and feature-rich mobile
                applications for iPhones, iPads, and other Apple devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Unleash the Power of Talented iOS Developers for Unprecedented
              Success
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our dedicated iOS developers specialize in Swift, Objective-C,
              and modern iOS frameworks, enabling them to tackle any challenge
              with expertise and precision.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From visually appealing interfaces to advanced app
              functionalities, our iOS developers work as an extension of your
              team to deliver exceptional mobile experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Scale Up Section */}
      <section className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src="/assets/img/hire/hire-ios1.1.png"
                alt="iOS Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale Up Development Capacity with iOS Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our exceptional dedicated iOS developers, you can scale
                your development capacity according to your project’s
                requirements and business goals.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Focused on delivering exceptional iOS solutions and project success.",
                  },
                  {
                    title: "Versatile Expertise",
                    desc: "Deep understanding of iOS app development and Apple ecosystems.",
                  },
                  {
                    title: "Seamless Collaboration",
                    desc: "Working closely with your internal team for smooth communication.",
                  },
                  {
                    title: "Scalable Capacity",
                    desc: "Flexible engagement models for evolving project requirements.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Using Swift, Objective-C, and modern iOS frameworks.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-blue-600">✔</span>

                    <p className="text-gray-700">
                      <span className="font-semibold">{item.title}:</span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#4291CE] py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Why Choose Techsaga for iOS Development?
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {/* Left */}
            <div className="space-y-6">
              {[
                "Highly skilled and experienced iOS developers.",
                "Expertise in crafting feature-rich applications for Apple devices.",
                "Customized iOS solutions tailored to your business.",
                "Agile and efficient iOS development process.",
                "Smooth collaboration and transparent communication.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 text-white">
                  <span className="text-2xl">✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="space-y-6">
              {[
                "Proven track record of successful iOS app projects.",
                "Scalable development capacity for evolving requirements.",
                "Secure and high-performance iOS application development.",
                "Long-term support and maintenance services.",
                "Helping businesses achieve remarkable digital growth.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 text-white">
                  <span className="text-2xl">✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Empowered iOS Developers for Triumph!
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Techsaga, we believe in the immense potential of iOS app
                development. Our experienced developers create innovative,
                scalable, and user-friendly iOS applications tailored to your
                business objectives.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Customized Development",
                    desc: "Tailored iOS solutions based on your unique business needs.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Efficient workflows ensuring projects stay on schedule.",
                  },
                  {
                    title: "Skilled Developers",
                    desc: "Experienced iOS developers delivering scalable mobile applications.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Following coding standards and modern development workflows.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Using modern iOS frameworks and tools for innovative solutions.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-blue-600">✔</span>

                    <p className="text-gray-700">
                      <span className="font-semibold">{item.title}:</span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div>
              <img
                src="/assets/img/hire/hire-ios-2.4.png"
                alt="iOS Development"
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