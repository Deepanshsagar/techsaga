import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/technologies/ms-dynamics-crm");
}
export default function MSDynamicsCRMPage() {
    const crmFeatures = [
        "Customization options for fields, workflows, business rules, and interfaces.",
        "Seamless integration with third-party applications and enterprise systems.",
        "Personalized dashboards with real-time CRM insights and KPIs.",
        "Automation of repetitive business tasks and customer workflows.",
        "Advanced reporting and analytics for data-driven decision making.",
        "Centralized customer relationship management for better efficiency.",
        "Enhanced sales and marketing through lead and campaign automation.",
        "Efficient customer service and support management capabilities.",
        "Cloud-based scalability and flexibility for growing businesses.",
        "Improved collaboration and information sharing across teams.",
    ];

    const serviceFeatures = [
        "Expertise and experience",
        "Proven methodology and best practices",
        "Tailored solutions to meet specific business needs",
        "Dedicated support and maintenance services",
        "Customer testimonials and client references",
    ];

    const faqs = [
        {
            question: "What is MS Dynamics CRM Development?",
            answer:
                "MS Dynamics CRM Development refers to customizing and extending Microsoft Dynamics CRM software to meet business-specific requirements including workflows, dashboards, entities, and automation.",
        },
        {
            question: "Why is customization important in MS Dynamics CRM?",
            answer:
                "Customization allows businesses to align CRM workflows, processes, and data management according to their exact operational requirements, improving productivity and user experience.",
        },
        {
            question:
                "Can MS Dynamics CRM Development integrate with other applications?",
            answer:
                "Yes, MS Dynamics CRM supports seamless integration with third-party systems, databases, ERP solutions, and enterprise applications.",
        },
        {
            question: "How does MS Dynamics CRM benefit businesses?",
            answer:
                "It helps businesses improve customer relationship management, automate workflows, increase sales efficiency, enhance customer service, and gain actionable insights.",
        },
        {
            question: "Is MS Dynamics CRM scalable?",
            answer:
                "Yes, MS Dynamics CRM is built on a scalable cloud-based architecture that grows with business requirements and user demands.",
        },
        {
            question:
                "Do I need technical expertise for MS Dynamics CRM Development?",
            answer:
                "While technical knowledge helps, working with experienced CRM developers ensures proper implementation, customization, integration, and long-term support.",
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
                    backgroundImage:
                        "url('/assets/img/MS-DYNAMIC.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                                MS Dynamics CRM
                                <span className="block text-[#4291CE]">
                                    Development
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                                Automate sales, marketing, and service processes to gain deeper
                                insights into customer needs and build meaningful customer
                                relationships.
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
                                        src="/assets/img/ms-2-e2.1.jpg"
                                        alt="MS Dynamics CRM Development"
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
                                    src="/assets/img/ms-d-e1.1.jpg"
                                    alt="MS Dynamics CRM"
                                    width={350}
                                    height={250}
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                MS Dynamics CRM Development
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
                                MS Dynamics CRM Development focuses on customizing and extending
                                Microsoft Dynamics CRM software to meet unique business
                                requirements and workflows.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                It enables businesses to automate processes, streamline sales
                                and marketing operations, improve customer service, and optimize
                                operational efficiency.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                With advanced customization, workflow automation, and seamless
                                integration capabilities, MS Dynamics CRM helps organizations
                                build stronger customer relationships and drive business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Unify and Optimize Customer Interactions with Our MS Dynamics CRM
                        Solutions
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
                        Whether you want to streamline customer relationship management or
                        extend the capabilities of your existing applications, our MS
                        Dynamics CRM experts can help you achieve your business goals.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        We provide customized CRM solutions tailored to your business
                        requirements, enabling better customer experiences and operational
                        efficiency.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        Our cloud-based CRM solutions deliver scalability, flexibility, and
                        actionable customer insights that empower your business growth.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section
                className="py-20 bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('/assets/img/list-home.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-[#0b1727]/80"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-5">
                            {crmFeatures.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="text-white text-xl">✓</div>
                                    <p className="text-white leading-7">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight">
                                Key Features of MS Dynamics CRM Development
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
                                Our Customized MS Dynamics CRM Development Services
                            </h3>

                            <p className="text-white/90 leading-8 mb-8">
                                We empower businesses with customized CRM solutions that
                                streamline operations, automate workflows, improve productivity,
                                and strengthen customer relationships.
                            </p>

                            <Image
                                src="/assets/img/list-home.jpg"
                                alt="FAQ"
                                width={520}
                                height={400}
                                className="w-full h-auto rounded-2xl"
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
                                Achieve Optimal Outcomes Through Tailored CRM Solutions
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
                                Partner with us to unlock the full potential of your business
                                through customized CRM solutions that streamline workflows,
                                optimize productivity, and drive sustainable growth.
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
                                src="/assets/img/ms-d-e3.1.jpg"
                                alt="MS Dynamics CRM Services"
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