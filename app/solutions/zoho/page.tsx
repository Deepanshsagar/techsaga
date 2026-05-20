import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomFrom from "@/components/BottomForm"
import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/solutions/zoho");
}

const servicesLeft = [
   {
        title: "Contextual Cross-App Orchestration",
        desc: "Replace disconnected third-party integrations with native data-sharing across 55+ apps to eliminate departmental silos.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Zia Conversational AI",
        desc: "Utilize Zoho’s proprietary AI assistant to perform cross-functional searches, predict sales trends, and automate sentiment analysis.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Deluge Scripting Power",
        desc: "Leverage Zoho’s low-code programming language to build complex, custom logic that flows seamlessly between CRM, Finance, and HR.",
        img: "/assets/img/dot-graphic3.png",
    },
];
// const BillableLeft = [
//     {
//         title: "Tell us what you need",
//         desc: "Share your gaps, goals, and timeline. We listen first.",
//         img: "/assets/img/dot-graphic1.png",
//     },
//     {
//         title: "Proposal and Agreement",
//         desc: "Clear proposal. No hidden fees. Sign off and we handle onboarding.",
//         img: "/assets/img/dot-graphic2.png",
//     },
//     {
//         title: "Review and settle",
//         desc: "Milestone met. We review together, invoice transparently, and close clean.",
//         img: "/assets/img/dot-graphic3.png",
//     },
// ];

const servicesRight = [
      {
        title: "Privacy-First Infrastructure",
        desc: "Benefit from a platform built on Zoho’s own owned-and-operated data centers, ensuring no third-party ad-tracking or data sharing.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Unified Common Data Model",
        desc: "Eliminate data translation errors with a single underlying data structure that ensures your lead in CRM is the same entity in Books.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Aggressive Value Engineering",
        desc: "Maintain a high-performance digital core without the integration tax usually required to connect competing software vendors.",
        img: "/assets/img/dot-graphic3.png",
    },
];
// const BillableRight = [
//     {
//         title: "Find a Compatible Consultant",
//         desc: "We shortlist qualified professionals based on your project requirements.",
//         img: "/assets/img/dot-graphic4.png",
//     },
//     {
//         title: "Project Execution",
//         desc: "Your consultant integrates with your workflows and starts delivering from day one.",
//         img: "/assets/img/dot-graphic5.png",
//     },
//     {
//         title: "Need More?",
//         desc: "Your consultant stays on, scales up, or we find the next right fit.",
//         img: "/assets/img/dot-graphic6.png",
//     },
// ];

export default function ZohoPage() {
       return (
        <main className="font-sans text-gray-800 overflow-x-hidden">
            <Header />
              <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/solutions-page/Zoho.png')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full ">
                    <div className="grid lg:grid-cols-2 items-center gap-12">

                        <div >
                            <div>
                                <img
                                src="/assets/img/solutions-icon/Zoho.png"
                                width={70}
                                height={70}
                                className="object-contain rounded-[10px]"
                                />
                            </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                           Zoho
                           <div className="text-3xl lg:text-4xl mt-2">One Platform. Your Entire Operating System.</div>
                        </h1>
                        <p className="text-white/60 text-base leading-relaxed mb-8">
                            As an official partner of Zoho, Techsaga goes beyond app implementation. We unify disconnected systems, streamline operations, and drive business growth through a fully integrated private cloud ecosystem.
                        </p>
                        
                    </div>

                    </div>
                </div>
            </section>

            {/* ── STRATEGIC STAFFING + FORM ── */}
         
            {/* ── EXCELLING THE EXPERTISE ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Accelerate Business Velocity with Zoho’s Unified Tech Stack
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
                                className=" overflow-hidden "
                                // style={{
                                //     clipPath:
                                //         "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                                // }}
                            >
                                <img
                                    src="/assets/img/solutions-upper-image/ZOHO.png"
                                    alt="expertise"
                                    className="w-full max-w-[300px] h-full object-cover"
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

             <section  className=" mt-10 px-4 mb-20">
                <div style={{ background: 'linear-gradient(94.86deg, #F8F8F8 0.48%, #E3EFF8 100%)' }} className="max-w-4xl rounded-xl py-14 mx-auto text-center">

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Your Next Great Project Starts With One Conversation
                    </h2>
                    <p className="text-xs text-gray-500 mb-10 max-w-xl mx-auto">
                        Thousands of businesses. 50+ countries 14+ years . we know how to deliver
                    </p>
                    <a href="/contact-us" className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm">Start a conversation</a>
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
                           One Source of Truth for Your Entire Business
                        </h2>
                        <p className="text-white/60 text-sm leading-relaxed">
                           Zoho is the "operating system" for your organization. It’s a single, secure ecosystem where your Front Office (Sales/Marketing) and Back Office (Finance/HR) finally speak the same language.
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
                                title: "Built-In Intelligence and Deep Customization",
                                desc: "Move to Zoho and gain Zia, an AI that understands your data across every department. Use the Deluge engine to customize your business rules without needing a heavy IT team.",
                            },
                            {
                                // icon: "🖥️",
                                title: "Total Ownership of the Stack",
                                desc: "Because Zoho owns their entire hardware and software stack, you get unparalleled uptime and a privacy guarantee that rented clouds simply cannot match.",
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
            {/* <section className="py-20 ">
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

                        <div className="flex justify-center relative">
                            <img src="/assets/img/leftarrow.png" className="absolute -top-15 -left-8" />
                            <div className=" overflow-hidden">
                                <img
                                    src="/assets/img/solution-vec.png"
                                    alt="requirements path"
                                    className="w-full max-w-[300px] z-50 relative h-full object-cover"
                                />
                            </div>
                            <img src="/assets/img/leftarrow.png" className="absolute rotate-180 -bottom-15 -right-8" />
                        </div>

                        <div className="flex flex-col gap-5">
                            {servicesRight.map((s, i) => (
                                <ServiceCard key={i} title={s.title} desc={s.desc} img={s.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}
            <section  className=" mt-10 px-4">
                
            <div className="text-3xl font-bold text-gray-900 text-center mb-10">
                Tired of the Integration Tax? Take Back Control.
            </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-full md:w-1/2 mx-auto">
                            {/* <h3 className="text-lg font-bold text-gray-900 mb-6">
                                Discuss Your Project
                            </h3> */}
                            <BottomFrom />
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
            <p className="text-gray-500 text-xs leading-relaxed relative z-[1]">{desc}</p>
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