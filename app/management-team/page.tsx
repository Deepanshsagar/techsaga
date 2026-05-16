"use client";

import Image from "next/image";
 import Footer from "@/components/Footer";
 import Header from "@/components/Header";
const teamMembers = [
  {
    name: "RAHUL MISHRA",
    role: "CEO",
    image:
      "/assets/img/teams-member/rahul-sir-1.png",
  },
  {
    name: "VIKAS PANDEY",
    role: "COO",
    image:
      "/assets/img/teams-member/VIKAS-PANDEY-new.png",
  },
  {
    name: "SHIVESH SINHA",
    role: "CFO",
    image:
      "/assets/img/teams-member/SHIVESH-SINHA-new.png",
  },
  {
    name: "SATYPAL SINGH",
    role: "Head Of Operations (UAE)",
    image:
      "/assets/img/teams-member/Head%20of%20Operations.jpg",
  },
  {
    name: "SAAD TAHSEEN MD AL-HASHMI",
    role: "Head Of Operations (KSA)",
    image:
      "/assets/img/teams-member/sheikh-sahab.jpg",
  },
  {
    name: "PRATIK GUPTA",
    role: "Legal Head",
    image:
      "/assets/img/teams-member/ag-img1.png",
  },
  {
    name: "PYARIMOHAN MOHAPATRA",
    role: "Partner (Advisory)",
    image:
      "/assets/img/teams-member/pyarimohan.jpg",
  },
  {
    name: "NIKHIL SACHDEVA",
    role: "Partner (Advisory)",
    image:
      "/assets/img/teams-member/nikhil-img.png",
  },
  {
    name: "NEHA TIWARI",
    role: "Business Manager",
    image:
      "/assets/img/teams-member/neha-tiwari-new.png",
  },
  {
    name: "RADHE MAURYA",
    role: "Project Manager",
    image:
      "/assets/img/teams-member/radhe_techsaga1.png",
  },
  {
    name: "SHIVAM MISHRA",
    role: "Head Digital Marketing",
    image:
      "/assets/img/teams-member/shivam_techsaga.png",
  },
  {
    name: "PREETI RAGHAV",
    role: "Human Resource Manager",
    image:
      "/assets/img/teams-member/hr-mam.png",
  },
  {
    name: "VAISHNAVI SOMANI",
    role: "Human Resource Manager",
    image:
      "/assets/img/teams-member/hr_ts2-2.png",
  },
  {
    name: "VIMAL KUMAR",
    role: "App Team Lead",
    image:
      "/assets/img/teams-member/vimal-sir-new.png",
  },
  {
    name: "GOURAV RAJPUT",
    role: "Developer Team Lead",
    image:
      "/assets/img/teams-member/gourav-rajput.png",
  },
  {
    name: "SAURABH RAWAT",
    role: "Developer Team Lead",
    image:
      "/assets/img/teams-member/saurabh-rawat.png",
  },
  {
    name: "MANISH KUMAR PANDEY",
    role: "Software Tester Team Lead",
    image:
      "/assets/img/teams-member/manish-kr-new.png",
  },
  {
    name: "VISHAL DAVID",
    role: "Frontend Team Lead",
    image:
      "/assets/img/teams-member/Vishal-Sir3.png",
  },
  {
    name: "SHASHANK SHRIVASTAV",
    role: "Sr. Performance Marketer",
    image:
      "/assets/img/teams-member/Shashank-Srivastav.png",
  },
  {
    name: "ASHUTOSH KUMAR",
    role: "Sr. Web Developer",
    image:
      "/assets/img/teams-member/ashutosh.png",
  },
  {
  name: "VARUN KUMAR",
  role: "Sr. Android Developer",
  image:
    "/assets/img/teams-member/varun-kr.png",
},
{
  name: "PRIYA GUPTA",
  role: "Sr. Android Developer",
  image:
    "/assets/img/teams-member/priyaandroid-new.png",
},
{
  name: "DEEPANSH SAGAR",
  role: "Sr. UI/UX Designer",
  image:
    "/assets/img/teams-member/deepansh-sagar.png",
},
{
  name: "MANISHA KUMARI",
  role: "Sr. Business Associate",
  image:
    "/assets/img/teams-member/manisha.png",
},
{
  name: "SATPAL SINGH",
  role: "Sr. Business Associate",
  image:
    "/assets/img/teams-member/satpal-singh-new.png",
},
{
  name: "ANIL KOLI",
  role: "Sr. Graphic Designer",
  image:
    "/assets/img/teams-member/anil-koli.png",
},
{
  name: "GURMEET SINGH",
  role: "Sr. Business Analyst",
  image:
    "/assets/img/teams-member/Gurmeet-Singh.png",
},
{
  name: "HARERAM YADAV",
  role: "Sr. iOS Developer",
  image:
    "/assets/img/teams-member/Hare-ram-ios-new.png",
},
{
  name: "RADHA YADAV",
  role: "Sr. iOS Developer",
  image:
    "/assets/img/teams-member/Radha-Kumari-new.png",
},
{
  name: "PRIYANSHU SHRIVASTAV",
  role: "Sr. Software Developer",
  image:
    "/assets/img/teams-member/Priyanshu-new.png",
},
{
  name: "MUKUL RAJPUT",
  role: "Sr. UI/UX Designer",
  image:
    "/assets/img/teams-member/Mukul-Rajput.png",
},
{
  name: "SUBHAM KUMAR",
  role: "Sr. Digital Marketer",
  image:
    "/assets/img/teams-member/Shubham-techsaga.png",
},
{
  name: "REETIKA SINHA",
  role: "Sr. Digital Marketer",
  image:
    "/assets/img/teams-member/Reetika-1.png",
},
];

export default function MeetOurTeam() {
  return (
    <>
         <Header />
           {/* HERO SECTION */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[650px] flex items-center"
        style={{
          backgroundImage: "url('/assets/img/Team-member.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
               The People Behind Techsaga

                {/* Your Trusted Partner
                <span className="block text-[#4291CE]">
                  for Custom Software
                </span>
                Development */}
              </h1>
            <p className="text-white text-base font-light lg:text-md mb-8 max-w-lg leading-relaxed hero-animate-2">
                    People driven by innovation, collaboration, and a passion for technology. We design and develop smart digital solutions that improve efficiency, enhance user experiences, and support sustainable business growth across industries.
                </p>
            </div>
          </div>
        </div>
      </section>
    
        <section className="bg-[#f5f5f5] py-20 px-4">
        <div className="max-w-[1600px] mx-auto">
            {/* HEADER */}
            <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-[#eaf4ff] text-[#4291CE] text-xs font-bold tracking-[2px] uppercase">
                Our Leadership
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mt-5">
                Meet Our Team
            </h2>

            <div className="w-14 h-[4px] rounded-full bg-gradient-to-r from-[#4291CE] to-[#76b7eb] mx-auto mt-5"></div>

            <p className="max-w-2xl mx-auto text-[#6b7280] text-[15px] leading-7 mt-5">
                A dedicated group of professionals driving innovation and
                excellence across global markets.
            </p>
            </div>

            {/* TEAM GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {teamMembers.map((member, index) => (
                <div
                key={index}
                className="group rounded-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                >
                {/* IMAGE */}
                <div className="relative overflow-hidden bg-[#f5f5f5]">
                    <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="w-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                    unoptimized
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#4291CE]/80 via-[#4291CE]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* CONTENT */}
                <div className="text-center pt-5 pb-5 px-3">
                    <h3 className="text-[15px] md:text-[16px] font-extrabold uppercase text-[#111] leading-[24px]">
                    {member.name}
                    </h3>

                    <p className="text-[#222] text-[13px] mt-2 leading-[22px]">
                    {member.role}
                    </p>
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