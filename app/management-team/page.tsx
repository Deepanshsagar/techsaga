"use client";

import Image from "next/image";
 import Footer from "@/components/Footer";
 import Header from "@/components/Header";
const teamMembers = [
  {
    name: "RAHUL MISHRA",
    role: "CEO",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/rahul-sir-1.png",
  },
  {
    name: "VIKAS PANDEY",
    role: "COO",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/VIKAS-PANDEY-new.png",
  },
  {
    name: "SHIVESH SINHA",
    role: "CFO",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/SHIVESH-SINHA-new.png",
  },
  {
    name: "SATYPAL SINGH",
    role: "Head Of Operations (UAE)",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/team/Head%20of%20Operations.jpg",
  },
  {
    name: "SAAD TAHSEEN MD AL-HASHMI",
    role: "Head Of Operations (KSA)",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/team/sheikh-sahab.jpg",
  },
  {
    name: "PRATIK GUPTA",
    role: "Legal Head",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/team/ag-img1.png",
  },
  {
    name: "PYARIMOHAN MOHAPATRA",
    role: "Partner (Advisory)",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/team/pyarimohan.jpg",
  },
  {
    name: "NIKHIL SACHDEVA",
    role: "Partner (Advisory)",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/nikhil-img.png",
  },
  {
    name: "NEHA TIWARI",
    role: "Business Manager",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/neha-tiwari-new.png",
  },
  {
    name: "RADHE MAURYA",
    role: "Project Manager",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/radhe_techsaga1.png",
  },
  {
    name: "SHIVAM MISHRA",
    role: "Head Digital Marketing",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/shivam_techsaga.png",
  },
  {
    name: "PREETI RAGHAV",
    role: "Human Resource Manager",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/hr-mam.png",
  },
  {
    name: "VAISHNAVI SOMANI",
    role: "Human Resource Manager",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/hr_ts2-2.png",
  },
  {
    name: "VIMAL KUMAR",
    role: "App Team Lead",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/vimal-sir-new.png",
  },
  {
    name: "GOURAV RAJPUT",
    role: "Developer Team Lead",
    image:
      "https://www.techsaga.co.in/public/assets/images/my-img/team/gourav-rajput.png",
  },
  {
    name: "SAURABH RAWAT",
    role: "Developer Team Lead",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/saurabh-rawat.png",
  },
  {
    name: "MANISH KUMAR PANDEY",
    role: "Software Tester Team Lead",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/manish-kr-new.png",
  },
  {
    name: "VISHAL DAVID",
    role: "Frontend Team Lead",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/Vishal-Sir3.png",
  },
  {
    name: "SHASHANK SHRIVASTAV",
    role: "Sr. Performance Marketer",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/Shashank-Srivastav.png",
  },
  {
    name: "ASHUTOSH KUMAR",
    role: "Sr. Web Developer",
    image:
      "https://www.techsaga.co.in/public/assets/images/teams-image/ashutosh.png",
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
          backgroundImage: "url('/assets/img/service-banner.png')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight">
               Our Team

                {/* Your Trusted Partner
                <span className="block text-[#4291CE]">
                  for Custom Software
                </span>
                Development */}
              </h1>
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