import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";

export default function HireReactDevelopers() {
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
                Empower Your Web Projects with Dedicated React Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we offer dedicated React developers with versatile
                expertise in building scalable, fast, and interactive web
                applications. Our developers specialize in React.js, Next.js,
                TypeScript, Redux, and modern UI frameworks to deliver seamless
                digital experiences.
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
              Unlock Powerful Frontend Experiences with React Experts
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our dedicated React developers have extensive experience in
              building modern web applications using React.js and related
              technologies. They excel in creating responsive interfaces,
              reusable components, and scalable frontend architectures that
              ensure excellent user experiences.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you hire dedicated React developers from Techsaga, you gain
              access to professionals who work closely with your team,
              understand your project requirements, and deliver solutions that
              perfectly align with your business goals.
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
                src="/assets/img/hire/photo-1461749280684-dccba630e2f6.avif"
                alt="React Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale Up Development Capacity with React Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our exceptional dedicated React developers, you can scale
                your development capacity according to your project&apos;s
                needs. Whether you require additional resources for a short-term
                React project or ongoing frontend support, our flexible
                engagement models help you optimize your development process
                efficiently.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Focused entirely on your web development projects to ensure exceptional results.",
                  },
                  {
                    title: "Versatile Expertise",
                    desc: "Deep understanding of React.js, Next.js, Redux, TypeScript, and APIs.",
                  },
                  {
                    title: "Seamless Collaboration",
                    desc: "Working closely with your team for smooth communication and execution.",
                  },
                  {
                    title: "Scalable Capacity",
                    desc: "Flexible hiring models to support growing frontend development needs.",
                  },
                  {
                    title: "Modern Technologies",
                    desc: "Leveraging the latest frontend frameworks and tools for high-performance apps.",
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
              Elevate Your Digital Products with Our React Development Services
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {/* Left */}
            <div className="space-y-6">
              {[
                "Highly skilled and experienced React developers.",
                "Expertise in building modern, responsive, and scalable web applications.",
                "Customized React solutions tailored to your business needs.",
                "Agile and efficient frontend development process.",
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
                "Proven track record of successful React development projects.",
                "Scalable frontend development capacity for growing businesses.",
                "Optimized user experiences for better engagement and conversions.",
                "Advanced integrations and reusable component architecture.",
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
                Be Ready for Digital Success with React Developers!
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Techsaga, we understand the immense opportunities that lie
                within modern frontend development. We are dedicated to
                empowering businesses with React development solutions that
                enhance performance, scalability, and user engagement.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Skilled Developers",
                    desc: "Experienced React developers delivering tailored frontend solutions.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Using modern frameworks and tools for innovative digital products.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Following optimized coding standards and scalable architectures.",
                  },
                  {
                    title: "Customized Development",
                    desc: "Tailored React solutions based on your unique business requirements.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Efficient workflows ensuring projects stay on track and within deadlines.",
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
                src="/assets/img/hire/photo-1515879218367-8466d910aaa4.avif"
                alt="React Development"
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