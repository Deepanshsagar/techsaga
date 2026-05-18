import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";

export default function HireFullStackDevelopers() {
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
                Empower Your Web Projects with Dedicated Full-Stack Web
                Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we provide you with dedicated full-stack web
                developers who possess versatile expertise in front-end and
                back-end development. Our developers ensure seamless
                functionality and exceptional user experiences for your web
                projects.
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
              Enhancing Your Vision with Expert Full-Stack Web Developers
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our full-stack web developers have a deep understanding of
              various technologies and frameworks, enabling them to tackle any
              challenge with expertise and precision.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From responsive web design to database integration, our dedicated
              developers have the skills to bring your vision to life while
              working as an extension of your in-house team.
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
                src="/assets/img/hire/hirefullstack1.1.jpg"
                alt="Full Stack Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale-Up Development Capacity With Exceptional Talents
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our exceptional dedicated full-stack web developers, you
                can scale your development capacity according to your project’s
                needs.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Committed to delivering exceptional results and project success.",
                  },
                  {
                    title: "Versatile Expertise",
                    desc: "Combining front-end and back-end expertise efficiently.",
                  },
                  {
                    title: "Seamless Collaboration",
                    desc: "Working as an extension of your internal team.",
                  },
                  {
                    title: "Scalable Capacity",
                    desc: "Flexible engagement models for evolving needs.",
                  },
                  {
                    title: "Result-Driven Solutions",
                    desc: "Following best practices and latest technologies.",
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

      {/* Why Hire Section */}
      <section className="bg-[#4291CE] py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Why You Should Hire A Full Stack Web Developers Company?
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                "Unleash your potential with dedicated developers.",
                "Highly skilled and experienced developers.",
                "Expertise in cutting-edge technologies.",
                "Customized solutions for your business needs.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 text-white">
                  <span className="text-2xl">✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                "Agile and efficient development process.",
                "Seamless collaboration and communication.",
                "Proven track record of successful projects.",
                "Scalable capacity for evolving requirements.",
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
                Techsaga: Empowering Success with Full Stack Web Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Techsaga's dedicated full-stack web developers bring your ideas
                to life with exceptional results while delivering expertise in
                web development, mobile apps, and custom software solutions.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Skilled Developers",
                    desc: "Tailored solutions in Full Stack, Laravel, PHP, and Mobile Apps.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Adherence to coding standards and modern practices.",
                  },
                  {
                    title: "Cutting-Edge Technologies",
                    desc: "Leveraging latest tools and frameworks.",
                  },
                  {
                    title: "Customized Development",
                    desc: "Solutions tailored to your business objectives.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Agile development process ensuring deadlines are met.",
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
                src="/assets/img/hire/h-fullstack2.1.jpg"
                alt="Empowering Success"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

        <CommonCta/>

      <Footer />
    </main>
  );
}