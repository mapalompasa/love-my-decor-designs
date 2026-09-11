import React, { useState } from 'react';
import { brandConfig } from '../data/brandConfig';
import { IconWhatsApp, IconDiagonalArrow, IconCalendar, IconMapPin, IconUsers, IconSparkles, IconCheck, IconAlertTriangle, IconClose } from './Icons';

export default function BookingPortal({ prefilledProject, onClearPrefilledProject }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: prefilledProject?.category || 'Luxury Wedding',
    eventDate: '',
    venue: prefilledProject?.venue || '',
    guestCount: prefilledProject?.guestCount || '100 - 250',
    budgetTier: prefilledProject?.budgetTier || 'Opulent Couture',
    notes: prefilledProject ? `I am looking for styling inspired by ${prefilledProject.title}.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const eventTypes = [
    'Luxury Wedding',
    'Kitchen Party / Traditional Send-Off',
    'Corporate Gala / Summit',
    'Private Milestone Celebration',
  ];

  const guestCountOptions = [
    '< 100 Guests',
    '100 – 250 Guests',
    '250 – 500 Guests',
    '500+ Guests',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the luxury WhatsApp message payload
    const lines = [
      `*LUXURY EVENT CONSULTATION REQUEST*`,
      `*Love My Decor Designs — Selina Machima*`,
      ``,
      `*Client Name:* ${formData.name || 'Discerning Client'}`,
      `*Client Contact:* ${formData.phone || 'Not specified'}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Event Type:* ${formData.eventType}`,
      `*Event Date:* ${formData.eventDate || 'Date to be confirmed'}`,
      `*Venue / City:* ${formData.venue || 'Lusaka / Pending Selection'}`,
      `*Guest Count:* ${formData.guestCount}`,
      `*Decor Budget Tier:* ${formData.budgetTier}`,
      prefilledProject ? `*Referenced Portfolio Blueprint:* ${prefilledProject.title}` : null,
      formData.notes ? `*Aesthetic Vision & Notes:* ${formData.notes}` : null,
      ``,
      `_Submitted via Love My Decor Designs Official Portal_`,
    ].filter(Boolean);

    const message = lines.join('\n');
    const waUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

    setGeneratedUrl(waUrl);
    setSubmitted(true);
    setShowDemoModal(true);

    // Restricted in demo mode: Do not open WhatsApp
    // "This step would usually take you to WhatsApp, but it is currently restricted in demo mode"
  };

  const handleCopyText = () => {
    const lines = [
      `LUXURY EVENT CONSULTATION REQUEST`,
      `Brand: Love My Decor Designs (Selina Machima)`,
      `Client: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Type: ${formData.eventType}`,
      `Date: ${formData.eventDate}`,
      `Venue: ${formData.venue}`,
      `Guests: ${formData.guestCount}`,
      `Budget Tier: ${formData.budgetTier}`,
      `Notes: ${formData.notes}`,
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking" className="py-16 md:py-28 border-t border-white/10 relative bg-[#0a0a0a]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#c966d4] flex items-center gap-2 mb-2">
                <IconCalendar className="w-3.5 h-3.5 stroke-[#c966d4]" />
                Direct Concierge Booking
              </span>
              <h2 className="text-2xl sm:text-5xl md:text-6xl font-[900] tracking-tighter uppercase text-white leading-none">
                The Booking Portal
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Complete the consultation specifications below. Upon submission, an encrypted WhatsApp dispatch will be automatically pre-filled and sent to Selina Machima at <strong>+260 979 176 151</strong> <span className="hidden sm:inline">(demo mode active: WhatsApp dispatch restricted)</span><span className="sm:hidden text-[#c966d4]"> — Demo Mode</span>.
            </p>
          </div>

          {/* 5px Solid Structural Divider Bar in Brand Violet */}
          <div className="h-[5px] w-full bg-[#83338a] mb-8 origin-left"></div>
        </div>

        {/* 16-Column Layout (Tablet: full-width stacked, Desktop: 6/10 original) */}
        <div className="grid grid-cols-8 md:grid-cols-16 gap-8 md:gap-12">
          
          {/* Left Column (Desktop: lg:col-span-6 untouched) */}
          <div className="col-span-8 md:col-span-16 lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Prefilled Project Indicator */}
              {prefilledProject && (
                <div className="p-4 bg-white/5 border border-[#83338a]/60 relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#c966d4]">
                      Referenced Aesthetic
                    </span>
                    <button
                      type="button"
                      onClick={onClearPrefilledProject}
                      className="text-xs text-neutral-400 hover:text-white underline min-h-[44px] sm:min-h-0 flex items-center"
                    >
                      Clear
                    </button>
                  </div>
                  <p className="font-[900] text-lg uppercase tracking-tight text-white">
                    {prefilledProject.title}
                  </p>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    {prefilledProject.category} • {prefilledProject.venue}
                  </p>
                </div>
              )}

              <div>
                <h3 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-2">
                  The Consultation Process
                </h3>
                <ol className="space-y-4 text-sm text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#f6eff8] bg-[#83338a]/25 border border-[#83338a]/50 px-2 py-0.5">
                      01
                    </span>
                    <div>
                      <strong className="text-white block font-bold">Direct WhatsApp Dispatch</strong>
                      Your event parameters are routed directly to Selina Machima's executive device.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#f6eff8] bg-[#83338a]/25 border border-[#83338a]/50 px-2 py-0.5">
                      02
                    </span>
                    <div>
                      <strong className="text-white block font-bold">Design Concept &amp; Estimate</strong>
                      Receive a preliminary structural moodboard, floral breakdown, and budget alignment within 24 hours.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#f6eff8] bg-[#83338a]/25 border border-[#83338a]/50 px-2 py-0.5">
                      03
                    </span>
                    <div>
                      <strong className="text-white block font-bold">Private Studio Review</strong>
                      In-person consultation at our Lusaka studio or via VIP video conference for international clients.
                    </div>
                  </li>
                </ol>
              </div>

              {/* Direct Booking Line Box */}
              <div className="p-6 bg-[#120d14] border border-[#2c1930] space-y-3">
                <span className="text-xs uppercase font-mono tracking-widest text-[#c966d4] block">
                  Prefer Direct Voice or WhatsApp?
                </span>
                <p className="text-sm text-neutral-300">
                  You can call or text the founder directly anytime for urgent calendar availability:
                </p>
                <a
                  href={`https://wa.me/${brandConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-[900] text-[#f6eff8] hover:text-[#c966d4] transition-colors min-h-[44px]"
                >
                  <IconWhatsApp className="w-5 h-5 fill-[#c966d4]" />
                  <span>{brandConfig.phone}</span>
                </a>
                <p className="text-[11px] text-neutral-500 font-mono">
                  Official Line • Selina Machima • Lusaka, Zambia
                </p>
              </div>

            </div>

            {/* Availability Notice */}
            <div className="p-4 border-l-2 border-[#83338a] bg-white/[0.02] text-xs text-neutral-400 font-mono">
              Peak wedding season dates (April–December) book 6–12 months in advance. Early reservation recommended.
            </div>
          </div>

          {/* Right Column (Desktop: lg:col-span-10 untouched) */}
          <div className="col-span-8 md:col-span-16 lg:col-span-10">
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#121212] border border-white/10 p-4 sm:p-8 md:p-10">
              
              <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                  Event Parameters
                </span>
                <span className="text-xs text-[#c966d4] font-mono">
                  * Auto-generates WhatsApp to +260 979 176 151
                </span>
              </div>

              {/* Row 1: Event Type */}
              <div>
                <label className="block text-xs uppercase font-mono tracking-widest text-neutral-300 mb-2">
                  01. Event Type *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {eventTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData((prev) => ({ ...prev, eventType: type }))}
                      className={`px-4 py-3 text-left text-xs font-bold uppercase tracking-tight border transition-all ${
                        formData.eventType === type
                          ? 'bg-[#83338a] text-white border-[#83338a] shadow-md shadow-[#83338a]/25'
                          : 'bg-black/40 text-neutral-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 2: Event Date & Venue */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-xs uppercase font-mono tracking-widest text-neutral-300 mb-2">
                    02. Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-white/15 px-4 py-3 text-base sm:text-sm text-white font-mono focus:border-[#83338a] transition-colors min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="venue" className="block text-xs uppercase font-mono tracking-widest text-neutral-300 mb-2">
                    03. Venue / Location *
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    required
                    placeholder="e.g. Ciela Resort, Latitude 15, Bonanza, or Private Estate"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-white/15 px-4 py-3 text-base sm:text-sm text-white placeholder-neutral-600 focus:border-[#83338a] transition-colors min-h-[44px]"
                  />
                </div>
              </div>

              {/* Row 3: Guest Count */}
              <div>
                <label className="block text-xs uppercase font-mono tracking-widest text-neutral-300 mb-2">
                  04. Guest Count *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {guestCountOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData((prev) => ({ ...prev, guestCount: opt }))}
                      className={`px-3 py-3 text-center text-xs font-bold uppercase tracking-tight border transition-all ${
                        formData.guestCount === opt
                          ? 'bg-[#83338a] text-white border-[#83338a] shadow-md shadow-[#83338a]/25'
                          : 'bg-black/40 text-neutral-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Decor Budget Tier */}
              <div>
                <label className="block text-xs uppercase font-mono tracking-widest text-neutral-300 mb-2">
                  05. Decor Budget Tier *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {brandConfig.budgetTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setFormData((prev) => ({ ...prev, budgetTier: tier.title }))}
                      className={`p-3.5 sm:p-4 text-left border transition-all flex flex-col justify-between ${
                        formData.budgetTier === tier.title
                          ? 'bg-[#83338a] text-white border-[#83338a] shadow-lg shadow-[#83338a]/30'
                          : 'bg-black/40 text-neutral-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-[900] uppercase tracking-tight mb-1">
                          {tier.title}
                        </span>
                        <span className={`block text-[11px] font-mono mb-2 ${formData.budgetTier === tier.title ? 'text-white' : 'text-[#c966d4]'}`}>
                          {tier.rangeZMW}
                        </span>
                      </div>
                      <p className={`text-[11px] leading-snug ${formData.budgetTier === tier.title ? 'text-white/90' : 'text-neutral-400'}`}>
                        {tier.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Client Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase font-mono tracking-widest text-neutral-300 mb-2">
                    06. Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Kondwani Phiri &amp; Natasha Banda"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-white/15 px-4 py-3 text-base sm:text-sm text-white placeholder-neutral-600 focus:border-[#83338a] transition-colors min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase font-mono tracking-widest text-neutral-300 mb-2">
                    07. WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+260 97X XXX XXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-white/15 px-4 py-3 text-base sm:text-sm text-white placeholder-neutral-600 focus:border-[#83338a] transition-colors min-h-[44px]"
                  />
                </div>
              </div>

              {/* Row 6: Vision / Aesthetic Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs uppercase font-mono tracking-widest text-neutral-300 mb-2">
                  08. Design Vision, Color Palette or Specific Requests
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Share your dream palette, floral preferences, or link to Pinterest moodboards..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-white/15 px-4 py-3 text-base sm:text-sm text-white placeholder-neutral-600 focus:border-[#83338a] transition-colors min-h-[44px]"
                ></textarea>
              </div>

              {/* Submit Button with Mobile Wrap Protection */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="submit"
                  className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-3.5 sm:py-4 md:py-5 bg-[#83338a] text-white font-[900] text-xs sm:text-sm md:text-base uppercase tracking-tight hover:bg-[#993da3] transition-all shadow-xl shadow-[#83338a]/30 group cursor-pointer active:scale-[0.99] border border-[#c966d4]/40"
                >
                  <div className="flex items-center gap-2">
                    <IconWhatsApp className="w-4 h-4 sm:w-5 sm:h-5 fill-white flex-shrink-0" />
                    <span>Submit Quotation Inquiry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-black/40 border border-[#c966d4]/40 text-[#f6eff8]">
                      DEMO MODE
                    </span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">
                      <IconDiagonalArrow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  </div>
                </button>
                <p className="text-[11px] text-center text-neutral-400 font-mono mt-3">
                  * Demo mode active: WhatsApp submission is restricted.
                </p>
              </div>

            </form>

            {/* Submission Confirmation & Demo Restriction Box */}
            {submitted && (
              <div className="mt-6 p-6 sm:p-8 bg-[#160e18] border border-[#83338a]/60 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-[#c966d4] font-bold text-sm">
                    <IconCheck className="w-5 h-5 stroke-[#c966d4]" />
                    <span>Quotation Prepared Successfully!</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#83338a]/30 text-[#e9b8f2] px-2.5 py-1 border border-[#c966d4]/40">
                    Demo Mode
                  </span>
                </div>

                {/* Mandatory Restriction Notice */}
                <div className="p-4 bg-[#251029] border border-[#c966d4]/50 flex items-start gap-3">
                  <IconAlertTriangle className="w-5 h-5 stroke-[#c966d4] flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base font-bold text-[#ffdaf5] leading-snug">
                    This step would usually take you to WhatsApp, but it is currently restricted in demo mode
                  </p>
                </div>

                <p className="text-xs text-neutral-400">
                  Your consultation parameters have been compiled. In live mode, this sends the pre-filled quotation dispatch directly to Selina Machima at +260 979 176 151.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowDemoModal(true)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#83338a] text-white font-[900] text-xs uppercase tracking-tight hover:bg-[#993da3] shadow-md shadow-[#83338a]/30 border border-[#c966d4]/40 transition-colors"
                  >
                    <IconAlertTriangle className="w-4 h-4 stroke-white" />
                    <span>View Restriction Details</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyText}
                    className="px-6 py-3 border border-white/20 hover:border-[#83338a] hover:bg-[#83338a]/15 text-white font-bold text-xs uppercase tracking-tight transition-colors"
                  >
                    {copied ? 'Copied to Clipboard!' : 'Copy Summary'}
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Demo Mode Restriction Modal */}
      {showDemoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-restriction-title"
        >
          <div className="relative w-full max-w-lg bg-[#140b17] border-2 border-[#83338a] p-5 sm:p-8 text-white shadow-2xl shadow-[#83338a]/40 max-h-[90vh] overflow-y-auto">
            {/* Top Accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#83338a] via-[#c966d4] to-[#83338a]"></div>

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#83338a]/30 border border-[#c966d4]/50 flex items-center justify-center text-[#c966d4]">
                  <IconAlertTriangle className="w-5 h-5 stroke-[#c966d4]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#c966d4] block">
                    Demo Mode Active
                  </span>
                  <h3 id="demo-restriction-title" className="text-xl font-[900] tracking-tight uppercase text-white">
                    Inquiry Restriction
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowDemoModal(false)}
                className="text-neutral-400 hover:text-white p-1 transition-colors"
                aria-label="Close modal"
              >
                <IconClose className="w-5 h-5 stroke-current" />
              </button>
            </div>

            {/* Required Restriction Message */}
            <div className="p-4 sm:p-5 mb-5 bg-[#251029] border border-[#c966d4]/60 text-white shadow-inner">
              <p className="text-sm sm:text-base font-bold text-[#ffdaf5] leading-relaxed">
                This step would usually take you to WhatsApp, but it is currently restricted in demo mode
              </p>
            </div>

            {/* Quotation Details Summary */}
            <div className="bg-black/60 border border-white/10 p-4 mb-6 text-xs space-y-2 font-mono">
              <div className="text-[#c966d4] uppercase font-bold text-[11px] mb-2 border-b border-white/10 pb-1 flex items-center justify-between">
                <span>Quotation Specifications</span>
                <span className="text-[10px] text-neutral-400">Processed</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Client:</span>
                <span className="text-white font-bold">{formData.name || 'Discerning Client'}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Phone:</span>
                <span className="text-white">{formData.phone || 'Not specified'}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Event Type:</span>
                <span className="text-white">{formData.eventType}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Budget Tier:</span>
                <span className="text-white">{formData.budgetTier}</span>
              </div>
              {formData.eventDate && (
                <div className="flex justify-between text-neutral-300">
                  <span>Date:</span>
                  <span className="text-white">{formData.eventDate}</span>
                </div>
              )}
              {formData.venue && (
                <div className="flex justify-between text-neutral-300">
                  <span>Venue:</span>
                  <span className="text-white">{formData.venue}</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleCopyText}
                className="flex-1 py-3 px-4 bg-[#83338a] hover:bg-[#993da3] text-white font-[900] text-xs uppercase tracking-tight transition-all border border-[#c966d4]/40 text-center"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy Quotation Summary'}
              </button>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="py-3 px-5 border border-white/20 hover:border-white/40 text-white font-bold text-xs uppercase tracking-tight text-center transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
