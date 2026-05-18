import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function InfluentialMarketingPage() {
  const processItems = [
    "Strategy Development & Influencer Identification",
    "Collaboration and Content Creation",
    "Campaign Management",
    "Performance Tracking and Reporting",
    "Continuous Optimization",
    "Results-Driven Approach",
  ];

  const whyChooseUs = [
    "Expertise and comprehensive solutions",
    "An extensive network of influencers",
    "Customized strategies",
    "Results-driven approach with measurable outcomes",
    "Ongoing support and consultation in a dynamic industry",
  ];

  const benefits = [
    "Increased brand awareness and credibility",
    "Authentic and engaging content creation",
    "Targeted audience reach",
    "Improved conversions and ROI",
    "Amplified social media presence",
  ];

  const industries = [
    "Fashion and beauty",
    "Technology and electronics",
    "Food and beverage",
    "Travel and tourism",
    "Fitness and wellness",
  ];

  const blueLeft = [
    "Harness the power of influential marketing to amplify your brand's reach and visibility.",
    "Build strong connections with influencers who resonate with your target audience.",
    "Create authentic and compelling content that captivates your audience and showcases your brand.",
    "Drive meaningful customer engagement and build trust through strategic influencer partnerships.",
    "Increase brand credibility and establish yourself as a thought leader in your industry.",
  ];

  const blueRight = [
    "Leverage influencers' loyal followers to expand your brand's reach and attract new customers.",
    "Tap into niche markets and target specific demographics with tailored influencer campaigns.",
    "Measure and analyze campaign performance to optimize results.",
    "Stay ahead of the competition with innovative influencer marketing strategies.",
    "Unleash your business potential through the power of influential marketing.",
  ];

  const features = [
    {
      title: "Targeted Audience Reach",
      description:
        "Reach your ideal audience through precise targeting and strategic influencer collaborations that drive engagement and conversions.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Customized Strategy",
      description:
        "Tailored influential marketing strategies aligned with your business goals, audience, and industry requirements.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Expertise",
      description:
        "Benefit from our experienced influential marketing specialists with deep industry knowledge and proven strategies.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Cost Effective",
      description:
        "Maximize ROI through cost-effective influential marketing campaigns that deliver impactful measurable results.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Social Media Presence",
      description:
        "Expand your brand visibility and strengthen social media presence with strategic influencer collaborations.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Brand Boost",
      description:
        "Enhance your brand credibility and reputation through partnerships with influential personalities.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is influential marketing?",
      answer:
        "Influential marketing involves partnering with influencers and personalities to promote your brand, products, or services and drive engagement, trust, and conversions.",
    },
    {
      question: "How does influential marketing benefit businesses?",
      answer:
        "Influential marketing helps businesses increase visibility, build trust, improve engagement, and generate sales through authentic influencer partnerships.",
    },
    {
      question: "How do you choose the right influencers?",
      answer:
        "We analyze your target audience, industry, campaign goals, engagement metrics, and influencer authenticity to identify the best-fit creators.",
    },
    {
      question: "What platforms are used for influential marketing?",
      answer:
        "Influential marketing campaigns are commonly executed across Instagram, YouTube, TikTok, blogs, LinkedIn, and other social media platforms.",
    },
    {
      question: "How do you measure campaign success?",
      answer:
        "We track reach, engagement, conversions, traffic, ROI, and brand mentions to evaluate campaign effectiveness and optimize performance.",
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
                Influential Marketing
                {/* <span className="block text-[#4291CE]">
                  Marketing
                </span> */}
              </h1>
              <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                Influencer marketing campaigns that help brands build trust and reach targeted audiences.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Powerful Brand Influence
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Leverage Influencers for Impactful Brand Growth
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
                Our Influential Marketing Process
              </h3>

              <p className="leading-8 mb-6">
                Our influential marketing process begins with understanding your
                business goals and target audience. We create customized
                strategies and identify influencers aligned with your brand
                values.
              </p>

              <p className="leading-8 mb-8">
                From content creation and campaign management to performance
                tracking and optimization, we deliver measurable outcomes that
                increase awareness, engagement, and conversions.
              </p>

              <ul className="space-y-4">
                {processItems.map((item, index) => (
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
                src="/assets/img/influ-serv-img1.png"
                alt="Influential Marketing"
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
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/influe-serv-img2.png"
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
                Choose us for influential marketing expertise, customized
                strategies, and access to a vast network of trusted influencers.
              </p>

              <p className="leading-8 mb-8">
                We focus on transparency, measurable outcomes, and ongoing
                support to help your business stay ahead in the competitive
                digital landscape.
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
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Pioneering Brand Awareness Through Influential Marketing
              </h3>

              <p className="leading-8 mb-8">
                Influential marketing helps businesses build trust, improve
                visibility, increase engagement, and drive conversions through
                authentic influencer partnerships and compelling campaigns.
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
                src="/assets/img/influ-serv-img3.png"
                alt="Brand Awareness"
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
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/influ-serv-img4.png"
                alt="Industries"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Expanding Horizons: Embracing Diversity in Client Engagement
              </h3>

              <p className="leading-8 mb-6">
                Our influential marketing services support businesses across
                fashion, technology, food, travel, wellness, and many other
                industries.
              </p>

              <p className="leading-8 mb-8">
                We develop tailored influencer strategies that align with each
                industry's unique audience behavior and market dynamics.
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
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Amplify Your Business Success with Influential Marketing!
            </h2>

            <p className="text-lg">
              Boost awareness, engagement, and growth through strategic
              influencer collaborations.
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
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Unleash Your Business Potential with Influential Marketing
            </h2>

            <p className="text-lg text-gray-600">
              Experience the transformative power of influential marketing for
              remarkable business growth.
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
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Influential Marketing Expertise
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
        <div className="relative max-w-7xl mx-auto px-4 w-full">
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