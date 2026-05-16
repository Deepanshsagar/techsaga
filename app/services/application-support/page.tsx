// app/services/application-support/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function ApplicationSupportPage() {
  const supportServices = [
    "Troubleshooting and Issue Resolution",
    "Application Maintenance and Updates",
    "Performance Monitoring and Optimization",
    "Support and Training",
    "Integration and Migration Support",
  ];

  const whyChoose = [
    "Expertise and Experience",
    "Proactive Monitoring and Issue Resolution",
    "Tailored Support Solutions",
    "Application Performance Optimization",
    "Continuous Improvement and Innovation",
  ];

  const processSteps = [
    "Requirement Analysis & Proactive Monitoring",
    "Troubleshooting and Diagnosis",
    "Performance Optimization",
    "Regular Maintenance and Updates",
  ];

  const empowerBusiness = [
    "Comprehensive application support tailored to your specific needs.",
    "Proactive monitoring to detect and address issues before they impact your business.",
    "Skilled support team employing advanced tools for accurate issue diagnosis.",
    "Performance optimization strategies to enhance application speed and stability.",
    "Regular maintenance and updates to keep your applications secure and up-to-date.",
  ];

  const benefitsLeft = [
    "Application support ensures that your applications are running smoothly and efficiently, optimizing their performance and responsiveness.",
    "With timely support and proactive monitoring, application support minimizes downtime, resolves issues, and ensures uninterrupted business operations.",
    "Application support includes regular updates and patches, protecting your applications against potential threats and security vulnerabilities.",
    "Application support services are tailored to your specific business needs, providing personalized solutions that align with your goals and requirements.",
    "With application support, you benefit from a skilled team of professionals adept at managing and troubleshooting applications.",
  ];

  const benefitsRight = [
    "Proactive application support prevents costly repairs and system failures, optimizing resources for core business functions.",
    "Application support services can adapt and scale as your business grows, accommodating changing demands and requirements.",
    "Through performance optimization and timely issue resolution, application support enhances user experience, increasing productivity and satisfaction.",
    "Application support providers stay updated with the latest technologies and best practices, allowing you to stay competitive in your industry.",
    "Having experts monitor, maintain, and support your applications provides peace of mind for focusing on strategic business initiatives.",
  ];

  const features = [
    {
      title: "Efficiency",
      description:
        "Application support ensures improved performance, reduced downtime, and enhanced security for your applications.",
      image:
        "/assets/img/service1.jpg",
    },
    {
      title: "Customized Solutions",
      description:
        "Aligned with your business needs provide effective support and troubleshooting.",
      image:
        "/assets/img/ds3.jpg",
    },
    {
      title: "Expertise and Knowledge",
      description:
        "Skilled professionals ensure efficient management of your applications.",
      image:
        "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Cost Saving",
      description:
        "Application support helps save costs by preventing major issues and optimizing resources.",
      image:
        "/assets/img/services-l1.jpg",
    },
    {
      title: "Adaptability",
      description:
        "Scalability and flexibility allow for seamless adaptation to changing business requirements.",
      image:
        "/assets/img/services-l2.jpg",
    },
    {
      title: "Up-to-Date",
      description:
        "Access to the latest technologies and peace of mind knowing that your applications are in capable hands.",
      image:
        "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is application support?",
      answer:
        "Application support is a service that provides assistance and troubleshooting for software applications to ensure their smooth operation.",
    },
    {
      question: "Why is application support important?",
      answer:
        "Application support is crucial for maintaining the performance, stability, and security of applications, minimizing downtime, and maximizing productivity.",
    },
    {
      question: "How quickly can application support resolve issues?",
      answer:
        "The response time for issue resolution varies based on severity and complexity, but application support aims for prompt and efficient problem-solving.",
    },
    {
      question:
        "Which types of applications can benefit from support services?",
      answer:
        "All types of applications, including web-based, mobile, and enterprise applications, can benefit from professional support services.",
    },
    {
      question: "Can application support help with updates and upgrades?",
      answer:
        "Yes, application support includes regular updates, patches, and upgrades to keep your applications up-to-date and secure.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "With transparent and fixed pricing, we provide clear, upfront costs, ensuring deliverables and value are achieved within time and budget.",
      image:
        "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration based on project needs, optimizing resources and maximizing productivity.",
      image:
        "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "We help you efficiently hire top talent without intermediaries.",
      image:
        "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div className="">
      <Header />
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
                Application Support
                {/* <span className="block text-[#4291CE]">
                  Support Services
                </span> */}
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                Reliable support services to keep your applications secure, updated, and running smoothly.
                </p>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Digital Innovation Revolution
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Partner with Techsaga for Reliable Application Support
            </h1>

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
              <h2 className="text-3xl font-bold mb-6">
                Our Application Support Services
              </h2>

              <p className="mb-5 leading-8">
                TechSaga's dedicated support team is available 24/7 to
                efficiently resolve application-related issues while ensuring
                minimal disruption to your business.
              </p>

              <p className="mb-8 leading-8">
                We provide proactive monitoring, performance optimization,
                maintenance, migration support, user assistance, and continuous
                improvements to keep your applications secure and stable.
              </p>

              <ul className="space-y-4">
                {supportServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4291CE] text-white flex items-center justify-center text-sm mt-1">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src="/assets/img/application-sup1.png"
                alt="Application Support"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/application-sup2.png"
                alt="Why Choose"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Techsaga for Application Support?
              </h2>

              <p className="leading-8 mb-8">
                Our experienced professionals deliver proactive monitoring,
                rapid issue resolution, tailored support services, and
                performance optimization strategies designed specifically for
                your business.
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

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Techsaga's Application Support Process
              </h2>

              <p className="leading-8 mb-5">
                Our process is designed to minimize downtime, improve
                application stability, and deliver continuous operational
                excellence.
              </p>

              <p className="leading-8 mb-8">
                Through monitoring, optimization, troubleshooting, and regular
                maintenance, we ensure your applications remain secure,
                high-performing, and scalable.
              </p>

              <div className="space-y-5">
                {processSteps.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-lg font-semibold pt-3">{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/application-supp4.png"
                alt="Process"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empower */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/app-supp7.png"
                alt="Empower"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Harnessing the Best Application Support
              </h2>

              <p className="leading-8 mb-8">
                Our support services help businesses improve uptime, optimize
                performance, and ensure operational continuity with proactive
                issue resolution.
              </p>

              <div className="space-y-5">
                {empowerBusiness.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="min-w-[45px] h-[45px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              The Benefits of Application Support
            </h2>

            <p className="text-lg">
              Unlocking Business Potential with our Best Application Support
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {benefitsLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {benefitsRight.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Unleash the Power of Application Support
            </h2>

            <p className="text-lg text-gray-600">
              Empowering your business with reliable application support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
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
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>

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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Application Support Expertise
            </h2>
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

                <p className="mt-4 text-gray-600 leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-5">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible budget and customized engagement models tailored to your
              project requirements.
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

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}