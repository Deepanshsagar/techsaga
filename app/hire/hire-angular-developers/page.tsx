// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import CommonCta from "@/components/CommonCta";

// export default function HireAngularDevelopers() {
//   return (
//     <main>
//       <Header />

//       {/* Hero Banner */}
//       <section
//         className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
//         style={{
//           backgroundImage: "url('/assets/img/service-banner.png')",
//         }}
//       >
//         <div className="relative max-w-7xl mx-auto px-4 w-full">
//           <div className="grid lg:grid-cols-2 items-center gap-12">
//             {/* Left Content */}
//             <div className="max-w-xl">
//               <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
//                 Empower Your Web Applications with Dedicated Angular Developers
//               </h1>

//               <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
//                 At Techsaga, we offer dedicated Angular developers with
//                 extensive expertise in building dynamic, scalable, and
//                 high-performing web applications. Our developers specialize in
//                 Angular framework development, API integrations, responsive UI
//                 design, and enterprise-grade application architecture.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="bg-gray-100 py-20">
//         <div className="relative max-w-7xl mx-auto px-4 w-full">
//           <div className="mx-auto max-w-5xl text-center">
//             <h2 className="text-4xl font-bold text-gray-900">
//               Unlock Advanced Angular Development Expertise
//             </h2>

//             <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

//             <p className="mt-8 text-lg leading-8 text-gray-600">
//               Our dedicated Angular developers have years of experience creating
//               modern and interactive applications using the Angular framework.
//               They excel in component-based architecture, TypeScript
//               development, state management, REST API integration, and
//               performance optimization for enterprise-level applications.
//             </p>

//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               When you hire dedicated Angular developers from Techsaga, you
//               gain a team committed to seamless collaboration and innovation.
//               Our developers work closely with your business to understand your
//               goals, deliver scalable solutions, and ensure exceptional user
//               experiences.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Scale Up Section */}
//       <section className="py-20">
//         <div className="relative max-w-7xl mx-auto px-4 w-full">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Image */}
//             <div>
//               <img
//                 src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
//                 alt="Angular Developers"
//                 className="w-full rounded-3xl shadow-xl"
//               />
//             </div>

//             {/* Content */}
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900">
//                 Scale Your Development Team with Angular Developers
//               </h2>

//               <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

//               <p className="mt-6 text-lg leading-8 text-gray-600">
//                 With our experienced Angular developers, you can quickly scale
//                 your development capacity according to your project needs.
//                 Whether you require developers for short-term frontend projects
//                 or long-term enterprise applications, our flexible engagement
//                 models help optimize productivity and efficiency.
//               </p>

//               <ul className="mt-8 space-y-5">
//                 {[
//                   {
//                     title: "Dedicated Developers",
//                     desc: "Focused exclusively on your Angular projects to ensure outstanding results.",
//                   },
//                   {
//                     title: "Frontend Expertise",
//                     desc: "Strong command over Angular, TypeScript, RxJS, and modern frontend technologies.",
//                   },
//                   {
//                     title: "Seamless Collaboration",
//                     desc: "Working closely with your team for smooth communication and execution.",
//                   },
//                   {
//                     title: "Scalable Solutions",
//                     desc: "Flexible hiring models for startups, enterprises, and growing businesses.",
//                   },
//                   {
//                     title: "Modern Technologies",
//                     desc: "Leveraging the latest Angular tools and best practices for robust applications.",
//                   },
//                 ].map((item, index) => (
//                   <li key={index} className="flex gap-3">
//                     <span className="mt-1 text-blue-600">✔</span>

//                     <p className="text-gray-700">
//                       <span className="font-semibold">
//                         {item.title}:
//                       </span>{" "}
//                       {item.desc}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Section */}
//       <section className="bg-[#4291CE] py-20">
//         <div className="relative max-w-7xl mx-auto px-4 w-full">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-white">
//               Why Choose Our Angular Development Services?
//             </h2>
//           </div>

//           <div className="mt-14 grid md:grid-cols-2 gap-10">
//             {/* Left */}
//             <div className="space-y-6">
//               {[
//                 "Highly skilled and experienced Angular developers.",
//                 "Expertise in building scalable and dynamic web applications.",
//                 "Customized Angular solutions tailored to business requirements.",
//                 "Agile and efficient development process for faster delivery.",
//                 "Responsive and user-friendly UI/UX implementation.",
//               ].map((item, index) => (
//                 <div key={index} className="flex gap-4 text-white">
//                   <span className="text-2xl">✔</span>
//                   <p>{item}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Right */}
//             <div className="space-y-6">
//               {[
//                 "Seamless collaboration and transparent communication.",
//                 "Proven expertise in enterprise and custom Angular applications.",
//                 "Scalable development support for evolving business needs.",
//                 "Integration with APIs, cloud platforms, and third-party tools.",
//                 "Helping businesses achieve digital transformation goals.",
//               ].map((item, index) => (
//                 <div key={index} className="flex gap-4 text-white">
//                   <span className="text-2xl">✔</span>
//                   <p>{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Success Section */}
//       <section className="py-20">
//         <div className="relative max-w-7xl mx-auto px-4 w-full">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900">
//                 Be Ready for Success with Angular Developers!
//               </h2>

//               <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

//               <p className="mt-6 text-lg leading-8 text-gray-600">
//                 At Techsaga, we help businesses harness the full potential of
//                 Angular development. From interactive user interfaces to
//                 enterprise-grade web applications, our developers provide the
//                 expertise and innovation required to build future-ready digital
//                 solutions.
//               </p>

//               <ul className="mt-8 space-y-5">
//                 {[
//                   {
//                     title: "Skilled Developers",
//                     desc: "Experienced Angular developers delivering high-quality solutions.",
//                   },
//                   {
//                     title: "Modern Technologies",
//                     desc: "Using Angular, TypeScript, APIs, and cloud integrations for innovation.",
//                   },
//                   {
//                     title: "Industry Best Practices",
//                     desc: "Following scalable coding standards and proven development methodologies.",
//                   },
//                   {
//                     title: "Customized Development",
//                     desc: "Tailored Angular applications based on unique business goals.",
//                   },
//                   {
//                     title: "Timely Delivery",
//                     desc: "Efficient workflows ensuring projects are delivered on time.",
//                   },
//                 ].map((item, index) => (
//                   <li key={index} className="flex gap-3">
//                     <span className="mt-1 text-blue-600">✔</span>

//                     <p className="text-gray-700">
//                       <span className="font-semibold">
//                         {item.title}:
//                       </span>{" "}
//                       {item.desc}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Right Image */}
//             <div>
//               <img
//                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop"
//                 alt="Angular Development"
//                 className="w-full rounded-3xl shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <CommonCta />

//       <Footer />
//     </main>
//   );
// }
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CommonCta from "@/components/CommonCta";

export default function HireAngularDevelopers() {
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
                Empower Your Web Applications with Dedicated Angular Developers
              </h1>

              <p className="mt-4 text-black text-base lg:text-md leading-relaxed">
                At Techsaga, we offer dedicated Angular developers with
                extensive expertise in building dynamic, scalable, and
                high-performing web applications. Our developers specialize in
                Angular framework development, API integrations, responsive UI
                design, and enterprise-grade application architecture.
              </p>
           </div>
          </div>
        </div>
       </section>

      {/* Overview - Modern Grid Cards */}
      <section className="bg-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="mx-auto max-w-5xl text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Unlock Advanced Angular Development Expertise
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our dedicated Angular developers have years of experience creating
              modern and interactive applications using the Angular framework.
              They excel in component-based architecture, TypeScript
              development, state management, REST API integration, and
              performance optimization for enterprise-level applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you hire dedicated Angular developers from Techsaga, you
              gain a team committed to seamless collaboration and innovation.
              Our developers work closely with your business to understand your
              goals, deliver scalable solutions, and ensure exceptional user
              experiences.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Component-based architecture",
              "TypeScript development",
              "State management",
              "REST API integration",
              "Performance optimization",
              "Enterprise-level applications"
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#4291CE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Up Section - Modern Layout */}
      <section className="py-20 bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#4291CE] rounded-3xl transform -rotate-3"></div>
              <img
                src="/assets/img/hire/photo-1555066931-4365d14bab8c.avif"
                alt="Angular Developers"
                className="relative w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Scale Your Development Team with Angular Developers
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With our experienced Angular developers, you can quickly scale
                your development capacity according to your project needs.
                Whether you require developers for short-term frontend projects
                or long-term enterprise applications, our flexible engagement
                models help optimize productivity and efficiency.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  {
                    title: "Dedicated Developers",
                    desc: "Focused exclusively on your Angular projects to ensure outstanding results.",
                  },
                  {
                    title: "Frontend Expertise",
                    desc: "Strong command over Angular, TypeScript, RxJS, and modern frontend technologies.",
                  },
                  {
                    title: "Seamless Collaboration",
                    desc: "Working closely with your team for smooth communication and execution.",
                  },
                  {
                    title: "Scalable Solutions",
                    desc: "Flexible hiring models for startups, enterprises, and growing businesses.",
                  },
                  {
                    title: "Modern Technologies",
                    desc: "Leveraging the latest Angular tools and best practices for robust applications.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                    <span className="mt-1 text-[#4291CE] text-xl font-bold">✓</span>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold">
                          {item.title}:
                        </span>{" "}
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Modern Cards */}
      <section className="bg-[#4291CE] py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Why Choose Our Angular Development Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left */}
            <div className="space-y-4">
              {[
                "Highly skilled and experienced Angular developers.",
                "Expertise in building scalable and dynamic web applications.",
                "Customized Angular solutions tailored to business requirements.",
                "Agile and efficient development process for faster delivery.",
                "Responsive and user-friendly UI/UX implementation.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 text-white bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <span className="text-2xl">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="space-y-4">
              {[
                "Seamless collaboration and transparent communication.",
                "Proven expertise in enterprise and custom Angular applications.",
                "Scalable development support for evolving business needs.",
                "Integration with APIs, cloud platforms, and third-party tools.",
                "Helping businesses achieve digital transformation goals.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 text-white bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <span className="text-2xl">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Section - Modern Layout */}
      <section className="py-20 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Be Ready for Success with Angular Developers!
              </h2>

              <div className="mt-4 h-1 w-24 rounded bg-[#4291CE]"></div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Techsaga, we help businesses harness the full potential of
                Angular development. From interactive user interfaces to
                enterprise-grade web applications, our developers provide the
                expertise and innovation required to build future-ready digital
                solutions.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Skilled Developers",
                    desc: "Experienced Angular developers delivering high-quality solutions.",
                  },
                  {
                    title: "Modern Technologies",
                    desc: "Using Angular, TypeScript, APIs, and cloud integrations for innovation.",
                  },
                  {
                    title: "Industry Best Practices",
                    desc: "Following scalable coding standards and proven development methodologies.",
                  },
                  {
                    title: "Customized Development",
                    desc: "Tailored Angular applications based on unique business goals.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Efficient workflows ensuring projects are delivered on time.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <span className="mt-1 text-[#4291CE] text-xl font-bold">✓</span>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold">
                          {item.title}:
                        </span>{" "}
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4291CE] to-[#2563EB] rounded-3xl transform rotate-3"></div>
              <img
                src="/assets/img/hire/photo-1516321318423-f06f85e504b3.avif"
                alt="Angular Development"
                className="relative w-full rounded-3xl shadow-xl"
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
