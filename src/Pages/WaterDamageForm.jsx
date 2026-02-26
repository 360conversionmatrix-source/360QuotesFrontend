import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WaterDamageForm = () => {
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
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TrustedForm Script Injection
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=${new Date().getTime()}${Math.random()}`;
    const s = document.getElementsByTagName('script')[0];
    if (s) s.parentNode.insertBefore(script, s);

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

    try {
      const response = await fetch("https://three60quotesbackend.onrender.com/waterDamage/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Form submitted successfully!' });
        // Reset form after successful submission
        setFormData({
          first_name: '', last_name: '', Address: '', City: '',
          reason: '', zipcode: '', phone: '', email: '', subscribe: false
        });
      } else {
        setStatus({ type: 'error', message: 'Failed to submit form.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error connecting to server.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white font-sans text-gray-700 min-h-screen">
      {/* Header Section */}
      <header className="pt-16 text-center">
        <h1 className="text-4xl font-bold text-[#0685B1] mt-[50px]">Water Damage</h1>
      </header>

      {/* Main Form Section */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" name="first_name" required placeholder="First Name" 
              value={formData.first_name} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />
            
            <input 
              type="text" name="last_name" required placeholder="Last Name" 
              value={formData.last_name} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <input 
              type="text" name="Address" required placeholder="Address" 
              value={formData.Address} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <input 
              type="text" name="City" required placeholder="City" 
              value={formData.City} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <select 
              name="reason" value={formData.reason} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent bg-white"
            >
              <option value="">Select State</option>
              <option value="California">California</option>
              <option value="usa">USA</option>
            </select>

            <input 
              type="text" name="zipcode" pattern="^\d{5}(-\d{4})?$" required placeholder="Zip Code" 
              value={formData.zipcode} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <input 
              type="tel" name="phone" pattern="[0-9+\-() ]{7,}" placeholder="Phone Number" 
              value={formData.phone} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />

            <input 
              type="email" name="email" required placeholder="E-mail" 
              value={formData.email} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0685B1] focus:border-transparent"
            />
          </div>

          {/* Legal/Consent Disclosure */}
          <div className="flex items-start gap-3 mt-6 text-xs text-gray-500 leading-relaxed">
            <input 
              type="checkbox" id="subscribe" name="subscribe" 
              checked={formData.subscribe} onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0685B1] focus:ring-[#0685B1]"
            />
            <label htmlFor="subscribe">
              By clicking Submit, I agree to the <Link to="/terms-of-service" className="text-[#0685B1] underline">Terms Of Service</Link> and 
              <Link to="/privacy-policy" className="text-[#0685B1] underline"> Privacy Policy</Link> and authorize Water Damage Insurance Companies and their agents and marketing partners to contact me about Water Damage Insurance and other non-insurance offers by telephone calls and text messages to the number I provided above. I agree to receive telemarketing calls and pre-recorded messages via an autodialed phone system, even if my telephone number is a mobile number that is currently listed on any state, federal or corporate “Do Not Call” list. I understand that I may revoke my consent at any time and that my consent is not a condition of purchase of any goods or services and that standard message and data rates may apply for California Residents.
            </label>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-[#0685B1] hover:bg-[#056a8c] text-white font-bold py-4 rounded transition-colors text-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {status.message && (
          <div className={`mt-4 text-center font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {status.message}
          </div>
        )}
      </main>

      <noscript>
        <img src='https://api.trustedform.com/ns.gif' alt="trustedform" />
      </noscript>
    </div>
  );
};

export default WaterDamageForm;