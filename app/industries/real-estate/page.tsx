import Footer from "@/components/Footer"
import Header from "@/components/Header"
import BottomFrom from "@/components/BottomForm"
import { getMeta } from "@/app/lib/getMeta";
export async function generateMetadata() {
  return getMeta("/industries/real-estate");
}
const Industries = () => {
    return (
        <>
            <Header />

            {/* HERO SECTION */}
            <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/industries-page/Real-Estate.webp')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full">
                    <div className="grid lg:grid-cols-2 items-center gap-12">

                        <div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                               Real Estate & PropTech Solutions
                               <div className="text-3xl lg:text-4xl mt-2"> Precision in Property Intelligence</div>
                            </h1>

                            <p className="text-white text-base leading-relaxed mb-8">
                                In a high-stakes market where speed and transparency define success, your digital infrastructure must do more than just list properties. It must close the gap between search and settlement. We build intelligent, asset-centric ecosystems that bridge the gap between market complexity and seamless, high-velocity transactions.
                            </p>

                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-20 bg-[#4291CE1A] relative">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-cover before:bg-center before:right-[0px] before:top-0 before:z-10 before:bg-[url('/assets/img/effect1.png')] before:bg-cover before:bg-center">

                    <div className="fade-in">

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1535] leading-tight">
                            Engineering Residential & Commercial Excellence
                        </h2>

                        <p className="text-gray-400 mt-3 text-sm max-w-xl">
                            Modern real estate ecosystems demand scalable, secure, and intelligent digital infrastructures that accelerate property transactions and improve buyer engagement.
                        </p>

                    </div>

                    <div className="py-10">

                        <div className="grid grid-cols-1 sm:grid-cols-2">

                            {/* CARD 1 */}
                            <div className="card-hover ps-0 fade-in p-6">

                                <div className="flex items-start gap-4">

                                    <div className="icon-circle">

                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                                            />

                                        </svg>

                                    </div>

                                    <div>

                                        <h4 className="font-bold text-[#0b1535] mb-2">
                                            Bespoke Virtual Showrooms vs. Engagement Gaps
                                        </h4>

                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            We design immersive VR tours and AI-powered staging apps that allow buyers to experience properties from anywhere, reducing no-show rates and accelerating the decision-making process.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* CARD 2 */}
                            <div className="card-hover p-6 rounded-xl">

                                <div className="flex items-start gap-4">

                                    <div className="icon-circle">

                                        <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2">

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />

                                        </svg>

                                    </div>

                                    <div>

                                        <h4 className="font-bold text-[#0b1535] mb-2">
                                            Unified Asset Intelligence vs. Data Silos
                                        </h4>

                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            By syncing CRM data, property valuations, and transaction history into one powerhouse dashboard, we eliminate information gaps to provide a secure, single source of truth for agents and investors alike.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* CARD 3 */}
                            <div className="card-hover ps-0 p-6 rounded-xl">

                                <div className="flex items-start gap-4">

                                    <div className="icon-circle">

                                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2">

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                                            />

                                        </svg>

                                    </div>

                                    <div>

                                        <h4 className="font-bold text-[#0b1535] mb-2">
                                            Infinite Scalability vs. Transactional Friction
                                        </h4>

                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Using cloud-native architectures and digital transaction management (DTM), we build platforms that handle peak market surges and automate the closing process with e-signatures and mobile-friendly workflows.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* CARD 4 */}
                            <div className="card-hover p-6 rounded-xl">

                                <div className="flex items-start gap-4">

                                    <div className="icon-circle">

                                        <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2">

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                            />

                                        </svg>

                                    </div>

                                    <div>

                                        <h4 className="font-bold text-[#0b1535] mb-2">
                                            Security by Design vs. Asset Vulnerability
                                        </h4>

                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            We implement enterprise-grade encryption and blockchain-backed records to protect sensitive financial data and property titles, transforming your platform into a digital vault that maintains total regulatory and client trust.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* SOLUTIONS SECTION */}
            <div className="bg-[#F6F6F6]">

                <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

                    <div className="flex items-start justify-between flex-wrap gap-6">

                        <div>

                            <h2 className="font-display text-[34px] leading-none font-semibold tracking-[-2px] text-[#111111]">
                                Real Estate & PropTech Solutions
                            </h2>

                            <div className="w-16 h-[4px] bg-[#3B82F6] rounded-full mt-5"></div>

                        </div>

                        <button className="group flex items-center gap-0 rounded-full pl-2 py-2 bg-transparent">

                            <div className="w-[64px] h-[64px] absolute -ml-3 rounded-full bg-[#6EA8E8] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                            </div>

                            <div className="flex items-center relative z-10 gap-4">
                                <a href="/contact-us">
                                <span className="text-[18px] font-semibold text-black tracking-[-0.3px]">
                                    Let's Get Started
                                </span>

                                <span className="text-2xl transition-all duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                                </a>

                            </div>

                        </button>

                    </div>

                 

                </section>

            </div>

            {/* CONTACT SECTION */}
            <section className="mt-10 px-4 mb-20">

                <div className="text-3xl font-bold text-gray-900 text-center mb-2">
                    Get In Touch With Us.
                </div>

                <p className="text-gray-500 text-sm leading-relaxed text-center mb-14">
                    Turn every lead into a closing with swift real estate engines built to scale.
                </p>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-full md:w-1/2 mx-auto">

                   <BottomFrom />
                </div>

            </section>

            <Footer />

        </>
    )
}

export default Industries