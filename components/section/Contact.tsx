"use client";

import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Freelance",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "Freelance",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      label: "Email",
      value: "eloddysaadeddine@gmail.com",
      href: "mailto:eloddysaadeddine@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.12 1.5m-17.66 6.566l15.196-15.196a2.25 2.25 0 013.182 0l15.196 15.196m-15.196 15.196L4.47 8.066a2.25 2.25 0 00-3.182 0"
          />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+212 659 354 715",
      href: "tel:+212659354715",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Tiznit, Morocco",
      href: "https://maps.google.com/?q=Tiznit,Morocco",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saad-eddine-el-oddy" },
    { label: "GitHub", href: "https://github.com/Saadellody" },
  ];

  return (
    <div className="max-w-[90%] lg:max-w-[85%] w-full mx-auto flex-grow flex flex-col justify-center relative z-10 py-20 lg:py-13">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column - Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          {/* Header */}
          <div>
            <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
              / Get in Touch
            </p>
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Let&apos;s Work <br />
              <span className="text-transparent stroke-text-orange">
                Together.
              </span>
            </h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              I&apos;m currently available for freelance work. Have a project in mind? Send a message or reach out directly.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center gap-4 group cursor-pointer"
                target={method.label === "Location" ? "_blank" : undefined}
                rel={method.label === "Location" ? "noopener noreferrer" : undefined}
              >
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  {method.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    {method.label}
                  </p>
                  <p className="text-sm font-bold group-hover:underline decoration-1 underline-offset-4 text-neutral-200">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-4 flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-orange-500 hover:underline transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-7 bg-neutral-900/50 p-6 lg:p-12 lg:mt-10 border border-neutral-800 shadow-sm backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-neutral-700 py-3 text-sm font-medium text-neutral-200 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-600"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-neutral-700 py-3 text-sm font-medium text-neutral-200 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-600"
                />
              </div>
            </div>

            {/* Subject Radio Buttons */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                Subject
              </label>
              <div className="flex gap-4 pt-2 flex-wrap">
                {["Web Design", "Development", "Freelance", "Other"].map(
                  (subjectOption) => (
                    <label
                      key={subjectOption}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={subjectOption}
                        checked={formData.subject === subjectOption}
                        onChange={handleInputChange}
                        className="peer sr-only"
                      />
                      <span className="px-4 py-2 border border-neutral-700 text-xs text-neutral-400 rounded-full peer-checked:bg-orange-500 peer-checked:text-white peer-checked:border-orange-500 hover:border-neutral-600 transition-all">
                        {subjectOption}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-neutral-700 py-3 text-sm font-medium text-neutral-200 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-600 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-between w-full bg-orange-500/95 px-8 py-5 hover:bg-neutral-100 hover:text-neutral-900 transition-colors disabled:opacity-50 font-bold uppercase tracking-widest text-xs"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300 text-sm">
                  →
                </span>
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="text-sm text-green-400 text-center pt-4">
                ✓ Message sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-sm text-red-400 text-center pt-4">
                ✗ Error sending message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 lg:mt-0 w-full text-center lg:text-left mb-4">
        <span className="text-[10px] font-mono text-neutral-600">
          © 2026 Saad Eddine El oddy. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Contact;
