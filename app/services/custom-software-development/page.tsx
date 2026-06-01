// app/services/application-support/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function ApplicationSupportPage() {

  // =========================
  // UPDATED CONTENT ONLY
  // =========================


  const designSolutions = [
    "We take the time to understand your business processes, challenges, and goals.",
    "Through in-depth consultations, we gather insights to create a comprehensive development plan.",
    "Our skilled designers collaborate with you to create intuitive and visually appealing interfaces.",
    "We focus on user experience, ensuring that the software is user-friendly and enhances productivity.",
  ];

  const skilledTeam = [
    "Delivering projects in a time-bound manner",
    "Expert Android developers",
    "Competent iOS development",
    "User-friendly UI/UX design",
  ];

  const futureBenefits = [
    "Enhanced Efficiency",
    "Competitive Advantage",
    "Integration Capabilities",
    "Data Security and Confidentiality",
  ];

  const processSteps = [
    "Requirement Analysis",
    "Design and Development",
    "Quality Assurance",
    "Deployment and Support",
  ];

  const empowerLeft = [
    "Tailor-made solutions to meet your specific business needs",
    "Enhanced efficiency and productivity through optimized workflows",
    "Improved customer experience with personalized features",
    "Streamlined business processes and automation of tasks",
    "Scalable solutions that can grow with your business",
  ];

  const empowerRight = [
    "Integration of multiple systems for seamless data flow",
    "Increased security and protection of sensitive information",
    "Competitive advantage with unique software solutions",
    "Ongoing support and maintenance to ensure smooth operations",
    "Empowerment to innovate and stay ahead in the digital landscape",
  ];

  const features = [
    {
      title: "Enhanced Efficiency",
      description:
        "Streamlined solutions tailored to automate workflows, remove bottlenecks, and enhance productivity.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Data Security & Confidentiality",
      description:
        "Robust security measures ensure the confidentiality and integrity of your business data.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Competitive Advantage",
      description:
        "Unique features and functionalities help your business stand out from competitors.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Integration Capabilities",
      description:
        "Smooth data flow and communication between systems eliminate silos and improve operations.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce manual processes, optimize resources, and eliminate unnecessary software costs.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Agile Approach",
      description:
        "Iterative development cycles ensure flexibility, continuous feedback, and refinement.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "Why should I opt for custom software development instead of using off-the-shelf software?",
      answer:
        "Custom software gives complete control over features and functionality while ensuring scalability, flexibility, and seamless integration with your existing systems.",
    },
    {
      question:
        "How long does the custom software development process typically take?",
      answer:
        "The timeline depends on project complexity, required features, customization level, and available resources. It may range from weeks to months.",
    },
    {
      question: "How much does custom software development cost?",
      answer:
        "The cost depends on project scope, complexity, technology stack, features, and level of customization required.",
    },
    {
      question:
        "What ongoing support and maintenance are provided for custom software?",
      answer:
        "We provide bug fixes, updates, enhancements, and technical support through various communication channels.",
    },
    {
      question:
        "Can custom software be integrated with existing systems and databases?",
      answer:
        "Yes, custom software can integrate seamlessly with existing systems for smooth data flow and operations.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring deliverables are achieved within your budget and timeline.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models that optimize productivity and project resources.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "We help businesses efficiently hire top talent without intermediaries.",
      image: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div>
      <Header />

      {/* HERO BANNER SAME */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/software-development.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
               Custom Software Development
                {/* <span className="block text-[#4291CE]">
                  Support Services
                </span> */}
              </h1>
                <p className="text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2 mt-3">
                  Tailored software solutions built to match your unique business processes and goals.
                </p>

            </div>
          </div>
        </div>
      </section>
      {/* SECTION 1 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Crafting Digital Advancement
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Custom Software Delivering Exceptional Results for Your Growth
            </h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <h3 className="text-3xl font-bold mb-8">
                Designing a Tailor Made Solution
              </h3>

              <ul className="space-y-5">
                {designSolutions.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#4291CE] text-white flex items-center justify-center text-sm mt-1">
                      ✓
                    </div>

                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src="/assets/img/cust-div.jpg"
                alt="solution"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/q.jpg"
                alt="team"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-5">
                We Have a Skilled Team
              </h3>

              <p className="leading-8 mb-5">
                Our team of skilled developers, engineers, and designers work
                closely with you to understand your business processes,
                challenges, and goals.
              </p>

              <p className="leading-8 mb-5">
                We pride ourselves on delivering projects within the designated
                timeframe while maintaining the highest quality standards.
              </p>

              <div className="space-y-4">
                {skilledTeam.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="text-[#4291CE] font-bold">✓</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Transforming Future With the Custom Software Development
              </h3>

              <p className="leading-8 mb-8">
                Custom software development offers enhanced efficiency,
                scalability, flexibility, and security while providing a strong
                competitive advantage.
              </p>

              <div className="space-y-5">
                {futureBenefits.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center">

                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4 className="text-lg font-semibold">
                      {item}
                    </h4>

                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/06.jpg"
                alt="future"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/04.jpg"
                alt="process"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Our Custom Development Journey Blueprint
              </h3>

              <p className="leading-8 mb-8">
                Our custom development journey begins with analyzing your
                business requirements and objectives while following an agile
                development approach.
              </p>

              <div className="space-y-5">
                {processSteps.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">

                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4 className="text-lg font-semibold pt-3">
                      {item}
                    </h4>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Experience the Power of Custom Software Development
            </h2>

            <p className="text-lg">
              Harness Innovation and Efficiency with Custom Software Solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="space-y-6">
              {empowerLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {empowerRight.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Fuel Your Business Success with Our Tailor-Made Software Solutions
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Skyrocket Your Business Growth with Our Custom Software Development Services
            </h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
              >

                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-14">

            <h2 className="text-4xl font-bold">
              Our Custom Software Development Expertise
            </h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">

            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm group"
              >

                <summary className="cursor-pointer font-semibold text-lg flex justify-between items-center">
                  {faq.question}
                  <span className="group-open:rotate-45 transition">+</span>
                </summary>

                <p className="mt-4 text-gray-600 leading-7">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <h2 className="text-4xl font-bold mb-5">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible Budget, Customized Approach. Choose What Works for You.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {collaborationCards.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-8 text-center hover:shadow-xl transition"
              >

                <div className="flex justify-center mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={90}
                    height={90}
                  />
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="pt-15 px-4 pb-20 bg-gradient-to-b from-[#f3f4f6] to-transparent">
        <div className="text-3xl font-bold text-gray-900 text-center mb-2">
          Get In Touch With Us.
        </div>
        <p className="text-gray-500 text-sm leading-relaxed text-center mb-10">
          Turn every digital interaction into a competitive advantage with high-velocity financial engines built to scale.
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-full md:w-1/2 mx-auto">
          <BottomForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}


// import BottomForm from "@/components/BottomForm";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Image from "next/image";

// <<<<<<< HEAD
// export default function CustomSoftwareDevelopmentPage() {
// =======

// import { getMeta } from "@/app/lib/getMeta";

// export async function generateMetadata() {
//   return getMeta("/services/custom-software-development");
// }


// export default function ApplicationSupportPage() {

//   // =========================
//   // UPDATED CONTENT ONLY
//   // =========================


//   const designSolutions = [
//     "We take the time to understand your business processes, challenges, and goals.",
//     "Through in-depth consultations, we gather insights to create a comprehensive development plan.",
//     "Our skilled designers collaborate with you to create intuitive and visually appealing interfaces.",
//     "We focus on user experience, ensuring that the software is user-friendly and enhances productivity.",
//   ];

//   const skilledTeam = [
//     "Delivering projects in a time-bound manner",
//     "Expert Android developers",
//     "Competent iOS development",
//     "User-friendly UI/UX design",
//   ];

//   const futureBenefits = [
//     "Enhanced Efficiency",
//     "Competitive Advantage",
//     "Integration Capabilities",
//     "Data Security and Confidentiality",
//   ];

//   const processSteps = [
//     "Requirement Analysis",
//     "Design and Development",
//     "Quality Assurance",
//     "Deployment and Support",
//   ];

//   const empowerLeft = [
//     "Tailor-made solutions to meet your specific business needs",
//     "Enhanced efficiency and productivity through optimized workflows",
//     "Improved customer experience with personalized features",
//     "Streamlined business processes and automation of tasks",
//     "Scalable solutions that can grow with your business",
//   ];

//   const empowerRight = [
//     "Integration of multiple systems for seamless data flow",
//     "Increased security and protection of sensitive information",
//     "Competitive advantage with unique software solutions",
//     "Ongoing support and maintenance to ensure smooth operations",
//     "Empowerment to innovate and stay ahead in the digital landscape",
//   ];

// >>>>>>> 55a2afe1e78b7429f4bc2acb185a173352b0b684
//   const features = [
//     {
//       title: "Business-Focused Strategy",
//       desc: "We align software architecture, workflows, and user journeys with your business goals, operations, and long-term growth plans.",
//       icon: "⚡",
//     },
//     {
//       title: "Enterprise-Level Security",
//       desc: "From infrastructure to user access and data handling, every layer of your software is built with modern security standards.",
//       icon: "🔒",
//     },
//     {
//       title: "Scalable Software Architecture",
//       desc: "Our software solutions are designed to scale with growing users, teams, integrations, and operational complexity.",
//       icon: "🚀",
//     },
//     {
//       title: "End-to-End Technology Ecosystem",
//       desc: "We combine strategy, UI/UX, engineering, DevOps, cloud, automation, and support under one delivery ecosystem.",
//       icon: "🔗",
//     },
//   ];

//   const process = [
//     {
//       step: "01",
//       title: "Discovery & Business Understanding",
//       desc: "We begin with your business goals, workflows, users, pain points, competitors, internal challenges, and long-term vision.",
//     },
//     {
//       step: "02",
//       title: "Requirement Mapping",
//       desc: "We convert business needs into clear functional requirements, workflows, integrations, user roles, and technical priorities.",
//     },
//     {
//       step: "03",
//       title: "UI/UX Planning",
//       desc: "We design intuitive user journeys, wireframes, interface structures, and experience flows so the software is easy to use.",
//     },
//     {
//       step: "04",
//       title: "Architecture & Technology Planning",
//       desc: "We select the right technology stack, cloud environment, security layers, integrations, and database structure.",
//     },
//     {
//       step: "05",
//       title: "Agile Development",
//       desc: "Our development team builds software in structured phases for better visibility, testing, feedback, and continuous improvement.",
//     },
//     {
//       step: "06",
//       title: "Quality Testing",
//       desc: "We test functionality, responsiveness, integrations, security, user flows, and performance before deployment.",
//     },
//     {
//       step: "07",
//       title: "Deployment & Launch",
//       desc: "We manage hosting, production setup, deployment configuration, and launch support for a smooth rollout.",
//     },
//     {
//       step: "08",
//       title: "Training & Handover",
//       desc: "We provide walkthroughs, documentation, and team training to ensure smooth software adoption.",
//     },
//     {
//       step: "09",
//       title: "Support & Optimization",
//       desc: "After launch, we continue monitoring, improving, optimizing, and enhancing your software as your business grows.",
//     },
//   ];

//   const solutions = [
//     {
//       title: "Custom Web Application Development",
//       desc: "Scalable and secure web applications designed around operations, users, customer engagement, and business workflows.",
//       image: "/assets/img/service1.jpg",
//     },
//     {
//       title: "Enterprise Software Development",
//       desc: "Enterprise-grade software systems that centralize operations, automate processes, and improve business efficiency.",
//       image: "/assets/img/ds3.jpg",
//     },
//     {
//       title: "SaaS Product Development",
//       desc: "Launch cloud-based SaaS platforms with scalable architecture, subscriptions, dashboards, and seamless user experiences.",
//       image: "/assets/img/services-l1.jpg",
//     },
//     {
//       title: "Mobile App Development",
//       desc: "Build high-performance Android, iOS, and hybrid mobile applications focused on usability and scalability.",
//       image: "/assets/img/services-l2.jpg",
//     },
//     {
//       title: "CRM & ERP Development",
//       desc: "Custom CRM and ERP software tailored around sales, operations, inventory, finance, and customer management.",
//       image: "/assets/img/services-l3.jpg",
//     },
//     {
//       title: "Marketplace & E-Commerce Platforms",
//       desc: "Build scalable marketplaces, e-commerce systems, and digital transaction platforms with complete workflow management.",
//       image: "/assets/img/competative-advantage.jpg",
//     },
//     {
//       title: "API & Third-Party Integrations",
//       desc: "Integrate payment gateways, analytics, cloud systems, APIs, CRMs, and external tools into one ecosystem.",
//       image: "/assets/img/service1.jpg",
//     },
//     {
//       title: "Cloud-Based Software Development",
//       desc: "Develop cloud-native applications with better accessibility, scalability, infrastructure flexibility, and reliability.",
//       image: "/assets/img/ds3.jpg",
//     },
//     {
//       title: "AI-Enabled Software Development",
//       desc: "Leverage AI-powered automation, analytics, recommendation engines, and intelligent workflows within your software.",
//       image: "/assets/img/services-l1.jpg",
//     },
//   ];

//   const industries = [
//     "Healthcare",
//     "Real Estate",
//     "Education & E-learning",
//     "Retail & Consumer Goods",
//     "SaaS Businesses",
//     "Finance & Banking",
//     "Travel & Tourism",
//     "Logistics & Transportation",
//     "Manufacturing",
//     "Food & Beverage",
//     "Cloud Computing",
//     "Environmental Engineering",
//     "Heavy Machinery",
//     "Fashion & Lifestyle Brands",
//   ];

//   const technologies = {
//     backend: [
//       "PHP",
//       "Laravel",
//       "CodeIgniter",
//       "CakePHP",
//       "Java",
//       "Python",
//       "WordPress",
//       "Magento",
//       "Shopify",
//     ],
//     frontend: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Modern Responsive Frameworks",
//     ],
//     mobile: ["Android", "iOS", "Hybrid Mobile Development"],
//     enterprise: [
//       "Salesforce",
//       "Workday",
//       "SAP",
//       "Cloud Infrastructure",
//       "API Integrations",
//       "Data Analytics",
//       "AI-Enabled Systems",
//     ],
//   };

//   const outcomes = [
//     {
//       title: "Higher Operational Efficiency",
//       desc: "Automate repetitive tasks, reduce manual errors, and improve productivity across teams.",
//     },
//     {
//       title: "Better Business Visibility",
//       desc: "Centralize reporting, customer data, analytics, and operational insights into one connected platform.",
//     },
//     {
//       title: "Stronger Customer Experience",
//       desc: "Deliver smoother, faster, and more personalized digital experiences for users and customers.",
//     },
//     {
//       title: "Improved Team Collaboration",
//       desc: "Connect departments, teams, customers, and vendors into one streamlined ecosystem.",
//     },
//     {
//       title: "Scalable Digital Infrastructure",
//       desc: "Build future-ready software that supports business growth and operational expansion.",
//     },
//     {
//       title: "Reduced Dependency On Multiple Tools",
//       desc: "Replace disconnected systems with one integrated software platform tailored to your workflow.",
//     },
//     {
//       title: "Faster Decision-Making",
//       desc: "Use dashboards, analytics, and reports for smarter and faster business decisions.",
//     },
//     {
//       title: "Competitive Advantage",
//       desc: "Create digital capabilities and operational efficiencies your competitors cannot easily replicate.",
//     },
//   ];

//   const engagementModels = [
//     {
//       title: "Project-Based Development",
//       desc: "Best for businesses with defined requirements, timelines, and deliverables.",
//     },
//     {
//       title: "Dedicated Development Team",
//       desc: "Ideal for businesses requiring ongoing development, support, and product growth.",
//     },
//     {
//       title: "MVP Development",
//       desc: "Perfect for startups validating product ideas before full-scale investment.",
//     },
//     {
//       title: "Enterprise Software Partnership",
//       desc: "Long-term technology partnerships focused on transformation, integrations, automation, and support.",
//     },
//     {
//       title: "Maintenance & Support Retainer",
//       desc: "Continuous upgrades, bug fixes, optimization, monitoring, and technical support.",
//     },
//   ];

//   const faqs = [
//     {
//       question: "What are custom software development services?",
//       answer:
//         "Custom software development services involve designing, developing, and maintaining software built specifically for a business’s workflows, users, and operational goals.",
//     },
//     {
//       question:
//         "Why should I choose custom software instead of ready-made software?",
//       answer:
//         "Custom software is tailored around your actual business workflow, offering better scalability, flexibility, automation, and long-term operational efficiency.",
//     },
//     {
//       question: "What types of software does Techsaga develop?",
//       answer:
//         "Techsaga develops SaaS platforms, CRM systems, ERP systems, mobile apps, web applications, marketplaces, dashboards, enterprise software, and automation platforms.",
//     },
//     {
//       question: "How long does software development take?",
//       answer:
//         "The timeline depends on complexity, integrations, features, and testing requirements. MVPs may take weeks, while enterprise platforms may require several months.",
//     },
//     {
//       question: "Can Techsaga improve existing software?",
//       answer:
//         "Yes. We modernize, redesign, optimize, migrate, and enhance existing software systems including UI/UX improvements and API integrations.",
//     },
//     {
//       question: "Do you provide maintenance after launch?",
//       answer:
//         "Yes. We provide post-launch support including maintenance, monitoring, bug fixes, feature enhancements, and optimization.",
//     },
//   ];

//   return (
//     <div className="bg-white overflow-hidden">
//       <Header />

//      {/* HERO SECTION */}
// <section className="relative overflow-hidden bg-[#081120] text-white py-24 lg:py-32">
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4291CE30,transparent_35%)]" />

//   <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4291CE]/20 blur-[140px]" />

//   <div className="max-w-7xl mx-auto px-4 relative z-10">
//     <div className="grid lg:grid-cols-2 items-center gap-16">
//       <div>
//         <span className="px-5 py-2 rounded-full border border-white/10 bg-white/10 text-sm">
//           Custom Software Development Services
//         </span>

//         <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mt-8">
//           Custom Software Solutions
//           <span className="text-[#4291CE] block">
//             Built For Business Growth
//           </span>
//         </h1>

//         <p className="text-lg text-gray-300 leading-8 mt-8 max-w-xl">
//           Techsaga delivers scalable, secure, and high-performance software
//           tailored around your workflows, users, and business goals.
//         </p>

//         <p className="text-lg text-gray-300 leading-8 mt-5 max-w-xl">
//           From enterprise platforms and SaaS products to CRM systems and
//           automation tools, we build software that solves real business
//           challenges.
//         </p>

//         <div className="flex flex-wrap gap-5 mt-10">
//           <button className="bg-[#4291CE] hover:bg-[#367cb2] transition px-8 py-4 rounded-2xl font-semibold shadow-xl">
//             Start Your Project
//           </button>

//           <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
//             Talk To Experts
//           </button>
//         </div>
//       </div>

//       <div className="relative">
//         <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#4291CE]/30 blur-[120px]" />

//         <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 shadow-2xl">
//           <Image
//             src="/assets/img/software-development.png"
//             alt="software development company"
//             width={800}
//             height={700}
//             className="rounded-[30px] w-full"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// {/* FEATURES */}
// <section className="py-24">
//   <div className="max-w-7xl mx-auto px-4">
//     <div className="max-w-3xl mx-auto text-center">
//       <span className="text-[#4291CE] uppercase tracking-widest font-semibold">
//         Why Choose Techsaga
//       </span>

//       <h2 className="text-4xl lg:text-5xl font-bold mt-6 leading-tight">
//         Technology Built Around
//         <br />
//         Your Business
//       </h2>

//       <p className="text-gray-600 leading-8 mt-8">
//         We combine strategy, UI/UX, development, cloud, and automation to
//         create software solutions that improve operations, efficiency, and
//         customer experience.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
//       {features.map((item, index) => (
//         <div
//           key={index}
//           className="group rounded-[32px] bg-white border border-gray-100 p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
//         >
//           <div className="w-16 h-16 rounded-2xl bg-[#4291CE]/10 flex items-center justify-center text-3xl mb-8">
//             {item.icon}
//           </div>

//           <h3 className="text-2xl font-bold mb-5">{item.title}</h3>

//           <p className="text-gray-600 leading-8">{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

// {/* SERVICES */}
// <section className="py-24 bg-[#081120] text-white">
//   <div className="max-w-7xl mx-auto px-4">
//     <div className="max-w-4xl mx-auto text-center">
//       <span className="uppercase tracking-widest text-[#4291CE] font-semibold">
//         Our Services
//       </span>

//       <h2 className="text-5xl font-bold mt-6 leading-tight">
//         End-To-End Software
//         <br />
//         Development Services
//       </h2>

//       <p className="text-gray-300 leading-8 mt-8">
//         We build scalable digital products, enterprise systems, SaaS platforms,
//         mobile apps, and automation solutions tailored to your business.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
//       {solutions.map((item, index) => (
//         <div
//           key={index}
//           className="group overflow-hidden rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500"
//         >
//           <div className="overflow-hidden">
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={500}
//               height={350}
//               className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
//             />
//           </div>

//           <div className="p-8">
//             <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

//             <p className="text-gray-300 leading-8">{item.desc}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

// {/* PROCESS */}
// <section className="py-24">
//   <div className="max-w-7xl mx-auto px-4">
//     <div className="max-w-3xl mx-auto text-center">
//       <span className="text-[#4291CE] uppercase tracking-widest font-semibold">
//         Development Process
//       </span>

//       <h2 className="text-5xl font-bold mt-6">
//         Our Development Approach
//       </h2>

//       <p className="text-gray-600 leading-8 mt-8">
//         We follow a transparent and structured development process that keeps
//         every stage aligned with your business goals.
//       </p>
//     </div>

//     <div className="grid lg:grid-cols-3 gap-8 mt-20">
//       {process.map((item, index) => (
//         <div
//           key={index}
//           className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition"
//         >
//           <div className="text-6xl font-bold text-[#4291CE]/10 mb-8">
//             {item.step}
//           </div>

//           <h3 className="text-2xl font-bold mb-5">{item.title}</h3>

//           <p className="text-gray-600 leading-8">{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

// {/* TECHNOLOGIES */}
// <section className="py-24 bg-gray-50">
//   <div className="max-w-7xl mx-auto px-4">
//     <div className="text-center max-w-4xl mx-auto">
//       <span className="text-[#4291CE] uppercase tracking-widest font-semibold">
//         Technologies
//       </span>

//       <h2 className="text-5xl font-bold mt-6">
//         Modern Technology Stack
//       </h2>

//       <p className="text-gray-600 leading-8 mt-8">
//         We work with modern frameworks, cloud platforms, enterprise systems,
//         and scalable technologies to build future-ready applications.
//       </p>
//     </div>

//     <div className="grid lg:grid-cols-4 gap-8 mt-20">
//       <div className="bg-white rounded-[32px] p-8">
//         <h3 className="text-2xl font-bold mb-6">Backend</h3>

//         <div className="space-y-3">
//           {technologies.backend.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-xl px-4 py-3"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-[32px] p-8">
//         <h3 className="text-2xl font-bold mb-6">Frontend</h3>

//         <div className="space-y-3">
//           {technologies.frontend.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-xl px-4 py-3"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-[32px] p-8">
//         <h3 className="text-2xl font-bold mb-6">Mobile</h3>

//         <div className="space-y-3">
//           {technologies.mobile.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-xl px-4 py-3"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-[32px] p-8">
//         <h3 className="text-2xl font-bold mb-6">Enterprise</h3>

//         <div className="space-y-3">
//           {technologies.enterprise.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-xl px-4 py-3"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// {/* INDUSTRIES */}
// <section className="py-24">
//   <div className="max-w-7xl mx-auto px-4">
//     <div className="text-center max-w-4xl mx-auto">
//       <span className="text-[#4291CE] uppercase tracking-widest font-semibold">
//         Industries We Serve
//       </span>

//       <h2 className="text-5xl font-bold mt-6">
//         Software Solutions Across
//         Multiple Industries
//       </h2>

//       <p className="text-gray-600 leading-8 mt-8">
//         We build industry-focused software solutions tailored to unique
//         operational challenges and customer experiences.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
//       {industries.map((item, index) => (
//         <div
//           key={index}
//           className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
//         >
//           <p className="font-semibold">{item}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

// {/* BUSINESS OUTCOMES */}
// <section className="py-24 bg-[#081120] text-white">
//   <div className="max-w-7xl mx-auto px-4">
//     <div className="text-center max-w-4xl mx-auto">
//       <span className="uppercase tracking-widest text-[#4291CE] font-semibold">
//         Business Outcomes
//       </span>

//       <h2 className="text-5xl font-bold mt-6">
//         What Your Business Gains
//       </h2>

//       <p className="text-gray-300 leading-8 mt-8">
//         Our software solutions are designed to improve productivity,
//         visibility, customer experience, and long-term scalability.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
//       {outcomes.map((item, index) => (
//         <div
//           key={index}
//           className="bg-white/5 border border-white/10 rounded-[28px] p-8"
//         >
//           <h3 className="text-2xl font-bold mb-5">{item.title}</h3>

//           <p className="text-gray-300 leading-8">{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

// {/* FAQ */}
// <section className="py-24">
//   <div className="max-w-5xl mx-auto px-4">
//     <div className="text-center">
//       <span className="text-[#4291CE] uppercase tracking-widest font-semibold">
//         FAQ
//       </span>

//       <h2 className="text-5xl font-bold mt-6">
//         Frequently Asked Questions
//       </h2>
//     </div>

//     <div className="space-y-6 mt-20">
//       {faqs.map((faq, index) => (
//         <details
//           key={index}
//           className="group bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm"
//         >
//           <summary className="cursor-pointer list-none flex justify-between items-center text-xl font-semibold">
//             {faq.question}

//             <span className="group-open:rotate-45 transition text-3xl">
//               +
//             </span>
//           </summary>

//           <p className="text-gray-600 leading-8 mt-6">
//             {faq.answer}
//           </p>
//         </details>
//       ))}
//     </div>
//   </div>
// </section>

// {/* CONTACT */}
// <section className="relative py-24 overflow-hidden">
//   <div className="absolute inset-0 bg-gradient-to-r from-[#4291CE] to-[#081120]" />

//   <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 blur-[120px]" />

//   <div className="relative z-10 max-w-7xl mx-auto px-4">
//     <div className="grid lg:grid-cols-2 gap-20 items-center">
//       <div className="text-white">
//         <span className="uppercase tracking-widest font-semibold text-white/70">
//           Ready To Get Started?
//         </span>

//         <h2 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
//           Let’s Build Software
//           That Drives Growth
//         </h2>

//         <p className="text-lg text-gray-200 leading-8 mt-8 max-w-xl">
//           Transform your business process, platform idea, or operational
//           challenge into a scalable digital solution with Techsaga.
//         </p>
//       </div>

//       <div className="bg-white rounded-[40px] p-8 shadow-2xl">
//         <BottomForm />
//       </div>
//     </div>
//   </div>
// </section>

//       <Footer />
//     </div>
//   );
// }