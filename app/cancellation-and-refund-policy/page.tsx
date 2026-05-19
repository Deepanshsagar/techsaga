import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CancellationRefundPolicyPage() {
  return (
    <main>
      <Header />
      {/* Header Section */}
      <section className="py-16 !mt-[100px]">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl text-center">
              <h3 className="text-3xl font-bold text-gray-900">
                CANCELLATION & REFUND POLICY
              </h3>

              <img
                loading="lazy"
                src="/assets/img/line1.png"
                alt="line"
                className="mx-auto mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16">
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1">
            <div>
              <p className="mb-6 text-gray-700 text-base leading-7">
                Techsaga Corporations Pvt Ltd believes in helping its clients
                as far as possible and has therefore adopted a liberal
                cancellation & refund policy.
              </p>

              {/* Cancellation */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                🔹 Cancellation
              </h3>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Cancellation of services must be requested via email at{" "}
                    <strong>support@techsaga.co.in</strong>.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Requests received after the commencement of service delivery
                    will not be eligible for cancellation.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Techsaga Corporations Pvt Ltd reserves the right to accept
                    or reject cancellation requests based on the nature and
                    stage of the service.
                  </span>
                </li>
              </ul>

              {/* Refunds */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                🔹 Refunds
              </h3>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Refunds, if applicable, will be processed only after proper
                    evaluation of the request.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Refunds are applicable{" "}
                    <strong>only if services have not been initiated</strong>.
                  </span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <div>
                    No refunds will be provided for:
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>Services already delivered or in progress</li>
                      <li>Customized or subscription-based services</li>
                      <li>
                        Digital services, software solutions, or consulting work
                        once initiated
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    Approved refunds will be credited to the original mode of
                    payment within{" "}
                    <strong>7–10 working days</strong>.
                  </span>
                </li>
              </ul>

              {/* Late or Missing Refunds */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                🔹 Late or Missing Refunds
              </h3>

              <p className="mb-4 text-gray-700 leading-7">
                If you haven’t received a refund yet:
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>First check your bank account.</span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>Contact your credit card company or bank.</span>
                </li>

                <li className="flex items-start text-gray-700 leading-7">
                  <span className="mr-3 text-blue-600 text-lg">›</span>
                  <span>
                    If the issue persists, email us at{" "}
                    <strong>support@techsaga.co.in</strong>.
                  </span>
                </li>
              </ul>

              {/* Contact */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                🔹 Contact Us
              </h3>

              <p className="text-gray-700 leading-7 mb-4">
                For any questions related to cancellation or refunds, please
                contact us at:
              </p>

              <p className="text-gray-700 leading-7">
                <strong>support@techsaga.co.in</strong>
                <br />
                <a
                  href="https://www.techsaga.co.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-600 hover:underline"
                >
                  www.techsaga.co.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}