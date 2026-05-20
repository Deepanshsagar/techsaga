import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomFrom from "@/components/BottomForm"
import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/solutions/servicenow");
}

const servicesLeft = [
    {
        title: "Unified Workflow Orchestration",
        desc: "Replace fragmented, manual email chains with automated cross-functional workflows that connect IT, HR, and Customer Service.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "GenAI-Powered Productivity",
        desc: "Utilize Now Assist to summarize complex incidents, generate code for developers, and provide instant, conversational answers to employee inquiries.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Single Architecture (One Data Model)",
        desc: "Benefit from a platform where every application from ITSM to CSM shares the same underlying data structure, eliminating integration headaches.",
        img: "/assets/img/dot-graphic3.png",
    },
];

const servicesRight = [
    {
        title: "Low-Code App Engine",
        desc: "Leverage a professional-grade low-code environment to build custom business applications that solve unique operational challenges at lightning speed.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Strategic Portfolio Management",
        desc: "Eliminate project drift with real-time visibility into resources, demand, and financials, aligning every task to your corporate strategy.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Proactive AIOps Visibility",
        desc: "Maintain a single source of truth for your digital infrastructure, using machine learning to predict and prevent service outages before they impact users.",
        img: "/assets/img/dot-graphic3.png",
    },
];

export default function ServiceNowPage() {
 
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
                            <div>
                                <img
                                src="/assets/img/solutions-icon/Service-Now.png"
                                width={70}
                                height={70}
                                className="object-contain rounded-[10px]"
                                />
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                               ServiceNow

                               <div className="text-3xl lg:text-4xl mt-2">One Platform. Your Entire Workflow Engine.</div> 
                            </h1>

                            <p className="text-white/60 text-base leading-relaxed mb-8">
                                Techsaga, an official ServiceNow partner, helps
                                businesses eliminate silos and create seamless
                                cross-functional operations with intelligent
                                workflow automation.
                            </p>

                       
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Accelerate Digital Transformation with the Now Platform
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
                                    src="/assets/img/solutions-upper-image/Servicenow.png"
                                    alt="ServiceNow"
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
                            One Source of Truth for Your Entire Service Ecosystem
                        </h2>

                        <p className="text-white/60 text-sm leading-relaxed">
                            ServiceNow is the orchestration layer of your organization.
                            It’s a single, secure cloud space where disparate legacy
                            systems finally talk to each other through a unified,
                            consumer-grade employee experience.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/img/solution-m.png"
                                alt="ServiceNow Enterprise"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 justify-end">
                        {[
                            {
                                title: "Built-In Intelligence and Enterprise Speed",
                                desc:
                                    "Move to ServiceNow and gain AI that automates the work about work. The platform scales instantly to handle millions of requests while ensuring a consistent experience across every device.",
                            },
                            {
                                title: "The Power of the Now Platform",
                                desc:
                                    "Because it is built on a single, integrated platform, you can break down silos and automate the entire lifecycle of a request from the moment a ticket is opened to the final resolution.",
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
                    Is Your Work Getting Lost in Email? Take Back Control.
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