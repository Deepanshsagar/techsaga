const Footer = () => {
    return (
        <>
            <footer style={{
                background: 'linear-gradient(75.57deg, rgba(66, 145, 206, 0.76) 5.34%, rgba(66, 145, 206, 0.24) 43.05%, rgba(66, 145, 206, 0.21) 65.88%)'
            }} className=" mt-15 text-gray-400 font-sans" role="contentinfo">

                {/* Top marquee bar */}
                {/* <div className="bg-[#4291CE] text-white text-xs py-2 overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-marquee">
              Building Trust &nbsp;·&nbsp; Enabling Transformation &nbsp;·&nbsp; Leading Globally &nbsp;&nbsp;&nbsp;&nbsp;
              Building Trust &nbsp;·&nbsp; Enabling Transformation &nbsp;·&nbsp; Leading Globally &nbsp;&nbsp;&nbsp;&nbsp;
              Building Trust &nbsp;·&nbsp; Enabling Transformation &nbsp;·&nbsp; Leading Globally &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div> */}

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
                            <p className="text-[10px] uppercase tracking-[0.2em]  text-black/80 mb-5">Inspired for Innovation</p>
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
                                    { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                                    { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                                    { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a1 1 0 011 1v9a1 1 0 01-1 1h-11a1 1 0 01-1-1v-9a1 1 0 011-1z" },
                                    { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
                                ].map((s) => (
                                    <a
                                        key={s.label}
                                        href="#"
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
                                <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">Enterprise Services</h4>
                                <ul className="space-y-1.5 text-[13px]">
                                    {[
                                        "Workday Implementation", "HCM & Core HR", "Financial Management",
                                        "Workday Integrations", "Post Go-Live Support", "",
                                        "Salesforce Services", "Sales & Service Cloud", "Marketing Cloud",
                                        "Custom Development", "",
                                        "AWS Cloud Solutions", "Cloud Migration", "DevOps & CI/CD", "",
                                        "SAP Implementation", "SAP S/4HANA", "SAP SuccessFactors", "",
                                        "ERPNext / Frappe", "", "AI & ML Solutions", "", "Data Warehousing", "", "Multi-Cloud Strategy"
                                    ].map((item, i) =>
                                        item === "" ? <li key={i} className="h-2" /> : (
                                            <li key={i}><a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">{item}</a></li>
                                        )
                                    )}
                                </ul>
                            </div>

                            {/* Digital Services */}
                            <div>
                                <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">Digital Services</h4>
                                <ul className="space-y-1.5 text-[13px]">
                                    {[
                                        "Digital Marketing", "SEO & SEM", "Social Media Marketing",
                                        "Content Marketing", "Email / WhatsApp", "",
                                        "Advertising Services", "Paid Media Planning", "Production & Design",
                                        "Online Reputation Mgmt", "",
                                        "Performance Marketing", "",
                                        "Sales Support & CRM", "Lead Generation", "CRO", "Marketing Automation", "",
                                        "PR & Crisis Management", "",
                                        "Influencer Marketing", "",
                                        "Event Management", "",
                                        "Training & Workshops"
                                    ].map((item, i) =>
                                        item === "" ? <li key={i} className="h-2" /> : (
                                            <li key={i}><a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">{item}</a></li>
                                        )
                                    )}
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">Company</h4>
                                <ul className="space-y-1.5 text-[13px]">
                                    {[
                                        "About Techsaga", "Mission & Vision", "Leadership Team",
                                        "Our Values", "Global Presence", "Technology Partners",
                                        "Agency Partners", "Certifications", "Awards & Recognition",
                                        "CSR Initiatives", "Media & Press", "Brand Guidelines",
                                        "Investor Relations"
                                    ].map((item) => (
                                        <li key={item}><a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">{item}</a></li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="hover:text-black/60 text-black/80 font-semibold text-[11px] uppercase tracking-[0.15em] mb-5">Resources</h4>
                                <ul className="space-y-1.5 text-[13px]">
                                    {[
                                        "Case Studies", "Blog & Insights", "Whitepapers",
                                        "Webinars & Events", "Agency Profile (PDF)", "Workday Deck",
                                        "FAQs", "Client Portal Login", "Request a Proposal",
                                        "Schedule a Demo", "Newsletter Signup", "Careers",
                                        "Life at Techsaga"
                                    ].map((item) => (
                                        <li key={item}><a href="#" className="hover:text-black/60 text-black/80 transition-colors leading-snug block">{item}</a></li>
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

                {/* Partner network bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4">
                        <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-[10px] uppercase tracking-widest text-gray-500">
                            {[
                                "Google Advertising Partner", "SEMrush Agency Network",
                                "Klaviyo Agency Partner", "Salesforce Partner",
                                "Zoho CRM Partner", "AWS Partner Network",
                                "DAN Digital Agency Network", "DesignRush Agency Network",
                                "InviteReferrals Partner",
                            ].map((p) => (
                                <span key={p} className="flex items-center gap-1">
                                    <span className="text-[#4291CE]">•</span> {p}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-600">
                        <p>© 2012–2025 Techsaga Corporation. All rights reserved.</p>
                        <div className="flex gap-5">
                            {["Privacy Policy", "Terms of Use"].map((item) => (
                                <a key={item} href="#" className="hover:text-[#4291CE] transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-block;
              animation: marquee 20s linear infinite;
            }
          `}</style>
            </footer>
        </>
    )
}

export default Footer