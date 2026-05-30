import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomFrom from "@/components/BottomForm"
import { getMeta } from "@/app/lib/getMeta";
import Image from "next/image";

export async function generateMetadata() {
    return getMeta("/solutions/data-solutions");
}

const servicesLeft = [
    {
        title: "Automated ETL Orchestration",
        desc: "Replace manual, error-prone data entry with intelligent pipelines that extract, transform, and load data from disparate sources with zero latency.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Predictive Data Modeling",
        desc: "Utilize advanced ML algorithms to identify hidden patterns, forecast market trends, and simulate what-if scenarios for strategic planning.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Elastic Data Lakehouse Architecture",
        desc: "Benefit from a hybrid infrastructure that combines the flexibility of a data lake with the structured performance of a data warehouse.",
        img: "/assets/img/dot-graphic3.png",
    },
];

const servicesRight = [
    {
        title: "Unified Governance & Security",
        desc: "Leverage centralized controls to ensure data integrity, regulatory compliance, and robust encryption across the entire information lifecycle.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Real-Time Analytics Delivery",
        desc: "Eliminate reporting lag with stream processing that provides instant visibility into operational metrics and customer behavior as it happens.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Scalable Master Data Management",
        desc: "Maintain a single source of truth by harmonizing conflicting data points into a high-fidelity Golden Record for every entity in your business.",
        img: "/assets/img/dot-graphic3.png",
    },
];

export default function DataSolutionsPage() {


    return (
        <main className="font-sans text-gray-800 overflow-x-hidden">
            <Header />

            {/* HERO SECTION */}
            <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/solutions-page/Data-solution.png')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div>
                            <div>
                                <img
                                    src="/assets/img/solutions-icon/Data-Solution.png"
                                    width={70}
                                    height={70}
                                    className="object-contain rounded-[10px]"
                                />
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                Data Solutions
                                <div className="lg:text-3xl text-3xl mt-2"> We’re Building Entire Information Architecture.</div>
                            </h1>

                            <p className="text-white/60 text-base leading-relaxed mb-8">
                                As a specialized Data Solutions partner, we don't just provide technical implementation;
                                we synergize your raw intelligence. We bridge the gap between fragmented data silos and
                                actionable business insights, transforming static information into a high-velocity engine
                                built for the modern data-driven economy.
                            </p>


                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Accelerate Decision-Making with an AI-Ready Data Stack
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
                                    src="/assets/img/solutions-upper-image/data-solution.png"
                                    alt="Data Solutions"
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
                        href="/contact-us"
                        className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm"
                    >
                        Start a conversation
                    </a>
                </div>
            </section>

            {/* ENTERPRISE SECTION */}
            <section className="text-white py-20 relative overflow-hidden">
                <div
                    className="absolute inset-0 solution-bg"
                    // style={{
                    //     backgroundImage: "url('/assets/img/bg-sol-3.png')",
                    //     backgroundSize: "cover",
                    // }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold leading-snug mb-5">
                            One Source of Truth for Your Entire Data Ecosystem
                        </h2>

                        <p className="text-white/60 text-sm leading-relaxed">
                            Data Solutions is the analytical brain of your organization.
                            It’s a single, secure environment where Sales, Operations,
                            and Finance finally speak the same numerical language,
                            ensuring every decision is backed by verified evidence.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/img/data-solutions-trust.webp"
                                alt="AWS Cloud"
                                width={350}
                                height={458}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 justify-end">
                        {[
                            {
                                title: "Built-In Intelligence and Seamless Scalability",
                                desc:
                                    "Move to a modern data framework and gain AI-driven insights that detect anomalies before they become liabilities. The system scales instantly as your data volume grows from gigabytes to petabytes.",
                            },
                            {
                                title: "A Results-Driven Approach Focused on Insight",
                                desc:
                                    "Because our architecture focuses on data quality and accessibility rather than just storage, your firm gains the agility to pivot strategies in real-time based on live market signals rather than outdated spreadsheets.",
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
                    READY TO DISCUSS? Get in Touch
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