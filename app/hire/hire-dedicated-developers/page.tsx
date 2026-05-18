import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";

export default function HireDedicatedDevelopers() {
  return (
    <main>
              <Header />
        
      {/* Banner Section */}
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
                 Techsaga: Unlock the Power of Dedicated Developers
                {/* <span className="block text-[#4291CE]">
                  Management
                </span> */}
              </h1>
              <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                        At Techsaga we offer top-tier dedicated developers who are
                committed to bringing your ideas to life and delivering
                exceptional results. By hiring dedicated developers, you gain
                access to a specialized team that is solely focused on your
                project.
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
              Tapping Best IT Solutions by Dedicated Developers
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-blue-600"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our developers have a deep understanding of various technologies
              and frameworks, ensuring that they can tackle any challenge with
              expertise and precision. Whether you need web development, mobile
              app development, or custom software solutions, our dedicated
              developers have got you covered.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you hire dedicated developers from Techsaga, you not only
              gain access to their technical proficiency but also benefit from
              their commitment and seamless collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Collaborating with a Company of Dedicated Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-blue-600"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Techsaga allows you to employ the finest dedicated developers
                for your organization to suit your business requirements in the
                technology stack of MongoDB, ExpressJS, AngularJS, and NodeJS.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex gap-3">
                  <span className="mt-1 text-blue-600">✔</span>
                  <p className="text-gray-700">
                    Each developer you employ from Techsaga is knowledgeable
                    and skilled.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 text-blue-600">✔</span>
                  <p className="text-gray-700">
                    Specialized developers work solely on your project remotely
                    or on-site.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/assets/img/hire/dedicated-dev1.1.jpg"
                alt="Dedicated Developers"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-100 py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src="/assets/img/hire/dedicated2.1.jpg"
                alt="Scale Up"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale Up Development Capacity
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-blue-600"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer Full Stack Developers, Laravel Developers, PHP
                Developers, and Mobile App Developers with strong expertise in
                modern technologies.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Full Stack Developers",
                  "Laravel Developers",
                  "PHP Developers",
                  "Mobile App Developers",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white p-5 shadow-md"
                  >
                    <h4 className="text-xl font-semibold text-gray-900">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Driving Business Growth Section */}
<section className="py-20">
  <div className="relative max-w-7xl mx-auto px-4 w-full">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      {/* Left Content */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900">
          Driving Business Growth with Expert Developers
        </h2>

        <div className="mt-4 h-1 w-24 rounded bg-blue-600"></div>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our dedicated developers and flexible engagement models ensure
          efficient optimization for short-term projects or ongoing support.
          At Techsaga, we pride ourselves on delivering high-quality solutions
          on time and within budget.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Our dedicated developers follow industry best practices, adhere to
          coding standards, and stay updated with the latest trends and
          technologies. Rest assured that your project is in capable hands.
        </p>

        <ul className="mt-8 space-y-5">
          <li className="flex items-start gap-3">
            <span className="mt-1 text-blue-600">✔</span>
            <p className="text-gray-700">
              Techsaga has International standard certification ensuring
              premium quality services.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-1 text-blue-600">✔</span>
            <p className="text-gray-700">
              Choose from Daily, Weekly, or Monthly reporting formats.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-1 text-blue-600">✔</span>
            <p className="text-gray-700">
              Work with experienced development specialists with years of
              expertise.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-1 text-blue-600">✔</span>
            <p className="text-gray-700">
              Dedicated teams help save both time and development costs.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-1 text-blue-600">✔</span>
            <p className="text-gray-700">
              Hire highly skilled Web & Mobile App Developers for your
              business.
            </p>
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="/assets/img/hire/dedicated4.1.jpg"
          alt="Business Growth"
          className="w-full rounded-3xl shadow-xl"
        />
      </div>
    </div>
  </div>
</section>

{/* Empowering Success Section */}
<section className="bg-gray-100 py-20">
  <div className="relative max-w-7xl mx-auto px-4 w-full">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      {/* Left Image */}
      <div>
        <img
          src="/assets/img/hire/dedicated3.1.jpg"
          alt="Empowering Success"
          className="w-full rounded-3xl shadow-xl"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900">
          Techsaga: Empowering Success with Dedicated Developers
        </h2>

        <div className="mt-4 h-1 w-24 rounded bg-blue-600"></div>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Techsaga offers dedicated developers who are focused on bringing
          your ideas to life and delivering exceptional results. With
          expertise in various technologies, they provide web development,
          mobile app development, and custom software solutions.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Hiring dedicated developers provides technical proficiency,
          commitment, and seamless collaboration. Our skilled developers in
          Full Stack, Laravel, PHP, and Mobile App development deliver
          tailored solutions for your needs.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Techsaga follows industry best practices, adheres to coding
          standards, and provides timely reporting formats to ensure
          successful project delivery.
        </p>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-md">
            <h4 className="text-xl font-semibold text-gray-900">
              Web Development
            </h4>

            <p className="mt-2 text-gray-600">
              Modern and scalable web applications for businesses.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-md">
            <h4 className="text-xl font-semibold text-gray-900">
              Mobile Apps
            </h4>

            <p className="mt-2 text-gray-600">
              Native and cross-platform mobile solutions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-md">
            <h4 className="text-xl font-semibold text-gray-900">
              Custom Software
            </h4>

            <p className="mt-2 text-gray-600">
              Tailored software solutions for business growth.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-md">
            <h4 className="text-xl font-semibold text-gray-900">
              Dedicated Teams
            </h4>

            <p className="mt-2 text-gray-600">
              Seamless collaboration with expert developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <CommonCta/>
          <Footer />
    </main>
  );
}