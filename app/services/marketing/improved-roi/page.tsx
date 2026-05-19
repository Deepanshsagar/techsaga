"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomForm from "@/components/BottomForm";
export default function ImprovedROIPage() {
  const roiServices = [
    "DRaaS - Disaster Recovery as a Service",
    "Technology as a Solution",
    "Service Desk & Cybersecurity",
    "Infrastructure Management",
    "Monitoring & Data Center Hosting",
    "Digital Marketing Services",
  ];

  const whyChooseUs = [
    "Expertise",
    "Customized Approach",
    "Up-to-Date Knowledge",
    "Results-Driven",
    "Collaborative Partnership",
  ];

  const businessBenefits = [
    "Enhanced Brand Reputation",
    "Cost-Effectiveness",
    "Competitive Advantage",
    "Strategic Guidance",
    "Collaboration and Support",
  ];

  const growthPointsLeft = [
    "ROI measures profit or loss expected from campaigns and investments.",
    "Tailored marketing strategies maximize online presence and customer reach.",
    "Services include DRaaS, cybersecurity, hosting, and digital marketing.",
    "We optimize resources and improve operational profitability.",
    "Enhance reputation, gain competitive advantage, and receive strategic support.",
  ];

  const growthPointsRight = [
    "We serve industries like e-commerce, healthcare, logistics, banking, and media.",
    "Our expertise helps businesses achieve scalable growth and measurable ROI.",
    "Customized strategies align with your business goals and target audience.",
    "We use the latest tools, technologies, and digital practices for better outcomes.",
  ];

  const featureCards = [
    {
      title: "Enhanced Brand Reputation",
      desc: "We create a strong online presence and seamless customer experience to build trust and credibility.",
      img: "/assets/img/service1.jpg",
    },
    {
      title: "Cost-Effectiveness",
      desc: "Our ROI-focused strategies optimize your marketing budget and improve campaign performance.",
      img: "/assets/img/ds3.jpg",
    },
    {
      title: "Competitive Advantage",
      desc: "Innovative strategies help your business stand out and stay ahead of competitors.",
      img: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Strategic Guidance",
      desc: "We provide expert recommendations and actionable insights for sustainable growth.",
      img: "/assets/img/services-l1.jpg",
    },
    {
      title: "Benefits of Improved ROI",
      desc: "Gain better profitability, stronger brand value, and ongoing business support.",
      img: "/assets/img/services-l2.jpg",
    },
    {
      title: "Up-to-Date Knowledge",
      desc: "Our team stays updated with modern technologies and industry best practices.",
      img: "/assets/img/services-l3.jpg",
    },
  ];

  const faqData = [
    {
      question: "How can improved ROI services benefit my business?",
      answer:
        "Improved ROI services help optimize marketing strategies, reduce costs, improve profitability, and strengthen your brand reputation.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in e-commerce, healthcare, logistics, travel, banking, education, retail, media, and more.",
    },
    {
      question: "How do you ensure cost-effectiveness?",
      answer:
        "We optimize campaigns, target the right audience, and continuously monitor performance to maximize ROI.",
    },
    {
      question: "Can you share examples of ROI success?",
      answer:
        "We have helped businesses improve conversions, increase sales, and strengthen online visibility through strategic digital initiatives.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We track KPIs like ROI, conversion rates, traffic, engagement, acquisition cost, and customer lifetime value.",
    },
  ];

  return (
    <main>
         <Header />
      {/* HERO SECTION */}
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
                Boost Your ROI with Enhanced Services With Us!
                {/* <span className="block text-[#4291CE]">
                  Support Services
                </span> */}
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  Strategic solutions focused on maximizing returns and improving marketing performance.
                </p>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
    

      {/* ROI Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-wide">
              Guaranteeing Maximized Returns
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Partner For Enhanced ROI Of Your Business
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-5">
                Our Improved ROI Services
              </h3>

              <p className="text-gray-600 mb-5">
                We provide advanced ROI-driven services that help businesses
                improve operational efficiency, strengthen cybersecurity,
                optimize infrastructure, and scale digitally.
              </p>

              <ul className="space-y-3">
                {roiServices.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src="/assets/img/improved-roi1.png"
                alt="ROI Services"
                width={600}
                height={500}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/img/improved-roi-img2.png"
                alt="Why Choose Us"
                width={600}
                height={500}
                className="rounded-3xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-5">
                Why Choose Us for Improved ROI?
              </h3>

              <p className="text-gray-600 mb-6">
                We analyze operations, optimize processes, and implement
                data-driven strategies to maximize profitability while reducing
                investment costs.
              </p>

              <ul className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-5">
                Stay Ahead With Improved ROI Services
              </h3>

              <p className="text-gray-600 mb-6">
                Our ROI-focused services help businesses gain a competitive
                edge, improve digital visibility, and enhance brand value
                through customized and cost-effective strategies.
              </p>

              <ul className="space-y-4">
                {businessBenefits.map((item, index) => (
                  <li key={index} className="flex gap-4 items-center">
                    <span className="bg-[#4291CE] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src="/assets/img/improved-roi-img3.png"
                alt="Business Benefits"
                width={600}
                height={500}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="max-w-7xl mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-4xl font-bold mb-5">
              SkyRocket Your Business Growth & Improved ROI
            </h2>

            <p className="text-lg text-blue-100">
              We deliver measurable results and scalable strategies tailored to
              your business goals and industry requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <ul className="space-y-4">
              {growthPointsLeft.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-4">
              {growthPointsRight.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Unleash Business Potential with Improved ROI Experts
            </h2>

            <p className="text-gray-600">
              Partner with us to unlock the power of improved ROI services and
              accelerate your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden shadow-lg bg-white border"
              >
                <div className="relative h-56">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-600">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Our Improved ROI Expertise
            </h2>

            <p className="text-gray-600">
              We help businesses maximize profitability with tailored ROI-driven
              strategies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl p-6 shadow"
              >
                <summary className="font-semibold text-lg cursor-pointer">
                  {faq.question}
                </summary>

                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-gray-600">
              Flexible budget, customized approach, and seamless collaboration
              for successful partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparent & Fixed Pricing",
                desc: "Clear pricing models with defined deliverables and timelines.",
                img: "/assets/img/best-price.png",
              },
              {
                title: "Adaptive Hourly Engagement",
                desc: "Flexible collaboration models optimized for productivity and scalability.",
                img: "/assets/img/hourly-eng.png",
              },
              {
                title: "Direct Recruitment",
                desc: "Efficient hiring support and access to top industry talent.",
                img: "/assets/img/direct-requirement.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg text-center border"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="mx-auto mb-5"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.desc}</p>
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
    </main>
  );
}