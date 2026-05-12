"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const servicesLeft = [
    {
        title: "IT Consultant",
        desc: "Modernize systems, cut complexity, move faster with senior IT minds who've done it before.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Operations Consultant",
        desc: "Tighten workflows, kill bottlenecks, and get more from your existing teams - fast.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Compliance Consultant",
        desc: "Stay audit-ready. Our consultants navigate regulations so your business doesn't miss a beat.",
        img: "/assets/img/dot-graphic3.png",
    },
];
const BillableLeft = [
    {
        title: "Tell us what you need",
        desc: "Share your gaps, goals, and timeline. We listen first.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Proposal and Agreement",
        desc: "Clear proposal. No hidden fees. Sign off and we handle onboarding.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Review and settle",
        desc: "Milestone met. We review together, invoice transparently, and close clean.",
        img: "/assets/img/dot-graphic3.png",
    },
];

const servicesRight = [
    {
        title: "App Managed Services",
        desc: "Your apps, always on. We handle monitoring, maintenance, and upgrades so you don't have to.",
        img: "/assets/img/dot-graphic4.png",
    },
    {
        title: "HR Consultant",
        desc: "Build teams that stay, perform, and grow - strategy backed by people expertise.",
        img: "/assets/img/dot-graphic5.png",
    },
    {
        title: "Project IT Consultant",
        desc: "Goal-first. Tech-agnostic. Deployed to deliver measurable outcomes from day one.",
        img: "/assets/img/dot-graphic6.png",
    },
];
const BillableRight = [
    {
        title: "Find a Compatible Consultant",
        desc: "We shortlist qualified professionals based on your project requirements.",
        img: "/assets/img/dot-graphic4.png",
    },
    {
        title: "Project Execution",
        desc: "Your consultant integrates with your workflows and starts delivering from day one.",
        img: "/assets/img/dot-graphic5.png",
    },
    {
        title: "Need More?",
        desc: "Your consultant stays on, scales up, or we find the next right fit.",
        img: "/assets/img/dot-graphic6.png",
    },
];

export default function SolutionsPage() {
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
            {/* ── HERO ── */}
            <section className="relative min-h-[550px] flex items-center bg-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/assets/img/solutionbg.png"
                        alt="professionals collaborating"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" /> */}
                </div>
                <div className="relative flex justify-end items-center z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 pt-30 w-full">
                    <div className="w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                           Stop losing time to bad hires. Get the right IT talent NOW.
                        </h1>
                        <p className="text-white/60 text-base leading-relaxed mb-8">
                            Techsaga provides IT staff augmentation and contract consulting services to help businesses hire skilled tech professionals for cloud, enterprise, and managed service projects with flexible and scalable solutions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-[#4291CE] text-white px-6 py-3 rounded font-semibold hover:bg-[#347eb8] transition-colors text-sm"
                            >
                                Discover Our Talent →
                            </a>
                            <a
                                href="#cases"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-white transition-colors text-sm"
                            >
                                View Our Staffing
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <img src="/assets/img/solution-banner.png" alt="" className="" />
                    </div>
                </div>
            </section>

            {/* ── STRATEGIC STAFFING + FORM ── */}
            <section id="contact" className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-6">
                            Your Next Great Hire Is<br /> Already On Our Bench.{" "}
                            {/* <span className="text-[#4291CE]">
                                The Right Talent at the Right Time
                            </span> */}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm">
                           From short-term specialists to full team extensions; we match skills to scope, and people to purpose.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">
                            Discuss Your Project
                        </h3>
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
                                Tell Us What You Need. →
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ── EXCELLING THE EXPERTISE ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Whatever The Role, We've Got The Expert.
                    </h2>
                    <p className="text-center text-gray-500 max-w-3xl mx-auto mb-14 text-sm leading-relaxed">
                       We’re the specialists who hit the ground running in a user-centric approach.
                    </p>

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div className="flex flex-col gap-5">
                            {servicesLeft.map((s, i) => (
                                <ServiceCard key={i} title={s.title} desc={s.desc} img={s.img} />
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <div
                                className="w-64 h-64 overflow-hidden shadow-xl"
                                style={{
                                    clipPath:
                                        "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80"
                                    alt="expertise"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            {servicesRight.map((s, i) => (
                                <ServiceCard key={i} title={s.title} desc={s.desc} img={s.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OPTIMIZING IT STAFF AUGMENTATION ── */}
            <section className="text-white py-20 relative overflow-hidden">
                <div
                    className="absolute inset-0 "
                    style={{
                        backgroundImage:
                            "url('/assets/img/bg-sol-3.png')",
                        backgroundSize: "cover"
                    }}
                />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-3 gap-12 ">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold leading-snug mb-5">
                           Scale Your Team Without Scaling Your Headaches.
                        </h2>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We are committed to delivering exceptional outcomes. We collaborate closely with clients, understanding their unique goals and challenges, and harnessing our expertise to provide transformative solutions.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-2xl ">
                            <img
                                src="/assets/img/solution-m.png"
                                alt="IT augmentation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 justify-end">
                        {[
                            {
                                // icon: "🌐",
                                title: "Remote Replication",
                                desc: "In-house efficiency. Remote flexibility. Your extended team works like they're in the room.",
                            },
                            {
                                // icon: "🖥️",
                                title: "Web Hosting Setup",
                                desc: "Launch faster. Our infrastructure specialists get your hosting right the first time.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className=" rounded-xl p-3 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    {/* <div className="w-9 h-9 bg-[#4291CE] rounded-full flex items-center justify-center text-lg">
                                        {item.icon}
                                    </div> */}
                                    <h4 className="font-bold text-2xl text-white">{item.title}</h4>
                                </div>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ILLUMINATING YOUR REQUIREMENTS PATH ── */}
            <section className="py-20 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        From Brief To Billable In 6 Steps.
                    </h2>
                    <p className="text-center text-gray-500 max-w-3xl mx-auto mb-14 text-sm leading-relaxed">
                        Accelerate your digital transformation with expert contract consulting for enterprise applications and cloud solutions. 
                    </p>

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div className="flex flex-col gap-5">
                            {BillableLeft.map((s, i) => (
                                <ServiceCard key={i} title={s.title} desc={s.desc} img={s.img} />
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-100">
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
                                    alt="requirements path"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            {servicesRight.map((s, i) => (
                                <ServiceCard key={i} title={s.title} desc={s.desc} img={s.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section  className=" mt-10 px-4">
                <div style={{ background: 'linear-gradient(94.86deg, #F8F8F8 0.48%, #E3EFF8 100%)' }} className="max-w-4xl rounded-xl py-14 mx-auto text-center">

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Next Great Project Starts With One Conversation </h2>
                    <p className="text-xs text-gray-500 mb-10 max-w-xl mx-auto">
                        Thousands of businesses. 50+ countries 13+ years . we know how to deliver
                    </p>
                    <a href="#" className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm">Start a conversation</a>
                </div>
            </section>

            {/* ── TRUST TICKER ── */}
            {/* <div className="bg-[#4291CE] py-3 overflow-hidden">
                <div
                    className="flex whitespace-nowrap gap-16 text-white text-sm font-medium"
                    style={{ animation: "marquee 22s linear infinite" }}
                >
                    {Array.from({ length: 3 }, (_, g) =>
                        ["Building Trust", "Enabling Transformation", "Leading Globally"].map(
                            (t, i) => (
                                <span key={`${g}-${i}`} className="flex items-center gap-3 shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
                                    {t}
                                </span>
                            )
                        )
                    )}
                </div>
            </div> */}

            {/* <style>{`
                @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
                }
            `}</style> */}
            <Footer />

        </main>
    );
}

type ServiceCardProps = {
    title: React.ReactNode;
    desc: string;
    img: string;
};
type PricingCardProps = {
    title: React.ReactNode;
    desc: string;
    icon: string;
};
function ServiceCard({ title, desc, img, }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group relative">
            <h4 className="font-bold text-gray-900 mb-2 text-l group-hover:text-[#4291CE] transition-colors">
                {title}
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            <img src={img} alt="" className="absolute right-0 bottom-0" />
        </div>
    );
}

function PricingCard({ icon, title, desc }: PricingCardProps) {
    return (
        <div className="flex flex-col items-center text-center px-6">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-3xl mb-5 shadow-sm">
                {icon}
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-3 uppercase tracking-wider">
                {title}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}