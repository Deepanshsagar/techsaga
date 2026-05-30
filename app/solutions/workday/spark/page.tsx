// app/spark/page.jsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const differentiators = [
  {
    title: "Global Services & Sales Partner",
    description:
      "Proud Partner with early access to the latest Workday updates",
  },
  {
    title: "100% Workday Boutique",
    description:
      "Complete focus on Workday-only solutions for successful deployments",
  },
  {
    title: "Unmatched Discipline",
    description:
      "Keen focus on economic value and timelines, striving for cost efficiency",
  },
  {
    title: "Access To The Top Management",
    description:
      "Easy access to the top management to address ongoing plans and progress",
  },
  {
    title: "Decades of Experience",
    description:
      "Executive management from Workday ecosystem with decades of experience",
  },
  {
    title: "Agile Delivery Approach",
    description:
      "Within a strategic environment, an agile delivery of fast rollouts and fast pivots",
  },
];

const modules = [
  "Peakon",
  "Advance Compensation",
  "Banking & Settlement",
  "Studio Starter Kit",
  "Absence",
  "Accounting Center",
  "Orchestrate",
  "Time Tracking",
  "Learning",
  "Succession Planning",
  "Journey",
];

const services = [
  {
    title: "Techsaga Spark",
    subtitle: "Fast-Track Your Workday Transformation",
  },
  {
    title: "Techsaga Nexus",
    subtitle: "Seamlessly Expand Your Workday Footprint Globally",
  },
  {
    title: "Techsaga Apex",
    subtitle: "Maximize Your Workday ROI Through Continuous Evolution",
  },
];

export default function SparkPage() {
  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
        <Header />

      {/* HERO SECTION */}
      <section className="">
        <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-0">

          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-6">
              Spark Your Workday Journey
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Accelerate Your Workday Transformation with Unmatched Agility and Precision
            </h1>

            <p className="text-lg text-grey-100 leading-relaxed mb-10">
              Drive faster adoption, seamless deployment, and scalable Workday
              innovation with Techsaga’s strategic implementation framework.
            </p>

            {/* <button className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-4 rounded-2xl font-semibold text-lg transition duration-300">
              Get Started
            </button> */}
          </div>

        </div>
      </section>

      {/* WHAT IS SPARK */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                What is Techsaga Spark?
              </span>

              <h2 className="text-4xl font-bold mt-4 mb-6">
                Tailored Workday Adoption Designed Around Your Business
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Techsaga Spark is a tailored Workday adoption and implementation
                program designed to meet businesses at their unique stage and
                requirements.
              </p>

              <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Techsaga Spark Lite
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  A rapid approach to Workday adoption — Techsaga Spark Lite
                  offers a rapid, out-of-the-box implementation of Workday HCM
                  and/or Finance, making it perfect for organizations that want
                  to get started quickly without the complexity of tailored
                  builds.
                </p>
              </div>
            </div>

            {/* Carousel Style Cards */}
            <div className="overflow-hidden">
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

                {services.map((service, index) => (
                  <div
                    key={index}
                    className="min-w-[320px] bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                      <span className="text-blue-700 font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Techsaga Differentiators
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Why Organizations Choose Techsaga
            </h2>

            <p className="text-gray-600 text-lg">
              Our approach to Workday transformation stands out because we
              consistently deliver meaningful outcomes that drive real business
              value and lasting success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl mb-6">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* MODULES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Workday Modules Covered
            </span>

            <h2 className="text-4xl font-bold mt-4">
              For Full-Spectrum Workday Transformation
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5">

            {modules.map((module, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-blue-50 border border-blue-100 rounded-2xl text-blue-900 font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
              >
                {module}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Our Services
              </span>

              <h2 className="text-4xl font-bold mt-4">
                Explore More Workday Solutions
              </h2>
            </div>

            <p className="text-gray-600 mt-4 md:mt-0 max-w-xl">
              Discover scalable Workday transformation programs tailored to your
              growth journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-3xl border border-gray-200 p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="absolute top-0 right-0 h-32 w-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

                <span className="inline-block text-sm font-semibold text-blue-600 mb-4">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg relative z-10">
                  {service.subtitle}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_40%)]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

          <span className="text-blue-300 uppercase tracking-widest font-semibold">
            Advance
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            Take the First Step Toward Smarter Workday Solutions
          </h2>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Empower your organization with agile Workday capabilities, scalable
            implementations, and continuous optimization strategies.
          </p>

          <button className="bg-white text-blue-900 hover:bg-blue-100 px-10 py-4 rounded-2xl font-semibold text-lg transition duration-300">
            Get Started
          </button>

        </div>
      </section>
    <Footer />
    </main>
  );
}