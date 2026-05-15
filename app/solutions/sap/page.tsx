"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const servicesLeft = [
    {
        title: "Built-In Industry Best Practices",
        desc: "Replace generic workflows with pre-configured, sector-specific processes designed for the complexities of global manufacturing and retail.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "SAP Business AI Integration",
        desc: "Utilize Joule and embedded AI to optimize supply chain logistics, predict maintenance cycles, and automate financial closing cycles.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "In-Memory Computing Power",
        desc: "Benefit from the SAP HANA database architecture, processing massive datasets in real-time for instant visibility into global inventory and cash flow.",
        img: "/assets/img/dot-graphic3.png",
    },
];

const servicesRight = [
    {
        title: "Clean Core Extensibility",
        desc: "Leverage a Clean Core strategy that separates custom code from the standard platform, ensuring rapid upgrades and long-term system stability.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Global Compliance & Localization",
        desc: "Eliminate regulatory risk with a system that natively handles multi-currency, multi-language, and local tax requirements across 190+ countries.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "End-to-End Process Orchestration",
        desc: "Maintain a single source of truth across the entire lifecycle from Lead-to-Cash to Design-to-Operate within a unified digital core.",
        img: "/assets/img/dot-graphic3.png",
    },
];

export default function SAPPage() {
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
                                One Platform. Your Entire Global Enterprise.
                            </h1>

                            <p className="text-white/60 text-base leading-relaxed mb-8">
                                Beyond ERP deployment, Techsaga leverages SAP to create connected,
                                data-driven ecosystems that improve visibility, productivity,
                                and business performance.
                            </p>

                           
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Accelerate Operational Excellence with SAP S/4HANA Cloud
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
                                    alt="SAP"
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
                            One Source of Truth for Your Entire Global Value Chain
                        </h2>

                        <p className="text-white/60 text-sm leading-relaxed">
                            SAP is the digital backbone of your organization.
                            It’s a single, secure environment where Procurement,
                            Finance, and Supply Chain finally converge, creating
                            a transparent audit trail for every transaction worldwide.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/img/solution-m.png"
                                alt="SAP Enterprise"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 justify-end">
                        {[
                            {
                                title:
                                    "Built-In Intelligence and Enterprise Resilience",
                                desc:
                                    "Move to SAP and gain AI-driven insights that identify bottlenecks in your production line before they impact your margin. The platform is engineered to handle the world's most complex regulatory demands.",
                            },
                            {
                                title: "The Power of S/4HANA Cloud",
                                desc:
                                    "Because it is built on the world's leading in-memory database, your business gains the agility to pivot strategies in seconds based on live data, not last week’s reports.",
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
                    Is Your Global Supply Chain Fragmented? Take Back Control.
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-1/2 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />

                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                type="email"
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />

                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                type="tel"
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>

                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Your project needs"
                            rows={4}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4 resize-none"
                        />

                        <label className="flex items-center gap-3 text-sm text-gray-500 mb-6 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                name="robot"
                                checked={form.robot}
                                onChange={handleChange}
                                className="w-4 h-4 rounded border-gray-300 accent-blue-600"
                            />

                            I&apos;m not a robot
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-[#4291CE] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                            Submit Now →
                        </button>
                    </form>
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