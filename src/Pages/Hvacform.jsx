import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HVACForm = () => {
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
    xxTrustedFormCertUrl: '' // <-- add this field
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize TrustedForm Script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=${new Date().getTime()}${Math.random()}`;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);

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

    // Grab TrustedForm hidden field value before sending
    const certField = document.querySelector("input[name='xxTrustedFormCertUrl']");
    const certUrl = certField ? certField.value : '';

    try {
      const response = await fetch("https://three60quotesbackend.onrender.com/HVAC/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          xxTrustedFormCertUrl: certUrl // <-- include TrustedForm value
        }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Form submitted successfully!' });
        setFormData({
          first_name: '', last_name: '', Address: '', City: '',
          reason: '', zipcode: '', phone: '', email: '', subscribe: false,
          xxTrustedFormCertUrl: ''
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
      <header className="pt-16 text-center">
        <h1 className="text-4xl font-bold text-[#0685B1] mt-[50px]">HVAC</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Hidden TrustedForm field */}
          <input type="hidden" name="xxTrustedFormCertUrl" />

          {/* Your existing inputs... */}
          {/* ... */}
        </form>

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

export default HVACForm;