import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/hire/hire-laravel-developers");
}
export default function HireLaravelDevelopers() {
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
                Empower Your Web Projects with Dedicated Laravel Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we offer dedicated Laravel developers with
                versatile expertise in leveraging the power of the Laravel
                framework. Our developers ensure seamless functionality and
                exceptional user experiences for your web projects.
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
              Unlocking Your Success with Expert Laravel Wizards
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our dedicated Laravel developers have a deep understanding of the
              Laravel framework, enabling them to tackle any challenge with
              expertise and precision.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From building scalable web applications to implementing advanced
              features, our developers work as an extension of your team and
              deliver results that exceed expectations.
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
                src="/assets/img/hire/hirelarabel1.1.png"
                alt="Laravel Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale Up Development Capacity with Laravel Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our exceptional dedicated Laravel developers, you can
                scale your development capacity according to your project’s
                requirements and business goals.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Focused on delivering exceptional Laravel solutions and project success.",
                  },
                  {
                    title: "Versatile Expertise",
                    desc: "Deep understanding of both front-end and back-end technologies.",
                  },
                  {
                    title: "Seamless Collaboration",
                    desc: "Working closely with your team for smooth communication.",
                  },
                  {
                    title: "Scalable Capacity",
                    desc: "Flexible engagement models for short-term and long-term needs.",
                  },
                  {
                    title: "Solution-Based Approaches",
                    desc: "Following best practices and modern Laravel development standards.",
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

      {/* Result Driven Section */}
      <section className="bg-[#4291CE] py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Result-Driven Laravel Solutions
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {/* Left */}
            <div className="space-y-6">
              {[
                "Highly skilled and experienced Laravel developers.",
                "Expertise in the Laravel framework and ecosystem.",
                "Customized Laravel solutions for unique business needs.",
                "Agile and efficient Laravel development process.",
                "Smooth collaboration and communication throughout projects.",
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
                "Proven track record of successful Laravel projects.",
                "Scalable development capacity for evolving requirements.",
                "Modern and secure Laravel architecture implementation.",
                "Dedicated support for long-term project growth.",
                "Helping businesses achieve remarkable digital success.",
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

      {/* Empowering Success */}
      <section className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Techsaga: Unleashing Triumph with Brilliant Laravel Developers!
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                When you hire our dedicated developers, you gain more than
                technical expertise. You gain a committed team focused on your
                business growth and project success.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Leveraging the latest Laravel tools and frameworks.",
                  },
                  {
                    title: "Customized Development",
                    desc: "Tailored solutions designed around your business objectives.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Agile development process ensuring projects stay on track.",
                  },
                  {
                    title: "Skilled Developers",
                    desc: "Expert Laravel developers delivering scalable solutions.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Following coding standards and proven development workflows.",
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
                src="/assets/img/hire/hirelaravel2.1.png"
                alt="Laravel Success"
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