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
            <footer
                style={{
                    background:
                        "linear-gradient(75.57deg, rgba(66, 145, 206, 0.76) 5.34%, rgba(66, 145, 206, 0.24) 43.05%, rgba(66, 145, 206, 0.21) 65.88%)",
                }}
                className="mt-15 text-gray-400 font-sans"
                role="contentinfo"
            >
                {/* Main footer body */}
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
                        {/* Left: Brand + contact */}
                        <div>
                            <a href="#" aria-label="TechSaga Home">
                                <img
                                    src="/assets/img/logo.webp"
                                    className="max-w-[160px] h-auto"
                                    alt="TechSaga Logo"
                                />
                            </a>

                            <p className="text-[10px] uppercase tracking-[0.2em] text-black/80 mb-5">
                                Inspired for Innovation
                            </p>

                            <p className="text-sm leading-relaxed mb-6 text-black/80 max-w-[260px]">
                                Global digital transformation and enterprise
                                enablement partner delivering outcome-driven
                                technology, marketing, and managed services
                                since 2012.
                            </p>

                            {/* Contact */}
                            <ul className="space-y-2 text-sm mb-6">
                                <li className="flex items-center gap-2">
                                    <svg
                                        className="w-3.5 h-3.5 text-black/80 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>

                                    <a
                                        href="tel:+919718688880"
                                        className="hover:text-black/60 text-black/80 transition-colors"
                                    >
                                        +91 971 868 8880
                                    </a>
                                </li>

                                <li className="flex items-center gap-2">
                                    <svg
                                        className="w-3.5 h-3.5 text-black/80 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>

                                    <a
                                        href="mailto:info@techsaga.co.in"
                                        className="hover:text-black/60 text-black/80 transition-colors"
                                    >
                                        info@techsaga.co.in
                                    </a>
                                </li>

                                <li className="flex items-center gap-2">
                                    <svg
                                        className="w-3.5 h-3.5 text-black/80 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                        />
                                    </svg>

                                    <a
                                        href="https://www.techsaga.co.in"
                                        className="hover:text-black/60 text-black/80 transition-colors"
                                    >
                                        www.techsaga.co.in
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Right Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {/* What We Do */}
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
                                    onClick={() =>
                                        setShowAllServices(!showAllServices)
                                    }
                                    className="mt-2 text-[12px] font-semibold text-[#4291CE] cursor-pointer transition-all"
                                >
                                    {showAllServices
                                        ? "View Less"
                                        : "View All"}
                                </button>
                            </div>

                            {/* Solutions */}
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
                                        "Data Solutions",
                                    ].map((item) => (
                                        <li key={item}>
                                            <a
                                                href="#"
                                                className="hover:text-black/60 text-black/80 transition-colors leading-snug block"
                                            >
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
                                        "Cancellation & Refund Policy",
                                    ].map((item) => (
                                        <li key={item}>
                                            <a
                                                href="#"
                                                className="hover:text-black/60 text-black/80 transition-colors leading-snug block"
                                            >
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
                                            <a
                                                href="#"
                                                className="hover:text-black/60 text-black/80 transition-colors leading-snug block"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-600">
                        <p>
                            © 2012–2025 Techsaga Corporation. All rights
                            reserved.
                        </p>

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
    );
};

export default Footer;