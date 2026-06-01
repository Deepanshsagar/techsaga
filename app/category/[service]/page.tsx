// app/[category]/[service]/page.tsx

import connectDB from "@/app/lib/mongodb";
import Service from "@/app/models/Service";
import "@/app/models/Category";
import Header from "@/components/Header";
import SplitContainer from "@/components/SplitContainer";
import { SectionTag } from "@/app/utils/utils";
import {
    Zap,
    ShieldCheck,
    BarChart3,
    Grid2x2,
    BadgeDollarSign,
    RefreshCw,
} from "lucide-react";

const iconMap: any = {
    Zap,
    ShieldCheck,
    BarChart3,
    Grid2x2,
    BadgeDollarSign,
    RefreshCw,
};
import Footer from "@/components/Footer";

export default async function ServicePage({
    params,
}: {
    params: { category: string; service: string };
}) {
    await connectDB();

    const { service } = await params;

    const serviceData = await Service.findOne({
        slug: service,
    }).populate("categoryId").lean();

    if (!serviceData) {
        return <div>Service not found</div>;
    }

    console.log("serviceData", serviceData)
    const customFieldMap = serviceData?.customFields?.reduce(
        (
            acc: Record<string, unknown>,
            field: { key: string; value: unknown }
        ) => {
            acc[field.key] = field.value;
            return acc;
        },
        {}
    );

    const normalizeTags = (tags: unknown): string[] => {
        if (typeof tags === "string") {
            try {
                tags = JSON.parse(tags);
            } catch {
                return [];
            }
        }

        if (!Array.isArray(tags)) return [];

        return tags
            .flatMap((item) =>
                typeof item === "string" ? item.split(",") : []
            )
            .map((tag) => tag.trim())
            .filter(Boolean);
    };

    const checklist = normalizeTags(customFieldMap?.powerSectionChecklist);

    const half = Math.ceil(checklist.length / 2);

    const leftItems = checklist.slice(0, half);
    const rightItems = checklist.slice(half);
    return (
        <>
            <Header />
            <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/service-banner.png')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full">
                    <div className="grid lg:grid-cols-2 items-center gap-12">

                        {/* Left Content */}
                        <div className="max-w-xl">
                            <h1 className="font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
                                {customFieldMap?.heroHeadingLine1}
                                <span className="block text-[#4291CE]">
                                    {customFieldMap?.heroHeadingAccent}
                                </span>
                                {customFieldMap?.heroHeadingLine3}
                            </h1>
                        </div>

                    </div>
                </div>
            </section>
            <div className="section-decription">
                <div className="header-sec text-center mt-12 mb-6">
                    <SplitContainer className="">
                        <SectionTag>{customFieldMap?.sectionTagLine}</SectionTag>
                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#5A5757]">
                            {customFieldMap?.sectionIntroHeading}
                        </h2>
                    </SplitContainer>
                    {/* <SectionTag>Crafting Digital Advancement</SectionTag>
                                <p className="text-3xl font-bold mt-2">Custom Software Delivering Exceptional</p> */}
                </div>

                <div className=" shadow-[0px_0px_5px_1px_#00000040] mt-8 bg-white b rounded-xl  max-w-[1140px]  mx-auto mb-5 p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-7/12">
                        <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
                            {customFieldMap?.featureBlock1Title}
                        </h2>

                        <p className="text-sm text-gray-500 leading-relaxed mb-5">
                            {customFieldMap?.featureBlock1Description}
                        </p>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {normalizeTags(customFieldMap?.featureBlock1Bullets).map(
                                (item: any, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-center text-sm gap-2 text-gray-700">
                                        <img
                                            src="/assets/img/checkedicon.png"
                                            className="w-4"
                                            alt="checked"
                                        />
                                        {item}
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                            alt="Designing"
                            className="w-full h-60 md:h-full object-cover rounded-xl"
                        />
                    </div>

                </div>
            </div>

            <div className="bg-white rounded-xl mt-8 shadow-[0px_0px_5px_1px_#00000040] max-w-[1140px] mx-auto mb-5 p-8 flex flex-col md:flex-row items-center gap-16">

                <div className="flex-shrink-0 w-full md:w-5/12">
                    <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                        alt="Development"
                        className="w-full h-60 md:h-full object-cover rounded-xl"
                    />
                </div>

                <div className="flex-1  w-full  md:w-7/12">
                    <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                        {customFieldMap?.featureBlock2Title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                        {customFieldMap?.featureBlock2Description}
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {normalizeTags(customFieldMap?.featureBlock2Bullets).map(
                            (item: any, index: number) => (
                                <div
                                    key={index}
                                    className="flex items-center text-sm gap-2 text-gray-700">
                                    <img
                                        src="/assets/img/checkedicon.png"
                                        className="w-4"
                                        alt="checked"
                                    />
                                    {item}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl mt-8 shadow-[0px_0px_5px_1px_#00000040] max-w-[1140px] mx-auto mb-5 p-8 flex flex-col md:flex-row items-center gap-16">



                <div className="flex-1  w-full  md:w-7/12">
                    <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                        {customFieldMap?.featureBlock3Title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                        {customFieldMap?.featureBlock3Description}
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {normalizeTags(customFieldMap?.featureBlock3Bullets).map(
                            (item: any, index: number) => (
                                <div
                                    key={index}
                                    className="flex items-center text-sm gap-2 text-gray-700">
                                    <img
                                        src="/assets/img/checkedicon.png"
                                        className="w-4"
                                        alt="checked"
                                    />
                                    {item}
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-5/12">
                    <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                        alt="Development"
                        className="w-full h-60 md:h-full object-cover rounded-xl"
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl mt-8 shadow-[0px_0px_5px_1px_#00000040] max-w-[1140px] mx-auto mb-5 p-8 flex flex-col md:flex-row items-center gap-16">

                <div className="flex-shrink-0 w-full md:w-5/12">
                    <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                        alt="Development"
                        className="w-full h-60 md:h-full object-cover rounded-xl"
                    />
                </div>

                <div className="flex-1  w-full  md:w-7/12">
                    <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                        {customFieldMap?.featureBlock4Title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                        {customFieldMap?.featureBlock4Description}
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {normalizeTags(customFieldMap?.featureBlock4Bullets).map(
                            (item: any, index: number) => (
                                <div
                                    key={index}
                                    className="flex items-center text-sm gap-2 text-gray-700">
                                    <img
                                        src="/assets/img/checkedicon.png"
                                        className="w-4"
                                        alt="checked"
                                    />
                                    {item}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
            <section className="py-14 px-4 max-w-5xl mx-auto">
                <SplitContainer className="">
                    <SectionTag className="text-center">{customFieldMap?.benefitsTagLine}</SectionTag>
                    <h2 className="font-display text-center text-3xl lg:text-3xl font-bold mb-10 text-[#5A5757]">
                        {customFieldMap?.benefitsHeading}
                    </h2>
                </SplitContainer>
                {/* <SectionTag className="text-center">Post Your Requirement &nbsp;›&nbsp; Software Solutions</SectionTag>
            
                            <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-10">
                                Skyrocket Your Business Growth With Our Custom Software<br />Development Services
                            </h1> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {JSON.parse(customFieldMap?.benefitsGrid).map(
                        (item: any, index: number) => {
                            const Icon = iconMap[item.icon];

                            return (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition duration-300 bg-white"
                                >
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                                        {Icon && (
                                            <Icon
                                                className="w-5 h-5 text-[#4291CE]"
                                                strokeWidth={2}
                                            />
                                        )}
                                    </div>

                                    <h3 className="text-sm font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        }
                    )}

                </div>
            </section>
            <section className="py-14 px-4 btn-primary">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-2">
                        {customFieldMap?.powerSectionHeading}
                    </h2>
                    <p className="text-center text-blue-200 text-sm mb-10">
                        {customFieldMap?.powerSectionSubHeading}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">

                        {/* Left Side */}
                        <div className="space-y-3">
                            {leftItems.map((item: any, index: number) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg
                                        className="w-4 h-4 text-white mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="text-white text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="space-y-3">
                            {rightItems.map((item: any, index: number) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg
                                        className="w-4 h-4 text-white mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>

                                    <span className="text-white text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-14 px-4 bg-white">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-center text-2xl font-bold text-gray-900 mb-1">{customFieldMap?.expertiseSectionHeading}</h2>
                    <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-10"></div>

                    <div className="flex flex-col lg:flex-row gap-6">

                        <div className="lg:w-2/5 btn-primary rounded-xl overflow-hidden relative min-h-64">
                            <div className="p-6 text-white relative z-10">
                                <h3 className="text-lg font-bold mb-2">{customFieldMap?.expertiseSidebarTitle}</h3>
                                <p className="text-blue-100 text-xs leading-relaxed">
                                    {customFieldMap?.expertiseSidebarDescription}
                                </p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
                                alt="Expert"
                                className="absolute  left-1/2 w-[100%] h-[200px] object-cover object-center opacity-80 transform -translate-x-1/2 "
                            />
                        </div>

                        <div className="lg:w-3/5 space-y-3">
                            {JSON.parse(customFieldMap?.faqItems).map((faq: any, index: any) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                                >
                                    <button
                                        // onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-4 text-left bg-white"
                                    >
                                        <span
                                            className={`text-sm pr-4 `}
                                        >
                                            {faq.question}
                                        </span>

                                        <svg
                                            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-in-out grid-rows-[1fr] opacity-100`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-4 pb-4 bg-white">
                                                <p className="text-xs text-gray-500 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="  px-4">
                <div style={{ background: 'linear-gradient(94.86deg, #F8F8F8 0.48%, #E3EFF8 100%)' }} className="max-w-4xl rounded-xl py-14 mx-auto text-center">

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Next Great Project Starts With One Conversation </h2>
                    <p className="text-xs text-gray-500 mb-10 max-w-xl mx-auto">
                        Thousands of businesses. 50+ countries 14+ years . we know how to deliver
                    </p>
                    <a href="#" className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm">Start a conversation</a>
                </div>
            </section>
            <Footer />
        </>
    );
}