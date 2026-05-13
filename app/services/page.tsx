"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SectionTag } from "../utils/utils";
import { useState } from "react";
import SplitContainer from "@/components/SplitContainer";

const faqs = [
    {
        question:
            "Why should I opt for custom software instead of using off-the-shelf software?",
        answer:
            "It offers several advantages over off-the-shelf software. Like complete control over the features and functionality of the software, ensuring it aligns perfectly with your business processes. It also provides scalability, flexibility, and the ability to integrate with existing systems, resulting in increased efficiency and productivity.",
    },
    {
        question:
            "How long does the custom software development process typically take?",
        answer:
            "The timeline depends on the complexity, features, and scope of the project. Simple solutions may take a few weeks, while enterprise-level applications can take several months.",
    },
    {
        question: "How much does custom software development cost?",
        answer:
            "The cost varies based on project requirements, technology stack, integrations, and development time. A detailed requirement analysis helps determine the exact pricing.",
    },
    {
        question:
            "What ongoing support and maintenance is provided for custom software?",
        answer:
            "Ongoing support usually includes bug fixes, security updates, performance optimization, feature enhancements, and technical assistance.",
    },
    {
        question:
            "Can custom software be integrated with existing systems and databases?",
        answer:
            "Yes, custom software can be integrated with CRMs, ERPs, APIs, payment gateways, cloud platforms, and existing databases for seamless workflows.",
    },
];

const ServicePage = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <Header />
            <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/service-banner.png')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full">
                    <div className="grid lg:grid-cols-2 items-center gap-12">

                        {/* Left Content */}
                        <div className="max-w-xl">
                            <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                                Your Trusted Partner
                                <span className="block text-[#4291CE]">
                                    for Custom Software
                                </span>
                                Development
                            </h1>
                        </div>

                    </div>
                </div>
            </section>
            <div className="section-decription">
                <div className="header-sec text-center mt-12 mb-6">
                    <SplitContainer className="">
                        <SectionTag>Crafting Digital Advancement</SectionTag>
                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#5A5757]">
                            Custom Software Delivering Exceptional
                        </h2>
                    </SplitContainer>
                    {/* <SectionTag>Crafting Digital Advancement</SectionTag>
                    <p className="text-3xl font-bold mt-2">Custom Software Delivering Exceptional</p> */}
                </div>

                <div className=" shadow-[0px_0px_5px_1px_#00000040] mt-8 bg-white b rounded-xl  max-w-[1140px]  mx-auto mb-5 p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-7/12">
                        <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
                            Designing a Tailor Made<br />Solution
                        </h2>

                        <p className="text-sm text-gray-500 leading-relaxed mb-5">
                            Our team of skilled developers, engineers, and designers. They work closely with you to understand your business processes, challenges, and goals. Which ensures that the final product is a perfect fit for your organization.
                        </p>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">

                            <div className="flex items-center text-sm  gap-2 text-gray-700">
                                <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                                Expert Android developers
                            </div>

                            <div className="flex items-center text-sm  gap-2 text-gray-700">
                                <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                                Custom Mobile App Solutions
                            </div>

                            <div className="flex items-center text-sm  gap-2 text-gray-700">
                                <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                                UI/UX Focused Design
                            </div>

                            <div className="flex items-center text-sm  gap-2 text-gray-700">
                                <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                                Agile Development Process
                            </div>

                            <div className="flex items-center text-sm  gap-2 text-gray-700">
                                <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                                Scalable Architecture
                            </div>

                            <div className="flex items-center text-sm  gap-2 text-gray-700">
                                <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                                Ongoing Support & Maintenance
                            </div>

                        </div>
                    </div>

                    <div className="w-full md:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                            alt="Designing"
                            className="w-full h-60 md:h-full object-cover rounded-xl"
                        />
                    </div>

                </div>
            </div>

            <div className="bg-white rounded-xl mt-8 shadow-[0px_0px_5px_1px_#00000040] max-w-[1140px] mx-auto mb-5 p-8 flex flex-col md:flex-row items-center gap-16">

                <div className="flex-shrink-0 w-full md:w-5/12">
                    <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                        alt="Development"
                        className="w-full h-60 md:h-full object-cover rounded-xl"
                    />
                </div>

                <div className="flex-1  w-full  md:w-7/12">
                    <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                        Our Custom Development<br />Journey Blueprint
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                        We pride ourselves on delivering projects within the designated timeframe and adhering to strict deadlines. With our expert Android developers and proficient iOS development, we can create high-quality applications for both platforms.
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4 " alt="" />
                            Expert Android developers
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4 " alt="" />
                            Delivering projects at a time
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4 " alt="" />
                            Competent ios development
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4 " alt="" />
                            Expert Android developers
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                            User-friendly UI/UX design
                        </div>
                    </div>
                </div>
            </div>

            <div className=" rounded-xl shadow-[0px_0px_5px_1px_#00000040] mt-8  max-w-[1140px] mx-auto mb-5 p-8 flex flex-col md:flex-row items-center gap-8">

                <div className="flex-1  w-full  md:w-7/12">
                    <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                        Transforming Future With the Custom<br />Software Development
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                        Custom software development offers several benefits, including enhanced efficiency, scalability, and flexibility. It provides a competitive advantage by tailoring the software to your unique business needs.
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                            Expert Android developers
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                            Delivering projects at a time
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                            Competent ios development
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                            Expert Android developers
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                            User-friendly UI/UX design
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                            Expert Android developers
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-5/12">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80"
                        alt="Team meeting"
                        className="w-full h-72 object-cover rounded-xl"
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl mt-8 shadow-[0px_0px_5px_1px_#00000040] max-w-[1140px] mx-auto mb-5 p-8 flex flex-col md:flex-row items-center gap-16">

                <div className="flex-shrink-0 w-full md:w-5/12">
                    <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                        alt="Development"
                        className="w-full h-60 md:h-full object-cover rounded-xl"
                    />
                </div>

                <div className="flex-1 w-full  md:w-7/12">
                    <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                        Our Custom Development<br />Journey Blueprint
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                        We pride ourselves on delivering projects within the designated timeframe and adhering to strict deadlines. With our expert Android developers and proficient iOS development, we can create high-quality applications for both platforms.
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4 " alt="" />
                            Expert Android developers
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4 " alt="" />
                            Delivering projects at a time
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4 " alt="" />
                            Competent ios development
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4 " alt="" />
                            Expert Android developers
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <img src="/assets/img/checkedicon.png" className="w-4" alt="" />
                            User-friendly UI/UX design
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-14 px-4 max-w-5xl mx-auto">
                <SplitContainer className="">
                    <SectionTag className="text-center">Post Your Requirement &nbsp;›&nbsp; Software Solutions</SectionTag>
                    <h2 className="font-display text-center text-3xl lg:text-3xl font-bold mb-10 text-[#5A5757]">
                        Skyrocket Your Business Growth With Our Custom Software Development Services
                    </h2>
                </SplitContainer>
                {/* <SectionTag className="text-center">Post Your Requirement &nbsp;›&nbsp; Software Solutions</SectionTag>

                <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-10">
                    Skyrocket Your Business Growth With Our Custom Software<br />Development Services
                </h1> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Enhanced Efficiency</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">It replaces the functions of off-the-shelf softwares, offering streamlined solutions tailored to automate workflows, remove bottlenecks, and enhance productivity.</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Data Security & Confidentiality</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Custom software can be designed with robust security measures specific to your organization, ensuring the confidentiality and integrity of your data.</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Competitive Advantage</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Tailored software provides unique features and functionalities that differentiate your business from competitors, allowing you to offer better services, and improve customer satisfaction, giving an edge in your industry.</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Integration Capabilities</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Enabling smooth data flow and communication between departments, eliminates data silos, and provides a unified operation.</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Cost Efficiency</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">It eliminates multiple license needs, reduces manual processes and minimizes the risk of costly errors or inefficiencies.</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Agile Approach</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Through iterative development cycles, allows to build and test/iterate prototypes, gather feedback, and refine the software to ensure it meets your expectations.</p>
                    </div>

                </div>
            </section>

            <section className="py-14 px-4 btn-primary">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-2">
                        Experience The Power Of Custom Software Development
                    </h2>
                    <p className="text-center text-blue-200 text-sm mb-10">
                        Harness Innovation And efficiency With Custom Software Solutions
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Tailor-made solutions to meet your specific business needs</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Enhanced efficiency and productivity through optimised workflows</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Improved customer experience with personalised features</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Streamlined business processes and automation of tasks</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Scalable solutions that can grow with your business</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Integration of multiple systems for seamless data flow</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Increased security and protection of sensitive information</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Competitive advantage with unique software solutions</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Ongoing support and maintenance to ensure smooth operations</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white text-sm">Empowerment to innovate and stay ahead in the digital landscape</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-14 px-4 bg-white">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-center text-2xl font-bold text-gray-900 mb-1">Our Custom Software Development Expertise</h2>
                    <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-10"></div>

                    <div className="flex flex-col lg:flex-row gap-6">

                        <div className="lg:w-2/5 btn-primary rounded-xl overflow-hidden relative min-h-64">
                            <div className="p-6 text-white relative z-10">
                                <h3 className="text-lg font-bold mb-2">Unleash The Power Of Custom<br />Software Development</h3>
                                <p className="text-blue-100 text-xs leading-relaxed">
                                    We provide our client bespoke software development services to start-ups, SMEs, and large corporations. Our team of highly skilled developers and designers can offer solutions that draw on their extensive knowledge to help organisations flourish.
                                </p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
                                alt="Expert"
                                className="absolute  left-1/2 w-[100%] h-[200px] object-cover object-center opacity-80 transform -translate-x-1/2 "
                            />
                        </div>

                        <div className="lg:w-3/5 space-y-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-4 text-left bg-white"
                                    >
                                        <span
                                            className={`text-sm pr-4 ${activeIndex === index
                                                ? "font-semibold text-gray-900"
                                                : "font-medium text-gray-700"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>

                                        <svg
                                            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${activeIndex === index
                                                ? "rotate-180 text-[#4291CE]"
                                                : "text-gray-400"
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${activeIndex === index
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-4 pb-4 bg-white">
                                                <p className="text-xs text-gray-500 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="  px-4">
                <div style={{ background: 'linear-gradient(94.86deg, #F8F8F8 0.48%, #E3EFF8 100%)' }} className="max-w-4xl rounded-xl py-14 mx-auto text-center">

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Next Great Project Starts With One Conversation </h2>
                    <p className="text-xs text-gray-500 mb-10 max-w-xl mx-auto">
                        Thousands of businesses. 50+ countries 13+ years . we know how to deliver
                    </p>
                    <a href="#" className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm">Start a conversation</a>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ServicePage;