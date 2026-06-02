// app/spark/page.jsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const differentiators = [
  {
    title: "Accelerated Time-to-Market",
    description:
      "Pre-configured industry templates eliminate lengthy discovery phases and dramatically reduce implementation timelines.",
  },
  {
    title: "Fixed-Scope Cost Certainty",
    description:
      "A structured out-of-the-box deployment model provides predictable investment and eliminates budget overruns.",
  },
  {
    title: "Zero Operational Disruption",
    description:
      "Deploy Workday alongside daily business operations without impacting productivity or business continuity.",
  },
  {
    title: "Rapid Value Realization",
    description:
      "Organizations begin leveraging Workday capabilities and reporting benefits immediately after launch.",
  },
  {
    title: "Scalable Foundation",
    description:
      "Built on standardized best practices that support future expansion and enterprise growth.",
  },
  {
    title: "Workday-Focused Expertise",
    description:
      "Delivered by experienced Workday professionals following proven implementation methodologies.",
  },
];

const modules = [
  "Core Human Resources (HR)",
  "Basic Compensation Management",
  "Employee Self-Service (ESS)",
  "Manager Self-Service (MSS)",
  "Core Financials",
  "General Ledger",
  "Accounts Payable",
  "Accounts Receivable",
  "Standard Payroll Integration",
  "Executive Dashboards",
  "Core Reporting",
];

const services = [
  {
    title: "Rapid Integrations",
    subtitle:
      "Accelerate connectivity across business-critical applications using proven deployment patterns.",
  },
  {
    title: "Automated Onboarding",
    subtitle:
      "Streamline employee onboarding experiences with standardized and efficient workflows.",
  },
  {
    title: "Growth-Ready Framework",
    subtitle:
      "Establish a scalable Workday foundation designed to support future organizational growth.",
  },
];
  const highlights = [
   {
    title: "Continuous ROI Optimization",
    description:
      "Constant platform enhancement and proactive feature configuration to extract maximum value from your Workday investment.",
  },
  {
    title: "End-to-End Managed Services",
    description:
      "Complete operational coverage across HCM and Finance suites, eliminating resource bottlenecks.",
  },
  {
    title: "Minimized Operational Burden",
    description:
      "Liberates internal IT and HR leadership from day-to-day tactical maintenance activities.",
  },
  {
    title: "Strategic Resource Realignment",
    description:
      "Empowers core talent to focus on driving organizational growth rather than system upkeep.",
  },
  ];
  const advantages = [
    {
    title: "Proactive Release Management",
    description:
      "We manage Workday’s bi-annual feature updates seamlessly, auditing new capabilities and aligning them with your business objectives.",
  },
  {
    title: "Guaranteed SLA Peace of Mind",
    description:
      "Round-the-clock technical coverage ensures user issues and system bottlenecks are resolved before impacting operations.",
  },
  {
    title: "TCO Optimization",
    description:
      "Replace expensive ad-hoc contractor billing with a predictable and scalable managed services model.",
  },
  ];

 const deploymentScope = [
   "Bi-Annual Update Assessment & Feature Regression Testing",
  "Helpdesk Technical Support & System Troubleshooting",
  "Continuous Report Writing & Executive Matrix Adjustments",
  "Security Role Audits & Ongoing Compliance Adjustments",
  "Post-Live End-User Training & Change Management Refreshers",
  "Data Cleanse & System Health Optimization Checks",
  ];

  const capabilities = [
   {
    title: "Process Automation",
    description:
      "Continuously streamline workflows and eliminate repetitive operational tasks through intelligent automation.",
  },
  {
    title: "Platform Maturity",
    description:
      "Advance Workday utilization through ongoing optimization and feature adoption strategies.",
  },
  {
    title: "Predictive Cost Controls",
    description:
      "Identify inefficiencies early and maintain budget predictability through proactive governance.",
  },
  {
    title: "Operational Intelligence",
    description:
      "Enable data-driven decision making with continuously refined reporting and analytics.",
  },
  ];


export default function SparkPage() {
  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
        <Header />

      {/* HERO SECTION */}
      <section className="bg-[radial-gradient(#0000002e,#1e4d7d)]">
        <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-0">

          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#4291CE] bg-blue-100 rounded-full mb-4">
                 Boost Your Workday Journey
            </span>

            <h1 className="text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
             Maximize Your Workday ROI Through Continuous Evolution
            </h1>

            {/* <p className="text-lg text-grey-100 leading-relaxed mb-10">
              Drive faster adoption, seamless deployment, and scalable Workday
              innovation with Techsaga’s strategic implementation framework.
            </p> */}
            <a href="../../contact-us">
            <button className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-4 rounded-2xl font-semibold text-lg transition duration-300">
              Get Started
            </button>
            </a>
          </div>

        </div>


         <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-white font-semibold uppercase tracking-wider">
                What is Techsaga Apex?
              </span>

              <p className=" text-lg text-white leading-relaxed mb-6 mt-4">
             Techsaga Apex is a comprehensive post-implementation optimization
  framework engineered to place your daily Workday management on a
  hyper-efficient autopilot.
              </p>

              <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
                {/* <h3 className="text-2xl font-bold mb-4">
                  Techsaga Spark
                </h3> */}

                <p className="text-gray-700 leading-relaxed">
                     Go-live is just Day 1. Techsaga Apex systematically audits,
  refines, and upgrades your Workday HCM and Financial suites in
  real time, transforming your system from a static tool into an
  evolving business asset. By assuming the heavy lifting of
  continuous release management and functional tuning, Apex
  dramatically reduces operational burden, allowing internal teams
  to focus entirely on high-value business strategy.

                </p>
              </div>
            </div>
            <div>
              <img src="/assets/img/solutions-page/solutions_workday.jpg" alt="" />
            </div>

          </div>

        </div>
      </section>


      </section>

    
       <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-4xl font-bold text-center mb-16">
             Executive Highlights of Techsaga APEX
           </h2>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {highlights.map((item, index) => {

               return (
                 <div
                   key={index}
                   className="bg-white border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
                 >
                   {/* <Icon className="text-blue-500 mb-5" size={36} /> */}

                   <h3 className="font-semibold text-xl mb-3">
                     {item.title}
                   </h3>

                   <p className="text-slate-400">
                     {item.description}
                   </p>
                 </div>
               );
             })}
           </div>
         </div>
       </section>


        {/* ADVANTAGE */}
       <section className="py-24">
        {/* max-w-7xl mx-auto px-6 */}
        <div className="max-w-7xl mx-auto bg-[linear-gradient(45deg,_#4291ce5e,_transparent)] rounded-[15px] p-[62px]">
         <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
           <div className="max-w-3xl mx-auto ">
          
             <h2 className="text-black text-3xl lg:text-6xl font-bold leading-tight mb-6">
               <div>
               Why 
               </div>
               <div>Enterprise Leaders</div>
               <div> Partner with Techsaga</div>
             </h2>
           </div>

           <div className="space-y-6 ">
             {advantages.map((item, index) => (
               <div
                 key={index}
                 className="border border-[#dedede] rounded-2xl p-8 bg-gray-50  hover:shadow-sm transition duration-300"
               >
                 <h3 className="text-2xl font-semibold mb-3">
                   {item.title}
                 </h3>

                 <p className="text-slate-400">
                   {item.description}
                 </p>
               </div>
             ))}
           </div>
         </div>
         </div>
       </section>

       <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#4291CE] font-semibold uppercase">
              Workday Deployment Scope
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Technical Support, Evolution & Platform Maintenance
            </h2>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
            
          <div className="flex flex-wrap justify-center gap-5">

            {deploymentScope.map((module, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-blue-50 border border-blue-100 rounded-2xl text-blue-900 font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
              >
                {module}
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-white/[0.02] ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
                  Expanded Enterprise Capabilities
                </span>

                <h2 className="text-4xl font-bold mt-4 mb-6">
                     Total Platform Maturity & Process Automation
                </h2>

              
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {capabilities.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl mb-6">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-white relative overflow-hidden pt-0 pb-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_40%)]"></div>

        <div className="max-w-7xl bg-blue-950 mx-auto px-6 text-center relative z-10 p-[70px] rounded-3xl ">

          <span className="text-blue-300 uppercase tracking-widest font-semibold">
              Partner With Techsaga
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-10">
              Take the First Step Toward Smarter, Data-Driven Enterprise Operations
          </h2>

          {/* <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
             Expand globally with confidence through structured Workday deployments,
  unified governance, localized compliance, and enterprise-scale growth
  strategies.
          </p> */}
          <a href="../../contact-us">
                    <button className="bg-white text-blue-900 hover:bg-blue-100 px-10 py-4 rounded-2xl font-semibold text-lg transition duration-300">
                      Schedule a Call
                    </button>
          </a>
        </div>
      </section>
    <Footer />
    </main>
  );
}
