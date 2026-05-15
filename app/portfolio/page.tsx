"use client";

import { useState } from "react";
import Image from "next/image";
 import Footer from "@/components/Footer";
 import Header from "@/components/Header";
interface Project {
  title: string;
  image: string;
  desc: string;
  url: string;
  overlay: string;
  tag?: string;
  tagColor?: string;
}

const webProjects: Project[] = [
//   {
//     title: "INDIA TODAY",
//     tag: "Bestcolleges",
//     image:
//       "https://www.techsaga.co.in/public/assets/images/my-img/casestudy/mdra1.1.jpg",
//     desc: "Reliable platform for college rankings and career opportunities.",
//     url: "https://bestcolleges.indiatoday.in/",
//     tagColor: "bg-red-500",
//     overlay: "bg-red-600/95",
//   },
//   {
//     title: "FOREVER52",
//     tag: "Beauty Brand",
//     image:
//       "https://www.techsaga.co.in/public/assets/images/my-img/casestudy/dailylifeforever52_one.in.jpg",
//     desc: "Beauty and cosmetic e-commerce platform.",
//     url: "https://www.dailylifeforever52.in/home",
//     tagColor: "bg-pink-500",
//     overlay: "bg-pink-600/95",
//   },
//   {
//     title: "DOXRIX",
//     tag: "Online Course",
//     image:
//       "https://www.techsaga.co.in/public/assets/images/my-img/doxrix1.png",
//     desc: "Platform to create and sell online courses.",
//     url: "https://www.doxrix.com/",
//     tagColor: "bg-teal-500",
//     overlay: "bg-teal-600/95",
//   },

{
    // category: "Bestcolleges",
    title: "INDIA TODAY",
    desc:
      "Reliable platform for college rankings, education insights and career opportunities.",
    // hoverDescription:
    //   "Comprehensive education portal helping students discover top colleges and career opportunities.",
    image:
    // images/img/portfolio-img
      "/assets/img/portfolio-img/mdra1.1.jpg",
    url: "https://bestcolleges.indiatoday.in/",
    tagColor: "bg-teal-500",
    overlay: "bg-teal-600/95",
  },
  {
    // category: "BEAUTY BRAND",
    title: "FOREVER52",
    desc:
      "Beauty and cosmetic e-commerce platform with bulk order management.",
    // hoverDescription:
    //   "Powerful online beauty brand store with smooth shopping and customer experience.",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/casestudy/dailylifeforever52_one.in.jpg",
    url: "https://www.dailylifeforever52.in/home",
     tagColor: "bg-teal-500",
    overlay: "bg-teal-600/95",
  },
  {
    // category: "ONLINE COURSE",
    title: "DOXRIX",
    desc:
      "Platform to create and sell online courses to a global audience.",
    // hoverDescription:
    //   "Online learning platform allowing creators to launch and manage courses easily.",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/doxrix1.png",
    url: "https://www.doxrix.com/",
         tagColor: "bg-teal-500",
    overlay: "bg-teal-600/95",
  },
  {
    // category: "E-LEARNING",
    title: "EDTIA",
    desc:
      "Global e-learning platform with advanced skill development courses.",
    // hoverDescription:
    //   "Advanced online learning system for corporations and individual learners.",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/edtia.png",
    url: "https://www.edtia.org/",
          tagColor: "bg-teal-500",
    overlay: "bg-teal-600/95",
  },
  {
    // category: "FASHION",
    title: "ZUHD",
    desc: "Modern fabric and fashion e-commerce platform.",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/zuhd-store1.png",
      tagColor: "bg-teal-500",
    overlay: "bg-teal-600/95",
  },
];

const appProjects: Project[] = [
  {
    title: "Gymwise",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/gymwise.webp",
    desc: "Marketplace of gyms and fitness venues.",
    url: "#",
    overlay: "bg-orange-600/95",
  },
  {
    title: "FormDox",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/FORMDOX.webp",
    desc: "SAAS platform for employee charting management.",
    url: "#",
    overlay: "bg-cyan-600/95",
  },
  {
    title: "IPSA",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/ipsa.webp",
    desc: "Rewards and loyalty mobile application.",
    url: "#",
    overlay: "bg-blue-600/95",
  },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<"web" | "app">("web");

  const projects =
    activeTab === "web" ? webProjects : appProjects;

  return (
    <>
     <Header />
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/Portfolio.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-5">
              Our Portfolio

                {/* Your Trusted Partner
                <span className="block text-[#4291CE]">
                  for Custom Software
                </span>
                Development */}
              </h1>
            <p className="text-black text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                Every project tells a story of innovation, collaboration, and measurable success. Explore the solutions
                 we’ve built for growing businesses worldwide.
                </p>

            </div>
          </div>
        </div>
      </section>
    <section className="bg-[#f5f7fb] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Works Done by Techsaga
          </h2>

          <div className="flex justify-center mb-5">
            <img
              src="https://www.techsaga.co.in/public/assets/images/my-img/line1.png"
              alt="line"
              width={180}
              height={20}
            />
          </div>

          <p className="text-gray-600 leading-relaxed">
            Explore some of our amazing web and mobile app projects.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === "web"
                ? "bg-[#4291CE] text-white shadow-md"
                : "bg-white text-gray-700"
            }`}
          >
            WEB DEVELOPMENT
          </button>

          <button
            onClick={() => setActiveTab("app")}
            className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === "app"
                ? "bg-[#4291CE] text-white shadow-md"
                : "bg-white text-gray-700"
            }`}
          >
            APP DEVELOPMENT
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 p-7 z-10 transition-all duration-500 group-hover:opacity-0">
                {item.tag && item.tagColor && (
                  <span
                    className={`inline-block ${item.tagColor} text-white text-[11px] px-4 py-1 rounded-full font-semibold mb-4`}
                  >
                    {item.tag}
                  </span>
                )}

                <h3 className="text-white text-3xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 ${item.overlay} opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center px-8`}
              >
                <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-white text-3xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/90 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-7 py-3 rounded-full font-semibold inline-block hover:scale-105 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
          <Footer />
</>
  );
}