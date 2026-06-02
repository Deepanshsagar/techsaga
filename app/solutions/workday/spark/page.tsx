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
      title: "Velocity to Value",
      description:
        "Compressed 6-week deployment timeline for immediate operational return.",
    },
    {
      title: "Zero Operational Friction",
      description:
        "Deploy alongside daily operations without disrupting business continuity.",
    },
    {
      title: "Predictable Scalability",
      description:
        "Built on a streamlined foundation designed to scale with business growth.",
    },
    {
      title: "Capital Efficiency",
      description:
        "Reduce implementation overhead and lower total cost of ownership.",
    },
  ];
  const advantages = [
    {
      title: "Accelerated Time-to-Market",
      description:
        "Pre-configured industry templates bypass months of discovery, helping organizations realize value immediately.",
    },
    {
      title: "Fixed-Scope Cost Certainty",
      description:
        "Strict out-of-the-box deployment methodology eliminates budget overruns and scope creep.",
    },
    {
      title: "Zero Operational Disruption",
      description:
        "Our agile implementation model runs parallel to your business operations.",
    },
  ];

 const deploymentScope = [
    "Core Human Resources (HR)",
    "Basic Compensation Management",
    "Employee Self-Service (ESS)",
    "Manager Self-Service (MSS)",
    "Core Financials (General Ledger, AP/AR)",
    "Standard Payroll Integration",
    "Executive Dashboards",
    "Core Reporting",
  ];

  const capabilities = [
    {
      title: "Rapid Integrations",
      description:
        "Connect critical business systems through standardized integration frameworks.",
    },
    {
      title: "Automated Onboarding",
      description:
        "Accelerate workforce onboarding through intelligent workflows.",
    },
    {
      title: "Data Readiness",
      description:
        "Structured migration framework for a seamless Workday transition.",
    },
    {
      title: "Business Intelligence",
      description:
        "Executive-ready reporting and dashboards from day one.",
    },
  ];


export default function SparkPage() {
  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
        <Header />

      {/* HERO SECTION */}
      <section className="bg-[radial-gradient(#4291ce00,#4291ce5e)]">
        <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-0">

          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#4291CE] bg-blue-100 rounded-full mb-4">
              Spark Your Workday Journey
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Accelerate Corporate Transformation with Unmatched Agility and Precision
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
              <span className="text-[#4291CE] font-semibold uppercase tracking-wider">
                What is Techsaga Spark?
              </span>

              <p className=" text-lg leading-relaxed mb-6 mt-4">
               Techsaga Spark is an accelerated Workday deployment model engineered to deliver enterprise-grade Human Capital and 
               Finance capabilities without the enterprise-level wait.
              </p>

              <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
                {/* <h3 className="text-2xl font-bold mb-4">
                  Techsaga Spark
                </h3> */}

                <p className="text-gray-700 leading-relaxed">
                                  By leveraging a pre-configured configuration framework, Techsaga Spark compresses traditional 
                implementation timelines down to as little as 6 weeks. This deployment mechanism allows 
                growing organizations to transition seamlessly to Workday HCM and Financials with zero 
                operational friction, ensuring immediate time-to-value while bypassing the overhead, 
                risk, and complexity of legacy tailored builds.
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
             Executive Highlights of Techsaga SPARK
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
              Core Capabilities Activated for Rapid Launch
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
                  Standardizing Systems for Your Next Growth Phase
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
            Take the First Step Toward Smarter Workday Solutions
          </h2>

          {/* <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Empower your organization with agile Workday capabilities, scalable
            implementations, and continuous optimization strategies.
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
