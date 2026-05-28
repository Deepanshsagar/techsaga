import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main>
      <Header />

      <section className="bg-gray-100 py-20 min-h-screen flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 w-full pt-5 mt-5">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl text-center">
              
              {/* SVG 404 Illustration */}
              <div className="mb-10">
              <img 
              src="/assets/img/404.png"
              alt="404 error"
              />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Oops! Page Not Found
                </h2>

                <h6 className="text-gray-500 text-lg leading-8 mb-8">
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </h6>

                <Link href="/">
                <button className=" inline-flex items-center gap-2 bg-[#4291CE] text-white px-8 py-4 rounded-full transition-all duration-300 font-medium cursor-pointer">
                    ← Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}