"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
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
      "/assets/img/portfolio-img/dailylifeforever52_one.in.jpg",
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
      "/assets/img/portfolio-img/doxrix1.png",
    // url: "https://www.doxrix.com/",
    url: "#",
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
      "/assets/img/portfolio-img/edtia.png",
    url: "https://www.edtia.org/",
    tagColor: "bg-teal-500",
    overlay: "bg-teal-600/95",
  },
  {
    // category: "FASHION",
    title: "ZUHD",
    desc: "Modern fabric and fashion e-commerce platform.",
    image:
      "/assets/img/portfolio-img/zuhd-store1.png",
    tagColor: "bg-teal-500",
    url: "https://zuhd.store/",
    overlay: "bg-teal-600/95",
  },
  {
    title: "LOGISTICLE",
    desc:
      "Innovative and dynamic logistics service provider platform in India.",
    image: "/assets/img/portfolio-img/logisticle1.png",
    url: "https://www.logisticle.in/story.php",
    tag: "Logistics",
    tagColor: "bg-orange-500",
    overlay: "bg-orange-600/95",
  },
  {
    title: "APICES",
    desc:
      "Architecture and design studio focused on impactful environments.",
    image: "/assets/img/portfolio-img/apices.in.png",
    url: "https://www.apices.in/",
    tag: "Architecture",
    tagColor: "bg-gray-700",
    overlay: "bg-gray-800/95",
  },
  {
    title: "DANCE AND DAZZLE",
    desc:
      "Professional dance classes platform offering authentic learning experiences.",
    image: "/assets/img/portfolio-img/dance-and-dazzel.png",
    url: "https://www.danceanddazzledubai.ae/",
    tag: "Dance Classes",
    tagColor: "bg-rose-500",
    overlay: "bg-rose-600/95",
  },
  {
    title: "DSM",
    desc: "Digital marketplace platform for software solutions.",
    image: "/assets/img/portfolio-img/Digital-Software-Market.png",
    url: "https://www.digitalsoftwaremarket.com/",
    tag: "Software Market",
    tagColor: "bg-cyan-500",
    overlay: "bg-cyan-600/95",
  },
  {
    title: "KIDZ VILLE LEARNING",
    desc:
      "Innovative learning environment platform for children's development.",
    image: "/assets/img/portfolio-img/kidzvillelearning.png",
    url: "https://www.kidzvillelearningcenters.com/",
    tag: "Education",
    tagColor: "bg-green-500",
    overlay: "bg-green-600/95",
  },
  {
    title: "ecadema",
    desc:
      "Interactive online training platform connecting trainees and trainers globally.",
    image: "/assets/img/portfolio-img/eca.png",
    // url: "https://www.ecadema.com/",
    url: "#",
    tag: "Training Platform",
    tagColor: "bg-indigo-500",
    overlay: "bg-indigo-600/95",
  },
  {
    title: "Characterindia Shop",
    desc:
      "Cosmetics and beauty e-commerce platform for premium makeup products.",
    image: "/assets/img/portfolio-img/characterindia.png",
    // url: "https://characterindia.shop/",
    url: "#",
    tag: "E-commerce",
    tagColor: "bg-pink-600",
    overlay: "bg-pink-700/95",
  },
  {
    title: "IEIA",
    desc:
      "Official platform for the Indian Exhibition Industry Association.",
    image: "/assets/img/portfolio-img/ieia.jpeg",
    url: "https://ieia.in/",
    tag: "Association",
    tagColor: "bg-yellow-500",
    overlay: "bg-yellow-600/95",
  },
  {
    title: "MAIT",
    desc:
      "Platform representing India's electronics and hardware sector.",
    image: "/assets/img/portfolio-img/mait.png",
    url: "https://www.mait.com/",
    tag: "Technology",
    tagColor: "bg-slate-500",
    overlay: "bg-slate-600/95",
  },
  {
    title: "Ginoprotraining",
    desc:
      "Athlete training and sports performance improvement platform.",
    image: "/assets/img/portfolio-img/ginoprotraining.png",
    url: "#",
    // url: "https://www.ginoprotraining.com/",
    tag: "Training",
    tagColor: "bg-lime-500",
    overlay: "bg-lime-600/95",
  },
  {
    title: "OUR ESHOP",
    desc:
      "Online stationery and office supplies e-commerce platform.",
    image: "/assets/img/portfolio-img/our-eshop.png",
    // url: "https://www.our-eshop.com/",
    url: "#",
    tag: "E-commerce",
    tagColor: "bg-emerald-500",
    overlay: "bg-emerald-600/95",
  },
  {
    title: "WALTERSCALZONE",
    desc:
      "Official website of international percussionist Walter Scalzone.",
    image: "/assets/img/portfolio-img/Music-Production.png",
    url: "https://www.walterscalzone.com/",
    tag: "Music",
    tagColor: "bg-fuchsia-500",
    overlay: "bg-fuchsia-600/95",
  },
  {
    title: "ADES",
    desc:
      "Non-profit organization platform for diabetes educators in Singapore.",
    image: "/assets/img/portfolio-img/ades.png",
    url: "http://ades.org.sg/",
    tag: "Healthcare",
    tagColor: "bg-red-400",
    overlay: "bg-red-500/95",
  },
  {
    title: "Your Preferred Tours",
    desc:
      "Travel and tours platform delivering memorable travel experiences.",
    image: "/assets/img/portfolio-img/yourpreferredtours.png",
    url: "https://yourpreferredtours.com/",
    tag: "Tours",
    tagColor: "bg-sky-500",
    overlay: "bg-sky-600/95",
  },
  {
    title: "Career Abroad",
    desc:
      "Immigration and education consultancy platform based in Toronto.",
    image: "/assets/img/portfolio-img/careerabroad.png",
    url: "https://www.careerabroad.ca/",
    tag: "Education",
    tagColor: "bg-violet-500",
    overlay: "bg-violet-600/95",
  },
  {
    title: "Bakery Hill Dental",
    desc:
      "Professional dental clinic website based in Ballarat, Australia.",
    image: "/assets/img/portfolio-img/bakeryhilldental.png",
    url: "https://bakeryhilldental.com.au/",
    tag: "Dental",
    tagColor: "bg-teal-400",
    overlay: "bg-teal-500/95",
  },
  {
    title: "CleanCo",
    desc:
      "Integrated waste treatment plant and environmental solutions platform.",
    image: "/assets/img/portfolio-img/cwtme.png",
    url: "https://www.cwtme.ae/",
    tag: "Waste Management",
    tagColor: "bg-amber-500",
    overlay: "bg-amber-600/95",
  },
  {
    title: "CLLAK",
    desc:
      "Modern e-commerce platform offering seamless online shopping experiences.",
    image: "/assets/img/portfolio-img/cllak.png",
    url: "https://www.cwtme.ae/",
    tag: "E-commerce",
    tagColor: "bg-neutral-500",
    overlay: "bg-neutral-600/95",
  },
  {
    title: "GYMWISE",
    desc:
      "Marketplace for gyms, pools, spas and fitness venues.",
    image: "/assets/img/portfolio-img/gymwise.webp",
    url: "https://gymwise.in/",
    tag: "Fitness",
    tagColor: "bg-orange-500",
    overlay: "bg-orange-600/95",
  },
];

const appProjects: Project[] = [
  {
    title: "Mwashina",
    image: "/assets/img/portfolio-img/mawa.jpg",
    desc:
      "Mobile application that helps users discover the best restaurants and order sheep dishes easily.",
    url: "#",
    tag: "Food Delivery",
    tagColor: "bg-red-500",
    overlay: "bg-red-600/95",
  },
  {
    title: "IPSA",
    image: "/assets/img/portfolio-img/ipsa.webp",
    desc:
      "Rewards and loyalty application for buyers and sellers of IPSA brand products.",
    url: "#",
    tag: "Rewards App",
    tagColor: "bg-blue-500",
    overlay: "bg-blue-600/95",
  },
  {
    title: "FormDox",
    image: "/assets/img/portfolio-img/FORMDOX.webp",
    desc:
      "Powerful SAAS platform for electronic employee charting management.",
    url: "#",
    tag: "SAAS Platform",
    tagColor: "bg-cyan-500",
    overlay: "bg-cyan-600/95",
  },
  {
    title: "Gymwise",
    image: "/assets/img/portfolio-img/gymwise.webp",
    desc:
      "Marketplace for gyms, pools, spas and fitness venues with flexible schedules.",
    url: "#",
    tag: "Fitness",
    tagColor: "bg-orange-500",
    overlay: "bg-orange-600/95",
  },
  {
    title: "Farm Source",
    image: "/assets/img/portfolio-img/farsource.webp",
    desc:
      "Fresh vegetable delivery platform focused on healthy and safe shopping.",
    url: "#",
    tag: "E-commerce",
    tagColor: "bg-green-500",
    overlay: "bg-green-600/95",
  },
  {
    title: "ecadema",
    image: "/assets/img/portfolio-img/ecadma.webp",
    desc:
      "Interactive e-learning platform connecting trainees with certified trainers worldwide.",
    url: "#",
    tag: "E-Learning",
    tagColor: "bg-indigo-500",
    overlay: "bg-indigo-600/95",
  },
  {
    title: "Oyedeals",
    image: "/assets/img/portfolio-img/oyed.webp",
    desc:
      "Free classified ads application for cars, jobs, real estate and more.",
    url: "#",
    tag: "Classified App",
    tagColor: "bg-pink-500",
    overlay: "bg-pink-600/95",
  },
  {
    title: "Gogeo",
    image: "/assets/img/portfolio-img/gego.webp",
    desc:
      "Large marketplace platform for building and managing classified businesses.",
    url: "#",
    tag: "Marketplace",
    tagColor: "bg-purple-500",
    overlay: "bg-purple-600/95",
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fff] leading-tight mb-5">
              Our Portfolio

                {/* Your Trusted Partner
                <span className="block text-[#4291CE]">
                  for Custom Software
                </span>
                Development */}
              </h1>
            <p className="text-white text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-0">
              Works Done by Techsaga
            </h2>

            <div className="flex justify-center mb-0">
              <img
                src="/assets/img/line1.png"
                alt="line"
                width={160}
                height={10}
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
              className={`px-8 py-3 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 ${activeTab === "web"
                  ? "bg-[#4291CE] text-white shadow-md"
                  : "bg-white text-gray-700"
                }`}
            >
              WEB DEVELOPMENT
            </button>

            <button
              onClick={() => setActiveTab("app")}
              className={`px-8 py-3 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 ${activeTab === "app"
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

                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-7 py-3 rounded-full font-semibold inline-block hover:scale-105 transition-all duration-300"
                    >
                      View Project
                    </Link>
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