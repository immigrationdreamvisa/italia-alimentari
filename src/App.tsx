/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { ItalianExcellenceSection } from './components/ItalianExcellenceSection';
import { ProcessSection } from './components/ProcessSection';
import { QualitySection } from './components/QualitySection';
import { SolutionsSection } from './components/SolutionsSection';
import { InnovationSection } from './components/InnovationSection';
import { RecipesSection } from './components/RecipesSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

// Dedicated Pages
import { CompanyPage } from './pages/CompanyPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { QualityPage } from './pages/QualityPage';
import { StructurePage } from './pages/StructurePage';
import { RecipesPage } from './pages/RecipesPage';
import { ContactsPage } from './pages/ContactsPage';

// Modals
import { SearchModal } from './components/SearchModal';
import { SolutionModal } from './components/SolutionModal';
import { RecipeModal } from './components/RecipeModal';
import { CompanyStoryModal } from './components/CompanyStoryModal';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModal';

import { SolutionItem, RecipeItem } from './data/companyData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainApp() {
  const { language, setLanguage } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modal states
  const [searchOpen, setSearchOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTab, setContactTab] = useState('general');
  const [contactProductInterest, setContactProductInterest] = useState('');

  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync hash routing if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 'company', 'solutions', 'quality',
        'structure', 'recipes', 'contacts'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Guarantee that every page transition scrolls directly to the top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (tab: string = 'general', interest: string = '') => {
    setContactTab(tab);
    setContactProductInterest(interest);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#151515] font-sans flex flex-col selection:bg-[#FFC900]/30 selection:text-[#151515]">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={(tab) => handleOpenContact(tab || 'general')}
        currentLanguage={language}
        onLanguageChange={(lang) => setLanguage(lang as any)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section matching reference */}
            <Hero
              onDiscoverStory={() => setStoryOpen(true)}
              onExploreQuality={() => {
                const el = document.getElementById('taste-of-excellence');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.pageYOffset - 85;
                  window.scrollTo({ top, behavior: 'smooth' });
                } else {
                  handleNavigate('quality');
                }
              }}
            />

            {/* 2. New Editorial Brand Showcase: A Taste of Italian Excellence */}
            <ItalianExcellenceSection
              onDiscoverHeritage={() => setStoryOpen(true)}
              onExploreWorld={() => handleNavigate('quality')}
            />

            {/* 3. Our Manufacturing Process - From Selection to Perfection */}
            <ProcessSection
              onStepClick={() => handleNavigate('quality')}
            />

            {/* 4. Quality & Safety Split Layout */}
            <QualitySection
              onExploreQuality={() => handleNavigate('quality')}
              onExploreSolutions={() => handleNavigate('solutions')}
            />

            {/* 5. Tailored Business Solutions (Large Retail, Food Service, Industry) */}
            <SolutionsSection
              onSelectSolution={(s) => setSelectedSolution(s)}
            />

            {/* 6. Innovation (Tradition Meets Modern Technology) */}
            <InnovationSection
              onDiscoverInnovation={() => handleNavigate('structure')}
            />

            {/* 8. Recipes & Culinary Inspiration */}
            <RecipesSection
              onSelectRecipe={(r) => setSelectedRecipe(r)}
              onViewAllRecipes={() => handleNavigate('recipes')}
            />

            {/* 9. Final CTA */}
            <FinalCta
              onContact={() => handleNavigate('contacts')}
              onWorkWithUs={() => handleNavigate('contacts')}
            />
          </>
        )}

        {/* Dedicated Pages */}
        {currentPage === 'company' && (
          <CompanyPage
            onOpenStoryModal={() => setStoryOpen(true)}
            onContact={() => handleNavigate('contacts')}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onSelectSolution={(s) => setSelectedSolution(s)}
            onRequestProposal={(title) => handleOpenContact('industry', `Channel Solution: ${title}`)}
          />
        )}

        {currentPage === 'quality' && (
          <QualityPage
            onContactQuality={() => handleNavigate('contacts')}
          />
        )}

        {currentPage === 'structure' && (
          <StructurePage
            onContact={() => handleNavigate('contacts')}
          />
        )}

        {currentPage === 'recipes' && (
          <RecipesPage
            onSelectRecipe={(r) => setSelectedRecipe(r)}
            onRequestProduct={(productName) => handleOpenContact('general', `Recipe Sample: ${productName}`)}
          />
        )}

        {currentPage === 'contacts' && (
          <ContactsPage currentLanguage={language} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        currentPage={currentPage}
        onOpenPrivacy={() => setLegalType('privacy')}
        onOpenTerms={() => setLegalType('terms')}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={(tab) => handleOpenContact(tab || 'general')}
        currentLanguage={language}
        onLanguageChange={(lang) => setLanguage(lang as any)}
      />

      {/* Interactive Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectSolution={(s) => setSelectedSolution(s)}
      />

      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onRequestProposal={(solutionTitle) => handleOpenContact('industry', `Channel Solution: ${solutionTitle}`)}
      />

      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        onRequestProduct={(productName) => handleOpenContact('general', `Recipe Inquiry: ${productName}`)}
      />

      <CompanyStoryModal
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
        onContactPress={() => handleOpenContact('general')}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTab={contactTab}
        defaultProductInterest={contactProductInterest}
      />

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
