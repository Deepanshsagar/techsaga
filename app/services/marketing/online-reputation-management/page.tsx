import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function OnlineReputationManagementPage() {
  const services = [
    "Brand Monitoring",
    "Online Review Management",
    "Content Optimization",
    "Crisis Management",
    "Social Media Management",
    "Proactive Brand Building",
  ];

  const whyChooseUs = [
    "Expertise",
    "Customized Solutions",
    "Proactive Monitoring",
    "Confidentiality",
    "Results-Driven Approach",
  ];

  const benefits = [
    "Enhanced Brand Image",
    "Crisis Prevention and Management",
    "Increased Customer Trust and Loyalty",
    "Improved Search Engine Visibility",
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
    "Diverse client base with tailored solutions across industries.",
    "Serving e-commerce, real estate, healthcare, retail, media, logistics, travel, banking, and education sectors.",
    "Enhancing online visibility and driving business growth.",
    "Crisis prevention and strategic reputation management.",
    "Proactive monitoring to address reputation issues before escalation.",
  ];

  const blueRight = [
    "Optimizing online content to promote positive brand visibility.",
    "Strengthening social media presence and customer engagement.",
    "Ensuring confidentiality and protecting sensitive information.",
    "Delivering measurable and results-driven outcomes.",
    "Experienced online reputation management specialists.",
  ];

  const features = [
    {
      title: "Targeted Audience Reach",
      description:
        "Engage your ideal audience through precise targeting strategies that improve engagement and conversions.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Customized Strategy",
      description:
        "Tailored reputation management strategies designed specifically for your business goals and industry.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Expertise",
      description:
        "Leverage the expertise of experienced professionals with deep understanding of online reputation management.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Cost Effective",
      description:
        "Maximize ROI with affordable reputation management campaigns that deliver impactful results.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Social Media Presence",
      description:
        "Expand your online visibility and brand presence across major social media platforms.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Brand Boost",
      description:
        "Enhance your brand credibility and reputation with strategic digital reputation management solutions.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "What is online reputation management, and why is it important?",
      answer:
        "Online reputation management involves monitoring and controlling the online perception of a brand or individual. It is important because a positive reputation builds trust, credibility, and business opportunities.",
    },
    {
      question: "How does online reputation management work?",
      answer:
        "It involves monitoring online conversations, managing reviews, optimizing content, improving social media engagement, and building a strong positive digital presence.",
    },
    {
      question: "Can online reputation management help my business?",
      answer:
        "Yes, it helps maintain a positive online image, improve customer trust, increase search visibility, manage crises, and gain a competitive advantage.",
    },
    {
      question:
        "How long does it take to see results with online reputation management?",
      answer:
        "Results vary depending on the existing reputation and strategies implemented, but noticeable improvements often begin within a few months.",
    },
    {
      question:
        "Is online reputation management only for businesses?",
      answer:
        "No, it is also valuable for professionals, influencers, executives, and public figures who want to maintain a positive online image.",
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
        "Flexible collaboration models based on project needs with agile responsiveness and optimized productivity.",
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
                Online Reputation Management
                {/* <span className="block text-[#4291CE]">
                  Management
                </span> */}
              </h1>
              <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                Reputation management services that protect and strengthen your brand image online.
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
              Building Trust Online
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Partner With Us to Boost Your Online Reputation
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
                Our Online Reputation Management Services
              </h3>

              <p className="leading-8 mb-6">
                At Techsaga, we specialize in online reputation management,
                employing advanced tools and techniques to monitor conversations
                and mentions of your brand across multiple platforms.
              </p>

              <p className="leading-8 mb-8">
                From review management and content optimization to crisis
                management and social media engagement, we help businesses build
                trust, protect credibility, and strengthen digital presence.
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
                src="/assets/img/online-rep-img1.png"
                alt="Online Reputation Management"
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
                src="/assets/img/online-rep-img2.png"
                alt="Why Choose Us"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Us for Online Reputation Management
              </h3>

              <p className="leading-8 mb-6">
                Our experienced team specializes in online reputation
                management, helping businesses improve and restore their digital
                brand image through customized strategies.
              </p>

              <p className="leading-8 mb-8">
                We use cutting-edge tools, proactive monitoring, and
                performance-driven solutions to deliver measurable results while
                maintaining confidentiality and trust.
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
                Acknowledging The Power of Online Reputation Management
              </h3>

              <p className="leading-8 mb-8">
                Online reputation management helps businesses maintain a
                positive digital presence, improve customer trust, and enhance
                search engine visibility while proactively managing brand
                perception.
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
                src="/assets/img/online-rep-img3.png"
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
                src="/assets/img/online-rep-img4.png"
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
                We proudly serve businesses across multiple industries with
                customized online reputation management strategies tailored to
                specific market needs.
              </p>

              <p className="leading-8 mb-8">
                Our expertise enables businesses to strengthen brand presence,
                improve visibility, and maintain positive digital engagement.
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
              Maximize Business Potential with Online Reputation Management
            </h2>

            <p className="text-lg">
              Build a positive digital brand image, manage customer reviews, and
              protect your online reputation with proven strategies.
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
              Unleash Business Potential with Top Online Reputation Management
              Agency
            </h2>

            <p className="text-lg text-gray-600">
              Partner with us to unlock the power of online reputation
              management and strengthen your brand perception.
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
              Our Online Reputation Management Expertise
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