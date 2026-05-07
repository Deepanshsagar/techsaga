"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const servicesLeft = [
    {
        title: "IT Consultant",
        desc: "Businesses hire IT consultants to help optimize their tech support, internal networking, software, and web development.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Operations Consultant",
        desc: "These specialists focus on your company's manufacturing and supply chain efficiency, finding ways to improve.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "IT Consultant",
        desc: "Businesses hire IT consultants to help optimize their tech support, internal networking, software, and web development.",
        img: "/assets/img/dot-graphic3.png",
    },
];

const servicesRight = [
    {
        title: "IT Consultant",
        desc: "Businesses hire IT consultants to help optimize their tech support, internal networking, software, and web development.",
        img: "/assets/img/dot-graphic4.png",
    },
    {
        title: "IT Consultant",
        desc: "Businesses hire IT consultants to help optimize their tech support, internal networking, software, and web development.",
        img: "/assets/img/dot-graphic5.png",
    },
    {
        title: "IT Consultant",
        desc: "Businesses hire IT consultants to help optimize their tech support, internal networking, software, and web development.",
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
            <section className="relative min-h-[520px] flex items-center bg-white overflow-hidden">
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
                            Acquiring the{" "}
                            perfect talent when
                            needed.
                        </h1>
                        <p className="text-white/60 text-base leading-relaxed mb-8">
                            Techsaga&apos;s Contract Consulting services can help you with your
                            tech needs, whether you are facing a quality resources crunch,
                            need niche or specialized skills, have budget limitations, or have
                            an ever-expanding scope of work.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-[#4291CE] text-white px-6 py-3 rounded font-semibold hover:bg-[#347eb8] transition-colors text-sm"
                            >
                                Connect with expert →
                            </a>
                            <a
                                href="#cases"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-white transition-colors text-sm"
                            >
                                View Case Studies
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <img src="/assets/img/mainimg.png" alt="" className="" />
                    </div>
                </div>
            </section>

            {/* ── STRATEGIC STAFFING + FORM ── */}
            <section id="contact" className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-6">
                            Strategic Optimal Staffing Solutions –{" "}
                            <span className="text-[#4291CE]">
                                The Right Talent at the Right Time
                            </span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            With unrivaled expertise in enterprise applications, cloud
                            migration, and hosted managed services, Techsaga guides clients
                            through the intricacies of project scale and execution. Embracing
                            a customer-centric approach, they forge partnerships,
                            understanding clients&apos; inspirations and challenges to deliver
                            tailored solutions. Backed by a team of distinguished
                            professionals and vast industry knowledge, Techsaga paves the way
                            for triumph, revolutionizing the tech services landscape.
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
                                placeholder="Description"
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
                </div>
            </section>

            {/* ── EXCELLING THE EXPERTISE ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Excelling the Expertise
                    </h2>
                    <p className="text-center text-gray-500 max-w-3xl mx-auto mb-14 text-sm leading-relaxed">
                        Empowering clients to seamlessly migrate, modernize, and optimize
                        their enterprise applications and cloud technology investments. With
                        an esteemed reputation as a Monday Certified Consultant, an AWS
                        Advanced Consulting Partner, and a leading Oracle PeopleSoft
                        Partner, we are poised to deliver unparalleled expertise and
                        comprehensive solutions through our Contract Consulting Services.
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
                            Optimizing IT Staff Augmentation for Better Talent and Project
                            Outcomes
                        </h2>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We are committed to delivering exceptional outcomes. We
                            collaborate closely with clients, understanding their unique goals
                            and challenges, and harnessing our expertise to provide
                            transformative solutions.
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
                                icon: "🌐",
                                title: "Domain Registration",
                                desc: "Quis auten ipsum modecit velit esse nihil vel illum fugiat voluptas nulla pariatur.",
                            },
                            {
                                icon: "🖥️",
                                title: "Web Hosting Setup",
                                desc: "Quis auten ipsum modecit velit esse nihil vel illum fugiat voluptas nulla pariatur.",
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
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Illuminating Your Requirements Path
                    </h2>
                    <p className="text-center text-gray-500 max-w-3xl mx-auto mb-14 text-sm leading-relaxed">
                        Empowering clients to seamlessly migrate, modernize, and optimize
                        their enterprise applications and cloud technology investments. With
                        an esteemed reputation as a Monday Certified Consultant, an AWS
                        Advanced Consulting Partner, and a leading Oracle PeopleSoft
                        Partner, we are poised to deliver unparalleled expertise and
                        comprehensive solutions through our Contract Consulting Services.
                    </p>

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div className="flex flex-col gap-5">
                            {servicesLeft.map((s, i) => (
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

            {/* ── LET'S GET STARTED ── */}
            <section className="py-20 max-w-7xl rounded-xl m-auto mt-15 bg-white bg-linear-to-r from-[#F8F8F8] to-[#E3EFF8]">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Let&apos;s Get Started: Collaborating On Your Project
                    </h2>
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-14 leading-relaxed">
                        Flexible Budget, Customer Approach. Choose What Works For You.
                        We&apos;ll Collaborate Seamlessly To Meet Your Preferences And
                        Ensure A Successful Partnership.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10 divide-x divide-gray-100">
                        <PricingCard
                            icon="💰"
                            title="Transparent and Fixed Pricing"
                            desc="With transparent and fixed pricing, we deliver clear, upfront costs, ensuring that deliverables and value are achieved within the time and budget invested by our clients."
                        />
                        <PricingCard
                            icon="🤝"
                            title="Adaptive Hourly Engagement"
                            desc="Our Adaptive Hourly Engagement often features collaboration based on project needs, optimizing resources and maximizing productivity with agile requirements."
                        />
                        <PricingCard
                            icon="🎯"
                            title="Direct Recruitment"
                            desc="We facilitate direct recruitment by providing the tools, resources, and expertise to focus you efficiently from top-of-funnel without intermediaries."
                        />
                    </div>
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