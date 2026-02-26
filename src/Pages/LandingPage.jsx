import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../public/compare-image.png';


const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    { title: "HVAC (Heating & Air Conditioning)", icon: "fa-fan", link: "/Hvacform" },
    { title: "Pest Control", icon: "fa-bug", link: "/Pest_control" },
    { title: "Windows & Doors", icon: "fa-door-open", link: "/Windows_doors" },
    { title: "Water Damage & Restoration", icon: "fa-droplet", link: "/Water_damage" },
  ];

  const faqs = [
    { q: "What kinds of services are available?", a: "We provide access to a wide range of home services including pest control, roofing, HVAC, windows, plumbing, water damage restoration, and more." },
    { q: "How quickly will I get connected?", a: "Most calls are connected in under one minute to a verified local professional." },
    { q: "Is there any cost to call?", a: "No. Calling is free and obligation-free. You only pay if you choose to move forward with a service provider." },
    { q: "Are my details safe?", a: "Yes. All interactions are secure and TCPA-compliant." }
  ];

  return (
    <div className="font-['Inter',_sans-serif] text-[#2c3e50]">
       
      
      {/* --- HERO & SERVICES SECTION --- */}
      <section
      id="services"
      className="relative flex min-h-[70vh] items-center justify-center 
      bg-[url('https://res.cloudinary.com/diicgo6ay/image/upload/v1772145928/E109YTF0_1_cji8th.jpg')] 
      bg-cover bg-fixed bg-center px-5 py-16 text-center 
      before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.50),rgba(255,255,255,0.50))] before:z-[1]"
    >
      <div className="z-[2] w-full max-w-[900px]">
        <h1 className="mt-18 sm:mt-7 text-3xl font-bold text-[#1a2a3a] md:text-5xl">
          Compare Services To Get The Best Quotes
        </h1>
        <p className="mt-4 text-lg text-gray-700 md:text-xl">
          Reliable solutions for your home, all in one place.
        </p>

        {/* Updated Grid Container: 2 columns on mobile, 4 on desktop */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              to={service.link} 
              className="group no-underline"
            >
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-gray-100 bg-white/60 p-5 transition-all duration-300 hover:bg-white hover:shadow-lg md:hover:-translate-y-2">
                {/* Scaled down icon for mobile fit */}
                <div className="mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0685B1] text-xl text-white shadow-md md:h-[60px] md:w-[60px] md:text-2xl">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                
                {/* Centered text with smaller size for mobile */}
                <span className="whitespace-normal text-sm  font-semibold text-gray-800 leading-tight md:text-sm">
                  {service.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="bg-white px-5 py-20 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="mx-auto mt-12 flex max-w-[1200px] flex-wrap justify-center gap-8">
          {[
            { icon: "fa-briefcase", title: "Trusted Carriers", desc: "We've partnered with A+ rated carriers and brought them all into one easy to use platform." },
            { icon: "fa-award", title: "100% Safe and Secure", desc: "Your data and privacy are fully protected. Built with security you can trust." },
            { icon: "fa-dollar-sign", title: "Save Time & Money", desc: "We help thousands of consumers save by comparing the latest market rates instantly." }
          ].map((feature, idx) => (
            <div key={idx} className="max-w-[350px] flex-1 min-w-[280px] p-5">
              <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#f9f9f9] text-3xl text-[#0685B1]">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPARISON SECTION --- */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 text-center">
        <h2 className="mb-12 text-3xl font-bold md:text-4xl text-[#2c3e50]">Compare Carriers Side by Side Instantly</h2>
        <div className="flex flex-col items-center justify-between gap-10 text-left md:flex-row">
          <div className="flex-1">
            <h3 className="mb-6 text-center md:text-left text-2xl font-semibold text-[#34495e]">Find The Right service For You</h3>
            <p className="text-lg text-center md:text-left leading-relaxed text-[#7f8c8d]">No need to shop around.</p>
            <p className="text-lg text-center md:text-left leading-relaxed text-[#7f8c8d]">Find All Your Required Services At One Place.</p>
          </div>
          <div className="flex-[1.2]">
            <img src={img} alt="Comparison" className="h-auto max-w-full" />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="reviews" className="bg-white px-5 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#2c3e50]">Over 50,000 Happy Customers!</h2>
        <div className="mb-10 text-2xl text-[#0685B1]">★★★★★</div>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { author: "Corbin Pope", text: '"Fastest services ever! Easy and quick! I found Reasonable Quotes online, went through the questions, and got the services."' },
            { author: "Taylor Fritz", text: '"I needed Pest Control services, so I called Reasonable Quotes, and the agent provided everything in under an hour!"' },
            { author: "Xavier White", text: '"There is nothing more that Reasonable Quotes could have done to make the process any easier."' },
            { author: "Lucinda Cassidy", text: '"Painless and easy process! Highly recommend it!"' }
          ].map((item, idx) => (
            <div key={idx} className="flex w-full max-w-[260px] flex-col rounded-lg border border-[#f0f0f0] bg-white p-8 text-left shadow-sm">
              <p className="mb-5 flex-grow italic text-[#5d6d7e] leading-relaxed">{item.text}</p>
              <div className="mb-5 h-[1px] bg-[#eee]"></div>
              <p className="font-bold text-[#0685B1]">{item.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0">
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="text-lg font-medium text-slate-700">{faq.q}</span>
                  <span className={`text-2xl text-[#0685B1] transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : 'rotate-0'}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-6 text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        
      
    </div>
  );
};

export default LandingPage;