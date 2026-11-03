import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
const stabilimentiMondoImg = '/images/italia_alimentari_stabilimenti_mondo.png';

interface ContactsPageProps {
  currentLanguage?: string;
}

export const ContactsPage: React.FC<ContactsPageProps> = ({ currentLanguage = 'IT' }) => {
  const [activeTab, setActiveTab] = useState<'business' | 'retail' | 'careers' | 'suppliers'>('business');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    department: currentLanguage === 'IT' ? 'Commerciale & Vendite' : 'Commercial / Sales',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isItalian = currentLanguage === 'IT';
  const isGerman = currentLanguage === 'DE';
  const isFrench = currentLanguage === 'FR';

  const t = {
    badge: isItalian
      ? 'Contatti & Stabilimenti'
      : isGerman
        ? 'Kontakte & Standorte'
        : isFrench
          ? 'Contacts & Établissements'
          : 'Contacts & Facilities',
    title: isItalian ? 'Contatti' : isGerman ? 'Kontakte' : isFrench ? 'Contacts' : 'Contacts',

    // Addresses titles & descriptions
    bussetoDesc: isItalian
      ? '– Italy – Sede legale e stabilimento produttivo'
      : isGerman
        ? '– Italien – Hauptsitz und Produktionsstätte'
        : isFrench
          ? '– Italie – Siège social et usine de production'
          : '– Italy – Registered office and production plant',

    gazoldoDesc: isItalian
      ? '– Italy – Sede operativa e centro logistico'
      : isGerman
        ? '– Italien – Betriebssitz und Logistikzentrum'
        : isFrench
          ? '– Italie – Siège opérationnel et centre logistique'
          : '– Italy – Operational headquarters and logistics hub',

    postalesioDesc: isItalian
      ? '– Italy – Stabilimento produttivo'
      : isGerman
        ? '– Italien – Produktionsstätte'
        : isFrench
          ? '– Italie – Usine de production'
          : '– Italy – Production plant',

    mandatoriccioDesc: isItalian
      ? '– Italy – Stabilimento produttivo'
      : isGerman
        ? '– Italien – Produktionsstätte'
        : isFrench
          ? '– Italie – Usine de production'
          : '– Italy – Production plant',

    castelfrigoDesc: isItalian
      ? '– Italy – Sede legale e stabilimento produttivo'
      : isGerman
        ? '– Italien – Hauptsitz und Produktionsstätte'
        : isFrench
          ? '– Italie – Siège social et usine de production'
          : '– Italy – Registered office and production plant',

    commercialBranch: isItalian
      ? '– Filiale commerciale'
      : isGerman
        ? '– Handelsniederlassung'
        : isFrench
          ? '– Filiale commerciale'
          : '– Commercial branch',

    canadaDesc: isItalian
      ? '– Sede legale e stabilimento produttivo'
      : isGerman
        ? '– Hauptsitz und Produktionsstätte'
        : isFrench
          ? '– Siège social et usine de production'
          : '– Registered office and production plant',

    usaDesc: isItalian
      ? '– Sede legale e stabilimento produttivo'
      : isGerman
        ? '– Hauptsitz und Produktionsstätte'
        : isFrench
          ? '– Siège social et usine de production'
          : '– Registered office and production plant',

    // Action cards
    clientiTitle: isItalian ? 'CLIENTI' : isGerman ? 'GESCHÄFTSKUNDEN' : isFrench ? 'CLIENTS PRO' : 'BUSINESS CLIENTS',
    clientiSub: isItalian
      ? 'Hai un\'attività commerciale?'
      : isGerman
        ? 'Haben Sie ein Handelsunternehmen?'
        : isFrench
          ? 'Avez-vous une activité commerciale?'
          : 'Do you manage a commercial business?',
    scrivici: isItalian ? 'SCRIVICI QUI' : isGerman ? 'KONTAKTIEREN' : isFrench ? 'ÉCRIVEZ-NOUS' : 'WRITE TO US',

    consumatoriTitle: isItalian ? 'CONSUMATORI' : isGerman ? 'VERBRAUCHER' : isFrench ? 'CONSOMMATEURS' : 'CONSUMERS',
    consumatoriSub: isItalian
      ? 'Hai bisogno di informazioni sui prodotti?'
      : isGerman
        ? 'Benötigen Sie Produktinformationen?'
        : isFrench
          ? 'Besoin d\'informations sur les produits?'
          : 'Need information about our products?',

    lavoraTitle: isItalian ? 'LAVORA CON NOI' : isGerman ? 'KARRIERE' : isFrench ? 'CARRIÈRES' : 'CAREERS',
    lavoraSub: isItalian
      ? 'Vuoi far parte della nostra squadra?'
      : isGerman
        ? 'Möchten Sie Teil unseres Teams werden?'
        : isFrench
          ? 'Vous souhaitez rejoindre notre équipe?'
          : 'Want to be part of our team?',

    // Form
    formBadge: isItalian ? 'Modulo di Contatto Ufficiale' : 'Official Inquiry Form',
    formHeading: isItalian ? 'Invia una Richiesta Diretta' : 'Send a Direct Message',
    fullName: isItalian ? 'Nome e Cognome *' : 'Full Name *',
    company: isItalian ? 'Azienda / Attività' : 'Company / Business',
    email: isItalian ? 'Email Ufficiale *' : 'Official Email *',
    phone: isItalian ? 'Telefono / Recapito' : 'Phone Number',
    department: isItalian ? 'Dipartimento / Ambito di Richiesta' : 'Department / Inquiry Scope',
    message: isItalian ? 'Messaggio / Dettagli della Richiesta *' : 'Message / Details *',
    submitBtn: isItalian ? 'Invia Richiesta' : 'Submit Inquiry',
    gdpr: isItalian
      ? 'I dati saranno trattati in conformità al Regolamento UE 2016/679 (GDPR).'
      : 'Data will be processed in accordance with EU Regulation 2016/679 (GDPR).',
    tollFreeTitle: isItalian ? 'Numero Verde Servizio Clienti' : 'Toll-Free Customer Line',
    tollFreeSub: isItalian
      ? 'Chiamata gratuita dall\'Italia. Attivo lun–ven 8:30–18:00.'
      : 'Free call from Italy. Active Mon–Fri 8:30–18:00 CET.',
    successTitle: isItalian ? 'Messaggio Inviato' : 'Inquiry Received',
    successMsg: isItalian
      ? 'Grazie per aver contattato Italia Alimentari. Ti risponderemo al più presto.'
      : 'Thank you for contacting Italia Alimentari. Our team will respond shortly.',
    sendAnother: isItalian ? 'Invia un Altro Messaggio' : 'Send Another Message'
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = isItalian ? 'Nome obbligatorio' : 'Full name is required';
    if (!formData.company.trim() && activeTab === 'business') {
      errs.company = isItalian ? 'Azienda obbligatoria' : 'Company is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = isItalian ? 'Email valida richiesta' : 'Valid email required';
    } else {
      try {
        const submittedEmails = JSON.parse(localStorage.getItem('ia_submitted_emails') || '[]');
        if (submittedEmails.includes(formData.email.trim().toLowerCase())) {
          errs.email = isItalian
            ? 'Questa email ha già inviato una richiesta recente.'
            : 'This email has already submitted a recent inquiry.';
        }
      } catch {
        // Fallback silently
      }
    }
    if (!formData.message.trim()) errs.message = isItalian ? 'Dettagli messaggio richiesti' : 'Please provide message details';
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
    } catch {
      // Fallback silently
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-left font-sans antialiased">

      {/* ========================================================================= */}
      {/* 1. HERO ADDRESS & MAP SECTION (EXACT DESIGN MATCHING ORIGINAL WEBSITE)    */}
      {/* ========================================================================= */}
      <section className="pt-28 pb-16 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Left Column: Authentic Typography & Official Address Hierarchy matching reference */}
            <div className="lg:col-span-6 space-y-6 pt-2 font-sans">

              <h1 className="text-2xl sm:text-[32px] font-bold text-[#1A1A1A] mb-8 font-sans tracking-tight">
                Italia Alimentari S.p.A.
              </h1>

              {/* 1. sede di Busseto */}
              <div>
                <p className="text-[15px] sm:text-base leading-snug">
                  <strong className="font-bold text-[#1A1A1A]">sede di Busseto, Parma</strong>{' '}
                  <span className="font-normal text-[#666666]">
                    {t.bussetoDesc}
                  </span>
                </p>
                <p className="text-sm sm:text-[14px] text-[#666666] mt-1 leading-normal">
                  Via Europa, 14 – Tel{' '}
                  <a
                    href="tel:+390524930311"
                    className="text-[#666666] hover:text-[#1A1A1A] transition-colors"
                  >
                    +39 0524 930311
                  </a>{' '}
                  – PEC:{' '}
                  <a
                    href="mailto:info@pec.italiaalimentari.it"
                    className="text-[#666666] underline hover:text-[#1A1A1A] transition-colors"
                  >
                    info@pec.italiaalimentari.it
                  </a>
                </p>
              </div>

              {/* 2. sede di Gazoldo degli Ippoliti */}
              <div>
                <p className="text-[15px] sm:text-base leading-snug">
                  <strong className="font-bold text-[#1A1A1A]">sede di Gazoldo degli Ippoliti, Mantova</strong>{' '}
                  <span className="font-normal text-[#666666]">
                    {t.gazoldoDesc}
                  </span>
                </p>
                <p className="text-sm sm:text-[14px] text-[#666666] mt-1 leading-normal">
                  Via Marconi, 3 – Tel{' '}
                  <a
                    href="tel:+3903766801"
                    className="text-[#666666] hover:text-[#1A1A1A] transition-colors"
                  >
                    +39 0376 6801
                  </a>{' '}
                  – Email:{' '}
                  <a
                    href="mailto:info@italiaalimentari.it"
                    className="text-[#666666] underline hover:text-[#1A1A1A] transition-colors"
                  >
                    info@italiaalimentari.it
                  </a>
                </p>
              </div>

              {/* 3. sede di Postalesio */}
              <div>
                <p className="text-[15px] sm:text-base leading-snug">
                  <strong className="font-bold text-[#1A1A1A]">sede di Postalesio, Sondrio</strong>{' '}
                  <span className="font-normal text-[#666666]">
                    {t.postalesioDesc}
                  </span>
                </p>
                <p className="text-sm sm:text-[14px] text-[#666666] mt-1 leading-normal">
                  Via Crocetta, 2
                </p>
              </div>

              {/* 4. sede di Mandatoriccio */}
              <div>
                <p className="text-[15px] sm:text-base leading-snug">
                  <strong className="font-bold text-[#1A1A1A]">sede di Mandatoriccio, Cosenza</strong>{' '}
                  <span className="font-normal text-[#666666]">
                    {t.mandatoriccioDesc}
                  </span>
                </p>
                <p className="text-sm sm:text-[14px] text-[#666666] mt-1 leading-normal">
                  Contrada Filiciusa
                </p>
              </div>

              {/* 5. Castelfrigo LV */}
              <div>
                <p className="text-[15px] sm:text-base leading-snug">
                  <a
                    href="https://www.castelfrigo.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#8A2432] hover:underline"
                  >
                    Castelfrigo LV
                  </a>{' '}
                  <span className="font-normal text-[#666666]">
                    {t.castelfrigoDesc}
                  </span>
                </p>
                <p className="text-sm sm:text-[14px] text-[#666666] mt-1 leading-normal">
                  Castelnuovo Rangone – Modena
                </p>
              </div>

              {/* 6. Italia Alimentari UK */}
              <div>
                <p className="text-[15px] sm:text-base leading-snug">
                  <strong className="font-bold text-[#1A1A1A]">Italia Alimentari UK</strong>{' '}
                  <span className="font-normal text-[#666666]">
                    {t.commercialBranch}
                  </span>
                </p>
                <p className="text-sm sm:text-[14px] text-[#666666] mt-1 leading-normal">
                  60 Grays Inn Road, London
                </p>
              </div>

              {/* 7. Italia Alimentari DE */}
              <div>
                <p className="text-[15px] sm:text-base leading-snug">
                  <strong className="font-bold text-[#1A1A1A]">Italia Alimentari DE</strong>{' '}
                  <span className="font-normal text-[#666666]">
                    {t.commercialBranch}
                  </span>
                </p>
                <p className="text-sm sm:text-[14px] text-[#666666] mt-1 leading-normal">
                  Planegger Str. 3, 82110 Germering
                </p>
              </div>

              {/* 8. Italia Alimentari Canada LTD */}
              <div>
                <p className="text-[15px] sm:text-base leading-snug">
                  <strong className="font-bold text-[#1A1A1A]">Italia Alimentari Canada LTD</strong>{' '}
                  <span className="font-normal text-[#666666]">
                    {t.canadaDesc}
                  </span>
                </p>
                <p className="text-sm sm:text-[14px] text-[#666666] mt-1 leading-normal">
                  Brampton, Ontario – Canada – 116, Nuggett Court
                </p>
              </div>

              {/* 9. Corte Buona Llc */}
              <div>
                <p className="text-[15px] sm:text-base leading-snug">
                  <a
                    href="https://cortebuona-usa.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#1A1A1A] hover:underline"
                  >
                    Corte Buona Llc
                  </a>{' '}
                  <span className="font-normal text-[#666666]">
                    {t.usaDesc}
                  </span>
                </p>
                <p className="text-sm sm:text-[14px] text-[#666666] mt-1 leading-normal">
                  New Jersey – Stati Uniti – 1 Amboy Ave, Woodbridge Township
                </p>
              </div>

            </div>

            {/* Right Column: Genuine 1920x1195 Map Graphic without borders or badges */}
            <div className="lg:col-span-6 flex items-start justify-center pt-8 lg:pt-14">
              <img
                src={stabilimentiMondoImg}
                alt="Italia Alimentari stabilimenti produttivi e filiali nel mondo"
                className="w-full h-auto object-contain max-w-[720px]"
                loading="eager"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE OFFICIAL INQUIRY CARDS (CLIENTI / CONSUMATORI / LAVORA CON NOI)   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 bg-[#F8F7F4] border-t border-[#151515]/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* CLIENTI */}
            <div className="bg-white border border-[#151515]/10 rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold font-sans uppercase tracking-wider text-[#151515] mb-2">
                  {t.clientiTitle}
                </h3>
                <p className="text-sm text-[#68645B] font-sans mb-6">
                  {t.clientiSub}
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('business');
                  setFormData((prev) => ({
                    ...prev,
                    department: isItalian ? 'Commerciale & Vendite' : 'Commercial / Sales'
                  }));
                  const el = document.getElementById('contact-form-section');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-2.5 bg-[#151515] hover:bg-[#333333] text-white text-xs font-bold font-sans uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                {t.scrivici}
              </button>
            </div>

            {/* CONSUMATORI */}
            <div className="bg-white border border-[#151515]/10 rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold font-sans uppercase tracking-wider text-[#151515] mb-2">
                  {t.consumatoriTitle}
                </h3>
                <p className="text-sm text-[#68645B] font-sans mb-6">
                  {t.consumatoriSub}
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('retail');
                  setFormData((prev) => ({
                    ...prev,
                    department: isItalian ? 'Informazioni Prodotti & Consumatori' : 'Consumer Care & Products'
                  }));
                  const el = document.getElementById('contact-form-section');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-2.5 bg-[#151515] hover:bg-[#333333] text-white text-xs font-bold font-sans uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                {t.scrivici}
              </button>
            </div>

            {/* LAVORA CON NOI */}
            <div className="bg-white border border-[#151515]/10 rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold font-sans uppercase tracking-wider text-[#151515] mb-2">
                  {t.lavoraTitle}
                </h3>
                <p className="text-sm text-[#68645B] font-sans mb-6">
                  {t.lavoraSub}
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('careers');
                  setFormData((prev) => ({
                    ...prev,
                    department: isItalian ? 'Risorse Umane & Lavora Con Noi' : 'Human Resources & Careers'
                  }));
                  const el = document.getElementById('contact-form-section');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-2.5 bg-[#151515] hover:bg-[#333333] text-white text-xs font-bold font-sans uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                {t.scrivici}
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DIRECT CONTACT FORM & CUSTOMER CARE HOTLINE SECTION                    */}
      {/* ========================================================================= */}
      <section id="contact-form-section" className="py-16 sm:py-20 bg-white border-t border-[#151515]/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* Left 7 cols: Interactive Form */}
            <div className="lg:col-span-7 bg-[#FFFDF8] border border-[#151515]/10 rounded-3xl p-6 sm:p-10 shadow-xs">

              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#777D45] font-bold block mb-1">
                  {t.formBadge}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#151515]">
                  {t.formHeading}
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#151515]">{t.successTitle}</h4>
                  <p className="text-sm text-[#68645B] max-w-md mx-auto">
                    {t.successMsg}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        company: '',
                        email: '',
                        phone: '',
                        department: isItalian ? 'Commerciale & Vendite' : 'Commercial / Sales',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-[#151515] text-white text-xs font-bold uppercase rounded hover:bg-[#252525] transition-colors cursor-pointer"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#151515] font-semibold mb-1">{t.fullName}</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Marco Rossi"
                        className={`w-full px-3.5 py-2.5 rounded-lg border bg-white ${errors.fullName ? 'border-[#A63426]' : 'border-[#151515]/15 focus:border-[#EAB600]'
                          } focus:outline-none`}
                      />
                      {errors.fullName && <p className="text-[10px] text-[#A63426] mt-0.5">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[#151515] font-semibold mb-1">{t.company}</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Grand Gourmet"
                        className={`w-full px-3.5 py-2.5 rounded-lg border bg-white ${errors.company ? 'border-[#A63426]' : 'border-[#151515]/15 focus:border-[#EAB600]'
                          } focus:outline-none`}
                      />
                      {errors.company && <p className="text-[10px] text-[#A63426] mt-0.5">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#151515] font-semibold mb-1">{t.email}</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.rossi@company.it"
                        className={`w-full px-3.5 py-2.5 rounded-lg border bg-white ${errors.email ? 'border-[#A63426]' : 'border-[#151515]/15 focus:border-[#EAB600]'
                          } focus:outline-none`}
                      />
                      {errors.email && <p className="text-[10px] text-[#A63426] mt-0.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[#151515] font-semibold mb-1">{t.phone}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+39 0524 ..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#151515]/15 bg-white focus:border-[#EAB600] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#151515] font-semibold mb-1">{t.department}</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#151515]/15 bg-white focus:border-[#EAB600] focus:outline-none text-[#151515]"
                    >
                      {isItalian ? (
                        <>
                          <option value="Commerciale & Vendite">Commerciale & Vendite Italia / Estero</option>
                          <option value="Informazioni Prodotti & Consumatori">Informazioni Prodotti & Consumatori</option>
                          <option value="Private Label & GDO">Private Label & Grande Distribuzione Organizzata (GDO)</option>
                          <option value="Ho.Re.Ca. e Ristorazione">Ho.Re.Ca. e Ristorazione Professionale</option>
                          <option value="Risorse Umane & Lavora Con Noi">Risorse Umane & Lavora Con Noi</option>
                          <option value="Assicurazione Qualità">Assicurazione Qualità & Certificazioni</option>
                        </>
                      ) : (
                        <>
                          <option value="Commercial / Sales">Commercial / Export Sales</option>
                          <option value="Consumer Care & Products">Consumer Care & Product Information</option>
                          <option value="Private Label & GDO">Private Label & Retail Packaging</option>
                          <option value="Foodservice & HoReCa">Ho.Re.Ca. & Foodservice Formats</option>
                          <option value="Human Resources & Careers">Human Resources & Careers</option>
                          <option value="Quality Assurance">Quality Assurance & Lab Telemetry</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#151515] font-semibold mb-1">{t.message}</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isItalian ? 'Scrivi qui i dettagli della tua richiesta...' : 'Enter inquiry details...'}
                      className={`w-full px-3.5 py-2.5 rounded-lg border bg-white ${errors.message ? 'border-[#A63426]' : 'border-[#151515]/15 focus:border-[#EAB600]'
                        } focus:outline-none resize-none`}
                    />
                    {errors.message && <p className="text-[10px] text-[#A63426] mt-0.5">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[10px] text-[#68645B]">
                      {t.gdpr}
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs font-sans font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>{t.submitBtn}</span>
                      <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 cols: Toll-Free Hotline & Fast Contacts */}
            <div className="lg:col-span-5 space-y-5">

              {/* Toll-Free Hotline Card */}
              <div className="p-6 bg-[#151515] text-white rounded-3xl border border-[#FFC900]/40 shadow-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC900] font-bold block">
                  {t.tollFreeTitle}
                </span>
                <a
                  href="tel:800826123"
                  className="text-3xl font-serif font-bold text-white block mt-2 hover:text-[#FFC900] transition-colors"
                >
                  800.826.123
                </a>
                <p className="text-xs text-white/70 mt-2 font-sans">
                  {t.tollFreeSub}
                </p>
              </div>

              {/* Sede Legale Busseto Quick Info */}
              <div className="p-6 bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#777D45] font-bold block mb-1">
                  {isItalian ? 'Sede Legale & Stabilimento' : 'Registered Office & Plant'}
                </span>
                <h4 className="text-lg font-serif font-bold text-[#151515] mb-1">
                  Busseto (Parma)
                </h4>
                <p className="text-xs text-[#68645B] leading-relaxed mb-3">
                  Via Europa 14, 43011 Busseto (PR), Italy
                </p>
                <div className="space-y-1.5 text-xs text-[#151515]">
                  <p>
                    Tel:{' '}
                    <a
                      href="tel:+390524930311"
                      className="font-semibold text-[#151515] hover:text-[#EAB600] transition-colors"
                    >
                      +39 0524 930311
                    </a>
                  </p>
                  <p>
                    PEC:{' '}
                    <a
                      href="mailto:info@pec.italiaalimentari.it"
                      className="text-[#151515] hover:text-[#EAB600] transition-colors underline decoration-[#151515]/30"
                    >
                      info@pec.italiaalimentari.it
                    </a>
                  </p>
                </div>
              </div>

              {/* Sede Operativa Gazoldo Quick Info */}
              <div className="p-6 bg-[#FAF4E7] border border-[#151515]/8 rounded-2xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#777D45] font-bold block mb-1">
                  {isItalian ? 'Sede Operativa & Centro Logistico' : 'Operations & Logistics Hub'}
                </span>
                <h4 className="text-lg font-serif font-bold text-[#151515] mb-1">
                  Gazoldo degli Ippoliti (Mantova)
                </h4>
                <p className="text-xs text-[#68645B] leading-relaxed mb-3">
                  Via Marconi 3, 46040 Gazoldo degli Ippoliti (MN), Italy
                </p>
                <div className="space-y-1.5 text-xs text-[#151515]">
                  <p>
                    Tel:{' '}
                    <a
                      href="tel:+3903766801"
                      className="font-semibold text-[#151515] hover:text-[#EAB600] transition-colors"
                    >
                      +39 0376 6801
                    </a>
                  </p>
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:info@italiaalimentari.it"
                      className="text-[#151515] hover:text-[#EAB600] transition-colors underline decoration-[#151515]/30"
                    >
                      info@italiaalimentari.it
                    </a>
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactsPage;
