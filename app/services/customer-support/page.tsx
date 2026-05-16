// app/services/customer-support/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function CustomerSupportPage() {
  const supportServices = [
    "Proactive Engagement",
    "Prompt Responsiveness",
    "Knowledgeable Experts",
    "Collaborative Partnership",
    "Empowering Self-Help Resources",
    "Transparent Communication",
  ];

  const whyChoose = [
    "Proactive and Responsive Assistance",
    "Multi-Channel Support",
    "Continuous Improvement and Innovation",
    "Performance Metrics and Reporting",
    "Seamless Integration with Your Systems",
    "Continuous Support Availability",
  ];

  const processSteps = [
    "Requirement Analysis and Ticketing System",
    "Knowledge Base and Self-Help Resources",
    "Escalation and Collaboration",
    "Swift Response and Issue Resolution",
    "Customer Satisfaction Monitoring",
    "Metrics and Reporting",
  ];

  const empowerBusiness = [
    "Proactive and anticipatory support.",
    "Timely and responsive assistance.",
    "Customized customer support solutions.",
    "Access to knowledgeable experts.",
    "Support powered by the latest technologies.",
  ];

  const benefitsLeft = [
    "Meet rising customer expectations with exceptional support services.",
    "Resolve technical issues efficiently with minimal customer disruption.",
    "Help customers successfully adopt and onboard your products or services.",
    "Address customer complaints promptly and retain customer loyalty.",
    "Scale support capabilities as your business grows.",
  ];

  const benefitsRight = [
    "Provide ongoing support and value-added services to existing customers.",
    "Gather valuable customer insights through support interactions.",
    "Differentiate your business with outstanding customer support.",
    "Continuously improve support processes using feedback and metrics.",
    "Drive business growth through enhanced customer satisfaction and brand reputation.",
  ];

  const features = [
    {
      title: "Enhancing Customer Satisfaction",
      description:
        "Deliver exceptional assistance that ensures customer needs are met and satisfaction levels remain high.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Retaining Customers",
      description:
        "Resolve concerns quickly and effectively to strengthen customer loyalty and retention.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Driving Business Growth",
      description:
        "Exceptional support contributes to positive referrals and sustainable business growth.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Building Brand Reputation",
      description:
        "Outstanding customer service helps establish a strong, trustworthy, and customer-focused brand image.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Resolving Technical Issues",
      description:
        "Our support team efficiently handles troubleshooting and technical issue resolution.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Personalized Assistance",
      description:
        "Customized support solutions tailored to the unique requirements of each customer.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "How can I contact TechSaga's customer support team?",
      answer:
        "You can contact TechSaga through phone, email, live chat, and self-service portals based on your convenience.",
    },
    {
      question:
        "What support channels are available?",
      answer:
        "We provide support through phone, email, live chat, and self-service portals for maximum flexibility.",
    },
    {
      question:
        "How quickly can I expect a response?",
      answer:
        "Our team focuses on timely assistance and works diligently to resolve customer concerns as quickly as possible.",
    },
    {
      question:
        "Can TechSaga assist with technical and non-technical issues?",
      answer:
        "Yes, our support team is equipped to handle both technical troubleshooting and non-technical inquiries.",
    },
    {
      question:
        "Is TechSaga's customer support available 24/7?",
      answer:
        "Yes, our customer support team operates 24/7 to ensure assistance is available whenever needed.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring project deliverables and value within your budget and timeline.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models optimized around your evolving project requirements.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient recruitment solutions to help you hire top customer support and operational talent.",
      image: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Banner */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/maintenance-support.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Customer Support
                {/* <span className="block text-[#4291CE]">
                  Support Services
                </span> */}
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                Dedicated customer support services focused on quick resolution and improved user satisfaction.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Proactive Customer Support
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Addressing Business Challenges Through Effective Customer Support
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
                Techsaga's Approach to Customer Support
              </h2>

              <p className="mb-5 leading-8">
                At TechSaga, we prioritize customer success with proactive,
                customer-centric support services that anticipate needs and
                resolve issues efficiently.
              </p>

              <p className="mb-8 leading-8">
                Through transparent communication, knowledgeable experts,
                continuous training, and self-help resources, we ensure a
                seamless support experience for your customers.
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
                src="/assets/img/customer-support-services1.png"
                alt="Customer Support"
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/customer-support-services2.png"
                alt="Why Choose Customer Support"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Us for Your Customer Support Requirements
              </h2>

              <p className="leading-8 mb-8">
                Our dedicated support team delivers 24/7 assistance,
                multi-channel communication, seamless integration, and
                performance-driven support solutions that improve customer
                satisfaction and loyalty.
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Techsaga’s Customer Support Process
              </h2>

              <p className="leading-8 mb-5">
                Our support process combines advanced ticketing systems,
                collaborative issue resolution, and customer satisfaction
                monitoring to deliver reliable support experiences.
              </p>

              <p className="leading-8 mb-8">
                Through knowledge bases, rapid escalation, and performance
                reporting, we ensure quick issue resolution and continuous
                service improvement.
              </p>

              <div className="space-y-5">
                {processSteps.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-lg font-semibold pt-3">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/customer-support-services3.png"
                alt="Customer Support Process"
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/customer-support-services4.png"
                alt="Customer Support Benefits"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Elevate Your Business with Customer Support
              </h2>

              <p className="leading-8 mb-8">
                Exceptional customer support strengthens customer relationships,
                enhances satisfaction, and empowers businesses to deliver
                outstanding service experiences consistently.
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Overcoming Business Challenges
            </h2>

            <p className="text-lg">
              Elevate customer satisfaction, loyalty, and business growth with
              exceptional support services.
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Revolutionize Your Business Customer Support Services
            </h2>

            <p className="text-lg text-gray-600">
              Fueling growth, satisfaction, and transformative business success.
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
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Customer Support Expertise
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
                  <span className="group-open:rotate-45 transition">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-gray-600 leading-7">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
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