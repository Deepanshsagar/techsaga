import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomFrom from "@/components/BottomForm"
import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/solutions/contract-consulting");
}

const servicesLeft = [
    {
        title: "Strategic Drafting & Negotiation",
        desc: "Replace generic templates with specialized agreements covering sales, partnerships, and IP tailored to protect your commercial interests.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Automated Compliance & Regulatory Alignment",
        desc: "Utilize built-in frameworks to ensure every contract meets local and international standards, reducing legal exposure across complex engagements.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Integrated Procurement Optimization",
        desc: "Benefit from an advisory-first approach that identifies value leaks in your supply chain and enhances vendor performance through rigorous contract management.",
        img: "/assets/img/dot-graphic3.png",
    },
];

const servicesRight = [
    {
        title: "Centralized IP & Confidentiality Protection",
        desc: "Leverage secure protocols to safeguard your sensitive information and clearly define work-product ownership for every project.",
        img: "/assets/img/dot-graphic1.png",
    },
    {
        title: "Transparent Milestone-Based Governance",
        desc: "Eliminate scope creep by linking payment terms and project durations directly to clearly defined deliverables and SOW requirements.",
        img: "/assets/img/dot-graphic2.png",
    },
    {
        title: "Real-Time Lifecycle Visibility",
        desc: "Maintain a single source of truth for your entire contract portfolio, ensuring high-fidelity reporting on renewals, terminations, and obligation fulfillment.",
        img: "/assets/img/dot-graphic3.png",
    },
];

export default function ContractConsultingPage() {
    
    return (
        <main className="font-sans text-gray-800 overflow-x-hidden">
            <Header />

            {/* HERO SECTION */}
            <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/solutions-page/Contract-Consulting.png')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full">
                    <div className="grid lg:grid-cols-2 items-center gap-12">
                        <div>
                            <div>
                                <img
                                src="/assets/img/solutions-icon/Consulting-Now.png"
                                width={70}
                                height={70}
                                className="object-contain rounded-[10px]"
                                />
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                               Contract Consulting
                               <div className="lg:text-3xl text-3xl mt-2"> Expert Guidance for Every Stage of Your Business Growth.</div>
                            </h1>

                            <p className="text-white/60 text-base leading-relaxed mb-8">
                                Techsaga is a specialized Contract Consulting partner, we synergize your 
                                intellectual capital. We bridge the gap between high-level strategy and operational
                                 execution, transforming fragmented efforts into a unified, high-velocity engine built
                                  for the modern project economy.
                            </p>

                           
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Minimize Risk and Maximize Performance with Lifecycle Management
                    </h2>

                    <p className="text-center text-gray-500 max-w-3xl mx-auto mb-14 text-sm leading-relaxed">
                        We help businesses strengthen agreements, streamline governance,
                        and reduce operational risk with strategic contract consulting
                        solutions.
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
                                    src="/assets/img/solutions-upper-image/consulting.png"
                                    alt="Contract Consulting"
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
                            One Source of Truth for Your Entire Practice
                        </h2>

                        <p className="text-white/60 text-sm leading-relaxed">
                            Contract Consulting is the compliance engine of your
                            organization. It’s a single, secure space where
                            Procurement, Legal, and Project Management finally
                            converge to ensure every agreement aligns with
                            your business goals.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/img/solution-m.png"
                                alt="Contract Consulting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 justify-end">
                        {[
                            {
                                title: "Smart Consulting Backed by Strategic Oversight",
                                desc:
                                    "Move to a unified consulting framework and gain expert insights that optimize your processes rather than just executing tasks. The system scales instantly as your niche requirements evolve.",
                            },
                            {
                                title: "A Results-Driven Approach Focused on Outcomes",
                                desc:
                                    "Because our model focuses on advisory and process optimization rather than simple labor, your firm gains the agility to mitigate risks effectively while ensuring every contract delivers measurable value.",
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
                    Are Your Agreements Exposing You to Risk?
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