// app/services/cloud-application-development/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function CloudApplicationDevelopment() {

  const whyChoose = [
    "Expertise in Cloud Technologies",
    "Scalable and Flexible Solutions",
    "Enhanced Security and Reliability",
    "Cost-Effective Solutions",
    "Customized Solutions for Your Business",
  ];

  const process = [
    "Requirement Gathering",
    "Design and Development",
    "Testing and Quality Assurance",
    "Deployment and Support",
    "Experience the Power of Cloud Application Development with Techsaga",
  ];

  const cloudBenefits = [
    "Scalable and flexible solutions to accommodate growth",
    "Robust security measures to protect your data",
    "Cost-effective infrastructure and resource optimization",
    "Customized solutions tailored to your specific business needs",
  ];

  const businessLeft = [
    "Scalability ensures that your application can handle increased user demand.",
    "Cost-effectiveness eliminates expensive hardware and infrastructure.",
    "Cloud applications provide anytime, anywhere access.",
    "Real-time collaboration streamlines workflows and communication.",
    "Cloud providers prioritize data security and backups.",
  ];

  const businessRight = [
    "Built-in disaster recovery minimizes downtime.",
    "Automatic updates and maintenance improve performance.",
    "Cloud computing offers faster processing and reduced latency.",
    "Global deployment ensures faster access worldwide.",
    "Cloud integration enhances innovation and flexibility.",
  ];

  const features = [
    {
      title: "Cost Effective & Global Accessibility",
      description:
        "Drive cost savings and enable users worldwide to access your applications with our cloud-based development solutions.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Improved Performance & Automatic Update",
      description:
        "Experience improved performance and seamless updates with our expert cloud application development services.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Hardware Failures & Disaster Recovery",
      description:
        "Protect your data and applications from hardware failures with dependable disaster recovery solutions.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Scalability, Reliability & Data Security",
      description:
        "Experience scalable, reliable, and secure cloud application development for your business.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Easy & Seamless Integration",
      description:
        "Ensure smooth integration of cloud applications with your existing business systems.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Maintenance & Support",
      description:
        "Our experienced professionals handle all maintenance and support needs for your cloud applications.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "How does cloud application development benefit my organization?",
      answer:
        "Cloud application development allows businesses to leverage scalable infrastructure, reduce costs, improve collaboration, and increase operational flexibility.",
    },
    {
      question:
        "What technologies and platforms do you use for cloud application development?",
      answer:
        "We use AWS, Microsoft Azure, Google Cloud Platform, and modern cloud-native technologies based on project requirements.",
    },
    {
      question:
        "Can you migrate my existing applications to the cloud?",
      answer:
        "Yes, we provide seamless cloud migration services with minimal downtime and maximum efficiency.",
    },
    {
      question:
        "How do you ensure data security in cloud application development?",
      answer:
        "We implement encryption, access controls, regular audits, and industry-standard security practices.",
    },
    {
      question:
        "Can you integrate cloud applications with other systems or platforms?",
      answer:
        "Absolutely. We integrate cloud applications with APIs, CRMs, ERPs, and third-party platforms.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear, upfront pricing ensuring project delivery within budget and timeline.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible engagement models optimized for productivity and changing project needs.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient hiring support to help businesses recruit top cloud talent.",
      image: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div>
      <Header />

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/software-development.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            <div className="max-w-xl">
              <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight">
                Cloud Application Development
                {/* <span className="block text-[#4291CE]">
                  Development
                </span> */}
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  Cloud-based applications designed for flexibility, scalability, and faster business operations.
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
              Delivering Innovative Solutions
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Unlock Business Potential with Techsaga's Cloud Application Development Services
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
                Unleash the Power of Cloud Application Development
              </h3>

              <p className="leading-8 mb-6">
                Techsaga’s cloud application development team consists of highly
                skilled professionals specializing in modern cloud technologies
                and platforms. Our experts stay updated with the latest trends
                and best practices to deliver scalable and innovative cloud solutions.
              </p>

              <p className="leading-8 mb-6">
                Our experienced team includes cloud architects, developers,
                designers, and QA specialists with expertise in AWS,
                Microsoft Azure, Google Cloud Platform, and more.
              </p>

            </div>

            <div>
              <Image
                src="/assets/img/cloud-img-serv1.jpg"
                alt="cloud"
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
                src="/assets/img/cloud-img-serv5.jpg"
                alt="services"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-5">
                Why Choose Techsaga for Cloud Application Development?
              </h3>

              <p className="leading-8 mb-6">
                Our cloud experts leverage AWS, Azure, and Google Cloud to build
                secure, scalable, and efficient applications tailored to your business.
              </p>

              <p className="leading-8 mb-8">
                We focus on performance optimization, enhanced security,
                resource efficiency, and industry-specific customization.
              </p>

              <div className="space-y-4">
                {whyChoose.map((item, index) => (
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
                Our Cloud Application Development Process
              </h3>

              <p className="leading-8 mb-8">
                We understand your business requirements, create scalable
                cloud architecture, perform rigorous testing, and provide
                seamless deployment with ongoing support.
              </p>

              <div className="space-y-5">
                {process.map((item, index) => (
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
                src="/assets/img/cl10.jpg"
                alt="future"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/cloud-img-services11.png"
                alt="process"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Harness the Power of Cloud Computing for Your Business
              </h3>

              <p className="leading-8 mb-8">
                Cloud computing enables businesses to scale faster, reduce
                infrastructure costs, improve collaboration, and strengthen
                security while driving innovation and digital transformation.
              </p>

              <div className="space-y-5">
                {cloudBenefits.map((item, index) => (
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

      {/* BUSINESS */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Get into Limitless Potential with Cloud-Based Applications
            </h2>

            <p className="text-lg">
              Embracing Cloud Technology to Transform Business Operations and Drive Innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="space-y-6">
              {businessLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {businessRight.map((item, index) => (
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

            <h2 className="text-4xl font-bold mt-4">
              Unleash the Power of the Cloud
            </h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>

            <p className="mt-5 text-gray-600">
              Elevate Your Business with Techsaga’s Cloud Development Solutions
            </p>
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
              Our Cloud Application Development Expertise
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