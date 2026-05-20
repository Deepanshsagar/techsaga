import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/technologies/dot-net-development");
}

export default function DotNetPage() {
    const dotNetFeatures = [
        "Language support and versatility with C#, VB.Net, and F#.",
        "Security and reliability with built-in authentication and authorization.",
        "Cross-platform compatibility for Windows, macOS, and Linux.",
        "Seamless integration with Azure, SQL Server, SharePoint, and Microsoft platforms.",
        "Scalability and performance optimization for enterprise applications.",
        "Rich class libraries and frameworks like ASP.Net, WPF, and WinForms.",
        "Support for modern development practices and modular architecture.",
        "Continuous Microsoft updates, security patches, and support.",
    ];

    const additionalFeatures = [
        "Language support and versatility",
        "Security and reliability",
        "Cross-platform compatibility",
        "Integration with Microsoft technologies",
        "Scalability and performance optimization",
        "Rich class library and frameworks",
        "Support for modern development practices",
        "Continuous updates and support",
    ];

    const faqs = [
        {
            question: "What is Dot Net application development?",
            answer:
                "Dot Net application development refers to creating software applications using the Microsoft .Net framework for web, desktop, mobile, and enterprise solutions.",
        },
        {
            question: "What are the benefits of Dot Net application development?",
            answer:
                "Benefits include cross-platform compatibility, scalability, security, Microsoft integration, performance optimization, and support for modern development practices.",
        },
        {
            question: "Can Dot Net applications run on different operating systems?",
            answer:
                "Yes, Dot Net applications can run on Windows, macOS, and Linux, ensuring wider deployment flexibility.",
        },
        {
            question: "What services are offered in Dot Net application development?",
            answer:
                "Services include custom application development, web development, mobile apps, enterprise solutions, integration, maintenance, and support.",
        },
        {
            question: "How do Dot Net development specialists add value?",
            answer:
                "Specialists provide optimized architectures, secure coding practices, performance improvements, and scalable customized solutions.",
        },
        {
            question:
                "How can I get started with Dot Net application development?",
            answer:
                "You can partner with experienced Dot Net developers who will analyze your requirements and guide the project from planning to deployment.",
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
                    backgroundImage: "url('/assets/img/.net.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                                .Net
                                <span className="block text-[#4291CE]">
                                    Application Development
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                                Seize the digital age's opportunities and thrive with expert
                                .Net development services tailored for scalable and secure
                                enterprise solutions.
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
                                        src="/assets/img/dot-nete1.1.jpg"
                                        alt=".Net Development"
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
                                    src="/assets/img/dot-nete2.1.jpg"
                                    alt=".Net App"
                                    width={350}
                                    height={250}
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                .Net Application Development
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
                                .Net application development enables businesses to build
                                scalable, secure, and high-performance applications using the
                                Microsoft .Net framework.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                It supports web, desktop, mobile, and enterprise applications
                                with technologies like ASP.Net, C#, and VB.Net.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                Businesses can leverage Dot Net development for digital
                                transformation, seamless Microsoft integration, and enhanced
                                operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Achieve Superior Results with Skilled Dot Net Development Specialists
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
                        Our experienced Dot Net specialists deliver scalable, secure, and
                        enterprise-grade solutions tailored to your business requirements.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        From custom application development to seamless system integration,
                        we ensure optimized performance, reliability, and user satisfaction.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        Transform your vision into powerful applications with our expert Dot
                        Net development services.
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
                            {dotNetFeatures.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="text-white text-xl">✓</div>
                                    <p className="text-white leading-7">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight">
                                Pioneering Solutions with Dot Net Application Development
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
                                Our Customized Dot Net App Development Services
                            </h3>

                            <p className="text-white/90 leading-8 mb-8">
                                We provide customized Dot Net application development services
                                focused on scalability, performance, and business growth.
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
                                Harnessing the Key Features of Dot Net Development
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
                                Dot Net application development is highly favored for creating
                                robust, scalable, and efficient software solutions for modern
                                businesses.
                            </p>

                            <div className="mt-8 space-y-4">
                                {additionalFeatures.map((item, index) => (
                                    <div key={index} className="flex gap-3 items-start">
                                        <div className="text-[#4291CE] font-bold">✓</div>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Image
                                src="/assets/img/dot-nete3.1.jpg"
                                alt=".Net Services"
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