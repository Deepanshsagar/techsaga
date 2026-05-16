"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link";
import { useState } from "react";

const CareerPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

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
                alert("Application submitted successfully");

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });

                setResume(null);
            } else {
                alert(result.message || "Something went wrong");
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
                                Techsaga <br />
                                Unlock the Power of <br />
                                <span className="text-[#fff]">
                                    Dedicated Developers
                                </span>
                            </h1>

                            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                                At Techsaga we offer top-tier dedicated developers
                                who are committed to bringing your ideas to life and
                                delivering exceptional results. By hiring dedicated
                                developers, you gain access to a specialized team that
                                is solely focused on your project.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                 <Link
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center gap-2 bg-[#fff] text-[#4291CE] px-6 py-3 rounded font-semibold hover:bg-[#347eb8] hover:text-[#fff] transition-colors text-sm"
                                >
                                    Connect with expert →
                                </Link>

                                <Link
                                    href="https://resources.techsaga.co.in/case-study/"
                                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#4291CE] transition-colors text-sm"
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-[1140px] mx-auto px-4 flex flex-col lg:flex-row  gap-12">

                    <div className="lg:w-1/2">

                        <h2 className="text-3xl font-extrabold text-[#0b1535] mb-5 leading-tight">
                            Tapping Best IT Solutions by Dedicated Developers

                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-5 text-sm sm:text-base">
                            Our developers have a deep understanding of various technologies and frameworks, ensuring that they can tackle any challenge with expertise and precision. Whether you need web development, mobile app development, or custom software solutions, our dedicated developers have got you covered.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                            When you hire dedicated developers from Techsaga, you not only gain access to their technical proficiency but also benefit from their commitment and seamless collaboration. Our developers become an extension of your in-house team, working closely with you to understand your vision, goals, and requirements. They become invested in your success and strive to exceed your expectations.</p>

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
                                        placeholder="Tell us about yourself"
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
                                    Delivering Reliable IT Solutions Through Dedicated
                                    Expertise
                                </h1>

                                <p className="mt-6 text-gray-700 leading-relaxed">
                                    Our developers have a deep understanding of various
                                    technologies and frameworks, ensuring that they can
                                    tackle any challenge with expertise and precision.
                                    Whether you need web development, mobile app
                                    development, or custom software solutions, our
                                    dedicated developers have got you covered.
                                </p>

                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    When you hire dedicated developers from Techsaga,
                                    you not only gain access to their technical
                                    proficiency but also benefit from their commitment
                                    and seamless collaboration. Our developers become
                                    an extension of your in-house team.
                                </p>
                            </div>
                        </div>

                        {/* Right Cards */}
                        <div className="w-full lg:w-1/2 space-y-6">

                            {/* Card 1 */}
                            <div className="p-6 sm:p-8 shadow-lg bg-white rounded-lg">
                                <h1 className="font-bold text-xl sm:text-2xl">
                                    Techsaga: Empowering Success with Dedicated Developers
                                </h1>

                                <p className="my-4 text-gray-600">
                                    Techsaga provides dedicated developers for web,
                                    mobile, and custom software development.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            Web and mobile app development
                                        </p>

                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            Smooth team collaboration
                                        </p>

                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            Tailored development services
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            Custom software solutions
                                        </p>

                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            Laravel and PHP experts
                                        </p>

                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            Industry-standard coding practices
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-6 sm:p-8 shadow-lg bg-white rounded-lg">
                                <h1 className="font-bold text-xl sm:text-2xl">
                                    Driving Business Growth with Expert Developers
                                </h1>

                                <p className="my-4 text-gray-600">
                                    Techsaga offers dedicated developers with flexible
                                    hiring models and transparent support.
                                </p>

                                <div className="space-y-3">
                                    <p className="flex gap-2 text-gray-600">
                                        <img
                                            src="/assets/img/checkedicon.png"
                                            className="w-5 h-5"
                                            alt=""
                                        />
                                        Flexible engagement for projects
                                    </p>

                                    <p className="flex gap-2 text-gray-600">
                                        <img
                                            src="/assets/img/checkedicon.png"
                                            className="w-5 h-5"
                                            alt=""
                                        />
                                        High-quality development services
                                    </p>

                                    <p className="flex gap-2 text-gray-600">
                                        <img
                                            src="/assets/img/checkedicon.png"
                                            className="w-5 h-5"
                                            alt=""
                                        />
                                        Daily, weekly, or monthly reporting
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-6 sm:p-8 shadow-lg bg-white rounded-lg">
                                <h1 className="font-bold text-xl sm:text-2xl">
                                    Boost Development Capacity with Expert Developers
                                </h1>

                                <p className="my-4 text-gray-600">
                                    Dedicated developers specializing in Full Stack,
                                    Laravel, PHP, iOS, Android, WooCommerce, and Shopify.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            Full Stack Developers
                                        </p>

                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            PHP Developers
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            Laravel Developers
                                        </p>

                                        <p className="flex gap-2 text-gray-600">
                                            <img
                                                src="/assets/img/checkedicon.png"
                                                className="w-5 h-5"
                                                alt=""
                                            />
                                            Mobile App Developers
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="p-6 sm:p-8 shadow-lg bg-white rounded-lg">
                                <h1 className="font-bold text-xl sm:text-2xl">
                                    Get Reliable Tech Expertise with a Dedicated Team
                                </h1>

                                <p className="my-4 text-gray-600">
                                    Expertise in MongoDB, ExpressJS, AngularJS, and NodeJS
                                    with flexible hiring options.
                                </p>

                                <div className="space-y-3">
                                    <p className="flex gap-2 text-gray-600">
                                        <img
                                            src="/assets/img/checkedicon.png"
                                            className="w-5 h-5"
                                            alt=""
                                        />
                                        Experts in MERN technologies
                                    </p>

                                    <p className="flex gap-2 text-gray-600">
                                        <img
                                            src="/assets/img/checkedicon.png"
                                            className="w-5 h-5"
                                            alt=""
                                        />
                                        Flexible hiring models
                                    </p>

                                    <p className="flex gap-2 text-gray-600">
                                        <img
                                            src="/assets/img/checkedicon.png"
                                            className="w-5 h-5"
                                            alt=""
                                        />
                                        Front-end and back-end support
                                    </p>
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

            <Footer />
        </>
    )
}

export default CareerPage