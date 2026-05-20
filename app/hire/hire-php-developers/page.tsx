import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/hire/hire-php-developers");
}
export default function HirePhpDevelopers() {
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
                Empower Your Web Projects with Dedicated PHP Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we offer dedicated PHP developers with versatile
                expertise in leveraging the power of PHP to build dynamic and
                high-performance web applications. Our developers ensure
                seamless functionality and exceptional user experiences for your
                web projects.
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
              Get Comprehensive PHP Development Services
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our dedicated PHP developers have a deep understanding of PHP and
              its frameworks, enabling them to tackle any challenge with
              expertise and precision.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From scalable web applications to advanced custom features, our
              PHP developers work as an extension of your team and deliver
              results that exceed expectations.
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
                src="/assets/img/hire/hirephp-dev1.1.png"
                alt="PHP Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale Up Development Capacity with PHP Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our exceptional dedicated PHP developers, you can scale
                your development capacity according to your project’s
                requirements and business goals.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Focused on delivering exceptional PHP solutions and project success.",
                  },
                  {
                    title: "Versatile Expertise",
                    desc: "Deep understanding of PHP and modern frameworks.",
                  },
                  {
                    title: "Seamless Collaboration",
                    desc: "Working closely with your internal team for smooth communication.",
                  },
                  {
                    title: "Scalable Capacity",
                    desc: "Flexible engagement models for evolving project needs.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Leveraging the latest tools and frameworks for modern web applications.",
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
              Why Choose Techsaga for PHP Development?
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {/* Left */}
            <div className="space-y-6">
              {[
                "Highly skilled and experienced PHP developers.",
                "Expertise in PHP frameworks like Laravel and CodeIgniter.",
                "Customized PHP solutions tailored to your business.",
                "Agile and efficient PHP development process.",
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
                "Proven track record of successful PHP projects.",
                "Scalable development capacity for evolving requirements.",
                "Secure and high-performance PHP application development.",
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
                Unleashing Triumph with Brilliant PHP Developers!
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We understand the ins and outs of PHP and its frameworks. Our
                experienced PHP developers deliver robust and scalable web
                solutions tailored to your unique business goals.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Customized Development",
                    desc: "Tailored PHP solutions based on your specific business requirements.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Efficient workflows ensuring projects stay on schedule.",
                  },
                  {
                    title: "Skilled Developers",
                    desc: "Experienced PHP developers delivering scalable applications.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Following coding standards and modern development workflows.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Using modern PHP tools and frameworks for innovative solutions.",
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
                src="/assets/img/hire/hirephp-dev2.1.png"
                alt="PHP Development"
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