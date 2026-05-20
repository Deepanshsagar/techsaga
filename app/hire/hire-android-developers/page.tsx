import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/hire/hire-android-developers");
}
export default function HireAndroidDevelopers() {
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
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Empower Your Mobile Projects with Dedicated Android Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we offer dedicated Android developers with
                versatile expertise in creating high-quality mobile apps with
                user-friendly interfaces, robust functionalities, and broad
                device compatibility.
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
              Achieve Unprecedented Success with the Mastery of Android
              Developers
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our dedicated Android developers have extensive experience in
              Android app development, specializing in Java, Kotlin, and Android
              SDK.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From crafting engaging user interfaces to implementing advanced
              features, our Android developers work closely with your team and
              deliver scalable mobile solutions that exceed expectations.
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
                src="/assets/img/hire/hireandroid-dev1.1.png"
                alt="Android Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale Up Development Capacity with Android Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our exceptional dedicated Android developers, you can scale
                your development capacity according to your project’s needs and
                business goals.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Focused on delivering exceptional Android solutions and project success.",
                  },
                  {
                    title: "Versatile Expertise",
                    desc: "Deep understanding of Android app development and Android SDK.",
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
                    desc: "Leveraging Java, Kotlin, and the latest Android tools for innovative mobile apps.",
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
              Experience Excellence with Our Android Development Services
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {/* Left */}
            <div className="space-y-6">
              {[
                "Highly skilled and experienced Android developers.",
                "Expertise in user-friendly and feature-rich Android applications.",
                "Customized Android solutions tailored to your business.",
                "Agile and efficient Android development process.",
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
                "Proven track record of successful Android app projects.",
                "Scalable development capacity for evolving requirements.",
                "Secure and high-performance Android app development.",
                "Long-term support and maintenance services.",
                "Helping businesses achieve remarkable mobile growth.",
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
                Techsaga: Be Ready for Triumph with Android Developers!
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Techsaga, we understand the immense opportunities in Android
                app development. Our experienced Android developers deliver
                scalable, secure, and high-performing applications tailored to
                your business goals.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Customized Development",
                    desc: "Tailored Android solutions based on your specific business requirements.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Following coding standards and modern development workflows.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Efficient workflows ensuring projects stay on schedule.",
                  },
                  {
                    title: "Skilled Developers",
                    desc: "Experienced Android developers delivering scalable applications.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Using modern Android tools and frameworks for innovative mobile solutions.",
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
                src="/assets/img/hire/hireandroid2.1.png"
                alt="Android Development"
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