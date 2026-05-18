import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";

export default function HireShopifyDevelopers() {
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
                Empower Your E-commerce Projects with Dedicated Shopify Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we offer dedicated Shopify developers with
                versatile expertise in harnessing the capabilities of the
                Shopify platform. Our developers specialize in creating stunning
                and functional online stores, with expertise in Shopify theme
                customization, app integration, and e-commerce best practices.
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
              Unlock Comprehensive Shopify Skills
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our dedicated Shopify developers have extensive experience in
              Shopify development, possessing a deep understanding of the
              platform&apos;s features and capabilities. They excel in
              customizing Shopify themes, implementing advanced functionalities,
              and optimizing the user experience for increased conversions and
              customer satisfaction.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you hire dedicated Shopify developers from Techsaga, you tap
              into their technical proficiency and benefit from seamless
              collaboration. Our developers become an extension of your team,
              working closely with you to understand your goals and
              requirements, and delivering results that exceed expectations.
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
                src="/assets/img/hire/hireshopify1.1.png"
                alt="Shopify Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale Up Development Capacity with Shopify Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our exceptional dedicated Shopify developers, you can scale
                your development capacity according to your project&apos;s
                needs. Whether you require additional resources for a short-term
                Shopify project or ongoing Shopify support, our flexible
                engagement models allow you to optimize your development process
                efficiently.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Focused solely on your e-commerce projects to ensure success.",
                  },
                  {
                    title: "Versatile Expertise",
                    desc: "Deep understanding of Shopify development and customization.",
                  },
                  {
                    title: "Seamless Collaboration",
                    desc: "Working closely with your team for smooth project execution.",
                  },
                  {
                    title: "Scalable Capacity",
                    desc: "Flexible hiring models to support evolving Shopify development needs.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Leveraging the latest Shopify tools, themes, and plugins.",
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
              Elevate Your Online Store with Our Superior Shopify Development
              Services
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {/* Left */}
            <div className="space-y-6">
              {[
                "Highly skilled and experienced Shopify developers.",
                "Expertise in creating stunning and functional online stores.",
                "Customized Shopify solutions tailored to your business needs.",
                "Agile and efficient Shopify development process.",
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
                "Proven track record of successful Shopify projects.",
                "Scalable Shopify development capacity for growing businesses.",
                "Optimized user experiences for higher conversions.",
                "Advanced app integrations and custom functionalities.",
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
                Be Ready for Triumph with Shopify Developers!
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Techsaga, we understand the immense opportunities that lie
                within the world of e-commerce development. We are dedicated to
                empowering Shopify development, equipping businesses with the
                tools, resources, and support needed to unlock growth and
                success in the digital marketplace.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Skilled Developers",
                    desc: "Experienced Shopify developers delivering tailored e-commerce solutions.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Using modern tools, themes, and frameworks for innovative solutions.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Following coding standards and proven development methodologies.",
                  },
                  {
                    title: "Customized Development",
                    desc: "Tailored Shopify solutions based on your unique business requirements.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Efficient workflows ensuring projects stay on schedule.",
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
                src="/assets/img/hire/hireshopify2.1.png"
                alt="Shopify Development"
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