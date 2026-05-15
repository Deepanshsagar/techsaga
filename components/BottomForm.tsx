"use client";

import { useEffect, useState } from "react";

const BottomForm = () => {
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
            setError("Incorrect captcha answer");

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

            setSuccess("Form submitted successfully!");

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
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
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-3">
                <div className="flex-1">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                        className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50"
                    />
                </div>

                <div className="flex-1">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
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
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50"
                    />
                </div>

                <div className="flex-1">
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50"
                    />
                </div>
            </div>

            <div>
                <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your project needs"
                    required
                    className="form-input w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50 resize-none"
                />
            </div>

            <div className="flex items-center gap-4">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                    Solve: {captcha.question} = ?
                </label>

                <input
                    type="text"
                    name="captchaInput"
                    value={formData.captchaInput}
                    onChange={handleChange}
                    placeholder="0"
                    required
                    className="form-input w-[50px] border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-gray-50"
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
                className="btn-primary w-full text-white font-semibold py-3 rounded-lg text-sm shadow-md disabled:opacity-50"
            >
                {loading ? "Submitting..." : "Get a Proposal →"}
            </button>
        </form>
    );
};

export default BottomForm;