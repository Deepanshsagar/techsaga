// app/services/digital-transformation/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function DigitalTransformationPage() {
  const services = [
    "Strategy Development",
    "Process Optimization",
    "Cultural Transformation",
    "Customer-centric Approach",
  ];

  const expertise = [
    "SaaS",
    "Healthcare",
    "Real Estate",
    "Travel & Tourism",
    "Media & Entertainment",
    "E-learning & Social Networking",
  ];

  const benefits = [
    "Enhances operational efficiency",
    "Improved productivity, reduced errors, and cost savings",
    "Customer Engagement",
    "Personalization",
    "Competitive Business",
  ];

  const diversityBenefits = [
    "Improve your customer experience",
    "Increase your efficiency and productivity",
    "Gain a competitive advantage",
    "Drive innovation",
    "Reduce costs",
  ];

  const blueLeft = [
    "Digital transformation automates manual processes, streamlines workflows, and eliminates redundancies, leading to improved operational efficiency and productivity.",
    "It enables businesses to personalize interactions, deliver seamless omnichannel experiences, and respond to customer needs in real-time, fostering loyalty and satisfaction.",
    "Through digital transformation, businesses can collect, analyze, and leverage vast amounts of data to gain valuable insights that drive informed decision-making and strategy formulation.",
    "It equips businesses with the tools and technologies to quickly adapt to changing market dynamics, customer preferences, and industry trends.",
    "Embracing digital transformation allows businesses to stay ahead of the competition by leveraging innovative technologies, optimizing processes, and creating unique value propositions.",
  ];

  const blueRight = [
    "By implementing digital tools and automation, businesses can reduce operational costs, minimize errors, and optimize resource allocation, leading to significant cost savings.",
    "It facilitates seamless collaboration and communication among teams, departments, and geographically dispersed locations, promoting knowledge sharing and boosting productivity.",
    "It enables businesses to scale their operations efficiently, expand into new markets, and explore innovative business models, driving sustainable growth.",
    "It fosters a culture of innovation, encouraging employees to think creatively, explore new ideas, and embrace emerging technologies to drive continuous improvement.",
    "By embracing digital transformation, businesses can future-proof themselves against disruptive technologies and market shifts, ensuring long-term relevance and success.",
  ];

  const features = [
    {
      title: "Business Focused",
      description:
        "Our digital transformation solutions simplify operations with scalable, adaptable, and easy-to-maintain systems.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "World Class",
      description:
        "We implement industry-leading technologies and development practices to deliver exceptional digital experiences.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Value Acceleration",
      description:
        "We improve quality, drive efficiencies, and reduce costs through strategic project monitoring and execution.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Innovative Impact",
      description:
        "Our solutions empower businesses to innovate, disrupt industries, and establish leadership positions.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Enhanced Brand Reputation",
      description:
        "We create strong digital experiences that build trust, improve engagement, and strengthen credibility.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Cost Effectiveness",
      description:
        "Our optimized strategies maximize ROI while ensuring budget efficiency and sustainable growth.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question:
        "What is digital transformation and why is it important for businesses?",
      answer:
        "Digital transformation integrates digital technologies across business operations to improve efficiency, customer experiences, and competitiveness.",
    },
    {
      question:
        "How long does a digital transformation process typically take?",
      answer:
        "The timeline depends on business size, complexity, and goals. It may take several months to a few years.",
    },
    {
      question:
        "What are the main challenges during digital transformation?",
      answer:
        "Challenges include resistance to change, legacy systems integration, lack of digital skills, and ensuring data security.",
    },
    {
      question:
        "How can digital transformation benefit customer experiences?",
      answer:
        "It enables personalized experiences, omnichannel engagement, and real-time responsiveness that improve satisfaction and loyalty.",
    },
    {
      question:
        "How can businesses ensure a successful digital transformation?",
      answer:
        "Businesses should focus on strong leadership, clear goals, employee upskilling, effective change management, and selecting the right technologies.",
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
        "Efficient hiring support to help you recruit top digital talent without intermediaries.",
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
                Digital
                <span className="block text-[#4291CE]">
                  Transformation
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Driving Digital Evolution
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
              Transform. Accelerate. Scale. Optimize
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
                Our services encompass various aspects
              </h3>

              <p className="leading-8 mb-8">
                We collaborate closely with businesses to understand their
                goals, target audience, and market dynamics. Our digital
                transformation solutions focus on optimizing operations,
                automating workflows, improving customer experiences, and
                fostering innovation across organizations.
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
                src="/assets/img/digital-trans-imge1.png"
                alt="Digital Transformation"
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
                src="/assets/img/digital-t-imge2.1.png"
                alt="Why Choose Us"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Us for Digital Transformation?
              </h3>

              <p className="leading-8 mb-5">
                Techsaga has an expert team of developers, testers, marketers,
                DevOps engineers, cloud specialists, and support professionals
                delivering business-focused digital transformation solutions.
              </p>

              <p className="leading-8 mb-8">
                Our approach combines next-generation technologies, enterprise
                support, analytics, and innovative software development to help
                clients improve ROI, reduce costs, and achieve long-term growth.
              </p>

              <h4 className="text-xl font-bold mb-5">
                Our Expertise In Action
              </h4>

              <div className="space-y-4">
                {expertise.map((item, index) => (
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
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Benefits of Digital Transformation
              </h3>

              <p className="leading-8 mb-8">
                Digital transformation enhances operational efficiency,
                streamlines workflows, improves customer engagement, and enables
                businesses to make informed decisions through data-driven
                insights.
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
                src="/assets/img/digital-t-imge3.1.png"
                alt="Benefits of Digital Transformation"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diversity */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Image
                src="/assets/img/digital-t-imge4.1.png"
                alt="Diversity"
                width={700}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Expanding Horizons: A Commitment to Diversity
              </h3>

              <p className="leading-8 mb-8">
                We understand that every business has unique transformation
                needs. Our diverse industry expertise enables us to create
                customized strategies that improve efficiency, innovation, and
                long-term success.
              </p>

              <div className="space-y-5">
                {diversityBenefits.map((item, index) => (
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Unleash Business Potential with Digital Transformation
            </h2>

            <p className="text-lg">
              Streamline operations, enhance customer experiences, and scale
              your business with modern digital transformation strategies.
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Best Digital Transformation Agency
            </h2>

            <p className="text-lg text-gray-600">
              We drive results through automation, scalability, improved ROI,
              and cost reduction strategies.
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
              Our Digital Transformation Expertise
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

      <Footer />
    </div>
  );
}