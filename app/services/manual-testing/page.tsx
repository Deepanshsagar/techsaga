// app/services/manual-testing/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function ManualTestingPage() {
  const manualTestingBenefits = [
    "Thorough evaluation of software functionalities and features",
    "Identification of defects and inconsistencies",
    "Enhanced software quality and reliability",
    "Improved user experience",
    "Faster bug identification and resolution",
    "Effective collaboration between development and testing teams",
  ];

  const testingProcess = [
    "Requirement analysis and test planning",
    "Test case development and execution",
    "Defect reporting and tracking",
    "Regression testing to ensure stability",
    "Documentation and test closure",
  ];

  const whyChooseUs = [
    "Expertise and Experience",
    "Comprehensive Test Coverage",
    "Tailored Approach",
    "Effective Collaboration",
    "Timely Delivery",
  ];

  const testingTypes = [
    "Acceptance Testing",
    "Black Box Testing",
    "Integration Testing",
    "System Testing",
    "Unit Testing",
    "White Box Testing",
  ];

  const benefitsLeft = [
    "Thorough evaluation uncovers hidden defects and ensures software reliability.",
    "Enhanced software quality through detailed validation and bug detection.",
    "Improved user experience with seamless and error-free functionality.",
    "Faster bug identification and resolution for reduced turnaround time.",
    "Effective collaboration between development and testing teams.",
  ];

  const benefitsRight = [
    "Customized testing approaches tailored to business requirements.",
    "Detailed reporting with recommendations for software improvement.",
    "Cost-effective testing that minimizes future software risks.",
    "Flexible testing methodologies for various software environments.",
    "Highly skilled manual testers ensuring accurate and dependable results.",
  ];

  const features = [
    {
      title: "Our Expert Manual Testers",
      description:
        "Our experienced testers evaluate software functionalities thoroughly using industry-standard testing methodologies.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Comprehensive Test Coverage",
      description:
        "We provide extensive testing coverage including functional, regression, integration, and usability testing.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Attention to Detail",
      description:
        "Our testing process focuses on identifying defects, inconsistencies, and usability issues with precision.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Effective Communication",
      description:
        "We collaborate closely with development teams to ensure clear reporting and faster issue resolution.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Flexible and Agile Approach",
      description:
        "Our manual testing process integrates seamlessly with agile and waterfall development methodologies.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Cutting-Edge Tools",
      description:
        "We leverage modern testing tools and techniques for better insights, tracking, and reporting.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is manual testing?",
      answer:
        "Manual testing is a software testing approach where testers manually execute test cases without using automation tools.",
    },
    {
      question: "When should manual testing be used?",
      answer:
        "Manual testing is ideal when human observation, exploratory testing, and subjective validation are required.",
    },
    {
      question:
        "What are the advantages of manual testing over automated testing?",
      answer:
        "Manual testing offers flexibility, human intuition, exploratory analysis, and adaptability to changing requirements.",
    },
    {
      question: "What are the common challenges in manual testing?",
      answer:
        "Common challenges include time-consuming execution, dependency on tester expertise, and possible human errors.",
    },
    {
      question:
        "How does manual testing contribute to software quality?",
      answer:
        "Manual testing ensures detailed validation, early bug detection, improved usability, and overall software reliability.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing models that ensure transparency and predictable project costs.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models that align with your project scope and business requirements.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Hire top-quality testing professionals efficiently with our recruitment and staffing support.",
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
          backgroundImage: "url('/assets/img/service-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Manual
                <span className="block text-[#4291CE]">
                  Testing Services
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Ensuring Software Quality
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Partner with Our Expert Manual Testers
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
                Mastering Quality With Manual Testing
              </h2>

              <p className="mb-5 leading-8">
                Manual testing plays a vital role in ensuring software quality,
                reliability, and seamless user experiences. Through detailed
                validation and exploratory testing, we identify defects and
                inconsistencies before deployment.
              </p>

              <p className="mb-8 leading-8">
                Our skilled testers collaborate closely with development teams
                to accelerate bug resolution and improve overall software
                performance while maintaining exceptional product quality.
              </p>

              <ul className="space-y-4">
                {manualTestingBenefits.map((item, index) => (
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
                src="/assets/img/manual-testing1.png"
                alt="Manual Testing"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/manual-testing2.png"
                alt="Manual Testing Process"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Manual Testing Process
              </h2>

              <p className="leading-8 mb-8">
                Our structured manual testing process includes requirement
                analysis, test planning, execution, defect tracking, regression
                testing, and final reporting to ensure software quality and
                stability.
              </p>

              <div className="space-y-4">
                {testingProcess.map((item, index) => (
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

      {/* Why Choose */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Us for Manual Testing?
              </h2>

              <p className="leading-8 mb-8">
                Our experienced QA professionals deliver comprehensive manual
                testing services with a strong focus on software reliability,
                usability, and business success.
              </p>

              <div className="space-y-5">
                {whyChooseUs.map((item, index) => (
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
                src="/assets/img/manual-testing3.png"
                alt="Why Choose Manual Testing"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/manual-testing4.png"
                alt="Types Of Manual Testing"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Most Commonly Used Types Of Manual Testing
              </h2>

              <p className="leading-8 mb-8">
                We perform multiple forms of manual testing including
                acceptance, black box, integration, system, unit, and white box
                testing to maximize software quality and application stability.
              </p>

              <div className="space-y-5">
                {testingTypes.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="min-w-[45px] h-[45px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="pt-2">{item}</p>
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
              Unlocking Maximum Potential Through Manual Testing
            </h2>

            <p className="text-lg">
              Achieve superior software quality, reliability, and performance
              through comprehensive manual testing services.
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
              Harness the Power of Manual Testing
            </h2>

            <p className="text-lg text-gray-600">
              Delivering flawless software experiences with expert QA testing
              solutions.
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Manual Testing Expertise
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

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

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