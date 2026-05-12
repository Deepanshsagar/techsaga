"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

const CareerPage = () => {
    return (
        <>
            <Header />
            <section className="relative min-h-[520px] flex items-center bg-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/assets/img/Indesterisbg.png"
                        alt="professionals collaborating"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" /> */}
                </div>

                <div className="relative flex justify-end items-center z-10 max-w-7xl mx-auto px-6 lg:px-6 py-24 pt-30 w-full">
                    <div className="w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                            Techsaga<br />
                            Unlock the Power of <br /><span className="text-[#4291CE]">Dedicated Developers</span>
                        </h1>
                        <p className="text-white/60 text-base leading-relaxed mb-8">
                            At Techsaga we offer top-tier dedicated developers who are committed to bringing your ideas to life and delivering exceptional results. By hiring dedicated developers, you gain access to a specialized team that is solely focused on your project.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-[#4291CE] text-white px-6 py-3 rounded font-semibold hover:bg-[#347eb8] transition-colors text-sm"
                            >
                                Connect with expert →
                            </a>
                            <a
                                href="#cases"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-white transition-colors text-sm"
                            >
                                View Case Studies
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <img src="/assets/img/diverse-business.png" alt="" className="" />
                    </div>
                </div>
            </section>
            <section style={{background: "radial-gradient(101.53% 101.39% at 2.5% 1.32%, #F3F3F3 17.6%, rgba(192, 218, 239, 0.3) 34.05%, rgba(98, 164, 214, 0.05) 51.01%, rgba(255, 255, 255, 0.91) 81.59%)"}}>
                <div className="flex gap-6  p-20">
                    <div className="w-1/2">
                        <h1 className="font-bold text-4xl">Delivering Reliable IT Solutions Through Dedicated Expertise</h1>
                        <p className="mt-4 mb-0">Our developers have a deep understanding of various technologies and frameworks, ensuring that they can tackle any challenge with expertise and precision. Whether you need web development, mobile app development, or custom software solutions, our dedicated developers have got you covered.</p>
                        <p className="mt-4 mb-0">When you hire dedicated developers from Techsaga, you not only gain access to their technical proficiency but also benefit from their commitment and seamless collaboration. Our developers become an extension of your in-house team, working closely with you to understand your vision, goals, and requirements. They become invested in your success and strive to exceed your expectations.</p>
                    </div>
                    <div className="w-1/2">
                        <div className="p-12 shadow-lg bg-white rounded-lg mb-15 " >
                            <h1 className="font-bold text-2xl">Techsaga: Empowering Success with Dedicated Developers</h1>
                            <p className="my-3">Techsaga provides dedicated developers for web, mobile, and custom software development, helping businesses achieve reliable, scalable, and high-quality digital solutions through expert support and seamless collaboration.</p>
                            <div className="flex gap-20 mt-5">
                                <div>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Web and mobile app development</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Smooth team collaboration</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Tailored development services</p>
                                </div>
                                <div>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Custom software solutions</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Full Stack, Laravel, and PHP experts</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Industry-standard coding practices</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-12 shadow-lg bg-white rounded-lg  mb-15">
                            <h1 className="font-bold text-2xl">Driving Business Growth with Expert Developers...</h1>
                            <p className="my-3">Techsaga offers dedicated developers with flexible hiring models, helping businesses complete projects efficiently with high-quality, cost-effective solutions and transparent support.</p>
                            <div className=" gap-20 mt-5">
                                <div>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Flexible engagement for short or long-term projects</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Timely and high-quality development services</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Daily, weekly, or monthly reporting options</p>
                                </div>
                               
                            </div>
                        </div>
                        <div className="p-12 shadow-lg bg-white rounded-lg  mb-15">
                            <h1 className="font-bold text-2xl">Boost Development Capacity with Expert Developers</h1>
                            <p className="my-3">At Techsaga, our dedicated developers specialize in Full Stack, Laravel, PHP, iOS, Android, WooCommerce, and Shopify development, delivering tailored solutions that boost brand growth, conversions, and customer satisfaction.</p>
                            <div className="flex gap-20 mt-5">
                                <div>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Full Stack Developers</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />PHP Developers</p>
                                </div>
                                <div>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Laravel Developers</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Mobile App Developers</p>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="p-12 shadow-lg bg-white rounded-lg  mb-15">
                            <h1 className="font-bold text-2xl">Get Reliable Tech Expertise with a Dedicated Development Team</h1>
                            <p className="my-3">Techsaga offers skilled dedicated developers with expertise in MongoDB, ExpressJS, AngularJS, and NodeJS to support businesses with reliable and scalable development solutions. Our experienced team works closely with clients, providing flexible hiring options and transparent collaboration.</p>
                            <div className="flex gap-20 mt-5">
                                <div>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Experts in MongoDB, ExpressJS, AngularJS, and NodeJS</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Flexible hourly and monthly hiring models</p>
                                    <p className="mb-2 text-black/60 flex gap-2"><img src="/assets/img/checkedicon.png" className="w-5 h-5" alt="" />Front-end and back-end development support</p>
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

                        <a href="mailto:hello@techsaga.com"
                            className="group bg-[linear-gradient(135deg,_#076099_0%,_#3379B3_100%)] hover:bg-white border border-blue-300 text-white hover:text-[#1e3a5f] text-sm sm:text-base font-semibold px-7 py-4 rounded-lg flex items-center gap-3 transition-all duration-300">

                            Get In Touch

                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.2">

                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>

                        </a>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default CareerPage