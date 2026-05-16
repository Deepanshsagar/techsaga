import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <main>
         <Header />
      {/* Heading Section */}
      <section className="py-16 !mt-[100px]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl text-center">
              <h1 className="text-4xl font-bold text-gray-900">
                Privacy Policy
              </h1>

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
              <ul className="space-y-5">
                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Techsaga has created this privacy statement in order to
                    demonstrate our firm commitment to privacy. The following
                    discloses our information gathering and dissemination
                    practices for this.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Techsaga use your IP address to help diagnose problems with
                    our server, and to administer our Web site. Your IP address
                    is used to gather broad demographic information.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Techsaga site's registration form requires users to give us
                    contact information (like their name and email address) and
                    demographic information (like their zip code, age, or income
                    level). The customer's contact information is used to
                    contact the visitor when necessary. Users may opt-out of
                    receiving future mailings. Demographic and profile data is
                    also collected at our site. We use this data to tailor the
                    visitor's experience at our site, showing them content that
                    we think they might be interested in, and displaying the
                    content according to their preferences.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    This site contains links to other sites.
                    www.techsaga.co.in is not responsible for the privacy
                    practices or the content of such websites.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Techsaga site uses an order form for customers to request
                    information, products, and services. We collect visitor's
                    contact information (like their email address) and
                    demographic information (like their zip code, age, or income
                    level). Contact information from the order form is used to
                    send orders to our customers and to get in touch with the
                    visitor when necessary.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Techsaga online surveys ask visitors for contact information
                    and demographic information. We use contact data from our
                    surveys to send the user information about our company. The
                    customer's contact information is also used to contact the
                    visitor when necessary.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    We run contests on our site in which we ask visitors for
                    contact information and demographic information. We use
                    contact data from our contests to send users information
                    about our company and tailor the visitor's experience on our
                    website according to their preferences.
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