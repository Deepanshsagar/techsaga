// app/[category]/[service]/page.tsx

import connectDB from "@/app/lib/mongodb";
import Service from "@/app/models/Service";
import "@/app/models/Category";
import Header from "@/components/Header";
import SplitContainer from "@/components/SplitContainer";
import { SectionTag } from "@/app/utils/utils";

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
    console.log(customFieldMap?.benefitsGrid);
    console.log(typeof customFieldMap?.benefitsGrid);
    console.log(Array.isArray(customFieldMap?.benefitsGrid));

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
                        (item: any, index: number) => (
                            <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                                    <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 mb-2">{item?.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{item?.description}</p>
                            </div>
                        ))}


                    {/* <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Data Security & Confidentiality</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Custom software can be designed with robust security measures specific to your organization, ensuring the confidentiality and integrity of your data.</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Competitive Advantage</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Tailored software provides unique features and functionalities that differentiate your business from competitors, allowing you to offer better services, and improve customer satisfaction, giving an edge in your industry.</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Integration Capabilities</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Enabling smooth data flow and communication between departments, eliminates data silos, and provides a unified operation.</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Cost Efficiency</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">It eliminates multiple license needs, reduces manual processes and minimizes the risk of costly errors or inefficiencies.</p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <svg className="w-5 h-5 text-[#4291CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Agile Approach</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Through iterative development cycles, allows to build and test/iterate prototypes, gather feedback, and refine the software to ensure it meets your expectations.</p>
                    </div> */}

                </div>
            </section>

        </>
    );
}