import React from 'react';
import Navbar from '../Components/common/Navbar';

export default function TermsComponent() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans min-h-screen py-16 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-64 selection:bg-[#60997e]/20">
      <div className="max-w-4xl mx-auto text-left">

        <Navbar number="+1(888)-XXXXX" number2="8884793353" />
        
        {/* Main Title Styled Like Image Accent */}
        <h1 className="text-4xl mt-[100px] sm:text-5xl font-bold text-[#0685B1] mb-2 tracking-tight">
          Terms and Conditions
        </h1>
        
        {/* Effective Date Sub-header */}
        <p className="text-sm font-medium text-slate-500 mb-8 border-b border-slate-100 pb-4">
          Effective Date: January 2, 2026
        </p>

        {/* Narrative Flow Block */}
        <div className="space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-slate-700 font-normal">
          <p>
            By accessing or using this website, you agree to these Terms and Conditions.
          </p>

          {/* Section: Quote Requests */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Quote Requests
            </h2>
            <p>
              Submitting a quote request does not guarantee that you will receive an offer or service. Quotes are subject to provider availability, underwriting, inspection, eligibility requirements, and applicable laws.
            </p>
          </div>

          {/* Section: No Professional Advice */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              No Professional Advice
            </h2>
            <p>
              Information on this website is provided for general informational purposes only and should not be considered insurance, legal, or financial advice.
            </p>
          </div>

          {/* Section: Third-Party Providers */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Third-Party Providers
            </h2>
            <p>
              We operate as a lead generation platform and may connect users with independent pest control companies, insurance agencies, insurance carriers, or other service providers. We do not guarantee the quality, pricing, availability, or performance of any third-party provider.
            </p>
          </div>

          {/* Section: User Responsibilities */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              User Responsibilities
            </h2>
            <p className="mb-3">
              You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
              <li>Provide accurate and truthful information.</li>
              <li>Submit requests only on your own behalf.</li>
              <li>Not misuse or interfere with the operation of the website.</li>
            </ul>
          </div>

          {/* Section: Intellectual Property */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Intellectual Property
            </h2>
            <p>
              All website content, including text, graphics, logos, and design, is the property of the website owner unless otherwise stated and may not be copied or reproduced without permission.
            </p>
          </div>

          {/* Section: Limitation of Liability */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, we are not liable for any damages arising from the use of this website or services provided by third-party companies.
            </p>
          </div>

          {/* Section: Indemnification */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless the website owner, affiliates, employees, and partners from claims resulting from your use of the website or violation of these Terms.
            </p>
          </div>

          {/* Section: Modifications */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Modifications
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of the website constitutes acceptance of any changes.
            </p>
          </div>

          {/* Section: Governing Law */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Governing Law
            </h2>
            <p>
              These Terms shall be governed by the laws applicable in the jurisdiction where the website owner operates, unless otherwise required by applicable law.
            </p>
          </div>

          {/* Section: Contact */}
          <div className="pt-4 border-t border-slate-100 mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Contact
            </h2>
            <p>
              Questions regarding these Terms and Conditions may be submitted through the contact information provided on this website.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}