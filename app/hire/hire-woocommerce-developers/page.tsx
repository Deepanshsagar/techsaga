import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/hire/hire-woocommerce-developers");
}
export default function HireWooCommerceDevelopers() {
  return (
    <main>
      <Header />

      {/* Hero Banner */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage:
            "url('/assets/img/service-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Empower Your E-commerce Projects with Dedicated WooCommerce Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we offer dedicated WooCommerce developers with
                versatile expertise in creating robust online stores. Our
                developers specialize in building secure and user-friendly
                platforms, integrating payment gateways, and optimizing the
                shopping experience for increased conversions and customer
                satisfaction.
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
              Unleash WooCommerce Developers for Unrivaled Success
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our dedicated WooCommerce developers have extensive experience in
              WooCommerce development, possessing a deep understanding of the
              platform&apos;s capabilities. They excel in customizing
              WooCommerce themes, implementing advanced functionalities, and
              enhancing the overall performance of your online store.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you hire dedicated WooCommerce developers from Techsaga, you
              tap into their technical proficiency and benefit from seamless
              collaboration. Our developers work closely with your team to
              understand your goals and deliver results that exceed
              expectations.
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
                src="/assets/img/hire/hirewoocommerce1.1.png"
                alt="WooCommerce Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale Up Development Capacity with WooCommerce Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our exceptional dedicated WooCommerce developers, you can
                scale your development capacity according to your project&apos;s
                needs. Whether you require additional resources for a short-term
                project or ongoing support, our flexible engagement models allow
                you to optimize your development process efficiently.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Focused exclusively on your e-commerce projects to ensure successful delivery.",
                  },
                  {
                    title: "Versatile Expertise",
                    desc: "Deep understanding of WooCommerce development and advanced customizations.",
                  },
                  {
                    title: "Seamless Collaboration",
                    desc: "Working closely with your team for smooth communication and execution.",
                  },
                  {
                    title: "Scalable Capacity",
                    desc: "Flexible hiring models for evolving WooCommerce development needs.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Leveraging the latest plugins, tools, and frameworks for robust online stores.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-blue-600">✔</span>

                    <p className="text-gray-700">
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

      {/* Why Choose Section */}
      <section className="bg-[#4291CE] py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Why Choose Techsaga for WooCommerce Development?
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {/* Left */}
            <div className="space-y-6">
              {[
                "Highly skilled and experienced WooCommerce developers.",
                "Expertise in creating secure and user-friendly online stores.",
                "Customized WooCommerce solutions tailored to your business.",
                "Agile and efficient development process ensuring timely delivery.",
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
                "Proven track record of successful WooCommerce projects.",
                "Scalable development capacity for evolving requirements.",
                "Optimized shopping experiences for increased conversions.",
                "Secure integrations with payment gateways and plugins.",
                "Helping businesses achieve remarkable e-commerce growth.",
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
                Be Ready for Triumph with WooCommerce Developers!
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Techsaga, we understand the immense opportunities that lie
                within the world of e-commerce development. Our WooCommerce
                developers empower businesses with scalable, secure, and
                innovative online store solutions tailored to unique business
                goals.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Customized Development",
                    desc: "Tailored WooCommerce solutions designed around your business needs.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Efficient workflows ensuring projects stay on track and on time.",
                  },
                  {
                    title: "Skilled Developers",
                    desc: "Experienced WooCommerce developers delivering scalable e-commerce applications.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Leveraging modern tools, plugins, and frameworks for robust solutions.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Following coding standards and proven development methodologies.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-blue-600">✔</span>

                    <p className="text-gray-700">
                      <span className="font-semibold">
                        {item.title}:
                      </span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div>
              <img
                src="/assets/img/hire/hirewowcommerce2.1.png"
                alt="WooCommerce Development"
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