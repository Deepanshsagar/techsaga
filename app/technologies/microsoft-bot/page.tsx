import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/technologies/microsoft-bot");
}

export default function MicrosoftBotPage() {

    const botFeatures = [
        "User-Centric Design focused on delivering exceptional user experiences.",
        "Continuous Improvement based on analytics, feedback, and modern trends.",
        "Scalability and Performance optimization for handling large user demand.",
        "Robust Security Measures to protect sensitive user information.",
        "Multichannel Support across websites, apps, and messaging platforms.",
        "Advanced Natural Language Processing for smart conversations.",
        "Error Handling and Graceful Recovery for seamless interactions.",
        "Regular Maintenance and Updates for enhanced performance.",
        "Compliance with Regulations and data protection standards.",
        "Human Agent Integration for smooth chatbot-to-human transitions.",
    ];

    const faqs = [
        {
            question: "What is Microsoft Bot Development?",
            answer:
                "Microsoft Bot Development refers to creating intelligent chatbots using Microsoft's technologies like Bot Framework and Azure Bot Service.",
        },
        {
            question: "What are the benefits of Microsoft Bot Development?",
            answer:
                "It improves user engagement, automates repetitive tasks, integrates with Microsoft services, and provides scalable conversational solutions.",
        },
        {
            question: "How can Microsoft Bot improve user engagement?",
            answer:
                "Bots use NLP and machine learning to provide conversational, interactive, and personalized experiences for users.",
        },
        {
            question: "Which technologies are used in Microsoft Bot Development?",
            answer:
                "Technologies include Microsoft Bot Framework, Azure Bot Service, NLP services, APIs, and cloud integrations.",
        },
        {
            question: "Can Microsoft Bots integrate with existing systems?",
            answer:
                "Yes, Microsoft Bots can integrate with websites, CRMs, apps, voice assistants, and messaging platforms seamlessly.",
        },
        {
            question: "How can I get started with Microsoft Bot Development?",
            answer:
                "You can start by consulting our experts who will guide you through planning, development, deployment, and maintenance.",
        },
    ];

    const collaborationCards = [
        {
            title: "TRANSPARENT AND FIXED PRICING",
            description:
                "Clear and upfront pricing ensuring smooth project execution without hidden costs.",
            image: "/assets/img/best-price.png",
        },
        {
            title: "ADAPTIVE HOURLY ENGAGEMENT",
            description:
                "Flexible engagement models tailored to your evolving project requirements.",
            image: "/assets/img/hourly-eng.png",
        },
        {
            title: "DIRECT RECRUITMENT",
            description:
                "Hire dedicated experts directly with our efficient recruitment support.",
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
                    backgroundImage: "url('/assets/img/microsoft.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                                Microsoft Bot
                                <span className="block text-[#4291CE]">
                                    Development
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                                Build enterprise-grade conversational bots with Microsoft's
                                powerful technologies and deliver intelligent customer
                                experiences.
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
                                        src="/assets/img/micro-e1.1.jpg"
                                        alt="Microsoft Bot"
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
                                    src="/assets/img/micro-e3.1.1.jpg"
                                    alt="Microsoft Bot Development"
                                    width={350}
                                    height={250}
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Microsoft Bot Development
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
                                Microsoft Bot Development enables businesses to build intelligent
                                conversational bots using Microsoft's advanced tools and cloud
                                technologies.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                Using Bot Framework and Azure Bot Service, developers can create
                                AI-powered chatbots capable of natural language interactions and
                                automated workflows.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                These bots can seamlessly integrate with websites, apps,
                                messaging platforms, and voice assistants to enhance user
                                engagement and streamline business operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Unlock Excellence with Our Microsoft Bot Development Experts
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
                        Our Microsoft Bot experts help businesses leverage automation and
                        AI-powered conversations to improve customer engagement and
                        operational efficiency.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        From consultation and design to deployment and maintenance, we
                        provide complete chatbot development solutions tailored to your
                        business requirements.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        Enhance your digital presence with interactive and intelligent bots
                        designed for modern business environments.
                    </p>
                </div>
            </section>

            {/* Features */}
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
                            {botFeatures.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="text-white text-xl">✓</div>

                                    <p className="text-white leading-7">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight">
                                Excellence in Action for Intelligent Bot Development
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
                                Our Customized Microsoft Bot Development Services
                            </h3>

                            <p className="text-white/90 leading-8 mb-8">
                                We build customized intelligent chatbot solutions tailored to
                                your business goals using Microsoft's latest technologies.
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

            {/* Why Choose */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Stay Ahead with Advanced Microsoft Bot Development
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
                                Partner with us to build reliable and scalable Microsoft Bots
                                that improve customer experiences and automate business
                                processes.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                Our expertise in Microsoft Bot Framework ensures seamless
                                integration, robust performance, and intelligent conversational
                                capabilities.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                We provide ongoing support and maintenance to keep your chatbot
                                secure, updated, and optimized for long-term success.
                            </p>
                        </div>

                        <div>
                            <Image
                                src="/assets/img/micro-e3.n.jpg"
                                alt="Microsoft Bot Services"
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