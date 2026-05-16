"use client";

import { useState } from "react";

const Footer = () => {

    const [showAllServices, setShowAllServices] = useState(false);

    const whatWeDoItems = [
        "Software Development",
        "Custom Software Development",
        "Enterprise Software Development",
        "Product Development",
        "Web Application Development",
        "Mobile Application Development",
        "Cloud Application Development",

        "Maintenance and Support",
        "Application Support",
        "Infrastructure Support",
        "Customer Support",

        "Infrastructure",
        "Cloud Infrastructure",
        "Hybrid Infrastructure",
        "On-Premises Infrastructure",
        "Integration",
        "Migration",
        "DevOps",

        "Testing",
        "Manual Testing",
        "Automation Testing",
        "Continuous Testing",

        "Marketing Solutions",
        "Digital Marketing",
        "Influential Marketing",
        "Online Reputation Management",
        "Digital Consultation",
        "Improved ROI",

        "Advisory",
        "Digital Transformation",
        "Business Technology Consulting",
        "Cloud Strategy Consulting"
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
                                            <a
                                                href="#"
                                                className="hover:text-black/60 text-black/80 transition-colors leading-snug block"
                                            >
                                                {item}
                                            </a>
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
                                        "Workday Solutions",
                                        "Salesforce Solutions",
                                        "ZOHO Solutions",
                                        "SAP Solutions",
                                        "ERPNext Solutions",
                                        "ServiceNOW Solutions",
                                        "AWS Solutions",
                                        "Contract Consulting",
                                        "Data Solutions"
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">
                                                {item}
                                            </a>
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
                                        "About Techsaga",
                                        "Careers at Techsaga",
                                        "Client Portfolio",
                                        "Our Team",
                                        "Terms & Conditions",
                                        "Privacy Policy",
                                        "Cancellation & Refund Policy"
                                    ].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">
                                                {item}
                                            </a>
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
                                    {[
                                        "Case Studies",
                                        "Blog & Insights",
                                    ].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">
                                                {item}
                                            </a>
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
                        <p>© 2012–2026 Techsaga Corporation. All rights reserved.</p>

                        <div className="flex gap-5">
                            {["Privacy Policy", "Terms of Use"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="hover:text-[#4291CE] transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer