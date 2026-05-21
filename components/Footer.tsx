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
                            <a href="#" aria-label="TechSaga Home">
                                {/* <span className="text-[#4291CE] font-display font-bold text-xl tracking-tight">TECH</span>
                  <span className="font-display font-bold text-xl tracking-tight text-gray-900">SAGA</span> */}
                                <img src="/assets/img/logo.webp" className="max-w-[160px] h-auto" />
                            </a>
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
                                    { label: "LinkedIn", url: "https://www.linkedin.com/company/techsaga/", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                                    { label: "Facebook", url: "https://www.facebook.com/Techsaga.Corporations/", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                                    { label: "Instagram", url: "https://www.instagram.com/techsaga/", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a1 1 0 011 1v9a1 1 0 01-1 1h-11a1 1 0 01-1-1v-9a1 1 0 011-1z" },
                                    { label: "Twitter", url: "https://twitter.com/Techsaga_Corp", path: "M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.24L6.6 22H3.5l7.24-8.27L1 2h6.15l4.32 5.7L18.9 2zm-1.07 18h1.7L5.08 3.9H3.25L17.83 20z" },
                                ].map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.url}
                                        aria-label={s.label}
                                        className="w-8 h-8 border border-black/10 rounded flex items-center justify-center hover:border-[#4291CE] hover:text-[#4291CE] text-black transition-colors"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.path} />
                                        </svg>
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