"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const Industries = () => {
    return (
        <>
            <Header />
            <section style={{ backgroundImage: "url('/assets/img/Indesterisbg.png')" }} className="hero-bg bg-repeat  bg-cover relative overflow-hidden py-16 md:py-16">


                <div className="max-w-[1140px] min-h-[550px]  mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 relative">

                        <h1 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold  mb-6 text-white !leading-[50px]">
                            Scalable
                            <span className=" bg-clip-text text-[#4291CE]">E-Commerce <br /> Development</span>
                            <br />Solutions
                        </h1>
                        <p className="text-white !leading-[26px]   mb-8">
                            Discover the ultimate in luxury shopping with an e-commerce app and enjoy a seamless shopping experience. Shop designer items from the world's best brands at your fingertips.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm">Get Started <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative ">
                            <img width="100%" src="/assets/img/induster.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-[1140px] mx-auto px-4 flex flex-col lg:flex-row  gap-12">

                    <div className="lg:w-1/2">

                        <h2 className="text-3xl font-extrabold text-[#0b1535] mb-5 leading-tight">
                            Transforming Online Retail: Our Pioneering eCommerce App Development Services
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-5 text-sm sm:text-base">
                            Experience the transformation of digital retail with our world-class eCommerce app development service. We customize robust platforms for seamless transactions, tailoring every feature for an intuitive user experience. Our skilled developers utilize cutting-edge technology, designing from product browsing to checkout with the end-users convenience in mind.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                            Prioritizing security, we incorporate top-tier encryption, ensuring the safety of customer data and transactions. Our scalable apps, integrated with multiple payment gateways, are primed for business growth. We enhance your digital retail journey, creating enticing product displays and efficient order systems, merging innovation, function, and simplicity in our eCommerce apps.</p>

                    </div>

                    <div id="contact" className="lg:w-1/2 flex justify-center px-7">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 w-full">
                            <h3 className="text-[#0b1535] mb-4 text-lg font-semibold">Discuss Your Project</h3>
                            <form className="space-y-4" >
                                <div className="flex gap-3">
                                    <div className="flex-1">
                                        <input type="text" placeholder="First Name" className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50" />
                                    </div>
                                    <div className="flex-1">
                                        <input type="text" placeholder="Last Name" className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50" />
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-1">
                                        <input type="email" placeholder="Email Address" className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50" />
                                    </div>
                                    <div className="flex-1">
                                        <input type="tel" placeholder="Phone Number" className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50" />
                                    </div>
                                </div>

                                <div>
                                    <textarea rows={3} placeholder="Your project needs" className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50 resize-none"></textarea>
                                </div>
                                <div className="border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-3 bg-gray-50">
                                    <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                    <span className="text-xs text-gray-500">I'm not a robot</span>
                                    <div className="ml-auto text-right">
                                        <div className="text-xs text-gray-300 font-bold">reCAPTCHA</div>
                                        <div className="text-[10px] text-gray-300">Privacy · Terms</div>
                                    </div>
                                </div>
                                <button type="submit" className="btn-primary w-full text-white font-semibold py-3 rounded-lg text-sm shadow-md">
                                    Tell Us What You Need. →
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0">
                    <ul className="flex flex-wrap gap-3 mt-2">
                    </ul>
                </div>
            </section>


            <section className="py-20 bg-[#4291CE1A] mb-14 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   before:content-[''] 
  before:absolute 
  before:w-[200px] 
  before:h-[200px]

  before:bg-cover 
  before:bg-center 
  before:right-[0px]
  before:top-0
  before:z-10
  before:top-020 before:bg-[url('/assets/img/effect1.png')] before:bg-cover before:bg-center">
                    <div className=" fade-in">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1535] leading-tight">
                            Biggest Challenges in the E-Commerce<br className="hidden sm:block" /> Industry Today
                        </h2>
                        <p className="text-gray-400 mt-3 text-sm max-w-xl">
                            Developing an e-commerce website is complex and challenging, involving multiple intricacies and hurdles that need to be overcome for successful implementation and operation.
                        </p>
                    </div>
                    <div className=" py-10">

                        <div className="grid grid-cols-1 sm:grid-cols-2">

                            <div className="card-hover ps-0 fade-in p-6">
                                <div className="flex items-start gap-4">
                                    <div className="icon-circle">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0b1535] mb-2">Global and Local Competition</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            In e-commerce, businesses face intense global and local competition from giants and traditional retailers. Accessibility enables small businesses to compete, necessitating differentiation through unique products, exceptional service, SEO, localized marketing, and a strong online presence. Balancing global ambitions with local market nuances is a challenge in this competitive landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-hover p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="icon-circle">
                                        <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0b1535] mb-2">Building Customer Trust</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Building trust in e-commerce involves transparent communication, secure payments, data protection, and responsive support. Customer reviews, guarantees, clear policies, user-friendly websites, and timely delivery enhance trust. Regular updates and accurate information foster long-term relationships and repeat business.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-hover ps-0 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="icon-circle">
                                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0b1535] mb-2">Marketing and Customer Acquisition</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Successful e-commerce relies on effective marketing and customer acquisition. SEO, social media, email campaigns, and influencers drive website traffic. Engaging content, personalized offers, and targeted ads convert potential customers. Analyzing behavior and optimizing conversion funnels maximize acquisition. Constant monitoring and refining ensure competitiveness in e-commerce.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-hover p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="icon-circle">
                                        <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0b1535] mb-2">Customer Service</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Customer service is vital in e-commerce, addressing inquiries and concerns promptly through live chat, email, or phone. Courteous, empathetic, and knowledgeable support builds loyalty. Timely updates, proactive communication, and hassle-free returns enhance the experience. Monitoring feedback, implementing improvements, and training representatives ensure ongoing excellence in customer service.
                                        </p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>

            <section
                style={{ background: "linear-gradient(86.93deg, #D9D9D9 1.32%, #FFFFFF 50.09%, #4291CE 98.86%);" }}
                className="border border-[#B7D2E8] max-w-7xl min-w-5xl mx-auto py-14 relative mb-20 rounded-2xl"
                aria-label="Join the TechSaga Team"
            >

                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">


                    <h2 className="font-display text-xl lg:text-xl font-extrabold text-black mb-4 !leading-[35px] ">
                        Need a Proposal? Let's Discuss the<br />
                        <span className="uppercase"> Project!</span>
                    </h2>

                    <a
                        href="#"
                        className="inline-block bg-white/5 px-[200px] py-3 rounded-md shadow-[inset_-1px_-1px_2px_1px_#ffffff,inset_1px_1px_2px_1px_#dfdfdfbd] border border-white/50 mt-4 text-[#4291CE] font-bold text-[15px] transition-all"
                    >
                        Explore Career Page
                    </a>

                </div>

            </section>

            {/* <section className="bg-gray-50 py-14 px-4">
                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's Get Started: Collaborating On Your Project</h2>
                    <p className="text-xs text-gray-500 mb-10 max-w-xl mx-auto">
                        Flexible Budget, Customised Approach. Choose What Works For You. With Collaboration Seamlessly To Meet<br />Your Preferences And Ensures A Successful Partnership.
                    </p>

                    <div className="flex flex-col md:flex-row items-start justify-center gap-0 md:gap-0 relative">
                        <div className="flex flex-col items-center flex-1 px-4">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-8">
                                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 mb-2">TRANSPARENT AND FIXED PRICING</h4>
                            <p className="text-xs text-gray-500 leading-relaxed text-center">With transparent and fixed pricing, we outline your deliverables, set clear project milestones, and agree on a shared timeline. We keep you updated, meet your needs and always stay on budget.</p>
                        </div>


                        <div className="flex flex-col items-center flex-1 px-4">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-8">
                                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 mb-2">ADAPTIVE HOURLY ENGAGEMENT</h4>
                            <p className="text-xs text-gray-500 leading-relaxed text-center">Our Adaptive Hourly Engagement offers flexible collaboration based on project needs, optimising resources and maximising productivity with agile methodologies.</p>
                        </div>



                        <div className="flex flex-col items-center flex-1 px-4">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-8">
                                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 mb-2">DIRECT RECRUITMENT</h4>
                            <p className="text-xs text-gray-500 leading-relaxed text-center">Our Direct Recruitment offers by providing the tools, resources and expertise needed to efficiently and accurately recruit talent without intermediaries.</p>
                        </div>

                    </div>
                </div>
            </section> */}
            <div className="bg-[#F6F6F6]">
            <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

                <div className="flex items-start justify-between flex-wrap gap-6">

                    <div>
                        <h2 className="font-display text-[34px]  leading-none font-semibold tracking-[-2px] text-[#111111]">
                            E-Commerce Solution
                        </h2>

                        <div className="w-16 h-[4px] bg-[#3B82F6] rounded-full mt-5"></div>
                    </div>

                    <button
                        className="group flex items-center gap-0 rounded-full pl-2  py-2 bg-transparent"
                    >

                        <div className="w-[64px] h-[64px] absolute  -ml-3 rounded-full bg-[#6EA8E8] flex items-center justify-center transition-all duration-300 group-hover:scale-110">

                        </div>

                        <div className="flex items-center relative z-10 gap-4">

                            <span className="text-[18px] font-semibold text-black tracking-[-0.3px]">
                                Let's Get Started
                            </span>

                            <span className="text-2xl transition-all duration-300 group-hover:translate-x-1">
                                →
                            </span>

                        </div>

                    </button>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-16">

                    <div className="group relative overflow-hidden rounded-[18px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">

                        <img
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
                            alt=""
                            className="w-full h-[300px] object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-[#0D2B63]/85 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">

                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 flex items-center justify-between opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">

                            <div>

                                <p className="uppercase tracking-[3px] text-white/60 text-[10px] mb-3">
                                    Beauty & Cosmetics
                                </p>

                                <h3 className="font-display text-white text-[24px] leading-none font-semibold">
                                    Foreversz Store
                                </h3>

                            </div>

                            <button className="w-[58px] h-[58px] rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-2xl shadow-xl transition-all duration-300 hover:rotate-[-45deg] hover:scale-110">

                                →

                            </button>

                        </div>

                    </div>

                    <div className="group relative overflow-hidden rounded-[18px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">

                        <img
                            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
                            alt=""
                            className="w-full h-[300px] object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-[#0D2B63]/85 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">

                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 flex items-center justify-between opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">

                            <div>

                                <p className="uppercase tracking-[3px] text-white/60 text-[10px] mb-3">
                                    Fashion & Apparel
                                </p>

                                <h3 className="font-display text-white text-[24px] leading-none font-semibold">
                                    Zuhd Store
                                </h3>

                            </div>

                            <button className="w-[58px] h-[58px] rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-2xl shadow-xl transition-all duration-300 hover:rotate-[-45deg] hover:scale-110">

                                →

                            </button>

                        </div>

                    </div>

                </div>

            </section>
            </div>

            <section className=" mt-10 px-4">
                <div style={{ background: 'linear-gradient(94.86deg, #F8F8F8 0.48%, #E3EFF8 100%)' }} className="max-w-4xl rounded-xl py-14 mx-auto text-center">

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Next Great Project Starts With One Conversation </h2>
                    <p className="text-xs text-gray-500 mb-10 max-w-xl mx-auto">
                        Thousands of businesses. 50+ countries 13+ years . we know how to deliver
                    </p>
                    <a href="#" className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm">Start a conversation</a>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Industries