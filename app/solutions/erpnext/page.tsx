import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomFrom from "@/components/BottomForm"
import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/solutions/erpnext");
}

const servicesLeft = [
    {
        title: "Unified Frappe Framework",
        desc: "Replace messy API integrations with a batteries-included architecture where CRM, Inventory, and HR are built on a single, native codebase.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Frappe Insights & AI",
        desc: "Utilize built-in data visualization and Python-based scripting to automate custom validation rules and predictive stock procurement.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Metadata-Driven Customization",
        desc: "Benefit from a platform where you can add custom fields, doctypes, and print formats on the fly without ever touching the underlying source code.",
        img: "/assets/img/dot-graphic3.png",
    },
];

const servicesRight = [
    {
        title: "Comprehensive Vertical Integration",
        desc: "Leverage deep, out-of-the-box modules for Manufacturing (BOM), Education, and Healthcare that typically require expensive add-ons elsewhere.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Multi-Tenant Open Sovereignty",
        desc: "Eliminate vendor lock-in with a platform that gives you total ownership of your data and the flexibility to host on-premise or in the cloud.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Real-Time Ledger Integrity",
        desc: "Maintain a single source of truth with an immutable general ledger that automatically syncs every warehouse movement to your financial statements.",
        img: "/assets/img/dot-graphic3.png",
    },
];

export default function ERPNextPage() {
   
    return (
        <main className="font-sans text-gray-800 overflow-x-hidden">
            <Header />

            {/* HERO SECTION */}
            <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/solutions-page/ERPNext.png')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div>
                            <div>
                                <img
                                src="/assets/img/solutions-icon/ERP-Next.png"
                                width={70}
                                height={70}
                                className="object-contain rounded-[10px]"
                                />
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                               ERPNext
                               <div className="text-3xl lg:text-4xl mt-2"> One Platform. Your Entire Open-Source Core.</div>
                            </h1>

                            <p className="text-white/60 text-base leading-relaxed mb-8">
                                Beyond deploying tools, Techsaga leverages ERPNext
                                to connect operations, simplify workflows, and
                                deliver greater control over your business processes.
                            </p>

                          
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Accelerate Lean Operations with ERPNext’s Monolithic Architecture
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
                                    src="/assets/img/solutions-upper-image/ERPNext.png"
                                    alt="ERPNext"
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
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/assets/img/bg-sol-3.png')",
                        backgroundSize: "cover",
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold leading-snug mb-5">
                            One Source of Truth for Your Entire Lean Enterprise
                        </h2>

                        <p className="text-white/60 text-sm leading-relaxed">
                            ERPNext is the operational engine of your organization.
                            It’s a single, secure environment where your shop floor,
                            sales team, and accounting department finally share a
                            real-time, transparent database.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/img/solution-m.png"
                                alt="ERPNext Enterprise"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 justify-end">
                        {[
                            {
                                title: "Built-In Agility and Rapid Deployment",
                                desc:
                                    "Move to ERPNext and gain a high-performance system that avoids the bloatware of traditional ERPs. The platform is designed for rapid iteration, allowing you to go live in weeks, not years.",
                            },
                            {
                                title: "The Power of Open Source Freedom",
                                desc:
                                    "Because it is built on the Frappe framework, your business stays agile with a community-driven roadmap and the ability to self-host, ensuring you are never at the mercy of a licensing hike.",
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
                    Tired of Proprietary Licensing Traps? Take Back Control.
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