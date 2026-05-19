import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function ReactJsPage() {
    const reactFeatures = [
        "Component-based architecture for reusable and modular UI development.",
        "Virtual DOM for fast and efficient rendering performance.",
        "Unidirectional data flow for predictable and maintainable application state.",
        "Reusable components that reduce development time and improve consistency.",
        "Extensive ecosystem and developer tools for faster development workflows.",
        "React Native support for cross-platform mobile application development.",
        "Performance optimization features like lazy loading and code splitting.",
        "SEO-friendly rendering with frameworks like Next.js.",
        "Strong community support with vast learning resources and libraries.",
    ];

    const serviceFeatures = [
        "Custom web application development using ReactJS",
        "UI/UX design and development for ReactJS applications",
        "Front-end development using ReactJS and related technologies",
        "ReactJS component development and customization",
        "Integration of ReactJS with APIs and backend systems",
        "Testing, debugging, and optimization of applications",
        "Migration of existing applications to ReactJS",
        "Maintenance and support services for ReactJS applications",
    ];

    const faqs = [
        {
            question: "What is React JS?",
            answer:
                "React JS is a JavaScript library developed by Facebook for building dynamic and interactive user interfaces using reusable components.",
        },
        {
            question: "What are the benefits of using React JS?",
            answer:
                "React JS provides reusable components, virtual DOM rendering, performance optimization, SEO-friendliness, and strong community support.",
        },
        {
            question:
                "What kind of web applications can be built with React JS?",
            answer:
                "React JS can be used for single-page applications, enterprise platforms, dashboards, eCommerce websites, and interactive web applications.",
        },
        {
            question: "Is React JS suitable for large-scale projects?",
            answer:
                "Yes, React JS is highly scalable and ideal for large-scale applications due to its modular architecture and performance optimizations.",
        },
        {
            question:
                "Do I need JavaScript knowledge before learning React JS?",
            answer:
                "Yes, having a solid understanding of JavaScript fundamentals makes it much easier to learn and work effectively with React JS.",
        },
        {
            question:
                "Can React JS be used for mobile application development?",
            answer:
                "React JS itself is for web applications, but React Native allows developers to build cross-platform mobile applications using React concepts.",
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
                        "url('/assets/img/react-native.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                                React JS
                                <span className="block text-[#4291CE]">
                                    Development
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                                Leveraging ReactJS, you can develop dynamic and interactive user
                                interfaces, intricate data visualizations, and efficient
                                single-page applications for immersive digital experiences.
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
                                        src="/assets/img/react-native-e1.1.jpg"
                                        alt="React JS Development"
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
                                    src="/assets/img/react-native-e2.1.jpg"
                                    alt="React JS"
                                    width={350}
                                    height={250}
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                ReactJS Development
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
                                ReactJS development refers to the process of building user
                                interfaces using React, a popular JavaScript library developed
                                by Facebook.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                ReactJS utilizes a component-based architecture where the UI is
                                broken into reusable and self-contained components to create
                                highly interactive experiences.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                With virtual DOM rendering, reusable components, and a powerful
                                ecosystem, ReactJS has become a preferred technology for modern
                                web application development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Innovate and Dominate the Digital Landscape with Our Custom ReactJS
                        Development
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
                        As a ReactJS development service provider, we specialize in
                        delivering comprehensive web application solutions tailored to your
                        business requirements.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        Our services include requirement analysis, UI/UX design, front-end
                        development, API integration, testing, deployment, and performance
                        optimization.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        With a strong focus on scalability, security, and maintainability,
                        we build high-quality ReactJS applications that drive innovation and
                        business growth.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section
                className="py-20 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('/assets/img/list-home.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-[#0b1727]/85"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-5">
                            {reactFeatures.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="text-white text-xl">✓</div>

                                    <p className="text-white leading-7">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight">
                                Embrace the Benefits of Our Professional ReactJS Development
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
                                Our Customized React JS Development Services
                            </h3>

                            <p className="text-white/90 leading-8 mb-8">
                                Tailored to meet your unique needs, our customized React JS
                                development services deliver scalable and high-quality web
                                applications.
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
                                Scalable and Customized ReactJS Development Services
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
                                We specialize in offering scalable ReactJS development services
                                to build powerful and maintainable web applications.
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
                                src="/assets/img/react-native-e3.1.jpg"
                                alt="ReactJS Services"
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