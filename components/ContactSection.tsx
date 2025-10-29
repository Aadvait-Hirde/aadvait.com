'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://submit-form.com/SVjeVNLrT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        // Auto-hide after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#f5f5f5] py-20 px-8 md:px-12 flex items-center relative overflow-hidden">
      {/* Decorative wave pattern - background */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-[#3f031c] mb-16 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Contact Information */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-[#3f031c] mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Feel free to reach out to me for collaboration, opportunities, or just to say hello. I'm always open to discussing new projects and ideas.
            </p>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e8cca1]/70 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#3f031c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Email</p>
                  <div className="text-[#3f031c]">
                    <a href="mailto:aadvait.cr@gmail.com" className="hover:text-[#e8cca1] transition-colors">
                      aadvait.cr@gmail.com
                    </a>
                    <span className="mx-2">|</span>
                    <a href="mailto:ahirde@iu.edu" className="hover:text-[#e8cca1] transition-colors">
                      ahirde@iu.edu
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e8cca1]/70 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#3f031c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Phone</p>
                  <a href="tel:+18129478569" className="text-[#3f031c] hover:text-[#e8cca1] transition-colors">
                    +1 (812) 947-8569
                  </a>
                </div>
              </div>

              {/* Schedule a Meeting */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e8cca1]/70 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#3f031c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Schedule a Meeting</p>
                  <a 
                    href="https://calendly.com/aadvait-hirde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors underline"
                  >
                    Book a time on my Calendly
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-3xl font-bold text-[#3f031c] mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8cca1] focus:border-transparent transition-all"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8cca1] focus:border-transparent transition-all"
                />
              </div>

              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8cca1] focus:border-transparent transition-all"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8cca1] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3f031c] text-white py-4 rounded-lg font-semibold hover:bg-[#5a2f3e] transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full animate-in slide-in-from-bottom-4 duration-300">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Message */}
            <h3 className="text-2xl font-bold text-[#3f031c] text-center mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Thanks for reaching out! I'll get back to you as soon as I can.
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-[#3f031c] text-white py-3 rounded-lg font-semibold hover:bg-[#5a2f3e] transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

