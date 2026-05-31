"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

import { useState } from "react";
import { motion } from "framer-motion";

const Resources = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionItems = [
    {
      title: "Blogs",
      image:
        "https://resources.techsaga.co.in/wp-content/uploads/2023/07/05.jpg",
      link: "https://resources.techsaga.co.in/blog/",
    },
    {
      title: "Portfolio",
      image:
        "https://resources.techsaga.co.in/wp-content/uploads/2023/07/01.jpg",
      link: "https://www.techsaga.co.in/portfolio/",
    },
    {
      title: "Case Study",
      image:
        "https://resources.techsaga.co.in/wp-content/uploads/2023/07/02.jpg",
      link: "https://resources.techsaga.co.in/case-study/",
    },
    {
      title: "Web Stories",
      image:
        "https://resources.techsaga.co.in/wp-content/uploads/2023/07/06.jpg",
      link: "https://resources.techsaga.co.in/web-stories/",
    },
  ];

  const stories = [
    {
      title: "Cloud Application Development Services",
      image:
        "https://resources.techsaga.co.in/wp-content/uploads/2025/06/What-are-the-Different-Types-of-Cloud-Applications.jpg",
      link: "#",
    },
    {
      title: "Influencer Marketing Agencies",
      image:
        "https://resources.techsaga.co.in/wp-content/uploads/2025/05/cropped-How-Do-I-Choose-An-Influencer-Marketing-Agency.jpg",
      link: "#",
    },
    {
      title: "Boost Your Business Creatively",
      image:
        "https://resources.techsaga.co.in/wp-content/uploads/2025/04/cropped-Untitled-design-6.jpg",
      link: "#",
    },
    {
      title: "Social Media Marketing Terms",
      image:
        "https://resources.techsaga.co.in/wp-content/uploads/2025/03/cropped-Untitled-design.jpg",
      link: "#",
    },
    {
      title: "SEO for Niche Blogs",
      image:
        "https://resources.techsaga.co.in/wp-content/uploads/2025/03/How-to-Craft-Engaging-Blog-Content-for-Niche-Audiences.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/resources.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold text-white leading-tight">
                Ideas, Trends & Tech Insights
              </h1>

              <p className="text-white text-base lg:text-md mb-8 max-w-lg leading-relaxed">
                Stay ahead in the digital world with fresh insights, smart ideas, and the latest
                 technology trends from industry experts. Explore innovation, business strategies,
                  and emerging IT solutions that help you adapt, grow, and lead with confidence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Section */}
      <div className="relative max-w-7xl mx-auto px-4 w-full bg-white">

        <section className="py-20 overflow-hidden">

          <div className="container mx-auto px-4">

            {/* Accordion */}
            <div className="flex flex-col md:flex-row gap-4 h-[500px] mb-24">

              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  animate={{
                    flex: activeIndex === index ? 3 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="relative rounded-3xl overflow-hidden cursor-pointer group"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  {/* Background */}
                  <motion.div
                    animate={{
                      scale: activeIndex === index ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h2
                      animate={{
                        rotate: activeIndex === index ? 0 : -90,
                        scale: activeIndex === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-white text-3xl lg:text-5xl font-bold tracking-wide"
                    >
                      {item.title}
                    </motion.h2>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-black">
                Web Stories
              </h2>

              <p className="text-gray-500 mt-4 max-w-2xl">
                Explore our latest digital stories, marketing insights,
                development trends, and creative inspirations.
              </p>
            </motion.div>

            {/* Carousel */}
            <div className="relative overflow-hidden">

              <motion.div
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex gap-6 w-max"
              >

                {[...stories, ...stories].map((story, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -10,
                    }}
                    className="group relative h-[420px] w-[280px] rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer"
                  >
                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10 backdrop-blur-[2px]" />

                    {/* Content */}
                    <div className="absolute bottom-0 p-5 z-10">

                      <div className="h-1 w-10 bg-[#4291CE] rounded-full mb-4" />

                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-white text-lg font-semibold leading-6"
                      >
                        {story.title}
                      </motion.h3>

                      <p className="text-gray-300 text-sm mt-2">
                        Read Story →
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="px-4 mb-20">
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
            href="#"
            className="inline-flex items-center justify-center bg-black text-white font-semibold px-7 py-3 rounded-md text-sm hover:bg-[#4291CE] transition"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Resources;