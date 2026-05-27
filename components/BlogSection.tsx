"use client";

import { useEffect, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogSkeleton from "./BlogSkeleton";

interface Blog {
  post_id: number;
  post_date: string;
  post_title: string;
  post_slug: string;
  link: string;
  post_link: string;
}

function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    let ignore = false;

    async function fetchBlogs() {
      try {
        const res = await fetch(
          "https://resources.techsaga.co.in/wp-json/wp/v2/post"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();

        if (!ignore) {
          setBlogs(data?.data || []);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchBlogs();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {!blogs.length ? (
        <BlogSkeleton />
      ) : (
        <section
          className="py-16 lg:py-20 bg-[#e3eff8]"
          aria-label="News Articles and Blogs"
        >
          <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4291CE] mb-3">
                Latest trends
              </p>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
                Explore Latest News, Articles, And Blogs
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <article
                  key={blog.post_id}
                  className="group flex flex-col"
                >
                  <Link
                    href={blog.post_link}
                    target="_blank"
                  >
                    <div className="relative h-50 overflow-hidden rounded-xl">
                      <Image
                        src={blog.link}
                        alt={blog.post_title}
                        fill
                        loading="lazy"
                        sizes="(max-width:768px) 100vw,
                             (max-width:1200px) 50vw,
                             33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-102"
                      />
                    </div>
                  </Link>

                  <div className="pt-4 flex flex-col flex-1">
                    <span className="text-sm text-gray-500">
                      {blog.post_date}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900 mt-2 mb-4 line-clamp-2">
                      {blog.post_title}
                    </h3>

                    <Link
                      href={blog.post_link}
                      target="_blank"
                      className="mt-auto text-[#4291CE] font-semibold text-sm hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <Link className="bg-[#4291CE] text-white w-fit mx-auto block hover:bg-white hover:text-[#4291CE] text-sm font-bold px-7 py-3 mt-10 rounded transition-all duration-200 whitespace-nowrap flex-shrink-0 rounded-md" href="https://resources.techsaga.co.in/blog/">View All Blogs →</Link>
        </section>
      )}
    </>
  );
}



export default memo(BlogSection);