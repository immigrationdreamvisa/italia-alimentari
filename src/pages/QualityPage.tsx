import React from 'react';
import { QUALITY_STANDARDS } from '../data/companyData';
import { ShieldCheck, Award, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface QualityPageProps {
  onContactQuality: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onContactQuality }) => {
  const certificationsList = [
    { code: 'BRCGS Food Safety', level: 'Grade AA', desc: 'Global food safety benchmark with unannounced third-party audit verification.' },
    { code: 'IFS Food Standard', level: 'Higher Level (98.6%)', desc: 'International Featured Standards certification for high-risk meat processing and cleanroom slicing.' },
    { code: 'ISO 9001:2015', level: 'Certified', desc: 'Certified integrated quality management system covering entire supply-to-shelf operations.' },
    { code: 'ISO 14001:2015', level: 'Certified', desc: 'Environmental management certification guaranteeing sustainable energy and waste recycling.' },
    { code: 'ISO 22000', level: 'Food Safety', desc: 'Holistic hazard analysis and critical control points (HACCP) management systems.' },
    { code: 'Consorzio Prosciutto di Parma', level: 'DOP Guaranteed', desc: 'Strict compliance with the Parma Consortium disciplinary rules and slow cellar aging.' },
    { code: 'Consorzio Mortadella Bologna', level: 'IGP Guaranteed', desc: 'Protected geographical indication protocols for authentic traditional recipe integrity.' },
    { code: 'Consorzio Bresaola Valtellina', level: 'IGP Guaranteed', desc: 'Alpine breeze dry-curing certification verified by CSQA third-party auditors.' },
    { code: 'ClassyFarm Animal Welfare', level: '100% Traceable', desc: 'Strict animal welfare audits on breeding farms, biosecurity, and non-GMO agricultural feed.' },
    { code: 'Halal Food Authority', level: 'Certified Lines', desc: 'Dedicated export lines compliant with Islamic dietary and processing jurisprudence.' },
    { code: 'USDA-FSIS Export License', level: 'Federal Cleared', desc: 'Approved for direct export to the United States under continuous veterinary surveillance.' },
    { code: 'Japan MAFF & Canada CFIA', level: 'Direct Access', desc: 'Direct authorization for premium Japanese luxury retail and Canadian food service.' }
  ];

  const qualityStages = [
    {
      stage: '01',
      title: 'Raw Material Genetic & Feed Traceability',
      desc: '100% certified Italian livestock from accredited farms. DNA verification, non-GMO feed compliance, and ClassyFarm animal welfare scoring.',
      image: '/src/assets/images/traditional_deli_meats_1793428037900.jpg'
    },
    {
      stage: '02',
      title: 'ISO Class 7 Cleanroom Laminar Air Slicing',
      desc: 'Slicing lines operate in medical-grade cleanrooms with HEPA-filtered positive pressure air at +2°C to prevent fat oxidation and microbiological contamination.',
      image: '/src/assets/images/modern_production_plant_1793428040629.jpg'
    },
    {
      stage: '03',
      title: 'Gas Chromatography & Residual Oxygen (<0.5%)',
      desc: 'In-line laser sensors inspect 100% of sealed MAP packages to ensure residual oxygen remains strictly below 0.5%, preserving vibrant color naturally.',
      image: '/src/assets/images/food_quality_inspection_1793429017795.jpg'
    },
    {
      stage: '04',
      title: 'Dual-Energy X-Ray & Metal Detection',
      desc: 'State-of-the-art dual-energy X-ray vision systems inspect every pack for bone fragments, stainless steel, and seal micro-leaks prior to cartoning.',
      image: '/src/assets/images/foodservice_culinary_prep.jpg'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FFFDF8] text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#68645B]">
              Uncompromising Standards
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#151515] leading-tight mb-4">
            Quality & Food{' '}
            <span className="italic font-serif text-[#EAB600]">
              Safety.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#68645B] font-sans leading-relaxed">
            At Italia Alimentari, quality is not a static milestone—it is a continuous laboratory discipline. Over 12,000 analytical tests are performed annually across all manufacturing stages.
          </p>
        </div>

        {/* Hero Inspection Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#FAF4E7]">
            <img
              src="/src/assets/images/laboratory_spectrometry_quality.jpg"
              alt="Food quality assurance specialist inspecting charcuterie packages in cleanroom laboratory"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#151515]">
              Continuous In-Line & Lab Verification
            </h2>
            <p className="text-xs sm:text-sm text-[#68645B] leading-relaxed">
              Every production batch undergoes exhaustive microbiological analysis, organoleptic validation by master tasters, and automated camera inspection to verify seal integrity and residual oxygen levels below 0.5%.
            </p>
            <div className="p-4 bg-[#FAF4E7] rounded-xl border border-[#151515]/8">
              <span className="text-2xl font-serif font-bold text-[#151515] block">12,000+</span>
              <span className="text-xs font-sans font-bold text-[#777D45] uppercase">Lab Analyses Every Year</span>
              <p className="text-[11px] text-[#68645B] mt-0.5">Physical, chemical, sensory, and allergen testing in accredited internal labs.</p>
            </div>
          </div>
        </div>

        {/* 4 Quality Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {QUALITY_STANDARDS.map((std) => (
            <div key={std.title} className="p-6 bg-white border border-[#151515]/10 rounded-2xl shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#FFC900] text-[#151515] flex items-center justify-center font-bold text-xs mb-3">
                ✓
              </div>
              <h3 className="text-lg font-serif font-bold text-[#151515] mb-2">{std.title}</h3>
              <p className="text-xs text-[#68645B] leading-relaxed font-sans">{std.description}</p>
            </div>
          ))}
        </div>

        {/* 4 Laboratory & Quality Verification Stages */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#777D45] block mb-2">
              Multi-Tier In-Line Safety Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#151515]">
              4 Strict Laboratory Inspection Stages
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStages.map((stg) => (
              <div key={stg.stage} className="bg-white border border-[#151515]/10 rounded-2xl shadow-xs overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF4E7]">
                    <img
                      src={stg.image}
                      alt={stg.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#151515]/90 text-[#FFC900] border border-[#FFC900]/30 backdrop-blur-xs">
                      STAGE {stg.stage}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-serif font-bold text-[#151515] mb-2">{stg.title}</h4>
                    <p className="text-xs text-[#68645B] leading-relaxed font-sans">{stg.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 border-t border-[#151515]/6 flex items-center gap-1.5 text-[11px] font-sans font-bold text-[#777D45]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% In-Line Compliance</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Table */}
        <div className="bg-[#FAF4E7] border border-[#151515]/8 rounded-3xl p-8 sm:p-10 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#151515]">
                Official Accreditations & Audits ({certificationsList.length})
              </h3>
              <p className="text-xs text-[#68645B] mt-1">
                Independently audited annually by international certification bodies and consortia inspectors.
              </p>
            </div>
            <span className="px-3.5 py-1.5 bg-white border border-[#151515]/10 rounded-lg text-xs font-mono font-bold text-[#151515] self-start sm:self-auto shadow-xs">
              12 Active Certifications
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsList.map((cert) => (
              <div key={cert.code} className="bg-white p-5 rounded-xl border border-[#151515]/8">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif font-bold text-base text-[#151515]">{cert.code}</h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#FAF4E7] text-[#777D45] rounded">
                    {cert.level}
                  </span>
                </div>
                <p className="text-xs text-[#68645B] leading-relaxed font-sans">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-white border border-[#151515]/10 rounded-2xl">
          <div>
            <h4 className="text-base font-serif font-bold text-[#151515]">Need Quality Assurance Documentation?</h4>
            <p className="text-xs text-[#68645B]">Request technical data sheets, allergen matrices, or audit certificates.</p>
          </div>
          <button
            onClick={onContactQuality}
            className="px-6 py-3 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] text-xs font-sans font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
          >
            Contact Quality Assurance Dept
          </button>
        </div>

      </div>
    </div>
  );
};
