"use client";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {

    const [showAllServices, setShowAllServices] = useState(false);

    const whatWeDoItems = [
        { label: "Custom Software Development", url: "/services/custom-software-development" },
        { label: "Enterprise Software Development", url: "/services/enterprise-software-development" },
        { label: "Product Development", url: "/services/product-development" },
        { label: "Web Application Development", url: "/services/web-application-development" },
        { label: "Mobile Application Development", url: "/services/mobile-application-development" },
        { label: "Cloud Application Development", url: "/services/cloud-application-development" },

        { label: "Application Support", url: "/services/application-support" },
        { label: "Infrastructure Support", url: "/services/infrastructure-support" },
        { label: "Customer Support", url: "/services/customer-support" },

        { label: "Cloud Infrastructure", url: "/services/cloud-infrastructure" },
        { label: "Hybrid Infrastructure", url: "/services/hybrid-infrastructure" },
        { label: "On-Premises Infrastructure", url: "/services/on-premises-infrastructure" },
        { label: "Integration", url: "/services/integration" },
        { label: "Migration", url: "/services/migration" },
        { label: "DevOps", url: "/services/devops" },

        { label: "Manual Testing", url: "/services/manual-testing" },
        { label: "Automation Testing", url: "/services/automation-testing" },
        { label: "Continuous Testing", url: "/services/continuous-testing" },

        { label: "Digital Marketing", url: "/services/marketing/digital-marketing" },
        { label: "Influential Marketing", url: "/services/marketing/influential-marketing" },
        { label: "Online Reputation Management", url: "/services/marketing/online-reputation-management" },
        { label: "Digital Consultation", url: "/services/marketing/digital-consultation" },
        { label: "Improved ROI", url: "/services/marketing/improved-roi" },

        { label: "Digital Transformation", url: "/services/digital-transformation" },
        { label: "Business Technology Consulting", url: "/services/business-technology-consulting" },
        { label: "Cloud Strategy Consulting", url: "/services/cloud-strategy-consulting" }
    ];

    return (
        <>
            <footer style={{
                background: 'linear-gradient(75.57deg, rgba(66, 145, 206, 0.76) 5.34%, rgba(66, 145, 206, 0.24) 43.05%, rgba(66, 145, 206, 0.21) 65.88%)'
            }} className=" mt-15 text-gray-400 font-sans" role="contentinfo">

                {/* Main footer body */}
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">

                        {/* Left: Brand + contact */}
                        <div>
                            <a href="#" aria-label="TechSaga Home">
                                <img src="/assets/img/logo.webp" className="max-w-[160px] h-auto" />
                            </a>

                            <p className="text-[10px] uppercase tracking-[0.2em]  text-black/80 mb-5">
                                Inspired for Innovation
                            </p>

                            <p className="text-sm leading-relaxed mb-6  text-black/80 max-w-[260px]">
                                Global digital transformation and enterprise enablement partner delivering outcome-driven technology, marketing, and managed services since 2012. Serving enterprises, governments, and institutions across 50+ countries.
                            </p>
                        </div>

                        {/* Right: 4-column nav grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                            {/* Enterprise Services */}
                            <div>
                                <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">
                                    What We Do
                                </h4>

                                <ul className="space-y-1.5 text-[13px]">
                                    {(showAllServices
                                        ? whatWeDoItems
                                        : whatWeDoItems.slice(0, 10)
                                    ).map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                href={item?.url}
                                                className="hover:text-black/60 text-black/80 transition-colors leading-snug block"
                                            >
                                                {item?.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setShowAllServices(!showAllServices)}
                                    className="mt-4 text-[12px] font-semibold text-[#4291CE] hover:underline transition-all"
                                >
                                    {showAllServices ? "Hide" : "View All"}
                                </button>
                            </div>

                            {/* Digital Services */}
                            <div>
                                <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">
                                    Solutions
                                </h4>

                                <ul className="space-y-1.5 text-[13px]">
                                    {[
                                        { label: "Workday Solutions", url: "/solutions/workday" },
                                        { label: "Salesforce Solutions", url: "/solutions/salesforce" },
                                        { label: "ZOHO Solutions", url: "/solutions/zoho" },
                                        { label: "SAP Solutions", url: "/solutions/sap" },
                                        { label: "ERPNext Solutions", url: "/solutions/erpnext" },
                                        { label: "ServiceNOW Solutions", url: "/solutions/servicenow" },
                                        { label: "AWS Solutions", url: "/solutions/aws-amazon-web-services" },
                                        { label: "Contract Consulting", url: "/solutions/contract-consulting" },
                                        { label: "Data Solutions", url: "/solutions/data-solutions" }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item?.url} className="hover:text-black/60 text-black/80 transition-colors leading-snug block">
                                                {item?.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">
                                    Who We Are
                                </h4>

                                <ul className="space-y-1.5 text-[13px]">
                                    {[
                                        {
                                            label: "About Techsaga",
                                            link: "/about-us",
                                        },
                                        {
                                            label: "Careers at Techsaga",
                                            link: "/careers",
                                        },
                                        {
                                            label: "Client Portfolio",
                                            link: "/portfolio",
                                        },
                                        {
                                            label: "Our Team",
                                            link: "/management-team",
                                        },
                                        {
                                            label: "Terms & Conditions",
                                            link: "/terms-and-conditions",
                                        },
                                        {
                                            label: "Privacy Policy",
                                            link: "/privacy-policy",
                                        },
                                        // {
                                        //     label: "Cancellation & Refund Policy",
                                        //     link: "/cancellation-refund-policy",
                                        // },
                                    ].map((item) => (
                                        <li key={item?.label}>
                                            <Link href={item?.link} className="hover:text-black/60 text-black/80 transition-colors leading-snug block">
                                                {item?.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">
                                    Resources
                                </h4>

                                <ul className="space-y-1.5 text-[13px]">
                                    {[{ label: "Case Studies", url: "https://resources.techsaga.co.in/case-study/" },
                                    { label: "Blog & Insights", url: "https://resources.techsaga.co.in/blog/" },
                                    ].map((item) => (
                                        <li key={item?.label}>
                                            <Link href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">
                                                {item?.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Office locations bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-[12px]">
                            {[
                                { city: "Noida, India (HQ)", addr: "B-132, Sector 2, Noida UP 201301" },
                                { city: "Dubai, UAE", addr: "Bay Square, Business Bay, Bldg 7" },
                                { city: "Abu Dhabi, UAE", addr: "Office 115, Level 1, Incubator Bldg" },
                                { city: "London, UK", addr: "82 Uxbridge Road, Hanwell W7 3SU" },
                                { city: "Leander, Texas USA", addr: "2728 Steece Way, TX 78641" },
                                { city: "Victoria, Australia", addr: "106 Anniversary Ave, Wyndham Vale" },
                            ].map((o) => (
                                <div key={o.city}>
                                    <p className=" text-black/80 font-semibold mb-0.5">{o.city}</p>
                                    <p className="text-black/60  text-[11px] leading-snug">{o.addr}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-600">
                        <p>© 2012-2026 Techsaga Corporation. All rights reserved.</p>

                        <div className="flex gap-5">
                            {[{ label: "Privacy Policy", url: "/privacy-policy" }, { label: "Terms of Use", url: "/terms-and-conditions" }].map((item) => (
                                <Link
                                    key={item?.label}
                                    href={item?.url}
                                    className="hover:text-[#4291CE] transition-colors"
                                >
                                    {item?.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer