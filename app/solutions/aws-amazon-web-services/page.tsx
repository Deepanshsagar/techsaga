"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import BottomFrom from "@/components/BottomForm"

const servicesLeft = [
    {
        title: "Hyperscale Elastic Computing",
        desc: "Replace fixed-capacity servers with EC2 and Lambda to scale resources up or down instantly based on real-time traffic demand.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Amazon Bedrock & SageMaker",
        desc: "Utilize the broadest set of generative AI and machine learning tools to build, train, and deploy high-performance models with enterprise-grade security.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Decoupled Microservices Architecture",
        desc: "Benefit from a platform engineered for resilience, using SQS, SNS, and EventBridge to build highly available, fault-tolerant applications.",
        img: "/assets/img/dot-graphic3.png",
    },
];

const servicesRight = [
    {
        title: "Unmatched Global Infrastructure",
        desc: "Leverage the most extensive network of Availability Zones and Regions to ensure ultra-low latency and localized data sovereignty for users worldwide.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Granular Security & Identity",
        desc: "Eliminate security gaps with IAM and Nitro System architecture, providing deep-level encryption and hardware-based isolation for every workload.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Infinite Data Lake Strategy",
        desc: "Maintain a single source of truth with Amazon S3 and Redshift, allowing you to analyze exabytes of data without the constraints of traditional silos.",
        img: "/assets/img/dot-graphic3.png",
    },
];

export default function AWSPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
        robot: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (
        <main className="font-sans text-gray-800 overflow-x-hidden">
            <Header />

            {/* HERO SECTION */}
            <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/solution-banner2.png')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                One Platform. Your Entire Digital Infrastructure.
                            </h1>

                            <p className="text-white/60 text-base leading-relaxed mb-8">
                                Techsaga as an Official AWS Partner, we don't just
                                install cloud services; we architect your future.
                                We bridge the gap between legacy hardware and
                                limitless innovation with the world’s most
                                comprehensive cloud ecosystem.
                            </p>

                           
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Accelerate Global Innovation with AWS’s Purpose-Built Cloud
                    </h2>

                    <p className="text-center text-gray-500 max-w-3xl mx-auto mb-14 text-sm leading-relaxed">
                        We’re the specialists who hit the ground running in a user-centric approach.
                    </p>

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div className="flex flex-col gap-5">
                            {servicesLeft.map((s, i) => (
                                <ServiceCard
                                    key={i}
                                    title={s.title}
                                    desc={s.desc}
                                    img={s.img}
                                />
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <div className="overflow-hidden">
                                <img
                                    src="/assets/img/solution-vec1.png"
                                    alt="AWS"
                                    className="w-full max-w-[300px] h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            {servicesRight.map((s, i) => (
                                <ServiceCard
                                    key={i}
                                    title={s.title}
                                    desc={s.desc}
                                    img={s.img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="mt-10 px-4 mb-20">
                <div
                    style={{
                        background:
                            "linear-gradient(94.86deg, #F8F8F8 0.48%, #E3EFF8 100%)",
                    }}
                    className="max-w-4xl rounded-xl py-14 mx-auto text-center"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Your Next Great Project Starts With One Conversation
                    </h2>

                    <p className="text-xs text-gray-500 mb-10 max-w-xl mx-auto">
                       Thousands of businesses. 50+ countries 14+ years . we know how to deliver
                    </p>

                    <a
                        href="#"
                        className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm"
                    >
                        Start a conversation
                    </a>
                </div>
            </section>

            {/* ENTERPRISE SECTION */}
            <section className="text-white py-20 relative overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/assets/img/bg-sol-3.png')",
                        backgroundSize: "cover",
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold leading-snug mb-5">
                            One Source of Truth for Your Entire Technical Stack
                        </h2>

                        <p className="text-white/60 text-sm leading-relaxed">
                            AWS is the foundational core of your organization.
                            It’s a single, secure environment where your databases,
                            compute power, and AI models finally live together in
                            a fully integrated, programmable landscape.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/img/solution-m.png"
                                alt="AWS Cloud"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 justify-end">
                        {[
                            {
                                title: "Built-In Intelligence and Massive Scalability",
                                desc:
                                    "Move to AWS and gain access to the same technology that powers Amazon.com. The platform scales effortlessly from a single startup prototype to a global enterprise footprint.",
                            },
                            {
                                title: "The Power of the Shared Responsibility Model",
                                desc:
                                    "Because AWS manages the heavy lifting of data center operations and hardware security, your team is free to focus entirely on building applications that drive your business forward.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-3 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-bold text-2xl text-white">
                                        {item.title}
                                    </h4>
                                </div>

                                <p className="text-white/60 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="mt-10 px-4">
                <div className="text-3xl font-bold text-gray-900 text-center mb-14">
                    Are Your Servers Holding You Back? Take Back Control.
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-full md:w-1/2 mx-auto">
                   <BottomFrom />
                </div>
            </section>

            <Footer />
        </main>
    );
}

type ServiceCardProps = {
    title: React.ReactNode;
    desc: string;
    img: string;
};

function ServiceCard({ title, desc, img }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group relative">
            <h4 className="font-bold text-gray-900 mb-2 text-l group-hover:text-[#4291CE] transition-colors">
                {title}
            </h4>

            <p className="text-gray-500 text-xs leading-relaxed relative z-[1]">
                {desc}
            </p>

            <img
                src={img}
                alt=""
                className="absolute right-0 bottom-0"
            />
        </div>
    );
}