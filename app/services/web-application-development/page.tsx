// app/services/web-application-development/page.tsx

import BottomForm from "@/components/BottomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function WebApplicationDevelopment() {

  const whyChoose = [
    "Collaborative Approach",
    "Customized Solutions",
    "User-Centric Design",
    "Scalability and Flexibility",
    "Ongoing Support and Maintenance",
  ];

  const industries = [
    "Real Estate",
    "E-commerce web application",
    "Health, Travel & Tourism",
    "Education & e-learning",
    "Media, Entertainment & Training",
  ];

  const magicianPoints = [
    "Expert Web Application Architects",
    "Strong Backend & Frontend Support",
    "Attractive User Interface Designer",
    "Engaging Graphics & Web-Content",
    "Maintenance & Support Team",
  ];

  const businessLeft = [
    "Web applications can be accessed from desktops, laptops, tablets, and smartphones.",
    "Web applications enable businesses to interact and engage with their customers.",
    "A web application increases a business's online visibility.",
    "Web applications automate and streamline various business processes.",
    "Web applications can integrate with existing systems like CRM or ERP.",
  ];

  const businessRight = [
    "Web applications collect and analyze data for informed decisions.",
    "Web applications can easily scale up or down based on business needs.",
    "Web applications reduce hardware and maintenance costs.",
    "Web applications can be updated in real-time.",
    "Web applications implement robust security measures.",
  ];

  const features = [
    {
      title: "Enhanced Accessibility",
      description:
        "Web applications allow users to access your services or products from any device with an internet connection.",
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Scalability",
      description:
        "Web applications can easily scale to accommodate growing business needs.",
      image: "/assets/img/ds3.jpg",
    },
    {
      title: "Improved Efficiency",
      description:
        "Web applications automate processes, streamline workflows, and improve operations.",
      image: "/assets/img/competative-advantage.jpg",
    },
    {
      title: "Data Centralization",
      description:
        "Web applications centralize data storage for secure access and collaboration.",
      image: "/assets/img/services-l1.jpg",
    },
    {
      title: "Competitive Advantage",
      description:
        "Tailored web applications provide unique features and personalized interactions.",
      image: "/assets/img/services-l2.jpg",
    },
    {
      title: "Built-in Security Feature",
      description:
        "Web applications include strong security measures to protect sensitive information.",
      image: "/assets/img/services-l3.jpg",
    },
  ];

  const faqs = [
    {
      question: "What are the benefits of web application development?",
      answer:
        "Web applications offer flexibility, accessibility, easy updates, integrations, and streamlined business operations.",
    },
    {
      question: "What technologies do you use for web application development?",
      answer:
        "We use technologies like JavaScript, React, Angular, Node.js, PHP, Python, and more.",
    },
    {
      question: "Can you develop custom web applications tailored to our specific needs?",
      answer:
        "Yes, we build tailor-made web applications aligned with your business goals and requirements.",
    },
    {
      question: "How do you ensure the security of web applications?",
      answer:
        "We follow secure coding standards, encryption methods, and rigorous testing processes.",
    },
    {
      question: "Do you provide ongoing support and maintenance for web applications?",
      answer:
        "Yes, we provide support, bug fixing, updates, and maintenance services.",
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

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/service-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            <div className="max-w-xl">
              <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight">
                Web Application Development
                {/* <span className="block text-[#4291CE]">
                  Development
                </span> */}
              </h1>
              <p className="mt-3 text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                  Responsive and secure web applications built for seamless user experience and business growth.
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
              Unleashing Web Mastery
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Partner with Techsaga for your Web Application Development needs
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
                Cutting Edge Development Team Powering Business Growth
              </h3>

              <p className="leading-8 mb-6">
                At Techsaga, we have a team of skilled professionals specializing
                in a wide range of technologies and platforms, including full-stack
                development, Android and iOS development, Shopify, Laravel,
                PHP developers, Drupal, and WooCommerce.
              </p>

              <p className="leading-8 mb-6">
                Our talented UI/UX designers and e-commerce web developers work
                together to create stunning and functional web applications that
                enhance user experiences and drive business growth.
              </p>

            </div>

            <div>
              <Image
                src="/assets/img/web-application-v-services.jpg"
                alt="web"
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
                src="/assets/img/verticle-web-application12.png"
                alt="services"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-5">
                Why Hire Techsaga For Your Web App Development?
              </h3>

              <p className="leading-8 mb-6">
                At Techsaga, we bring a wealth of expertise and experience in
                web application development, delivering high-quality solutions
                that exceed client expectations and drive business growth.
              </p>

              <p className="leading-8 mb-8">
                Our focus is on creating intuitive and user-friendly web
                applications that enhance user experience, engagement,
                and conversion rates.
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

      {/* SECTION 3 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Our Range of Web Application Development
              </h3>

              <p className="leading-8 mb-8">
                We have built responsive web applications for sectors like:
              </p>

              <div className="space-y-5">
                {industries.map((item, index) => (
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
                src="/assets/img/web-app-v4-services1.jpg"
                alt="future"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <Image
                src="/assets/img/web-app-view-ser.jpg"
                alt="process"
                width={700}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Magic Happens When Experience Meets Innovation
              </h3>

              <p className="leading-8 mb-8">
                Experience and innovation converge to create extraordinary
                results. Our team combines deep industry knowledge with the
                latest technological advancements to create transformative
                solutions that drive success.
              </p>

              <div className="space-y-5">
                {magicianPoints.map((item, index) => (
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

      {/* BUSINESS */}
      <section className="py-20 bg-[#4291CE] text-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Get the Most Out of Business by A Web Application
            </h2>

            <p className="text-lg">
              Web Apps Automate, Streamline, and Enhance Collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="space-y-6">
              {businessLeft.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {businessRight.map((item, index) => (
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
              Hiring Techsaga Ensures A Seamless Web Application Development
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
              Innovative Solutions that Meet Your Needs and Deliver Quality
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
              Our Web Application Development Service Expertise
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