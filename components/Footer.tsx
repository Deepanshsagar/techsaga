"use client";

import Link from "next/link";
import { useState } from "react";
import PartnerSection from "./PartnerSection";

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
                            {/* className="flex items-center gap-0.5 flex-shrink-0"  */}
                            <Link href="/" aria-label="TechSaga Home">
                                {/* <span className="text-[#4291CE] font-display font-bold text-xl tracking-tight">TECH</span>
                  <span className="font-display font-bold text-xl tracking-tight text-gray-900">SAGA</span> */}
                                <img src="/assets/img/logo.webp" alt="Techsaga logo" className="max-w-[160px] h-auto" />
                            </Link>
                            {/* <p className="text-[10px] uppercase tracking-[0.2em]  text-black/80 mb-5">Inspired for Innovation</p> */}
                            <p className="text-sm leading-relaxed mb-6  text-black/80 max-w-[260px]">
                                Global digital transformation and enterprise enablement partner delivering outcome-driven technology, marketing, and managed services since 2012. Serving enterprises, governments, and institutions across 50+ countries.
                            </p>

                            {/* Contact */}
                            <ul className="space-y-2 text-sm mb-6">
                                <li className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5  text-black/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+919718688880" className="hover:text-black/60 text-black/80 transition-colors">+91 971 868 8880</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5 text-black/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:info@techsaga.co.in" className="hover:text-black/60 text-black/80 transition-colors">info@techsaga.co.in</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5 text-black/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    <a href="https://www.techsaga.co.in" className="hover:text-black/60 text-black/80 transition-colors">www.techsaga.co.in</a>
                                </li>
                            </ul>

                            {/* Social icons */}
                            <div className="flex gap-2">
                                {[
                                    {
                                        label: "LinkedIn",
                                        url: "https://www.linkedin.com/company/techsaga/",
                                        icon: (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 12.97c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H9.38V20h3.38v-6.38c0-1.68.32-3.31 2.4-3.31 2.05 0 2.08 1.92 2.08 3.42V20h3.38v-7.03Z" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        label: "Facebook",
                                        url: "https://www.facebook.com/Techsaga.Corporations/",
                                        icon: (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path d="M13 22v-8h3l1-4h-4v-2c0-1.16.84-2 2-2h2V2h-3c-3.31 0-5 1.79-5 5v3H6v4h3v8h4Z" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        label: "Instagram",
                                        url: "https://www.instagram.com/techsaga/",
                                        icon: (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                               className="w-4 h-4"
                                            >
                                                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3Zm5 2.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5Zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm5.75-3a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25Z" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        label: "Twitter",
                                        url: "https://twitter.com/Techsaga_Corp",
                                        icon: (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.24L6.6 22H3.5l7.24-8.27L1 2h6.15l4.32 5.7L18.9 2Zm-1.07 18h1.7L5.08 3.9H3.25L17.83 20Z" />
                                            </svg>
                                        ),
                                    },
                                ].map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.url}
                                        aria-label={s.label}
                                        className="w-8 h-8 border border-black/10 rounded flex items-center justify-center hover:border-[#4291CE] hover:text-[#4291CE] text-black transition-colors"
                                    >
                                        {/* <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.path} />
                                        </svg> */}
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
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
                                        {
                                            label: "Cancellation & Refund Policy",
                                            link: "/cancellation-and-refund-policy",
                                        },
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
                                            <Link href={item?.url} className="hover:text-black/60 text-black/80 transition-colors leading-snug block">
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

                <PartnerSection />

                {/* Copyright bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-[11px] text-gray-600">
                        <p>© 2012-2026 Techsaga Corporation. All rights reserved.</p>

                        {/* <div className="flex gap-5">
                            {[{ label: "Privacy Policy", url: "/privacy-policy" }, { label: "Terms of Use", url: "/terms-and-conditions" }].map((item) => (
                                <Link
                                    key={item?.label}
                                    href={item?.url}
                                    className="hover:text-[#4291CE] transition-colors"
                                >
                                    {item?.label}
                                </Link>
                            ))}
                        </div> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer