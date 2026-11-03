import React, { useState } from 'react';
import { X, CheckCircle2, Send, Building, Mail, Phone, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: string;
  defaultProductInterest?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'general',
  defaultProductInterest = ''
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: 'Italy',
    interest: defaultProductInterest || 'All Product Categories',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid corporate email required';
    } else {
      try {
        const submittedEmails = JSON.parse(localStorage.getItem('ia_submitted_emails') || '[]');
        if (submittedEmails.includes(formData.email.trim().toLowerCase())) {
          errs.email = 'This email has already submitted an inquiry. Please wait for our team to respond.';
        }
      } catch (e) {
        // Fallback silently if localStorage blocked
      }
    }
    if (!formData.message.trim()) errs.message = 'Please describe your request';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const emailLower = formData.email.trim().toLowerCase();
      const submittedEmails = JSON.parse(localStorage.getItem('ia_submitted_emails') || '[]');
      if (!submittedEmails.includes(emailLower)) {
        submittedEmails.push(emailLower);
        localStorage.setItem('ia_submitted_emails', JSON.stringify(submittedEmails));
      }
    } catch (e) {
      // Fallback silently
    }

    // Simulate instant secure submission
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      country: 'Italy',
      interest: 'All Product Categories',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left my-8">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#FAF4E7] border-b border-[#151515]/8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[1.5px] bg-[#FFC900]" />
              <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#777D45]">
                Corporate Inquiries & Global Trade
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#151515]">
              Get in Touch with Italia Alimentari
            </h3>
            <p className="text-xs text-[#68645B] mt-1">
              Connect directly with our sales directors, export managers, or culinary specialists.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white text-[#68645B] hover:text-[#151515] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#FAF4E7] text-[#777D45] flex items-center justify-center mx-auto border-2 border-[#FFC900]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#151515]">
                Inquiry Received
              </h4>
              <p className="text-xs sm:text-sm text-[#68645B] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Your request for the <strong className="text-[#151515]">{formData.company}</strong> account has been forwarded to our commercial division in Gazoldo degli Ippoliti. A representative will contact you within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#FFC900] text-[#151515] text-xs font-sans font-bold uppercase tracking-wider rounded"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-[#151515] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Marco Rossi"
                    className={`w-full px-3.5 py-2.5 rounded-lg border bg-white ${
                      errors.fullName ? 'border-[#A63426]' : 'border-[#151515]/15 focus:border-[#E9B800]'
                    } focus:outline-none`}
                  />
                  {errors.fullName && <p className="text-[10px] text-[#A63426] mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-[#151515] mb-1">
                    Company Name / Organization *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. European Fine Foods Ltd."
                    className={`w-full px-3.5 py-2.5 rounded-lg border bg-white ${
                      errors.company ? 'border-[#A63426]' : 'border-[#151515]/15 focus:border-[#E9B800]'
                    } focus:outline-none`}
                  />
                  {errors.company && <p className="text-[10px] text-[#A63426] mt-0.5">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-[#151515] mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border bg-white ${
                      errors.email ? 'border-[#A63426]' : 'border-[#151515]/15 focus:border-[#E9B800]'
                    } focus:outline-none`}
                  />
                  {errors.email && <p className="text-[10px] text-[#A63426] mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-[#151515] mb-1">
                    Country / Market
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Italy, Germany, France, United States..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#151515]/15 bg-white focus:border-[#E9B800] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-[#151515] mb-1">
                  Product or Service Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#151515]/15 bg-white focus:border-[#E9B800] focus:outline-none text-[#151515]"
                >
                  <option>All Product Categories</option>
                  <option>Traditional Deli Meats (Parma DOP, Culatello, Mortadella)</option>
                  <option>Cleanroom Sliced Trays (MAP / Eco Paper Tray)</option>
                  <option>Snacks & Aperitivo Range (Spanino)</option>
                  <option>Bacon & Diced Pancetta</option>
                  <option>Private Label / Co-Packing Project</option>
                  <option>Industrial Meat Ingredients (IQF & Bulk)</option>
                  <option>Career Application / HR</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-[#151515] mb-1">
                  Your Message & Requirements *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify estimated volumes, certifications required, delivery destinations, or project scope..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border bg-white ${
                    errors.message ? 'border-[#A63426]' : 'border-[#151515]/15 focus:border-[#E9B800]'
                  } focus:outline-none resize-none`}
                />
                {errors.message && <p className="text-[10px] text-[#A63426] mt-0.5">{errors.message}</p>}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <p className="text-[10px] text-[#68645B]">
                  By submitting, you agree to the processing of personal data for commercial response.
                </p>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FFC900] hover:bg-[#E9B800] text-[#151515] text-xs font-sans font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 shrink-0"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
