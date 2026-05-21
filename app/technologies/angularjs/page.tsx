import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/technologies/angularjs");
}


export default function AngularJsPage() {
    const angularFeatures = [
        "Single-Page Applications (SPAs) for seamless and fast user experiences.",
        "Two-Way Data Binding to simplify UI synchronization and improve productivity.",
        "Dependency Injection support for reusable and testable application components.",
        "Modular Development structure for scalable and maintainable applications.",
        "Custom Directives to extend HTML capabilities with dynamic behaviors.",
        "Comprehensive Testing support to ensure application quality and reliability.",
    ];

    const standOutFeatures = [
        "Expert Team",
        "Innovative Solutions",
        "Timely Delivery",
        "Quality Assurance",
        "Post-Launch Support",
        "Custom Solutions",
        "Trusted Partner",
    ];

    const faqs = [
        {
            question: "What is Angular JS and why is it used?",
            answer:
                "Angular JS is an open-source JavaScript framework developed by Google. It is used for building dynamic, single-page web applications (SPAs) and simplifying the development and testing process.",
        },
        {
            question:
                "How is Angular JS different from other JavaScript frameworks?",
            answer:
                "Angular JS stands out for its two-way data binding, dependency injection, and directives, providing a structured way to create dynamic web applications.",
        },
        {
            question:
                "What is a Single-Page Application (SPA) in Angular JS?",
            answer:
                "A SPA in Angular JS is a web application that fits on a single web page to provide a smooth and app-like user experience.",
        },
        {
            question:
                "What are the benefits of using Angular JS for web development?",
            answer:
                "Angular JS offers advantages such as fast rendering, improved testability, maintainable code, reusable components, and better scalability.",
        },
        {
            question:
                "How experienced is your team in Angular JS development?",
            answer:
                "Our team has extensive experience in Angular JS development across multiple industries and project types.",
        },
        {
            question:
                "What types of support can I expect after project delivery?",
            answer:
                "We provide post-launch support including technical assistance, maintenance, updates, and performance optimization.",
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
                        "url('/assets/img/angularjs-banner.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                                Angular JS
                                <span className="block text-[#4291CE]">
                                    Development
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl">
                                We craft dynamic, scalable, and high-performing Angular JS
                                applications that deliver seamless digital experiences and help
                                businesses stand out in the competitive market.
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
                                        src="/assets/img/angular-main.jpg"
                                        alt="Angular JS Development"
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
                                    src="/assets/img/angular-side.jpg"
                                    alt="Angular JS"
                                    width={350}
                                    height={250}
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Angular JS Development
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
                                At our company, we pride ourselves on our comprehensive
                                expertise in Angular JS development. Our proficient developers
                                utilize the robust capabilities of this framework to deliver
                                high-quality web applications.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                We specialize in building scalable and efficient single-page
                                applications (SPAs), reusable services, modular applications,
                                and custom directives tailored to diverse business needs.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                By leveraging dependency injection, modularity, and clean coding
                                principles, we ensure your applications remain maintainable,
                                future-ready, and highly performant.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Angular JS Development: We Craft Digital Experiences that Set You
                        Apart
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
                        Our Angular JS development services focus on creating dynamic and
                        interactive web applications that provide seamless user experiences
                        and efficient performance.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        We stay updated with the latest technologies and best practices,
                        enabling us to develop fast, scalable, and maintainable Angular JS
                        applications for businesses of all sizes.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        Through modular architecture, dependency injection, and clean code
                        standards, we accelerate development while ensuring long-term
                        maintainability and reliability.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section
                className="py-20 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('/assets/img/index-adhere.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-[#0b1727]/85"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-5">
                            {angularFeatures.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="text-white text-xl">✓</div>
                                    <p className="text-white leading-7">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight">
                                The Framework That Redefines Web Development Experience
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
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
                                Our Custom Angular JS Development Services
                            </h3>

                            <p className="text-white/90 leading-8 mb-8">
                                Our custom Angular JS development services deliver scalable,
                                high-performing, and business-focused web applications tailored
                                to your unique requirements.
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

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Leading the Way in Angular JS Development: Why We Stand Out
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
                                Choose us for your Angular JS development projects because we
                                combine expertise, innovation, and dedication to deliver
                                scalable and high-performing digital solutions.
                            </p>

                            <div className="mt-8 space-y-4">
                                {standOutFeatures.map((item, index) => (
                                    <div key={index} className="flex gap-3 items-start">
                                        <div className="text-[#4291CE] font-bold">✓</div>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Image
                                src="/assets/img/angular14.1.png"
                                alt="Angular JS Services"
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