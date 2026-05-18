import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function SharePointPage() {
    const sharepointFeatures = [
        "Enhanced productivity and efficiency through streamlined collaboration and communication.",
        "Centralized document management, making it easier to organize, access, and share files.",
        "Automation of workflows, reducing manual tasks, and improving process efficiency.",
        "Improved data security and access control, ensuring confidentiality and compliance.",
        "Customizable solutions tailored to specific business needs.",
        "Scalability to accommodate growth and changing requirements.",
        "Integration with other Microsoft tools and technologies, enhancing overall productivity.",
        "Real-time collaboration and co-authoring features for seamless teamwork.",
        "Analytics and reporting capabilities to gain insights and make data-driven decisions.",
        "Mobile accessibility, enables work from anywhere, anytime.",
    ];

    const faqs = [
        {
            question: "What is SharePoint Development?",
            answer:
                "SharePoint development refers to the process of creating custom solutions on the SharePoint platform. It involves designing, customizing, and implementing features such as intranet portals, document management systems, workflow automation, and collaboration tools to meet specific business needs.",
        },
        {
            question:
                "Why should I choose SharePoint Development for my business?",
            answer:
                "SharePoint development offers numerous benefits, including enhanced collaboration, streamlined processes, centralized document management, improved productivity, and scalability.",
        },
        {
            question:
                "How can SharePoint Development benefit my organization?",
            answer:
                "SharePoint development improves communication and collaboration, automates manual tasks, optimizes business processes, and provides secure document management capabilities.",
        },
        {
            question:
                "Can SharePoint Development be customized to my specific business needs?",
            answer:
                "Yes, SharePoint development is highly customizable. Solutions can be tailored according to your business goals, workflows, branding, and integrations.",
        },
        {
            question:
                "What expertise does your SharePoint Development team possess?",
            answer:
                "Our SharePoint team consists of experienced professionals with expertise in intranet portals, document management systems, workflow automation, and collaboration solutions.",
        },
        {
            question:
                "How long does it take to complete a SharePoint Development project?",
            answer:
                "The project timeline depends on the complexity and requirements. We provide a detailed roadmap and milestones after understanding your business needs.",
        },
    ];

    const collaborationCards = [
        {
            title: "TRANSPARENT AND FIXED PRICING",
            description:
                "With transparent and fixed pricing, we provide clear and upfront costs for smooth project execution.",
            image: "/assets/img/best-price.png",
        },
        {
            title: "ADAPTIVE HOURLY ENGAGEMENT",
            description:
                "Flexible collaboration based on project needs, optimizing resources and maximizing productivity.",
            image: "/assets/img/hourly-eng.png",
        },
        {
            title: "DIRECT RECRUITMENT",
            description:
                "We help businesses efficiently hire top talent without intermediaries through direct recruitment support.",
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
                        "url('/assets/img/SHAREPOINT.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                                SharePoint
                                <span className="block text-[#4291CE]">
                                    Development
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                                The perfect solution for your business provides an easy-to-use
                                platform to store documents, track progress, share data, and
                                much more.
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

            {/* About Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <div className="grid sm:grid-cols-12 gap-4 items-end">
                                <div className="sm:col-span-8">
                                    <Image
                                        src="/assets/img/sharepoint-e1.1.jpg"
                                        alt="SharePoint Development"
                                        width={700}
                                        height={500}
                                        className="rounded-2xl w-full h-auto"
                                    />
                                </div>

                                <div className="sm:col-span-4">
                                    <div className="bg-[#4291CE] text-white rounded-2xl py-10 px-6 text-center">
                                        <h3 className="text-5xl font-bold">1600</h3>
                                        <p className="mt-3 text-lg">
                                            Projects Complete
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <Image
                                    src="/assets/img/sharepoint-e2.1.1.jpg"
                                    alt="SharePoint"
                                    width={350}
                                    height={250}
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                SharePoint Development
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
                                SharePoint development refers to the process of creating,
                                customizing, and deploying solutions on the SharePoint platform.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                SharePoint is a web-based collaboration and document management
                                system developed by Microsoft that helps organizations improve
                                communication and workflow efficiency.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                From intranet portals and workflow automation to document
                                management systems, SharePoint empowers businesses to streamline
                                operations and increase productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Revolutionize Your Website with Tailored SharePoint Development
                        Services
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
                        Our experienced professionals specialize in leveraging the power of
                        SharePoint to create scalable and robust business solutions.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        Whether you require document management systems, workflow
                        automation, intranet portals, or collaboration tools, we deliver
                        customized SharePoint solutions tailored to your needs.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        Unlock the full potential of SharePoint and improve productivity,
                        collaboration, and business growth with our expert development
                        services.
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
                <div className="absolute inset-0 bg-[#0b1727]/80"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-5">
                            {sharepointFeatures.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="text-white text-xl">✓</div>
                                    <p className="text-white leading-7">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight">
                                Harness the Transformative Benefits of SharePoint Development
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
                                Our Customized SharePoint Development Services
                            </h3>

                            <p className="text-white/90 leading-8 mb-8">
                                Unlock your business potential with customized SharePoint
                                development services designed to improve collaboration and
                                productivity.
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

            {/* Services Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Embrace Success With Top-Notch SharePoint Development Services
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
                                Our team delivers innovative and tailored SharePoint solutions
                                designed to meet your unique business needs and goals.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                With deep technical expertise and industry experience, we ensure
                                seamless implementation, timely delivery, and customer
                                satisfaction.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                Experience the power of SharePoint to drive growth, improve
                                efficiency, and strengthen collaboration across your
                                organization.
                            </p>
                        </div>

                        <div>
                            <Image
                                src="/assets/img/sharepoint-e3.1.n.jpg"
                                alt="SharePoint Services"
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