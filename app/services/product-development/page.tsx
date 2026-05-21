// app/services/product-development/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";


import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/services/product-development");
}

export default function ProductDevelopment() {

  const teamPoints = [
    "We have a pool of qualified front-end and back-end experts",
    "Out-of-Box innovative solutions",
    "We follow the TCLE Principle - Time, Cost & Labor Effective",
    "Dedicated development and digital marketing teams for your business promotion",
  ];

  const productRanges = [
    "E-commerce Solution: e-shop, ZUHD store, Character India shop",
    "Education & E-learning: Ecadema, Doxrix, Edita, DSM, Kidzville learning",
    "HealthCare: ADES, Bakery Hill dental, Cleanco, Cllak",
    "Real Estate: Apices studios",
    "Media & Entertainment: Dance & Dazzle",
    "Music: Walterscalzone",
    "Travel & Tourism: Your Preferred Tours",
    "Logistics & Transportation: Logisticle",
  ];

  const whyChoose = [
    "Research and Analysis",
    "Design and Prototyping",
    "Development and Testing",
    "Launch and Deployment",
    "Continuous Improvement",
    "Case Studies",
  ];

  const excellencePoints = [
    "Proven track record",
    "Tailored software product",
    "Scalable and future proof",
    "Seamless integration",
  ];

  const impactLeft = [
    "Differentiate your brand and gain a competitive edge",
    "Enhance customer satisfaction and loyalty",
    "Boost productivity with efficient products",
    "Unlock new market opportunities",
    "Scalable products adapt to future growth",
  ];

  const impactRight = [
    "Satisfied customers become brand advocates",
    "Mitigates risks tied to outdated solutions",
    "Continuous improvement using customer feedback",
    "Achieve higher ROI with innovative products",
    "Create valuable intellectual property assets",
  ];

  const features = [
    {
      title: "Risk Mitigation",
      description:
        "Product development mitigates risks tied to outdated solutions, granting control over quality, security, and functionality.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Customer Insights and Feedback",
      description:
        "Understand customer needs, preferences, and pain points through continuous feedback and improvements.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Long-Term Business Sustainability",
      description:
        "Reduce reliance on external vendors and build long-term sustainability with scalable products.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Intellectual Property Ownership",
      description:
        "Create valuable intellectual property assets protected by patents, copyrights, or trademarks.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Continuous Innovation and Growth",
      description:
        "Continuously innovate and improve through market feedback and technological advancements.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Return on Investment (ROI)",
      description:
        "Deliver innovative products to increase sales volume and achieve higher ROI.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is product development?",
      answer:
        "Product development is creating and bringing a new product to the market involving ideation, design, prototyping, testing, and manufacturing.",
    },
    {
      question: "What product development services do you offer?",
      answer:
        "We provide product development solutions for web apps, mobile apps, IoT products, eCommerce, healthcare, logistics, education, and more.",
    },
    {
      question: "How long does product development take?",
      answer:
        "The timeline depends on complexity, features, and project scope. It can range from months to years.",
    },
    {
      question: "Why is market research important?",
      answer:
        "Market research helps identify customer needs, competition, and trends to create successful products.",
    },
    {
      question: "Why is prototyping important?",
      answer:
        "Prototyping validates ideas, improves user experience, and reduces development risks before launch.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear, upfront costs ensuring project delivery within time and budget.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible collaboration models optimized for productivity and project needs.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient hiring solutions to recruit top talent without intermediaries.",
      image: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div>
      <Header />

      {/* HERO BANNER SAME */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/software-development.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            <div className="max-w-xl">
              <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Product
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>
               <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  Scalable enterprise applications designed to improve operations, collaboration, and productivity.
                </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
              Crafting Winning Products
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Diverse Product Development Solutions for Every Industry
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
              <h3 className="text-3xl font-bold mb-8">
                Unleash Your Business Potential with Our Expert Product Development Team
              </h3>

              <p className="leading-8 mb-6">
               Our team of industry professionals brings a wealth of expertise in product development, serving the diverse software solution needs of esteemed clients. With a talented pool of front-end and back-end experts, we deliver innovative solutions that push the boundaries. We adhere to the TCLE principle, ensuring projects are executed efficiently, saving time, cost, and labor. Additionally, our dedicated development and digital marketing teams work together to promote your brand, tools, and business, maximizing your chances for success in the market.
              </p>

              <ul className="space-y-5">
                {teamPoints.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#4291CE] text-white flex items-center justify-center text-sm mt-1">
                      ✓
                    </div>

                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src="/assets/img/product-dev1.jpg"
                alt="product"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/product-dev4.jpg"
                alt="services"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-5">
                Our Range of Product Development
              </h3>

              <p className="leading-8 mb-6">
                We have built websites and applications for multiple industries.
              </p>

              <div className="space-y-4">
                {productRanges.map((item, index) => (
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

      {/* SECTION 3 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Why Choose Techsaga For Your Product Development?
              </h3>

              <p className="leading-8 mb-8">
            We conduct thorough market research and analysis to validate your product concept, ensuring it stands out. Our skilled designers create intuitive UI/UX interfaces, while our developers use cutting-edge technologies to build robust software solutions. We follow an agile development approach, ensuring regular iterations and rigorous testing. From launch to post-launch support, we assist you every step of the way. With ongoing maintenance and optimization, we continuously improve your product based on data analysis and user feedback. Explore our case studies for successful examples of our innovative product development expertise.
              </p>

              <div className="space-y-5">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center">

                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4 className="text-lg font-semibold">
                      {item}
                    </h4>

                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/product-choose12.jpg"
                alt="future"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* EXCELLENCE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/product-dev21.jpg"
                alt="process"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-6">
                A Combo of Excellence and Experience
              </h3>

              <p className="leading-8 mb-8">
              Our Product Development team has decades of experience in delivering software solutions that meet the unique needs of businesses across diverse industries. With a proven track record of successful project delivery, we possess expertise in various technologies to deliver tailored software development solutions that align with your organization's goals and requirements.
              </p>

              <div className="space-y-5">
                {excellencePoints.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">

                    <div className="min-w-[50px] h-[50px] rounded-full bg-[#4291CE] text-white flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4 className="text-lg font-semibold pt-3">
                      {item}
                    </h4>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Pioneering Progress: The Far-reaching Effects of Product Development
            </h2>

            <p className="text-lg">
              Successful product launches generate revenue and strengthen brands.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="space-y-6">
              {impactLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {impactRight.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <h2 className="text-4xl font-bold mt-4">
              Transforming Ideas into Exceptional Products
            </h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>

            <p className="mt-5 text-gray-600">
              Unleash the Power of Innovation with Our Expert Product Development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
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

          <div className="max-w-4xl mx-auto text-center mb-14">

            <h2 className="text-4xl font-bold">
              Our Product Development Expertise
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

      {/* COLLABORATION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <h2 className="text-4xl font-bold mb-5">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible Budget, Customized Approach. Choose What Works for You.
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