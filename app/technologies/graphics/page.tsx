import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function GraphicsDesignPage() {
    const graphicFeatures = [
        "Logo design for strong and memorable brand identity.",
        "Complete branding solutions including typography and color strategy.",
        "Creative marketing collateral such as brochures, flyers, and banners.",
        "Modern and responsive web design focused on user engagement.",
        "Custom illustrations for unique visual storytelling.",
        "Motion graphics for videos, presentations, and social campaigns.",
        "Print design solutions for packaging, posters, and signage.",
        "UI/UX design for seamless digital experiences.",
        "Social media graphics optimized for engagement and branding.",
        "Strategic brand consultation to strengthen market presence.",
    ];

    const processFeatures = [
        "Understanding client goals and objectives",
        "Conducting thorough research and analysis",
        "Developing creative concepts and mock-ups",
        "Collaborating closely with clients for feedback",
        "Refining designs with attention to detail",
        "Finalizing projects with perfection and precision",
        "Delivering exceptional designs beyond expectations",
    ];

    const faqs = [
        {
            question:
                "What is the typical turnaround time for graphic design projects?",
            answer:
                "Project timelines vary based on complexity and scope. Smaller projects may take a few days, while larger branding projects may require more time.",
        },
        {
            question: "Do you provide revisions for the designs?",
            answer:
                "Yes, we provide revisions to ensure the final design aligns perfectly with your vision and expectations.",
        },
        {
            question:
                "What file formats will I receive for the final designs?",
            answer:
                "We provide designs in formats like PNG, JPG, PDF, SVG, AI, and EPS depending on your project requirements.",
        },
        {
            question:
                "How do you ensure the confidentiality of my project?",
            answer:
                "We follow strict confidentiality practices and internal processes to protect all project-related information.",
        },
        {
            question: "What are your pricing and payment terms?",
            answer:
                "Our pricing depends on project scope and requirements. We offer transparent pricing with flexible payment options.",
        },
        {
            question: "Do you offer rush services for urgent projects?",
            answer:
                "Yes, we can accommodate urgent projects depending on workload availability and timelines.",
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
                        "url('/assets/img/graphics.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
                                Graphics
                                <span className="block text-[#4291CE]">
                                    Design Services
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-gray-800 max-w-2xl">
                                From brochures to websites, we create stunning visuals that
                                captivate your audience, strengthen your brand identity, and
                                enhance your online presence.
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
                                        src="/assets/img/graphics-e1.n.jpg"
                                        alt="Graphics Design"
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
                                    src="/assets/img/graphics-e2.1-n.jpg"
                                    alt="Graphic Design"
                                    width={350}
                                    height={250}
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Graphics Design Company
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
                                Welcome to Techsaga, where creativity meets innovation. We are a
                                leading graphic design company dedicated to helping businesses
                                and individuals bring their ideas to life through impactful
                                visual solutions.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                Whether you need logo design, compelling branding, marketing
                                collateral, or modern website visuals, our creative experts
                                deliver designs that elevate your brand identity.
                            </p>

                            <p className="mt-5 leading-8 text-gray-700">
                                With strategic thinking, innovation, and attention to detail, we
                                create memorable experiences that leave a lasting impression on
                                your audience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Discover Limitless Possibilities for Your Brand with Our Graphic
                        Design Excellence
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
                        Our team of creative visionaries crafts extraordinary designs that
                        combine innovation, artistry, and strategic thinking to help your
                        brand stand out from the competition.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        From branding and web design to marketing materials and custom
                        illustrations, we ensure every design reflects your unique business
                        identity and values.
                    </p>

                    <p className="mt-5 leading-8 text-gray-700">
                        We focus on creativity, collaboration, and quality to deliver
                        visually stunning solutions that create lasting impressions.
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
                            {graphicFeatures.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="text-white text-xl">✓</div>

                                    <p className="text-white leading-7">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight">
                                Expand Your Creative Horizons with Our Multifaceted Graphic
                                Design Services
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
                                Our Customized Graphic Designing Services
                            </h3>

                            <p className="text-white/90 leading-8 mb-8">
                                We provide customized graphic design services tailored to your
                                business goals, ensuring creative and impactful visual
                                communication.
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

            {/* Process */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Efficiency Redefined: Our Streamlined and Collaborative Design
                                Process
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
                                We believe in a collaborative design process that transforms
                                your vision into exceptional visual experiences through
                                creativity, strategy, and attention to detail.
                            </p>

                            <div className="mt-8 space-y-4">
                                {processFeatures.map((item, index) => (
                                    <div key={index} className="flex gap-3 items-start">
                                        <div className="text-[#4291CE] font-bold">✓</div>

                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Image
                                src="/assets/img/graphics-e3.1.new.jpg"
                                alt="Graphics Process"
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