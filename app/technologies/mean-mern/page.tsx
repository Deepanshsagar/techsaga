import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";


import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/technologies/mean-mern");
}


export default function MeanMernPage() {
  const meanMernFeatures = [
    "Full-Stack Capability: Mean MERN Stack allows developers to handle both client-side and server-side development within a single technology stack.",
    "Seamless Integration: MongoDB, Express.js, React, and Node.js integrate smoothly, facilitating efficient data flow and communication between stack components.",
    "JavaScript-Based: Mean MERN Stack is entirely based on JavaScript, eliminating the need for language switching and enabling a streamlined development process.",
    "Scalability and Performance: With MongoDB's scalability and Node.js' asynchronous nature, Mean MERN Stack enables the creation of highly scalable and performant applications.",
    "Code Reusability: React's component-based architecture promotes code reusability, facilitating easier maintenance and updates.",
    "Rapid Development: Mean MERN Stack provides a rich ecosystem of tools, libraries, and frameworks for fast and efficient application development.",
    "Strong Community Support: The Mean MERN Stack community offers robust support, resources, and knowledge-sharing opportunities for developers.",
  ];

  const serviceFeatures = [
    "Mean/Mern Stack Application Development",
    "Mean Mern Website Development",
    "Custom Full Stack Development",
    "Mean Stack eCommerce Website Development",
    "Migration and Porting to Mean/Mern Stack",
    "Mean/Mern Stack Development",
  ];

  const faqs = [
    {
      question: "What is Mean MERN Stack Development?",
      answer:
        "Mean MERN Stack Development refers to the use of MongoDB, Express.js, React, and Node.js to build full-stack web applications.",
    },
    {
      question: "What are the advantages of Mean MERN Stack Development?",
      answer:
        "Mean MERN Stack offers seamless integration, code reusability, scalability, and a unified JavaScript-based development environment.",
    },
    {
      question:
        "Do I need prior programming knowledge to learn Mean MERN Stack Development?",
      answer:
        "While some programming knowledge is beneficial, our courses cater to both beginners and experienced developers, providing step-by-step guidance.",
    },
    {
      question: "How long does it take to learn Mean MERN Stack Development?",
      answer:
        "The learning timeline varies depending on your existing knowledge and dedication. With consistent effort, you can acquire proficiency in a few months.",
    },
    {
      question: "Can I use Mean MERN Stack for my existing project?",
      answer:
        "Yes, Mean MERN Stack can be adopted for existing projects. It allows for modular development, making it easier to integrate with existing systems.",
    },
    {
      question: "Is Mean MERN Stack suitable for large-scale applications?",
      answer:
        "Yes, Mean MERN Stack is well-suited for large-scale applications due to its scalability, performance, and support for handling high user traffic.",
    },
    {
      question:
        "How can Techsaga help with Mean MERN Stack Development?",
      answer:
        "Techsaga offers comprehensive training, resources, and development services to help you master Mean MERN Stack and build robust applications.",
    },
  ];

  const collaborationCards = [
    {
      title: "TRANSPARENT AND FIXED PRICING",
      description:
        "Clear and upfront pricing ensuring predictable costs and smooth project execution.",
      image: "/assets/img/best-price.png",
    },
    {
      title: "ADAPTIVE HOURLY ENGAGEMENT",
      description:
        "Flexible engagement models designed to maximize productivity and collaboration.",
      image: "/assets/img/hourly-eng.png",
    },
    {
      title: "DIRECT RECRUITMENT",
      description:
        "Efficient hiring support and expert recruitment solutions for growing teams.",
      image: "/assets/img/direct-requirement.png",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[700px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/mean-mern_new1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                Mean MERN
                <span className="block text-[#4291CE]">
                  Development
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                Master the MERN Stack: Unlocking Endless Possibilities in Web
                Development with MongoDB, Express.js, React, and Node.js.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center bg-[#4291CE] hover:bg-[#3279b0] text-white px-8 py-4 rounded-xl transition duration-300 font-semibold"
                >
                  Connect with expert
                  <span className="ml-3">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="grid sm:grid-cols-12 gap-4 items-end">
                <div className="sm:col-span-8">
                  <Image
                    src="/assets/img/Mean-Mern1.jpg"
                    alt="Mean MERN Development"
                    width={700}
                    height={500}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>

                <div className="sm:col-span-4">
                  <div className="bg-[#4291CE] text-white rounded-2xl py-10 px-6 text-center">
                    <h3 className="text-5xl font-bold">1600</h3>
                    <p className="mt-3 text-lg">Projects Complete</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Image
                  src="/assets/img/Mean-Mern2.jpg"
                  alt="Mean MERN Stack"
                  width={350}
                  height={250}
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Mean MERN Stack Development
              </h2>

              <div className="mt-4">
                <Image
                  src="/assets/img/line1.png"
                  alt="line"
                  width={180}
                  height={20}
                />
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Mean MERN Stack Development is a powerful combination of
                MongoDB, Express.js, React, and Node.js, revolutionizing the
                web development landscape.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                With MongoDB as the database, Express.js for server-side
                handling, React for dynamic UI components, and Node.js as the
                runtime environment, developers can create robust and scalable
                applications.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                The MERN Stack offers a seamless workflow and enables developers
                to build modern, full-stack applications with ease while
                delivering exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Full-Stack Development with Mean MERN Stack with Techsaga
          </h2>

          <div className="flex justify-center mt-5">
            <Image
              src="/assets/img/line1.png"
              alt="line"
              width={180}
              height={20}
            />
          </div>

          <p className="mt-8 leading-8 text-gray-700">
            We specialize in crafting robust and scalable web applications
            using the power of MongoDB, Express.js, React, and Node.js.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Whether you require a dynamic e-commerce platform, a feature-rich
            web application, or a custom enterprise solution, we have the
            expertise to bring your vision to life.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            We prioritize user experience, performance, and security to create
            seamless and reliable applications that leave a lasting impact.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/assets/img/index-adhere.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1727]/80"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              {meanMernFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-white text-xl">✓</div>
                  <p className="text-white leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Key Features of Mean MERN Development
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">FAQs</h2>

            <div className="flex justify-center mt-5">
              <Image
                src="/assets/img/line1.png"
                alt="line"
                width={180}
                height={20}
              />
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-12 items-start">
            <div className="bg-[#4291CE] rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-5">
                Our Customized Mean MERN Stack Development
              </h3>

              <p className="text-white/90 leading-8 mb-8">
                Unlock limitless possibilities with our tailored Mean MERN
                Stack development solutions.
              </p>

              <Image
                src="/assets/img/faq-mod.png"
                alt="FAQ"
                width={520}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white border-2 rounded-2xl p-6 group shadow-sm"
                >
                  <summary className="cursor-pointer flex justify-between items-center font-semibold text-lg">
                    {faq.question}
                    <span className="group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>

                  <p className="mt-5 text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Accelerate Growth With MEAN MERN Stack Development Services
              </h2>

              <div className="mt-4">
                <Image
                  src="/assets/img/line1.png"
                  alt="line"
                  width={180}
                  height={20}
                />
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Our services encompass comprehensive Mean MERN Stack
                Development solutions tailored to your business needs.
              </p>

              <div className="mt-8 space-y-4">
                {serviceFeatures.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="text-[#4291CE] font-bold">✓</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/assets/img/Mean-Mern3.jpg"
                alt="Mean MERN Services"
                width={600}
                height={600}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-5">
              Let's Get Started: Collaborating on Your Project
            </h2>

            <p className="text-lg text-gray-600">
              Flexible budget, customized approach, and seamless collaboration
              tailored to your business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationCards.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-8 text-center hover:shadow-xl transition duration-300"
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