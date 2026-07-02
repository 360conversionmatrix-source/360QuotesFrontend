import React from 'react';
import Navbar from '../Components/common/Navbar';

export default function PrivacyComponent() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans min-h-screen py-16 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-64 selection:bg-[#60997e]/20">
      <div className="max-w-4xl mx-auto text-left">

        <Navbar number="+1(888)-XXXXX" number2="8884793353" />
        
        {/* Main Title Styled Like Image Accent */}
        <h1 className="text-4xl mt-[100px] sm:text-5xl font-bold text-[#0685B1] mb-2 tracking-tight">
          Privacy Policy
        </h1>
        
        {/* Effective Date Sub-header */}
        <p className="text-sm font-medium text-slate-500 mb-8 border-b border-slate-100 pb-4">
          Effective Date: January 2, 2026
        </p>

        {/* Narrative Flow Block */}
        <div className="space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-slate-700 font-normal">
          <p>
            Welcome to our website. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect the information you provide when requesting a quote through our website.
          </p>

          {/* Section: Information We Collect */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Information We Collect
            </h2>
            <p className="mb-3">
              When you submit a quote request, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address</li>
              <li>ZIP code</li>
              <li>Information related to your pest control or home insurance needs</li>
              <li>IP address, browser type, and device information</li>
              <li>Cookies and website usage data</li>
            </ul>
          </div>

          {/* Section: How We Use Your Information */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              How We Use Your Information
            </h2>
            <p className="mb-3">
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
              <li>Provide requested quotes.</li>
              <li>Match you with licensed pest control companies or home insurance providers.</li>
              <li>Contact you regarding your quote request.</li>
              <li>Improve our website and services.</li>
              <li>Prevent fraud and maintain website security.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          {/* Section: Consent to Contact */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Consent to Contact
            </h2>
            <p>
              By submitting your information, you expressly consent to be contacted by us and our marketing partners via phone calls, text messages (including automated or prerecorded messages), and email regarding your quote request, even if your number is listed on a federal or state Do Not Call registry. Consent is not a condition of purchasing any goods or services.
            </p>
          </div>

          {/* Section: Information Sharing */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Information Sharing
            </h2>
            <p className="mb-3">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
              <li>Licensed service providers.</li>
              <li>Insurance agencies or carriers.</li>
              <li>Marketing and lead generation partners.</li>
              <li>Technology and analytics providers.</li>
              <li>Government authorities when required by law.</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information except as permitted by applicable law and as necessary to provide quote matching services.
            </p>
          </div>

          {/* Section: Cookies */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Cookies
            </h2>
            <p>
              Our website uses cookies and similar technologies to improve user experience, analyze website traffic, and personalize content.
            </p>
          </div>

          {/* Section: Data Security */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Data Security
            </h2>
            <p>
              We use commercially reasonable safeguards to protect your personal information. However, no method of internet transmission or electronic storage is completely secure.
            </p>
          </div>

          {/* Section: Your Rights */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Your Rights
            </h2>
            <p>
              Depending on your location, you may have rights to access, update, correct, or delete your personal information. You may also opt out of certain communications.
            </p>
          </div>

          {/* Section: Third-Party Websites */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Third-Party Websites
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
            </p>
          </div>

          {/* Section: Changes to This Policy */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes become effective immediately upon posting.
            </p>
          </div>

          {/* Section: Contact Us */}
          <div className="pt-4 border-t border-slate-100 mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0685B1] mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us using the contact information provided on this website.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}