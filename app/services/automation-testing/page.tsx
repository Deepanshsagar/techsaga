// app/services/automation-testing/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function AutomationTestingPage() {
  const benefits = [
    "Improved Efficiency and Accuracy",
    "Time and Cost Savings",
    "Increased Test Coverage",
    "Regression Testing",
    "Enhanced Product Quality",
  ];

  const bestPractices = [
    "Test Case Selection",
    "Modular and Maintainable Test Scripts",
    "Continuous Integration and Testing",
    "Data Management",
    "Error Handling and Reporting",
    "Regular Maintenance and Updates",
    "Collaboration and Communication",
  ];

  const whyChoose = [
    "Expertise and Experience",
    "Comprehensive Test Coverage",
    "Tailored Automation Solutions",
    "Advanced Automation Tools and Frameworks",
    "Seamless Integration with Development Processes",
    "Cost and Time Savings",
  ];

  const testingTypes = [
    "Unit testing & Functional testing",
    "Regression testing, Integration testing",
    "Performance testing, Security testing",
    "GUI testing, API testing",
    "Mobile testing, and Data-driven testing",
  ];

  const benefitsLeft = [
    "Explore how automation testing improves software testing, product quality, and competitiveness in the digital world.",
    "Faster, accurate results; reduced errors; consistent test coverage; time and cost savings; enhanced quality.",
    "Prioritize, design modular scripts, integrate with CI/CD, manage data, handle errors, maintain, and collaborate.",
    "Techsaga offers expertise, comprehensive coverage, tailored solutions, advanced tools, seamless integration, and cost savings.",
    "Automation testing follows a systematic process involving test planning, test case creation, script development, execution, result analysis, and reporting.",
    "Test automation frameworks provide reusable components, libraries, and guidelines.",
  ];

  const benefitsRight = [
    "Automation testing requires a well-configured test environment that mirrors the production environment.",
    "Tools such as Selenium, Appium, JUnit, TestNG, and Cucumber support different automation testing needs.",
    "Automation testing generates detailed reports, logs, and metrics for better analysis and improvements.",
    "Automation testing offers strong ROI by reducing manual effort and improving software quality.",
  ];

  const features = [
    {
      title: "Agility",
      description:
        "We provide adaptable software testing solutions using a flexible and scalable testing approach.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Full Spectrum Testing",
      description:
        "We deliver comprehensive testing services covering both automated and manual testing processes.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Expert Team",
      description:
        "Our automation testing experts have years of industry experience and deep domain expertise.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Competitive Pricing",
      description:
        "We offer cost-effective automation testing solutions without compromising on quality.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Effective Communication",
      description:
        "Transparent reporting and collaboration ensure faster issue resolution and better workflows.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Cutting-Edge Tools",
      description:
        "We leverage modern automation tools and frameworks for deeper insights and reliable testing.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "What is automation testing, and why is it important?",
      answer:
        "Automation testing uses software tools to execute tests automatically, increasing efficiency, improving accuracy, and accelerating the testing process.",
    },
    {
      question:
        "What are the key benefits of implementing automation testing?",
      answer:
        "Benefits include faster execution, increased coverage, early bug detection, cost savings, improved quality, and reliable repetitive testing.",
    },
    {
      question:
        "How does automation testing differ from manual testing?",
      answer:
        "Automation testing uses tools for execution, while manual testing relies on human interaction and exploratory evaluation.",
    },
    {
      question:
        "What are some popular automation testing tools and frameworks?",
      answer:
        "Popular tools include Selenium, Appium, TestNG, JUnit, and Cucumber for web, mobile, and API testing.",
    },
    {
      question:
        "What types of software testing are suitable for automation?",
      answer:
        "Automation supports unit, functional, regression, integration, performance, security, API, GUI, mobile, and data-driven testing.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring deliverables and business value are achieved within your budget.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models designed around project requirements and evolving business needs.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient hiring support to help you recruit top automation testing talent without intermediaries.",
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
                Automation
                <span className="block text-[#4291CE]">
                  Testing Services
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Discover Automation Revolution
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Partner with us for Automation Testing
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
              <h3 className="text-3xl font-bold mb-6">
                Benefits of Automation Testing
              </h3>

              <p className="leading-8 mb-8">
                Automation testing improves software quality with faster,
                accurate, and repeatable testing processes. It reduces human
                errors, accelerates releases, increases coverage, and enhances
                customer satisfaction through reliable software performance.
              </p>

              <ul className="space-y-4">
                {benefits.map((item, index) => (
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
                src="/assets/img/automation-services-img1.png"
                alt="Automation Testing"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/automation-services-img2.png"
                alt="Best Practices"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Best Practices for Automation Testing
              </h3>

              <p className="leading-8 mb-8">
                Effective automation testing requires proper test planning,
                maintainable scripts, CI/CD integration, data management, and
                continuous collaboration between teams.
              </p>

              <div className="space-y-4">
                {bestPractices.map((item, index) => (
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
              <h3 className="text-3xl font-bold mb-6">
                Why Choose us for Automation Testing?
              </h3>

              <p className="leading-8 mb-8">
                Techsaga delivers scalable and reliable automation testing
                solutions using advanced tools, proven methodologies, and deep
                industry expertise.
              </p>

              <div className="space-y-5">
                {whyChoose.map((item, index) => (
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
                src="/assets/img/automation-services-img3.png"
                alt="Automation Testing Process"
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
                src="/assets/img/automation-services-img4.png"
                alt="Automation Testing Types"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Common Types of Automation Testing
              </h3>

              <p className="leading-8 mb-8">
                Automation testing covers multiple testing methodologies,
                including unit, regression, integration, performance, API,
                mobile, and security testing.
              </p>

              <div className="space-y-5">
                {testingTypes.map((item, index) => (
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

      {/* Blue Section */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Unlocking Maximum Potential Through Automation Testing
            </h2>

            <p className="text-lg">
              Achieve higher test coverage, faster releases, and improved
              software quality with automation testing.
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
              Harness the Power of Automation Testing
            </h2>

            <p className="text-lg text-gray-600">
              Flexible solutions, expert testing teams, and advanced tools for
              reliable software quality assurance.
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
              Our Automation Testing Expertise
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