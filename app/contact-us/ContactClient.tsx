"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { SectionTag } from "../utils/utils";
import { useState } from "react";
import SplitContainer from "@/components/SplitContainer";
import Image from "next/image";
import Link from "next/link";


const Contact_Us = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  //     const toggleFAQ = (index: any) => {
  //         setActiveIndex(activeIndex === index ? null : index);
  //     };

  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    return {
      question: `${num1} + ${num2}`,
      answer: num1 + num2,
    };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    captchaInput: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (Number(formData.captchaInput) !== captcha.answer) {
      setError("Invalid captcha answer");

      setCaptcha(generateCaptcha());

      setFormData((prev) => ({
        ...prev,
        captchaInput: "",
      }));

      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // setSuccess("Message sent successfully");
      setShowThankYouPopup(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        captchaInput: "",
      });

      setCaptcha(generateCaptcha());
    } catch (err: any) {
      setError(err.message);
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
          backgroundImage: "url('/assets/img/Contact.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="mb-5 font-heading text-5xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight">
                Get in touch with us today!
              </h1>
              <p className="text-white text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">Get in touch with us for seamless communication with our business front. Submit the form below and brace yourself for a swift response, delivered straight to your inbox within 24 hours. </p>
            </div>

          </div>
        </div>
      </section>
      {/* <div className="relative max-w-7xl mx-auto px-4 w-full"> */}

      <section
        className="relative pt-20 bg-cover bg-center overflow-clip mb-20"
        style={{
          backgroundImage:
            "url('/assets/img/map-pattern.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}


          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-10 pt-16 items-start">
            {/* Left Side */}
            <div className="md:sticky top-20">
              <h4 className="text-3xl font-bold text-black mb-5">
                Let's Talk Business Transformation.
              </h4>

              <h5 className="text-black/50 text-lg leading-8 mb-10">
                We are your compass in the vast realm of technology, guiding and
                empowering you toward a thriving digital future
              </h5>

              {/* Image with Circle */}
              <div className="relative inline-block">
                {/* Blue Circle */}
                {/* <div className="absolute -left-12 top-5 w-[300px] h-[300px] rounded-full bg-[#4891ce] -z-10"></div> */}
                {/* <Image
                src="https://www.techsaga.co.in/public/assets/images/my-img/Inside-Banner-Technology/callback-men.png"
                alt="callback"
                width={350}
                height={350}
                className="relative z-10"
              /> */}
                <img className="h-[352px]"
                  src="/assets/img/callback-men.png"
                  alt="callback"
                />
              </div>
            </div>

            {/* Right Side Form */}
            <div className="bg-white shadow-2xl rounded-xl p-6 md:p-10 mb-10">
              <h3 className="text-3xl font-bold text-gray-800">
                {/* Ready to get started? */}
              </h3>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3 rounded-md ">
                  <label className="block text-sm font-medium text-gray-700 mb-0">
                    Solve: {captcha.question} = ?
                  </label>

                  <input
                    type="text"
                    name="captchaInput"
                    value={formData.captchaInput}
                    onChange={handleChange}
                    placeholder="0"
                    required
                    className="w-[100px] border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {success && (
                  <p className="text-green-600 text-sm">{success}</p>
                )}

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className=" bg-[#4291CE] hover: bg-[#4291CE] transition-all cursor-pointer text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-3 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}




      <section className="px-4">
        <div
          style={{
            background:
              "linear-gradient(94.86deg, #F8F8F8 0.48%, #E3EFF8 100%)",
          }}
          className="max-w-4xl rounded-xl py-14 mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your Next Great Project Starts With One Conversation
          </h2>

          <p className="text-xs text-gray-500 mb-10 max-w-xl mx-auto">
            Thousands of businesses. 50+ countries 14+ years . we know how to
            deliver
          </p>

          <Link
            href="/contact-us"
            scroll={true}
            onClick={() => window.scrollTo({ top: 650, behavior: "smooth" })}
            className="btn-primary text-white font-semibold px-7 py-3 rounded-md text-sm"
          >
            Start a conversation
          </Link>
        </div>
      </section>
      {/* Thank You Popup */}
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

export default Contact_Us