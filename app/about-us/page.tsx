"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const timelineData = [
    {
        year: "2012",
        title: "Conception, Planning, And Launch",
        desc: "The business idea originates in PSIT Kanpur (UP), leading to market evaluation, competitor analysis, and the development of a comprehensive business plan. The launch involves a team of 5 young IT graduates, registering the business, securing funding, developing the core offering, and promoting it through marketing channels. This includes obtaining necessary permits, setting up infrastructure, covering startup costs, and ensuring alignment with market demands and customer needs. The goal is to create brand awareness and generate interest in the product or service.",
    },
    {
        year: "2014",
        title: "Breakthrough",
        desc: "In the due course of time, our team experienced significant growth, and our revolutionary idea transformed into a fully-fledged existence. Throughout this journey, we achieved numerous milestones, from the initial incubation phase to establishing ourselves as a reputable entity. These milestones included establishing a new office in Noida, collaborating with City Bank USA, hosting the visit of City Bank's President to our office, and engaging in deals and negotiations with UAE Government projects.",
    },
    {
        year: "2016",
        title: "Certifications & Achievements",
        desc: "We take great pride in our certifications from internationally recognized institutions, which are a testament to our commitment to quality-driven development processes. These certifications include ICAB, IAS-Accredited, ISO:9001:2015, and EGAG accreditation. By achieving these esteemed certifications, we demonstrate our dedication to maintaining high standards and ensuring excellence in our work. These certifications validate our expertise and our ability to consistently deliver exceptional results to our clients.",
    },
    {
        year: "2018",
        title: "Global Reach",
        desc: "Expanded into international markets with strategic partnerships, serving clients across multiple countries and delivering scalable enterprise solutions.",
    },
    {
        year: "2022",
        title: "Digital Transformation",
        desc: "Adopted AI-driven workflows, automation systems, and next-generation web technologies to accelerate client success and innovation.",
    },
];

export default function AboutUs() {

    const [emblaRef1, emblaApi1] = useEmblaCarousel({
        loop: true,
        align: "start",
    });
    return (
        <>
            <Header />
            <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/about-us.png')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full">
                    <div className="">

                        <div className="w-full lg:w-1/2 text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                Techsaga <br />
                                Digital Evolution
                            </h1>

                            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                                Harnessing Innovation for Digital Excellence: Crafting Software and
                                Marketing Marvels to Propel Your Business Beyond Boundaries
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center gap-2 bg-[#fff] text-[#4291CE] px-6 py-3 rounded font-semibold hover:bg-[#347eb8] transition-colors text-sm"
                                >
                                    Connect with expert →
                                </Link>

                                <Link
                                    href="https://resources.techsaga.co.in/case-study/"
                                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#4291CE] transition-colors text-sm"
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-16 px-4 " style={{ background: 'linear-gradient(288.19deg, #D9D9D9 1.6%, #FFFFFF 50.28%, rgba(66, 145, 206, 0.8) 99.96%)' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#1a73c5] mb-3">
                            Delivering Technology Solutions
                        </p>

                        <h1 className="font-playfair text-3xl md:text-4xl lg:text-4xl font-bold leading-tight !leading-[54px] text-gray-800 max-w-7xl mx-auto">
                            With Years of Experience and Excellence and <br />Still Counting
                        </h1>
                    </div>

                    {/* Slider */}
                    <div className="overflow-hidden" ref={emblaRef1}>
                        <div className="flex">
                            {timelineData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3 h-fit
                ${index % 2 !== 0 ? "lg:mt-40" : "lg:mt-0"}`}
                                >
                                    <div className="relative overflow-hidden p-8 h-full  border-[rgba(26,115,197,0.08)] border-l-3 border-l-[#D9D9D9] transition-all duration-300 hover:-translate-y-[6px] ">
                                        <div className="font-playfair text-[28px] font-bold text-[#1a73c5] tracking-[0.02em] mb-2">
                                            {item.year}
                                        </div>

                                        <h3 className="text-xl font-black text-gray-800 mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {timelineData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi1?.scrollTo(index)}
                                className="group"
                            >
                                <span
                                    className={`inline-block rounded-full transition-all duration-300 ${index === 0
                                        ? "w-[10px] h-[10px] bg-[#1a73c5]"
                                        : "w-2 h-2 bg-slate-300 group-hover:bg-[#1a73c5]"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-[#f9fbff]">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#1a73c5] mb-2">
                            Through Passion And Well-Being.
                        </p>

                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
                            We Pave Your Path to Success.
                        </h2>

                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">

                        <div className="group flex flex-col items-center justify-center p-6 border border-[#e2eaf5] rounded-[10px] bg-white transition-all duration-300 gap-3 min-h-[110px] hover:bg-[#1a73c5] hover:border-[#1a73c5] hover:shadow-[0_8px_24px_rgba(26,115,197,0.22)] hover:-translate-y-1">

                            <img className="bg-[gainsboro] w-[50px] h-[50px] rounded-[50%] p-[11px]" src="/assets/img/icon/about1.png" alt="" />

                            <span className="text-[13px] font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-white">
                                Learning Opportunity
                            </span>

                        </div>

                        <div className="group flex flex-col items-center justify-center p-6 border border-[#e2eaf5] rounded-[10px] bg-white transition-all duration-300 gap-3 min-h-[110px] hover:bg-[#1a73c5] hover:border-[#1a73c5] hover:shadow-[0_8px_24px_rgba(26,115,197,0.22)] hover:-translate-y-1">

                            <img className="bg-[gainsboro] w-[50px] h-[50px] rounded-[50%] p-[11px]" src="/assets/img/icon/about2.png" alt="" />

                            <span className="text-[13px] font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-white">
                                Insightful Guidance
                            </span>

                        </div>

                        <div className="group flex flex-col items-center justify-center p-6 border border-[#e2eaf5] rounded-[10px] bg-white transition-all duration-300 gap-3 min-h-[110px] hover:bg-[#1a73c5] hover:border-[#1a73c5] hover:shadow-[0_8px_24px_rgba(26,115,197,0.22)] hover:-translate-y-1">

                            <img className="bg-[gainsboro] w-[50px] h-[50px] rounded-[50%] p-[11px]" src="/assets/img/icon/about3.png" alt="" />

                            <span className="text-[13px] font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-white">
                                Thoughtful Evaluation
                            </span>

                        </div>

                        <div className="group flex flex-col items-center justify-center p-6 border border-[#e2eaf5] rounded-[10px] bg-white transition-all duration-300 gap-3 min-h-[110px] hover:bg-[#1a73c5] hover:border-[#1a73c5] hover:shadow-[0_8px_24px_rgba(26,115,197,0.22)] hover:-translate-y-1">

                            <img className="bg-[gainsboro] w-[50px] h-[50px] rounded-[50%] p-[11px]" src="/assets/img/icon/about4.png" alt="" />

                            <span className="text-[13px] font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-white">
                                Culture Diversity
                            </span>

                        </div>

                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                        <div className="group flex flex-col items-center justify-center p-6 border border-[#e2eaf5] rounded-[10px] bg-white transition-all duration-300 gap-3 min-h-[110px] hover:bg-[#1a73c5] hover:border-[#1a73c5] hover:shadow-[0_8px_24px_rgba(26,115,197,0.22)] hover:-translate-y-1">

                            <img className="bg-[gainsboro] w-[50px] h-[50px] rounded-[50%] p-[11px]" src="/assets/img/icon/about5.png" alt="" />

                            <span className="text-[13px] font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-white">
                                Innovations
                            </span>

                        </div>

                        <div className="group flex flex-col items-center justify-center p-6 border border-[#e2eaf5] rounded-[10px] bg-white transition-all duration-300 gap-3 min-h-[110px] hover:bg-[#1a73c5] hover:border-[#1a73c5] hover:shadow-[0_8px_24px_rgba(26,115,197,0.22)] hover:-translate-y-1">

                            <img className="bg-[gainsboro] w-[50px] h-[50px] rounded-[50%] p-[11px]" src="/assets/img/icon/about6.png" alt="" />

                            <span className="text-[13px] font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-white">
                                Leadership
                            </span>

                        </div>

                        <div className="group flex flex-col items-center justify-center p-6 border border-[#e2eaf5] rounded-[10px] bg-white transition-all duration-300 gap-3 min-h-[110px] hover:bg-[#1a73c5] hover:border-[#1a73c5] hover:shadow-[0_8px_24px_rgba(26,115,197,0.22)] hover:-translate-y-1">

                            <img className="bg-[gainsboro] w-[50px] h-[50px] rounded-[50%] p-[11px]" src="/assets/img/icon/about7.png" alt="" />

                            <span className="text-[13px] font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-white">
                                Worldwide Prospects
                            </span>

                        </div>

                        <div className="group flex flex-col items-center justify-center p-6 border border-[#e2eaf5] rounded-[10px] bg-white transition-all duration-300 gap-3 min-h-[110px] hover:bg-[#1a73c5] hover:border-[#1a73c5] hover:shadow-[0_8px_24px_rgba(26,115,197,0.22)] hover:-translate-y-1">

                            <img className="bg-[gainsboro] w-[50px] h-[50px] rounded-[50%] p-[11px]" src="/assets/img/icon/about8.png" alt="" />

                            <span className="text-[13px] font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-white">
                                Innovative Tools
                            </span>

                        </div>

                    </div>

                </div>

            </section>

            <section className="py-16 lg:py-24 bg-[#f5f5f5] overflow-hidden">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="relative h-[700px]">

                            <div className="absolute top-0 left-0 w-full h-full opacity-40">
                                <div className="w-full h-full bg-[linear-gradient(to_right,#d9d9d9_1px,transparent_1px),linear-gradient(to_bottom,#d9d9d9_1px,transparent_1px)] bg-[size:22px_22px]"></div>
                            </div>

                            <div className="absolute top-0 right-[20px] z-20">

                                <img
                                    src="/assets/img/about.jpg"
                                    alt=""
                                    className="w-[350px] h-[380px] object-cover rounded-[5px]"
                                />

                            </div>

                            <div className="absolute bottom-0 left-0 z-10">

                                <img
                                    src="/assets/img/about2.jpg"
                                    alt=""
                                    className="w-[350px] h-[380px] object-cover rounded-[5px]"
                                />

                            </div>

                            <div className="absolute left-[74px] top-[239px] z-30 bg-[#4291CE] px-6 py-5 rounded-xl shadow-xl">

                                <h3 className="text-white text-4xl font-extrabold leading-none">
                                    1600 +
                                </h3>

                                <p className="text-white mt-4 text-lg font-medium">
                                    Project completed
                                </p>

                            </div>

                        </div>

                        <div className="max-w-xl">

                            <h2 className="text-[36px] leading-[48px] font-bold text-black mb-8">
                                Empowering Your Business with Our Tech Wizards: Meet the Genius Minds
                            </h2>

                            <p className="text-[#555] text-[15px] leading-[30px] mb-6">
                                At Techsaga, we are a proud team of dedicated and experienced professionals who brings a wealth of knowledge and expertise to every project we undertake and are committed to providing our clients with the highest level of service and support.
                            </p>

                            <p className="text-[#555] text-[15px] leading-[30px] mb-14">
                                Our team comprises experts in a range of fields, including software development, project management, data analysis, and more. Each team member brings a unique perspective and set of skills to the table, and we work together to deliver innovative and effective IT solutions.We also prioritize ongoing professional development and training to ensure that our team stays up-to-date with the latest technologies and best practices.We are proud of our team's expertise and dedication, and we are confident that we can help our clients achieve success through our innovative and effective IT solutions.
                            </p>


                            <div className="flex items-center gap-20">

                                <div>

                                    <h3 className="text-5xl font-extrabold text-black mb-3">
                                        14+
                                    </h3>

                                    <p className="text-gray-600 text-lg">
                                        Years Expertise
                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-5xl font-extrabold text-black mb-3">
                                        85+
                                    </h3>

                                    <p className="text-gray-600 text-lg">
                                        Seamless Workflow
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="px-4 py-6 pb-14">

                <div className="max-w-6xl mx-auto">

                    <div className="bg-[linear-gradient(268.56deg,_#BAD7ED_0.69%,_#D2E5F3_37.44%,_#6EABD9_55.88%,_#4291CE_98.95%)] rounded-2xl px-6 sm:px-16 py-16 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">


                        <div>

                            <h3 className="text-white text-2xl sm:text-3xl font-bold uppercase leading-tight">
                                Got Questions? We've Got Answers!
                            </h3>

                            <p className="text-blue-200 text-sm sm:text-base mt-3 tracking-wide uppercase">
                                Drop an email, we will respond you shortly!
                            </p>

                        </div>

                        <Link href="/contact-us"
                            className="group bg-[linear-gradient(135deg,_#076099_0%,_#3379B3_100%)] hover:bg-white border border-blue-300 text-white hover:text-[#1e3a5f] text-sm sm:text-base font-semibold px-7 py-4 rounded-lg flex items-center gap-3 transition-all duration-300">

                            Get In Touch

                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2.2">

                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>

                        </Link>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}