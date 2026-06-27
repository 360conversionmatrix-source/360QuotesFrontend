import React from 'react';
import { motion } from 'framer-motion';

const DisclaimerMarquee = ({ text = "Disclaimer: 360Holding Quotes is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and 360Holding Quotes does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on 360Holding Quotes. Same-day and 24/7 emergency services are subject to provider participation, location, technician availability, and demand. Availability is not guaranteed and may vary by market and appointment capacity." }) => {
  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          display: inline-block;
          animation: scroll 35s linear infinite;
        }
      `}</style>
      
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
        className="relative bg-[#0685B1] z-99 hidden sm:block  top-[100px] text-white py-2 text-xl font-normal overflow-hidden whitespace-nowrap flex items-center w-full select-none"
      >
        <div className="animate-marquee-custom px-4">
          {text}
        </div>
        <div className="animate-marquee-custom px-4" aria-hidden="true">
          {text}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
        className="relative bg-[#0685B1] z-99 lg:hidden top-[200px] text-white py-2 text-xl font-normal overflow-hidden whitespace-nowrap flex items-center w-full select-none"
      >
        <div className="animate-marquee-custom px-4">
          {text}
        </div>
        <div className="animate-marquee-custom px-4" aria-hidden="true">
          {text}
        </div>
      </motion.section>
    </>
  );
};

export default DisclaimerMarquee;