import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function DigitalConsultationPage() {
  const consultationServices = [
    "Personalized Guidance",
    "Tangible Results",
    "SEO Optimisation",
    "Expert Consultants",
    "Comprehensive Solutions",
  ];

  const whyChooseUs = [
    "Expertise",
    "Customized Approach",
    "Up-to-Date Knowledge",
    "Results-Driven",
    "Collaborative Partnership",
  ];

  const benefits = [
    "Enhanced Brand Reputation",
    "Cost-Effectiveness",
    "Strategic Guidance",
    "Collaboration and Support",
    "Competitive Advantage",
  ];

  const industries = [
    "E-commerce solution expertise",
    "Real estate and healthcare industry specialization",
    "Enhancing online presence for retail and consumer goods",
    "Assisting media and entertainment businesses",
    "Catering to logistics, travel, banking, and education sectors",
  ];

  const blueLeft = [
    "Our digital consultation services are customized to meet your specific business needs, providing personalized strategies and recommendations for optimal results.",
    "Our team of experienced consultants possesses deep knowledge and expertise across various industries, enabling us to offer specialized insights and solutions tailored to your sector.",
    "We conduct an in-depth analysis of your digital marketing efforts, identifying areas for improvement and providing actionable recommendations to enhance your online presence.",
    "We help you identify and understand your target audience, allowing you to create targeted campaigns that resonate with your ideal customers and drive engagement.",
    "Our consultation services include comprehensive performance tracking, enabling you to measure the success of your digital marketing initiatives and make data-driven decisions for future strategies.",
  ];

  const blueRight = [
    "We analyze your website and online presence to identify opportunities for improving conversion rates, ensuring that your digital efforts translate into tangible results.",
    "Our consultants develop effective social media strategies, including content creation, engagement tactics, and advertising campaigns.",
    "We provide guidance on SEO best practices, helping improve your website visibility and organic search rankings.",
    "Our experts assist you in creating and optimizing paid advertising campaigns across platforms like Google Ads and social media.",
    "We offer continuous support and guidance to help your business stay ahead of the competition and achieve long-term success.",
  ];

  const features = [
    {
      title: "SEO Guidance",
      description:
        "We provide guidance on search engine optimization (SEO) best practices, helping you improve your website visibility and attract more relevant traffic.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Targeted Audience Reach",
      description:
        "Engage your ideal audience through precise targeting, ensuring campaigns reach the right users who are likely to convert.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Cost Effective",
      description:
        "Maximize your ROI with cost-effective digital consultation services that deliver impactful results.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Brand Boost",
      description:
        "Elevate your brand reputation and credibility with expert consultation strategies.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Customized Strategy",
      description:
        "Benefit from tailored digital consultation strategies aligned with your business goals and industry.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Expertise",
      description:
        "Harness the expertise of experienced consultants with deep understanding of digital marketing trends and strategies.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is digital consultation?",
      answer:
        "Digital consultation refers to professional guidance and advice provided by experts in digital marketing to help businesses optimize their online presence and achieve their goals.",
    },
    {
      question: "Why do I need digital consultation for my business?",
      answer:
        "Digital consultation helps businesses stay competitive by leveraging industry best practices, tailored strategies, and the latest digital trends.",
    },
    {
      question: "What areas can digital consultation cover?",
      answer:
        "Digital consultation covers SEO, social media, content strategy, paid advertising, website optimization, email marketing, and online reputation management.",
    },
    {
      question: "How does digital consultation work?",
      answer:
        "Consultation begins with evaluating your current digital presence, identifying opportunities, and creating actionable strategies for improvement.",
    },
    {
      question: "How can digital consultation benefit my business?",
      answer:
        "Digital consultation improves brand visibility, targets the right audience, maximizes ROI, and drives qualified leads and conversions.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring deliverables and value are achieved within your timeline and budget.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models based on project requirements with agile responsiveness and optimized productivity.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "We help businesses efficiently recruit top talent with streamlined hiring support and expert guidance.",
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
                Digital Consultation
                {/* <span className="block text-[#4291CE]">
                  Consultation
                </span> */}
              </h1>
              <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                Expert digital consulting services to guide business growth and digital transformation.
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
              Digital Success Solutions
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Partner With Us to Boost Your Business Online Presence
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
                Our Online Digital Consultation Services
              </h3>

              <p className="leading-8 mb-6">
                Our Online Digital Consultation Services are designed to provide
                comprehensive and personalized guidance to help businesses thrive
                in the digital landscape.
              </p>

              <p className="leading-8 mb-8">
                Whether you need assistance with website development, SEO
                optimization, social media marketing, or digital advertising,
                our consultants provide actionable recommendations and valuable
                insights to drive measurable results.
              </p>

              <ul className="space-y-4">
                {consultationServices.map((item, index) => (
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
                src="/assets/img/digital-c-img1.png"
                alt="Digital Consultation"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/digital-c-img2.png"
                alt="Why Choose Us"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Us for Your Digital Consultation?
              </h3>

              <p className="leading-8 mb-6">
                Our team of digital consultants brings extensive experience and
                expertise across multiple areas of digital marketing.
              </p>

              <p className="leading-8 mb-8">
                We provide personalized solutions aligned with your goals while
                staying updated with the latest industry trends and technologies.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
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

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Exploring The Potential of Digital Consultation
              </h3>

              <p className="leading-8 mb-8">
                Our digital consultation services help businesses leverage
                digital channels effectively through strategic guidance,
                customized solutions, measurable results, and ongoing support.
              </p>

              <div className="space-y-5">
                {benefits.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="min-w-[45px] h-[45px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/digital-c-img3.png"
                alt="Benefits"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/digital-c-img4.png"
                alt="Industries"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Expanding Horizons: Serving a Diverse Client Base
              </h3>

              <p className="leading-8 mb-6">
                We proudly serve businesses across e-commerce, healthcare,
                retail, finance, travel, education, and many other industries.
              </p>

              <p className="leading-8 mb-8">
                Our experience across industries enables us to deliver tailored
                digital strategies and measurable results.
              </p>

              <div className="space-y-5">
                {industries.map((item, index) => (
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
              Unleashing Your Business Growth Opportunities
            </h2>

            <p className="text-lg">
              Serving a diverse client base with our best digital consultation
              services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {blueLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {blueRight.map((item, index) => (
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
              Unleash Business Potential with Top Digital Consultation Agency
            </h2>

            <p className="text-lg text-gray-600">
              Partner with us to unlock the power of digital consultation and
              grow your business online.
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
              Our Online Digital Consultation Expertise
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
              business requirements.
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