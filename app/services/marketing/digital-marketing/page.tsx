// app/services/marketing/digital-marketing/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function DigitalMarketingPage() {
  const services = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click (PPC) Advertising",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Conversion Rate Optimization (CRO)",
    "Influential marketing",
  ];

  const whyChooseUs = [
    "Expertise and Experience",
    "Tailored Strategies",
    "Proven Track Record",
    "Transparent Communication",
    "Continuous Optimization",
  ];

  const successPoints = [
    "Increased Brand Awareness & Global Reach",
    "Cost-Effective & Targeted Audience Reach",
    "Improved Conversion Rates",
    "Enhanced Customer Engagement",
    "Real-Time Data and Analytics",
    "Increased Customer Loyalty and Retention",
  ];

  const clientIndustries = [
    "E-commerce Solution",
    "Real Estate & HealthCare",
    "Retail and Consumer Goods",
    "Media and Entertainment: Dance & Music",
    "Logistics and Transportation",
    "Education & E-learning",
  ];

  const blueLeft = [
    "Our experts provide comprehensive solutions to boost your online presence and help your business thrive in the competitive digital landscape.",
    "Experience revolutionizing techniques including SEO, PPC, content marketing, social media marketing, email marketing, and influential marketing.",
    "Optimize website visibility with SEO strategies.",
    "Drive targeted traffic through strategic PPC campaigns.",
    "Engage your audience with compelling social media content and establish thought leadership with content marketing.",
  ];

  const blueRight = [
    "Nurture leads and strengthen relationships with personalized email campaigns and CRO services.",
    "Choose us for our expertise, tailored strategies, proven track record, transparent communication, and continuous optimization.",
    "Increase brand awareness and global reach with targeted campaigns.",
    "Enhance customer engagement with real-time analytics and insights.",
    "Serve diverse industries including e-commerce, healthcare, media, logistics, finance, and education.",
  ];

  const features = [
    {
      title: "Brand Awareness",
      description:
        "Boost your brand visibility and recognition through targeted digital marketing strategies that create lasting impact.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Global Reach",
      description:
        "Expand your business reach worldwide with campaigns tailored to international audiences and global markets.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Cost Effective",
      description:
        "Maximize your marketing budget with cost-effective solutions that deliver measurable ROI and growth.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "High Conversion Rate",
      description:
        "Increase website conversion rates through optimized user experiences and strategic call-to-action elements.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Expertise",
      description:
        "Benefit from our experienced digital marketing specialists who craft customized growth strategies.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Gain valuable insights with real-time analytics to improve campaign performance and marketing decisions.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital marketing involves promoting products or services through digital channels like the Internet, social media, and search engines to reach broader audiences and enhance brand visibility.",
    },
    {
      question: "How can digital marketing benefit businesses?",
      answer:
        "Digital marketing enables businesses to expand reach, engage customers, increase brand awareness, and generate measurable business growth.",
    },
    {
      question:
        "Which digital technologies are commonly used in digital marketing?",
      answer:
        "Digital marketing commonly uses websites, SEO, PPC advertising, social media platforms, email marketing, and content marketing.",
    },
    {
      question: "How does digital marketing drive customer engagement?",
      answer:
        "Through targeted campaigns, personalized experiences, valuable content, and interactive communication channels.",
    },
    {
      question:
        "Why is digital marketing essential in today's business landscape?",
      answer:
        "Digital marketing helps businesses compete online, connect with customers, build loyalty, and achieve sustainable growth in the digital era.",
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
                Digital Marketing
                {/* <span className="block text-[#4291CE]">
                  Marketing
                </span> */}
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                Data-driven digital marketing strategies to improve visibility, traffic, and conversions.
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
              Delivering Exponential Growth
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Driving Growth: Unleashing Digital Marketing Potential
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
                Our Comprehensive Digital Marketing Services
              </h3>

              <p className="leading-8 mb-6">
                Boost your online presence with our comprehensive digital
                marketing services. We optimize your website visibility through
                SEO strategies aligned with search engine algorithms and
                industry trends.
              </p>

              <p className="leading-8 mb-6">
                Drive targeted traffic and generate leads through strategic PPC
                campaigns on Google Ads and social media platforms while
                engaging audiences through compelling content strategies.
              </p>

              <p className="leading-8 mb-8">
                Maximize conversion rates using CRO services, A/B testing,
                landing page optimization, and data-driven marketing
                methodologies.
              </p>

              <ul className="space-y-4">
                {services.map((item, index) => (
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
                src="/assets/img/digi-serv-im1.png"
                alt="Digital Marketing Services"
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
                src="/assets/img/digi-serv-img3.png"
                alt="Why Choose Us"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Us?
              </h3>

              <p className="leading-8 mb-6">
                Our experienced digital marketing professionals deliver
                personalized strategies tailored to your goals, target audience,
                and industry requirements.
              </p>

              <p className="leading-8 mb-6">
                We believe in transparent communication, detailed reporting, and
                continuous optimization to maximize campaign performance and
                business growth.
              </p>

              <p className="leading-8 mb-8">
                Together, we build a strong digital foundation to elevate your
                online presence and long-term success.
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

      {/* Success Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Igniting Success With Innovative Digital Marketing
              </h3>

              <p className="leading-8 mb-6">
                Digital marketing expands brand visibility, improves customer
                engagement, and drives targeted traffic through multiple online
                channels and strategic campaigns.
              </p>

              <p className="leading-8 mb-8">
                Through SEO, PPC, social media marketing, and data-driven
                analytics, businesses can optimize conversions, strengthen
                customer loyalty, and achieve sustainable growth globally.
              </p>

              <div className="space-y-5">
                {successPoints.map((item, index) => (
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
                src="/assets/img/digi-serv-img4.1.png"
                alt="Digital Marketing Growth"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Base */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/digi-serv-img6.1.png"
                alt="Client Industries"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Embracing Diversity: Catering To Diverse Client Needs
              </h3>

              <p className="leading-8 mb-6">
                We serve businesses across e-commerce, healthcare, logistics,
                media, retail, education, and finance with customized digital
                marketing strategies.
              </p>

              <p className="leading-8 mb-8">
                Our solutions help brands increase visibility, attract customers,
                and drive sustainable business growth through innovative online
                marketing.
              </p>

              <div className="space-y-5">
                {clientIndustries.map((item, index) => (
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
              Unleash Your Business Potential by Online Presence
            </h2>

            <p className="text-lg">
              Expert digital marketing strategies to boost visibility,
              engagement, and conversions.
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
              Unleash Business Potential with Top Digital Marketing Agency
            </h2>

            <p className="text-lg text-gray-600">
              Experience the transformative power of digital marketing and
              achieve measurable business growth.
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
              Our Digital Marketing Expertise
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