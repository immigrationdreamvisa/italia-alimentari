import React, { useState } from 'react';
import { ArrowRight, Award, ShieldCheck, Factory, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

interface CompanyPageProps {
  onOpenStoryModal: () => void;
  onContact: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onOpenStoryModal, onContact }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'values' | 'mission' | 'expertise'>('overview');

  const historyMilestones = [
    { year: '1962', title: 'Artisan Foundations in Busseto', desc: 'Born in the heart of Parma, home of Giuseppe Verdi, pioneering slow-cured mortadella and culatello.' },
    { year: '1985', title: 'Launch of Gran Ibis Mortadella', desc: 'Creation of benchmark Mortadella Gran Ibis, renowned for traditional stove-steaming and prized Bronte pistachios.' },
    { year: '1998', title: 'Cremonini Group Integration', desc: 'Italia Alimentari is created to lead the cured meats and deli foods division of the prestigious Cremonini Group.' },
    { year: '2008', title: 'Gazoldo Cleanroom Slicing Complex', desc: 'Opening of the European benchmark slicing center in Gazoldo degli Ippoliti (Mantova) with positive air pressure cleanrooms.' },
    { year: '2018', title: 'Valtellina Bresaola Facility', desc: 'Acquisition of the Postalesio plant for alpine air cured Bresaola della Valtellina IGP, securing USDA export permits.' },
    { year: '2026', title: 'Circular Innovation & Global Leadership', desc: 'Over 100M trays produced annually, distribution in 50+ countries, and rollout of 100% recyclable paper trays.' }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FFFDF8] text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              Italia Alimentari Corporate
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#151515] leading-[1.1] mb-6">
            Heritage, Mastery &{' '}
            <span className="italic font-serif text-[#EAB600]">
              Cremonini Synergy.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            Italia Alimentari S.p.A. is the specialized charcuterie company of the Cremonini Group. We unite six decades of regional curing tradition with the most advanced cleanroom slicing technology in Europe.
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex border-b border-[#151515]/10 mb-12 gap-2 sm:gap-4 overflow-x-auto">
          {[
            { id: 'overview', label: 'Company Overview' },
            { id: 'history', label: 'Our History (1962 - 2026)' },
            { id: 'values', label: 'Values & Mission' },
            { id: 'expertise', label: 'Our Expertise' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-2 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#FFC900] text-[#151515]'
                  : 'border-transparent text-[#68645B] hover:text-[#151515]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#151515]">
                Rooted in the Italian Food Valley
              </h2>
              <p className="text-sm sm:text-base text-[#68645B] leading-relaxed">
                Operating with specialized production plants in Busseto (Parma), Gazoldo degli Ippoliti (Mantova), and Postalesio (Sondrio), Italia Alimentari controls the complete transformation of prized meats into premium cured delicacies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FAF4E7] rounded-xl border border-[#151515]/6">
                  <span className="text-2xl font-serif font-bold text-[#151515] block">100M+</span>
                  <span className="text-xs uppercase font-sans font-bold text-[#777D45]">Packs Produced Yearly</span>
                  <p className="text-xs text-[#68645B] mt-1">High-speed slicing and MAP protective packaging in ISO cleanrooms.</p>
                </div>
                <div className="p-4 bg-[#FAF4E7] rounded-xl border border-[#151515]/6">
                  <span className="text-2xl font-serif font-bold text-[#151515] block">50+</span>
                  <span className="text-xs uppercase font-sans font-bold text-[#777D45]">Export Destinations</span>
                  <p className="text-xs text-[#68645B] mt-1">Direct cold chain presence across Europe, North America, and Asia.</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed">
                As a pillar of the Cremonini Group—one of Europe’s foremost food industry leaders with over €5 billion in turnover—Italia Alimentari guarantees uncompromising vertical traceability, ethical livestock welfare, and continuous industrial investment.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#FAF4E7]">
                <img
                  src="/images/busseto_heritage_estate.jpg"
                  alt="Historic Busseto Parma founding estate and salumi curing cellars"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: History */}
        {activeTab === 'history' && (
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#151515] mb-4">
              Over Six Decades of Artisanal & Industrial Milestones
            </h2>
            <div className="space-y-4 border-l-2 border-[#FFC900] ml-3 pl-6">
              {historyMilestones.map((m) => (
                <div key={m.year} className="relative">
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#151515] border-2 border-[#FFC900]" />
                  <span className="text-xs font-mono font-bold text-[#EAB600]">{m.year}</span>
                  <h3 className="text-lg font-serif font-bold text-[#151515]">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed mt-0.5">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Values & Mission */}
        {activeTab === 'values' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-[#FAF4E7] rounded-2xl border border-[#151515]/8">
              <span className="text-xs font-mono text-[#EAB600] font-bold block mb-2">01. MISSION</span>
              <h3 className="text-xl font-serif font-bold text-[#151515] mb-3">Authentic Italian Taste</h3>
              <p className="text-xs text-[#68645B] leading-relaxed">
                To bring the genuine aroma, balance, and gastronomic emotion of true Italian deli tradition to consumers worldwide without compromise.
              </p>
            </div>
            <div className="p-7 bg-[#FAF4E7] rounded-2xl border border-[#151515]/8">
              <span className="text-xs font-mono text-[#EAB600] font-bold block mb-2">02. VISION</span>
              <h3 className="text-xl font-serif font-bold text-[#151515] mb-3">Sustainable Modern Slicing</h3>
              <p className="text-xs text-[#68645B] leading-relaxed">
                To pioneer eco-responsible circular packaging, eliminate single-use plastics, and set the global benchmark for cleanroom food safety.
              </p>
            </div>
            <div className="p-7 bg-[#FAF4E7] rounded-2xl border border-[#151515]/8">
              <span className="text-xs font-mono text-[#EAB600] font-bold block mb-2">03. VALUES</span>
              <h3 className="text-xl font-serif font-bold text-[#151515] mb-3">Traceability & Animal Welfare</h3>
              <p className="text-xs text-[#68645B] leading-relaxed">
                Total transparency throughout the supply chain, certified ClassyFarm welfare, non-GMO feeds, and complete allergen safety.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Expertise */}
        {activeTab === 'expertise' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#151515]">
                Specialized Curing, Slicing & Formulation
              </h2>
              <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed">
                Our facilities specialize in three core food disciplines:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white border border-[#151515]/8 rounded-xl">
                  <h4 className="font-serif font-bold text-sm text-[#151515]">Cellar Aging & Consortia Disciplines</h4>
                  <p className="text-xs text-[#68645B] mt-1">Busseto curing lofts for Prosciutto di Parma DOP and Mortadella Bologna IGP.</p>
                </div>
                <div className="p-4 bg-white border border-[#151515]/8 rounded-xl">
                  <h4 className="font-serif font-bold text-sm text-[#151515]">Cleanroom High-Speed Slicing</h4>
                  <p className="text-xs text-[#68645B] mt-1">Sub-zero blade slicing and automated folded slice placement in Gazoldo.</p>
                </div>
                <div className="p-4 bg-white border border-[#151515]/8 rounded-xl">
                  <h4 className="font-serif font-bold text-sm text-[#151515]">Industrial B2B Customized Inclusions</h4>
                  <p className="text-xs text-[#68645B] mt-1">Custom dicing, stripping, and IQF meat components for pizza and ready meals.</p>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#151515]/10">
              <img
                src="/images/alpine_valtellina_facility.jpg"
                alt="Valtellina Alpine curing facility in Postalesio"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div className="mt-16 pt-8 border-t border-[#151515]/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-[#68645B]">Registered Office: Via Marconi 3, 46040 Gazoldo degli Ippoliti (MN)</span>
          <button
            onClick={onContact}
            className="px-6 py-3 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs font-sans font-bold uppercase tracking-wider rounded cursor-pointer"
          >
            Contact Company Management
          </button>
        </div>

      </div>
    </div>
  );
};
