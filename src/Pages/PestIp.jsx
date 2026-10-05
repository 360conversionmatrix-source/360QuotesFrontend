import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/common/Navbar';
import DisclaimerMarquee from '../Components/common/DisclaimerMarquee';

// State-to-IP Mapping Table
const STATE_IP_MAP = {
  Alabama: '68.208.0.1',
  Alaska: '158.145.0.1',
  Arizona: '70.160.0.1',
  Arkansas: '162.210.192.1',
  California: '64.233.160.0',
  Colorado: '70.33.0.1',
  Connecticut: '32.211.0.1',
  Delaware: '165.254.0.1',
  Florida: '68.200.0.1',
  Georgia: '66.23.0.1',
  Hawaii: '66.91.0.1',
  Idaho: '160.3.0.1',
  Illinois: '64.105.0.1',
  Indiana: '68.214.0.1',
  Iowa: '165.206.0.1',
  Kansas: '164.113.0.1',
  Kentucky: '162.138.0.1',
  Louisiana: '68.218.0.1',
  Maine: '130.111.0.1',
  Maryland: '128.8.0.1',
  Massachusetts: '18.0.0.1',
  Michigan: '35.8.0.1',
  Minnesota: '134.84.0.1',
  Mississippi: '69.60.0.1',
  Missouri: '128.252.0.1',
  Montana: '161.7.0.1',
  Nebraska: '129.93.0.1',
  Nevada: '131.216.0.1',
  'New Hampshire': '129.170.0.1',
  'New Jersey': '128.6.0.1',
  'New Mexico': '129.24.0.1',
  'New York': '128.59.0.1',
  'North Carolina': '152.2.0.1',
  'North Dakota': '134.129.0.1',
  Ohio: '128.146.0.1',
  Oklahoma: '129.15.0.1',
  Oregon: '128.193.0.1',
  Pennsylvania: '128.2.0.1',
  'Rhode Island': '128.148.0.1',
  'South Carolina': '129.127.0.1',
  'South Dakota': '138.38.0.1',
  Tennessee: '128.169.0.1',
  Texas: '128.83.0.1',
  Utah: '128.110.0.1',
  Vermont: '132.241.0.1',
  Virginia: '128.143.0.1',
  Washington: '128.95.0.1',
  'West Virginia': '129.71.0.1',
  Wisconsin: '128.104.0.1',
  Wyoming: '137.229.0.1',
};

const PestControlForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    Address: '',
    City: '',
    reason: '',
    zipcode: '',
    phone: '',
    email: '',
    subscribe: false,
    smid: '',
    gclid: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // 1. TrustedForm Script Integration
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=${new Date().getTime()}${Math.random()}`;
    const s = document.getElementsByTagName('script')[0];
    if (s) s.parentNode.insertBefore(script, s);

    // 2. Query Params
    const urlParams = new URLSearchParams(window.location.search);

    let smidValue = urlParams.get('smid');
    if (!smidValue) {
      smidValue = 'RAND-' + Math.random().toString(36).substring(2, 11).toUpperCase();
    }

    let gclidValue = urlParams.get('gclid');
    if (gclidValue) {
      sessionStorage.setItem('gclid', gclidValue);
    } else {
      gclidValue = sessionStorage.getItem('gclid') || '';
    }

    setFormData((prev) => ({
      ...prev,
      smid: smidValue,
      gclid: gclidValue,
    }));

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const certField = document.getElementById('xxTrustedFormCertUrl');
    const certUrl = certField ? certField.value : '';

    // Get the state IP based on selected reason (state)
    const selectedStateIp = STATE_IP_MAP[formData.reason] || null;

    try {
      const response = await fetch('https://quotes-bdjj.onrender.com/pestControl/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          smid: formData.smid,
          xxTrustedFormCertUrl: certUrl,
          gclid: formData.gclid || sessionStorage.getItem('gclid') || null,
          ip_address: selectedStateIp, // Send state IP directly
        }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Form submitted successfully!' });

        setFormData((prev) => ({
          ...prev,
          first_name: '',
          last_name: '',
          Address: '',
          City: '',
          reason: '',
          zipcode: '',
          phone: '',
          email: '',
          subscribe: false,
        }));

        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-17979286877/twiFCKipy_8bEN3KmP1C',
            value: 1.0,
            currency: 'INR',
          });
        }
      } else {
        setStatus({ type: 'error', message: 'Failed to submit form.' });
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus({ type: 'error', message: 'Error connecting to server.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white font-sans text-gray-700 min-h-screen">
      <Navbar number="+18336362574" number2="+18336362574" />
      <DisclaimerMarquee />
      <div className="absolute z-9999 md:hidden fixed top-[100px] w-full h-[100px] bg-white">
        <div className="text-center mt-7">
          <h5 className="m-0 p-0 text-md font-medium">Get your free quotes now</h5>
          <a
            href="tel:+18336362574"
            className="m-0 p-2 text-[#2c3e50] transition-all duration-300 hover:text-[#0685B1] font-medium"
          >
            +1(833)-636-2574
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="relative pt-50 md:pt-24 text-center">
        <img
          src="https://res.cloudinary.com/diicgo6ay/image/upload/v1772142550/E1032YVG_1_gxikwg.jpg"
          alt="Pest Control Service"
          className="w-full h-[300px] sm:h-[600px] object-cover object-top rounded-lg shadow-md z-0"
        />

        <div className="absolute inset-0 bg-black opacity-50 z-2"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-3xl pt-32 md:pt-7 md:text-7xl font-bold text-white">Pest Control</h1>
          <h1 className="sm:mt-4 text-xl sm:text-3xl text-white">
            Compare Pest Control Quotes from Trusted Providers
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="xxTrustedFormCertUrl" id="xxTrustedFormCertUrl" />
          <input type="hidden" name="smid" id="smid" value={formData.smid} />
          <input type="hidden" name="gclid" id="gclid" value={formData.gclid} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              required
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <input
              type="text"
              name="last_name"
              required
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <input
              type="text"
              name="Address"
              required
              placeholder="Address"
              value={formData.Address}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <input
              type="text"
              name="City"
              required
              placeholder="City"
              value={formData.City}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent bg-white"
            >
              <option value="">Select State</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>

            <input
              type="text"
              name="zipcode"
              pattern="^\d{5}(-\d{4})?$"
              required
              placeholder="Zip Code"
              value={formData.zipcode}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <input
              type="tel"
              name="phone"
              pattern="[0-9+\-() ]{7,}"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />
          </div>

          <div className="flex items-start gap-3 mt-6 text-xs text-gray-500 leading-relaxed">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0685B1] focus:ring-[#0685B1]"
            />
            <label htmlFor="subscribe">
              By clicking "Submit", you agree to be contacted by licensed insurance agents and our partners via phone calls, SMS, or email, even if your number is on a federal or state Do Not Call list. Consent is not a condition of purchase.
            </label>
          </div>

          <div className="flex items-start gap-3 mt-6 text-xs text-gray-500 leading-relaxed">
            <input
              type="checkbox"
              id="subscribe2"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0685B1] focus:ring-[#0685B1]"
            />
            <label htmlFor="subscribe2">
              By clicking Submit, I agree to be contacted by Conversion Matrix 360 and its partners at the number provided via live, automated, or prerecorded calls/texts. Consent is not a condition of purchase.
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#0685B1] hover:bg-[#056a8c] text-white font-bold py-4 rounded transition-colors text-xl ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {status.message && (
          <div
            className={`mt-4 text-center font-medium ${
              status.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status.message}
          </div>
        )}
      </main>

      <noscript>
        <img src="https://api.trustedform.com/ns.gif" alt="trustedform" />
      </noscript>
    </div>
  );
};

export default PestControlForm;