"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link";
import { useRef, useState } from "react";

const CareerPage = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [showThankYouPopup, setShowThankYouPopup] = useState(false);

    const [resume, setResume] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!resume) {
            alert("Please upload your resume");
            return;
        }

        try {
            setLoading(true);

            const data = new FormData();

            data.append("firstName", formData.firstName);
            data.append("lastName", formData.lastName);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("message", formData.message);
            data.append("resume", resume);

            const response = await fetch("/api/career", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (response.ok) {
                // alert("Application submitted successfully");
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
                setShowThankYouPopup(true)

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });

                setResume(null);
            } else {
                // alert(result.message || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to submit form");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <Header />

            <section
                className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
                style={{
                    backgroundImage: "url('/assets/img/career-banner.png')",
                }}
            >
                <div className="relative max-w-7xl mx-auto px-4 w-full">
                    <div className="">
                        <div className="w-full lg:w-1/2  lg:text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                Pioneer Next-Generation Software Solutions with TechSaga
                            </h1>

                            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                                Architect robust platforms, optimize cloud infrastructure, and drive global digital transformations. Grow your career in an environment built on technical excellence, integrity, and deep engineering.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 bg-[#fff] text-[#4291CE] px-6 py-3 rounded font-semibold hover:bg-[#347eb8] hover:text-[#fff] transition-colors text-sm"
                                >
                                    Apply Now →
                                </Link>

                                {/* <Link
                                    href="https://resources.techsaga.co.in/case-study/"
                                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#4291CE] transition-colors text-sm"
                                >
                                    View Case Studies
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-[1140px] mx-auto px-4 flex flex-col lg:flex-row  gap-12">

                    <div className="lg:w-1/2">

                        <h2 className="text-3xl font-extrabold text-[#0b1535] mb-5 leading-tight">
                            Engineered for Growth. Cultivated for Excellence.

                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-5 text-sm sm:text-base">
                            At TechSaga, we bridge complex business challenges with scalable, high-performance technology. As a global digital transformation partner, our success is driven by domain experts focused on algorithmic precision, clean code, and strategic market growth.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                            We foster a culture of continuous learning, clear technical ownership, and operational transparency. Joining our teams offers direct exposure to cross-functional methodologies and international client consultation. We equip you with the modern tools, frameworks, and autonomy needed to solve high-velocity challenges and scale global systems.
                        </p>

                    </div>

                    <div id="contact" className="lg:w-1/2 flex justify-center px-7">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 w-full">
                            <h3 className="text-[#0b1535] mb-4 text-lg font-semibold">Discuss Your Project</h3>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="flex gap-3">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex-1">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        placeholder="Executive Cover Note"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50 resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Upload Resume
                                    </label>

                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        required
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50"
                                    />

                                    <p className="text-xs text-gray-500 mt-1">
                                        Accepted formats: PDF, DOC, DOCX
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-primary w-full text-white font-semibold py-3 rounded-lg text-sm shadow-md disabled:opacity-70"
                                >
                                    {loading ? "Submitting..." : "Apply Now →"}
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

            {/* Content Section */}
            <section
                style={{
                    background:
                        "radial-gradient(101.53% 101.39% at 2.5% 1.32%, #F3F3F3 17.6%, rgba(192, 218, 239, 0.3) 34.05%, rgba(98, 164, 214, 0.05) 51.01%, rgba(255, 255, 255, 0.91) 81.59%)",
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Left Text */}
                        <div className="w-full lg:w-1/2">
                            <div className="sticky top-25">
                                <h1 className="font-bold text-3xl sm:text-4xl leading-tight">
                                    Delivering Reliable IT Solutions Through Dedicated Expertise
                                </h1>

                                <p className="mt-6 text-gray-700 leading-relaxed">
                                    Our developers have a deep understanding of various technologies and frameworks, ensuring that they can tackle any challenge with expertise and precision. Whether you need web development, mobile app development, or custom software solutions, our dedicated developers have got you covered.
                                </p>

                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    When you hire dedicated developers from Techsaga, you not only gain access to their technical proficiency but also benefit from their commitment and seamless collaboration. Our developers become an extension of your in-house team, working closely with you to understand your vision, goals, and requirements. They become invested in your success and strive to exceed your expectations.
                                </p>
                            </div>
                        </div>

                        {/* Right Cards */}
                        <div className="w-full lg:w-1/2 space-y-6">

                            {/* Card 1 */}
                            <div className="p-6 sm:p-8 shadow-lg bg-white rounded-lg">
                                <h1 className="font-bold text-xl sm:text-2xl">
                                    Our Foundational Principles
                                </h1>

                                <p className="mb-4 mt-2 text-gray-600">
                                    The operational frameworks that govern our delivery and define our workplace expectations.
                                </p>

                                <div className="gap-6">
                                    <div className="space-y-3">
                                        <p className="flex gap-2 text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Perceptive Learning: Mastering new tech to optimize delivery.
                                        </p>

                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Uncompromising Quality: Strict adherence to clean coding standards.
                                        </p>

                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Absolute Integrity: Total transparency, privacy, and accountability.
                                        </p>
                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Synergistic Teamwork: Seamless cross-functional and client collaboration.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-6 sm:p-8 shadow-lg bg-white rounded-lg">
                                <h1 className="font-bold text-xl sm:text-2xl">
                                    Empowering Global Innovators
                                </h1>

                                <p className="mb-4 mt-2 text-gray-600">
                                    Powering digital transformation across Asia, Europe, and the GCC region with international engineering standards and cross-border project delivery.
                                </p>

                                <div className="gap-6">
                                    <div className="space-y-3">
                                        <p className="flex gap-2 text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Global Exposure
                                        </p>

                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Continuous Upskilling
                                        </p>

                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Performance-Driven Progression
                                        </p>
                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Collaborative Ecosystem
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-6 sm:p-8 shadow-lg bg-white rounded-lg">
                                <h1 className="font-bold text-xl sm:text-2xl">
                                    Connect with Our Executive Talent Pool
                                </h1>

                                <p className="mb-4 mt-2 text-gray-600">
                                    Our talent acquisition team routinely reviews all speculative profiles against emerging project requirements.
                                </p>

                                <div className="gap-6">
                                    <div className="space-y-3">
                                        <p className="flex gap-2 text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            You send: Your professional credentials.
                                        </p>

                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            We review: Your skills and experience.
                                        </p>

                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            We match: You with emerging workstreams.
                                        </p>
                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            We connect: To discuss future opportunities.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="p-6 sm:p-8 shadow-lg bg-white rounded-lg">
                                <h1 className="font-bold text-xl sm:text-2xl">
                                    Initiate Your Profile Submission
                                </h1>

                                <p className="mb-4 mt-2 text-gray-600">
                                    Ensure all submitted technical documentation, portfolio links, and employment histories are accurate and current.
                                </p>

                                <div className="gap-6">
                                    <div className="space-y-3">
                                        <p className="flex gap-2 text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Primary HR Channels: hr@techsaga.co.in
                                        </p>

                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Talent Acquisition Desk: +91 120 432 9484
                                        </p>

                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            LinkedIn Careers Page: https://in.linkedin.com/company/techsaga
                                        </p>
                                        <p className="flex gap-2  text-sm text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-4 h-4"
                                                alt=""
                                            />
                                            Support Hours: Monday to Friday, 10.00 AM – 7.00 PM IST.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-6 pb-14">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[linear-gradient(268.56deg,_#BAD7ED_0.69%,_#D2E5F3_37.44%,_#6EABD9_55.88%,_#4291CE_98.95%)] rounded-2xl px-6 sm:px-10 lg:px-16 py-10 sm:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

                        <div>
                            <h3 className="text-white text-2xl sm:text-3xl font-bold uppercase leading-tight">
                                Got Questions? We've Got Answers!
                            </h3>

                            <p className="text-blue-100 text-sm sm:text-base mt-3 tracking-wide uppercase">
                                Drop an email, we will respond shortly!
                            </p>
                        </div>

                        <Link
                            href="/contact-us"
                            className="group bg-[linear-gradient(135deg,_#076099_0%,_#3379B3_100%)] border border-blue-300 text-white text-sm sm:text-base font-semibold px-7 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            {showThankYouPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative animate-[fadeIn_.3s_ease]">

                        <button
                            onClick={() => setShowThankYouPopup(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
                        >
                            ×
                        </button>

                        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-3xl text-green-600">✓</span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Thank You!
                        </h3>

                        <p className="text-gray-600 leading-7 mb-6">
                            Your message has been submitted successfully.
                            Our team will contact you within 24 hours.
                        </p>

                        <button
                            onClick={() => setShowThankYouPopup(false)}
                            className="bg-[#4291CE] hover:bg-[#327ab3] text-white px-6 py-3 cursor-pointer rounded-lg font-medium transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}

export default CareerPage