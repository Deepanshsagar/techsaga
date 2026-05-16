import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TermsConditionsPage() {
  return (
    <main>
                    <Header />
        
      {/* Header Section */}
      <section className="py-16 !mt-[100px]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl text-center">
              <h3 className="text-3xl font-bold text-gray-900">
                TERMS & CONDITIONS
              </h3>

              <img
                loading="lazy"
                src="https://www.techsaga.co.in/public/assets/images/my-img/line1.png"
                alt="line"
                className="mx-auto mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            <div>
              <p className="mb-6 text-gray-700 text-base leading-7">
                Access to and the use of Techsaga is subject to the following
                terms :
              </p>

              <ul className="space-y-4">
                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    By accessing this website you agree to be legally bound by
                    these terms and conditions, all applicable laws and
                    regulations, and agree that you are responsible for
                    compliance with any applicable local laws. If you do not
                    agree to being legally bound by these terms and conditions,
                    please do not enter the site.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    These terms and conditions are subject to change by
                    Techsaga at any time. Please check these terms and
                    conditions from time to time to take notice of any changes
                    we make, as they are legally binding on you. Some of the
                    provisions contained in these Terms of Use may also be
                    superseded by provisions or notices published elsewhere on
                    our site.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    You may not copy, reproduce, republish, download, post,
                    broadcast, transmit, make available to the public, or
                    otherwise use the content of Techsaga in any way unless you
                    have prior written permission from Techsaga. You may
                    download items, for example white papers, that are intended
                    for this use but you may only print one copy for reference
                    purposes.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Techsaga will not be responsible for any loss or damage of
                    any kind whether direct or indirect resulting from the use
                    of this website.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Any links to external websites should not be taken as an
                    endorsement of that site and Techsaga accepts no
                    responsibility for the content of any external websites.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
                  <Footer />

    </main>
  );
}