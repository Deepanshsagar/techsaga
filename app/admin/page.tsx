"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [error, setError] =
    useState("");
  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await signIn(
        "credentials",
        {
          email,
          password,
          redirect: false,
        }
      );

      if (response?.error) {
        setError(
          "Invalid email or password"
        );
        return;
      }

      window.location.href =
        "/admin/dashboard";
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen pl-6 pr-6 md:pr-16 lg:pr-24 flex items-center justify-end relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img/bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-7">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          {/* <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white text-2xl font-bold"> */}
           <img src="/assets/img/logo.webp" alt="logo" className="w-50" />
          {/* </div> */}
        </div>
        <p
          className={`text-sm text-center mb-6 ${
            error
              ? "text-red-500"
              : "text-black/50"
          }`}
        >
          {error ||
            "Login to access admin dashboard"}
        </p>

        {/* Social Buttons */}
        {/* <div className="flex gap-3 mb-5">
          <button
            type="button"
            className="flex-1 bg-black/5 border border-black/5 flex items-center justify-center gap-2 hover:bg-black/10 transition text-black py-3 rounded-xl text-sm font-medium"
          >
            <Image
              src="/assets/apple.svg"
              width={18}
              height={18}
              alt="Apple"
            />
            Apple
          </button>

          <button
            type="button"
            className="flex-1 bg-black/5 border border-black/5 flex items-center justify-center gap-2 hover:bg-black/10 transition text-black py-3 rounded-xl text-sm font-medium"
          >
            <Image
              src="/assets/gmail.svg"
              width={18}
              height={18}
              alt="Google"
            />
            Google
          </button>
        </div> */}

        {/* Divider */}
        {/* <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-black/10" />

          <span className="text-black/40 text-xs uppercase tracking-wider">
            Or continue with email
          </span>

          <div className="flex-1 h-px bg-black/10" />
        </div> */}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Email */}
          <div>
            <label className="text-sm text-black/60 mb-2 block">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-black/[0.04] border border-black/5 text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black transition"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-black/60 mb-2 block">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-black/[0.04] border border-black/5 text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black transition"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />
          </div>

          {/* Forgot Password */}
          {/* <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-black/50 hover:text-black transition"
            >
              Forgot Password?
            </button>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-black hover:bg-black/90 text-white py-3 rounded-xl font-semibold transition-all duration-200 ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-black/40 text-sm mt-6">
          Protected Admin Access
        </p>
      </div>
    </div>
  );
}