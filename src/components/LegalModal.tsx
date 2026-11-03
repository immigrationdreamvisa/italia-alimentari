import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#151515]/75 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#151515]/10 overflow-hidden z-10 text-left my-8">
        
        {/* Header */}
        <div className="p-8 bg-[#FAF4E7] border-b border-[#151515]/8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Shield className="w-4 h-4 text-[#777D45]" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#777D45] font-bold">
                Governance & Compliance
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#151515]">
              {isPrivacy ? 'Privacy & Data Protection Notice' : 'Terms & Conditions of Commercial Supply'}
            </h3>
            <p className="text-xs text-[#68645B] mt-1">
              Italia Alimentari S.p.A. · Gruppo Cremonini
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white text-[#68645B] hover:text-[#151515] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-4 max-h-[60vh] overflow-y-auto text-xs text-[#68645B] leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-[#151515]">
                Information Notice pursuant to Art. 13 of EU Regulation 2016/679 (GDPR)
              </p>
              <p>
                Italia Alimentari S.p.A., with registered office in Via Marconi 3, 46040 Gazoldo degli Ippoliti (MN), Italy, as Data Controller, informs you that personal data collected through web contact forms and business communications are processed exclusively for the purpose of managing commercial inquiries, sample shipments, and contractual relationships.
              </p>
              <h5 className="font-serif font-bold text-[#151515] pt-2">Data Retention & Security</h5>
              <p>
                Data is kept for the period strictly necessary to fulfill your request and comply with statutory accounting and tax obligations. We employ advanced technical measures to prevent unauthorized access or data disclosure.
              </p>
              <h5 className="font-serif font-bold text-[#151515] pt-2">Your Rights</h5>
              <p>
                You may exercise your rights under Articles 15-22 of the GDPR (access, rectification, cancellation, restriction, portability) at any time by contacting privacy@italiaalimentari.it.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#151515]">
                General Commercial Terms of Trade & Supply
              </p>
              <p>
                All wholesale supplies of fresh, cured, sliced, and packaged deli meat products by Italia Alimentari S.p.A. are governed by Italian and European food safety standards, Incoterms 2020 rules, and certified cold-chain protocols.
              </p>
              <h5 className="font-serif font-bold text-[#151515] pt-2">Product Quality & Conformity</h5>
              <p>
                Products are manufactured in facilities certified to BRCGS Food and IFS Food standards. Consortia items (Prosciutto di Parma DOP, Culatello, Mortadella Bologna IGP) strictly comply with their respective production specifications.
              </p>
              <h5 className="font-serif font-bold text-[#151515] pt-2">Applicable Law & Jurisdiction</h5>
              <p>
                Commercial agreements are subject to Italian law. The Court of Mantova, Italy, shall have exclusive jurisdiction over any disputes arising from supply agreements.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 bg-[#FAF4E7] border-t border-[#151515]/8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#151515] text-white text-xs uppercase font-sans font-bold tracking-wider rounded"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
