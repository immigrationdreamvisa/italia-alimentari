export type Language = 'EN' | 'IT' | 'DE' | 'FR';

export interface TranslationSchema {
  nav: {
    home: string;
    company: string;
    products: string;
    channels: string;
    quality: string;
    recipes: string;
    contacts: string;
    getInTouch: string;
    aboutUs: string;
    facilities: string;
    brands: string;
  };
  hero: {
    label: string;
    title1: string;
    title2: string;
    titleHighlight: string;
    description: string;
    exploreCta: string;
    storyCta: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };
  excellence: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    exploreBtn: string;
  };
  process: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    steps: Array<{
      step: string;
      title: string;
      shortDesc: string;
      detailHighlight: string;
    }>;
  };
  quality: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    viewCertificationsBtn: string;
    exploreSolutionsBtn: string;
    labLabel: string;
    labDesc: string;
    standards: Array<{
      title: string;
      description: string;
    }>;
  };
  solutions: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    viewSpecs: string;
    requestProposal: string;
    privateLabelBadge: string;
    privateLabelTitle: string;
    privateLabelDesc: string;
    privateLabelBtn: string;
    items: Array<{
      id: string;
      title: string;
      tagline: string;
      description: string;
      badge: string;
      features: string[];
    }>;
  };
  innovation: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    captionTitle: string;
    captionDesc: string;
    badgeTitle: string;
    badgeDesc: string;
    discoverBtn: string;
  };
  recipes: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    viewAllBtn: string;
    orderSample: string;
    ingredientsTitle: string;
    pairingTitle: string;
    closeRecipe: string;
    categories: {
      all: string;
      panini: string;
      boards: string;
      pasta: string;
    };
  };
  sustainability: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    viewCharterBtn: string;
    pillars: Array<{
      title: string;
      description: string;
      metric: string;
    }>;
  };
  cta: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    contactBtn: string;
    careersBtn: string;
    headquarters: string;
  };
  footer: {
    companyType: string;
    registeredHeadquarters: string;
    adminOffices: string;
    rea: string;
    vat: string;
    inalcaCoordination: string;
    tollFreeLabel: string;
    siteNav: string;
    searchPlaceholder: string;
    directService: string;
    sendDirectMessage: string;
    allRights: string;
  };
  contactsPage: {
    badge: string;
    title: string;
    clientiTitle: string;
    clientiSub: string;
    consumatoriTitle: string;
    consumatoriSub: string;
    lavoraTitle: string;
    lavoraSub: string;
    scrivici: string;
    formBadge: string;
    formHeading: string;
    fullName: string;
    company: string;
    email: string;
    phone: string;
    department: string;
    message: string;
    submitBtn: string;
    successTitle: string;
    successMsg: string;
    sendAnother: string;
    gdpr: string;
    tollFreeTitle: string;
    tollFreeSub: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  IT: {
    nav: {
      home: 'Home',
      company: 'Azienda',
      products: 'Prodotti',
      channels: 'Canali',
      quality: 'Qualità',
      recipes: 'Ricette',
      contacts: 'Contatti',
      getInTouch: 'Contattaci',
      aboutUs: 'Chi Siamo',
      facilities: 'Stabilimenti',
      brands: 'Marchi'
    },
    hero: {
      label: 'Produttore Alimentare Italiano',
      title1: 'Specialità Italiane,',
      title2: 'Fatte per',
      titleHighlight: 'Deliziare.',
      description: 'Salumi tipici della tradizione italiana, affettati freschi e soluzioni alimentari pronte create con materie prime certificate e tecnologie di confezionamento d\'avanguardia.',
      exploreCta: "Scopri l'Eccellenza Italiana",
      storyCta: 'La Nostra Storia',
      trust1: 'Gusto Autentico Italiano',
      trust2: 'Qualità Certificata',
      trust3: 'Fiducia Globale'
    },
    excellence: {
      label: 'Il Valore delle Nostre Origini',
      title: 'Un Gusto che Rappresenta',
      titleHighlight: "l'Italia nel Mondo.",
      description: 'Nel cuore della Food Valley emiliana, uniamo la maestria dei mastri salumieri a standard di sicurezza alimentare di livello farmaceutico.',
      metric1Val: '100% Filiera',
      metric1Label: 'Carni e ricette controllate dal primo all\'ultimo passaggio.',
      metric2Val: '4 Poli Produttivi',
      metric2Label: 'Stabilimenti specializzati a Busseto, Gazoldo, Postalesio e Mandatoriccio.',
      metric3Val: '50+ Paesi',
      metric3Label: 'I nostri salumi sulle tavole e nei banchi gourmet internazionali.',
      exploreBtn: 'Scopri la Qualità'
    },
    process: {
      label: 'Il Nostro Metodo Produttivo',
      title: 'Dalla Selezione alla',
      titleHighlight: 'Perfezione.',
      description: 'Ogni fetta racconta un viaggio rigoroso in 5 tappe, dove i segreti della salumeria artigianale incontrano camere bianche ad aria sterile.',
      steps: [
        {
          step: '01',
          title: 'Selezione Carni',
          shortDesc: 'Scelta esclusiva di suini selezionati e filiere certificate per garantire tracciabilità completa.',
          detailHighlight: 'Tracciabilità genetica e veterinaria al 100%'
        },
        {
          step: '02',
          title: 'Stagionatura Lenta',
          shortDesc: 'Clima controllato e aria naturale delle valli emiliane per una maturazione aromatica perfetta.',
          detailHighlight: 'Fino a 24 mesi di stagionatura naturale'
        },
        {
          step: '03',
          title: 'Affettamento Sterile',
          shortDesc: 'Camere bianche ISO 7 con flusso laminare e lame refrigerate per salvaguardare il profilo organolettico.',
          detailHighlight: 'Zero ossidazione dei grassi nobili'
        },
        {
          step: '04',
          title: 'Tecnologia MAP',
          shortDesc: 'Confezionamento in atmosfera protettiva e vaschette Eco-Tray in carta per 90 giorni di freschezza.',
          detailHighlight: 'Meno 75% di plastica fossile'
        },
        {
          step: '05',
          title: 'Doppio Controllo',
          shortDesc: 'Laboratori interni accreditati con oltre 500 analisi microbiologiche e spettrometriche giornaliere.',
          detailHighlight: 'Certificazioni internazionali BRCGS & IFS'
        }
      ]
    },
    quality: {
      label: 'Sicurezza & Standard Alimentari',
      title: 'Qualità Senza',
      titleHighlight: 'Compromessi.',
      description: 'Dalla selezione delle carni alla consegna refrigerata, ogni lotto è garantito da laboratori all\'avanguardia e controlli continui.',
      viewCertificationsBtn: 'Visualizza Certificazioni & Audit',
      exploreSolutionsBtn: 'Esplora Soluzioni per Canali',
      labLabel: 'Controllo Spettrometrico & Microbiologico',
      labDesc: 'Laboratorio interno con analisi isotopiche e microbiologiche ad alta precisione.',
      standards: [
        {
          title: 'Certificazioni Internazionali BRCGS & IFS',
          description: 'Punteggio massimo di conformità igienico-sanitaria per l\'esportazione nei principali mercati mondiali.'
        },
        {
          title: 'Filiera 100% Tracciata Inalca',
          description: 'Integrazione verticale completa del Gruppo Cremonini, dagli allevamenti al prodotto finito a scaffale.'
        },
        {
          title: 'Confezionamento MAP in Camera Bianca',
          description: 'Ambiente asettico controllato per preservare freschezza, colore naturale e aromi senza conservanti superflui.'
        }
      ]
    },
    solutions: {
      label: 'Canali di Mercato & Partnership',
      title: 'Soluzioni Dedicate al tuo',
      titleHighlight: 'Business.',
      description: 'Che tu gestisca catene di supermercati, ristorazione di alto livello o produzione alimentare industriale, studiamo il formato perfetto.',
      viewSpecs: 'Dettagli Tecnici',
      requestProposal: 'Richiedi Proposta di Canale',
      privateLabelBadge: 'Private Label & Co-Packing',
      privateLabelTitle: 'Il Tuo Brand con la Qualità Autentica Italiana',
      privateLabelDesc: 'Gestiamo sviluppo ricette, spessore fette, dosaggi MAP personalizzati, vaschette eco-compatibili e conformità etichettatura per i mercati esteri.',
      privateLabelBtn: 'Parla con il Direttore Private Label',
      items: [
        {
          id: 'retail',
          title: 'Grande Distribuzione Organizzata (GDO)',
          tagline: 'Vaschette affettati, snack e formati per il libero servizio',
          description: 'Linee complete di salumi pre-affettati in vaschetta salvafreschezza ed Eco-Tray per i banchi frigo dei principali retailer.',
          badge: 'GDO & Retail',
          features: ['Vaschette Eco-Tray in carta riciclabile', 'Shelf life estesa a 90 giorni', 'Packaging bilingue per mercati export']
        },
        {
          id: 'horeca',
          title: 'Foodservice & Ristorazione Professionale',
          tagline: 'Tagli calibrati, tranci e fette perfette per chef e catene',
          description: 'Soluzioni pratiche e ad alto rendimento studiate per alberghi, catene di ristorazione, paninoteche gourmet e catering.',
          badge: 'Ho.Re.Ca.',
          features: ['Porzioni costanti e controllo costi', 'Tranci puliti pronti al taglio', 'Consegna a temperatura controllata']
        },
        {
          id: 'industry',
          title: 'Ingredienti per Industria Alimentare B2B',
          tagline: 'Cubettati, julienne e semilavorati per piatti pronti e pizza',
          description: 'Forniture su misura per produttori di paste ripiene, pizze surgelate, sandwich industriali e piatti pronti.',
          badge: 'Industria B2B',
          features: ['Cubetti e julienne calibrate al millimetro', 'Specifiche microbiologiche rigide', 'Lotti industriali continui']
        }
      ]
    },
    innovation: {
      label: 'Tecnologia Industriale',
      title: 'La Tradizione che Incontra',
      titleHighlight: "l'Innovazione.",
      description: 'Investiamo costantemente in automazione di precisione, intelligenza artificiale per il controllo difetti e impianti ecologici a basso impatto.',
      captionTitle: 'Polo di Confezionamento Gazoldo',
      captionDesc: 'Oltre 100 milioni di confezioni all\'anno affettate e sigillate in condizioni d\'aria sterili.',
      badgeTitle: 'Lame Refrigerate',
      badgeDesc: 'Taglio a temperatura controllata per evitare lo scioglimento dei grassi nobili.',
      discoverBtn: 'Scopri le Nostre Strutture'
    },
    recipes: {
      label: 'Ispirazione Culinaria',
      title: 'Il Sapore della Tradizione nella',
      titleHighlight: 'Tua Cucina.',
      description: 'Scopri abbinamenti regionali e ricette d\'autore create dai nostri chef per esaltare il sapore inconfondibile dei nostri salumi.',
      viewAllBtn: 'Tutte le Ricette',
      orderSample: 'Richiedi Campione / Informazioni',
      ingredientsTitle: 'Ingredienti',
      pairingTitle: 'Consiglio dello Chef',
      closeRecipe: 'Chiudi Ricetta',
      categories: {
        all: 'Tutte',
        panini: 'Panini Gourmet',
        boards: 'Taglieri & Aperitivi',
        pasta: 'Primi Piatti'
      }
    },
    sustainability: {
      label: 'Produzione Responsabile',
      title: 'Cibo Buono per un',
      titleHighlight: 'Futuro Migliore.',
      description: 'Il nostro piano di sostenibilità è integrato direttamente nei nostri stabilimenti: riduzione della plastica, energia solare e benessere animale.',
      viewCharterBtn: 'Leggi la Nostra Carta della Sostenibilità',
      pillars: [
        {
          title: 'Vaschetta Eco-Tray',
          description: 'Fondo in carta certificata FSC per eliminare il 75% della plastica mantenendo 90 giorni di freschezza.',
          metric: '-75% Plastica'
        },
        {
          title: 'Energia Pulita & Solare',
          description: 'Impianti fotovoltaici sui tetti degli stabilimenti di Gazoldo e Busseto per alimentare la catena del freddo.',
          metric: '100% Rinnovabile'
        },
        {
          title: 'Benessere Animale Certificato',
          description: 'Protocolli rigorosi di allevamento e rispetto animale controllati con certificazioni ClassyFarm.',
          metric: '100% Tracciato'
        },
        {
          title: 'Economia Circolare',
          description: 'Recupero degli scarti di lavorazione e imballaggi completamente riciclabili nella raccolta differenziata.',
          metric: 'Zero Sprechi'
        }
      ]
    },
    cta: {
      label: 'Partnership & Contatti Commerciali',
      title: 'Creiamo Insieme Qualcosa di',
      titleHighlight: 'Straordinario.',
      description: 'Siamo sempre aperti a nuove collaborazioni con distributori, catene retail e aziende alimentari in tutto il mondo.',
      contactBtn: 'Contattaci Ora',
      careersBtn: 'Lavora Con Noi',
      headquarters: 'Sede Operativa'
    },
    footer: {
      companyType: 'Società a socio unico',
      registeredHeadquarters: 'Sede legale: Via Europa, 14 – 43011 Busseto (PR) Italia',
      adminOffices: 'Sede operativa e uffici: Via Marconi, 3 – 46040 Gazoldo degli Ippoliti (MN) Italia',
      rea: 'REA di Parma n. 231972 – Registro Imprese n. 00415710342',
      vat: 'P.IVA IT 01797570205 – Codice Fiscale 00415710342',
      inalcaCoordination: 'Società soggetta alla direzione e coordinamento di Inalca S.p.A.',
      tollFreeLabel: 'Numero Verde Gratuito',
      siteNav: 'Navigazione del Sito',
      searchPlaceholder: 'Cerca prodotti, ricette o informazioni...',
      directService: 'Servizio Clienti Diretto',
      sendDirectMessage: 'Invia Richiesta Diretta',
      allRights: 'Tutti i diritti riservati'
    },
    contactsPage: {
      badge: 'Contatti & Stabilimenti',
      title: 'Contatti',
      clientiTitle: 'Clienti',
      clientiSub: 'Contatta il nostro team vendite e commerciale per ordini, export e retail.',
      consumatoriTitle: 'Consumatori',
      consumatoriSub: 'Per segnalazioni, domande sui prodotti e informazioni nutrizionali.',
      lavoraTitle: 'Lavora Con Noi',
      lavoraSub: 'Unisciti alla nostra squadra e costruisci il tuo futuro professionale con noi.',
      scrivici: 'Scrivici',
      formBadge: 'Modulo di Contatto Diretto',
      formHeading: 'Inviaci un Messaggio',
      fullName: 'Nome e Cognome *',
      company: 'Azienda / Ragione Sociale *',
      email: 'Email Aziendale *',
      phone: 'Recapito Telefonico',
      department: 'Reparto di Destinazione',
      message: 'Dettagli della Richiesta *',
      submitBtn: 'Invia Messaggio',
      successTitle: 'Messaggio Ricevuto con Successo!',
      successMsg: 'La tua richiesta è stata inoltrata al reparto di competenza. Il nostro team ti risponderà entro 24-48 ore lavorative.',
      sendAnother: 'Invia un Altro Messaggio',
      gdpr: 'I tuoi dati sono protetti in conformità al GDPR UE 2016/679.',
      tollFreeTitle: 'Numero Verde Clienti',
      tollFreeSub: 'Attivo dal lunedì al venerdì dalle 8:30 alle 17:30 per l\'Italia.'
    }
  },

  EN: {
    nav: {
      home: 'Home',
      company: 'Company',
      products: 'Products',
      channels: 'Channels',
      quality: 'Quality',
      recipes: 'Recipes',
      contacts: 'Contacts',
      getInTouch: 'Get in Touch',
      aboutUs: 'About Us',
      facilities: 'Facilities',
      brands: 'Brands'
    },
    hero: {
      label: 'Italian Food Manufacturer',
      title1: 'Italian Fancy Foods,',
      title2: 'Made to',
      titleHighlight: 'Delight.',
      description: 'Authentic Italian deli specialties, fresh pre-sliced charcuterie, and convenient ready-to-eat solutions crafted with certified ingredients and advanced packaging technology.',
      exploreCta: 'Explore Italian Excellence',
      storyCta: 'Discover Our Story',
      trust1: 'Authentic Italian Taste',
      trust2: 'Certified Premium Quality',
      trust3: 'Trusted Worldwide'
    },
    excellence: {
      label: 'The Value of Our Heritage',
      title: 'A Taste Representing',
      titleHighlight: 'Italy Worldwide.',
      description: 'At the heart of Italy\'s Food Valley, we pair centuries of traditional salumi craftsmanship with pharmaceutical-grade food safety standards.',
      metric1Val: '100% Supply Chain',
      metric1Label: 'Controlled meats and recipes monitored from farm to final pack.',
      metric2Val: '4 Specialized Plants',
      metric2Label: 'Dedicated production facilities in Busseto, Gazoldo, Postalesio, and Mandatoriccio.',
      metric3Val: '50+ Export Markets',
      metric3Label: 'Serving global retail shelves and Michelin-level hospitality.',
      exploreBtn: 'Explore Quality'
    },
    process: {
      label: 'Our Manufacturing Method',
      title: 'From Selection to',
      titleHighlight: 'Perfection.',
      description: 'Every slice honors a rigorous five-stage process uniting Italian salumi traditions with cleanroom technology and automated slicing lines.',
      steps: [
        {
          step: '01',
          title: 'Meat Selection',
          shortDesc: 'Exclusive selection of certified Italian and European pork ensuring complete origin traceability.',
          detailHighlight: '100% veterinary and origin verification'
        },
        {
          step: '02',
          title: 'Slow Curing',
          shortDesc: 'Controlled microclimates and natural breezes in the Emilian valleys for deep aromatic maturation.',
          detailHighlight: 'Up to 24 months of natural curing'
        },
        {
          step: '03',
          title: 'Sterile Slicing',
          shortDesc: 'ISO 7 cleanrooms with laminar airflow and temperature-controlled blades preserving organoleptic integrity.',
          detailHighlight: 'Zero fat oxidation during slicing'
        },
        {
          step: '04',
          title: 'MAP Technology',
          shortDesc: 'Modified atmosphere packaging in recyclable paper Eco-Trays delivering 90 days of fresh shelf life.',
          detailHighlight: '75% reduction in fossil plastic'
        },
        {
          step: '05',
          title: 'Dual Inspection',
          shortDesc: 'In-house accredited laboratories running 500+ daily microbiological and spectrometric tests.',
          detailHighlight: 'BRCGS and IFS dual certified'
        }
      ]
    },
    quality: {
      label: 'Food Safety & Quality Standards',
      title: 'Uncompromising',
      titleHighlight: 'Quality.',
      description: 'From meat selection to cold delivery, every production batch is backed by state-of-the-art laboratory testing and continuous audits.',
      viewCertificationsBtn: 'View Certifications & Audits',
      exploreSolutionsBtn: 'Explore Channel Solutions',
      labLabel: 'Spectrometric & Microbiological Lab',
      labDesc: 'In-house high-precision analytical facility validating every production cycle.',
      standards: [
        {
          title: 'BRCGS & IFS International Certifications',
          description: 'Top-tier audit compliance facilitating seamless exports into European and global retail chains.'
        },
        {
          title: '100% Inalca Vertically Integrated Chain',
          description: 'End-to-end Cremonini Group integration from livestock welfare through processing and distribution.'
        },
        {
          title: 'Cleanroom MAP Packaging',
          description: 'Controlled sterile environment maintaining natural colour, aroma, and moisture without excess preservatives.'
        }
      ]
    },
    solutions: {
      label: 'Market Channels & Partnerships',
      title: 'Tailored Solutions for your',
      titleHighlight: 'Business.',
      description: 'Whether supplying supermarket chains, top-tier restaurants, or industrial food manufacturing lines, we engineer the optimal product format.',
      viewSpecs: 'Technical Specs',
      requestProposal: 'Request Channel Proposal',
      privateLabelBadge: 'Private Label & Co-Packing',
      privateLabelTitle: 'Your Brand with Authentic Italian Quality',
      privateLabelDesc: 'We manage recipe formulation, slice thickness, custom MAP ratios, eco-trays, and global regulatory labelling.',
      privateLabelBtn: 'Consult Private Label Director',
      items: [
        {
          id: 'retail',
          title: 'Large Retail & Supermarkets (GDO)',
          tagline: 'Pre-sliced trays, deli snacks, and self-service formats',
          description: 'Complete lines of authentic cured meats packaged in freshness-preserving Eco-Trays for refrigerated aisles worldwide.',
          badge: 'Retail & Supermarkets',
          features: ['FSC recyclable paper Eco-Trays', 'Extended 90-day chilled shelf life', 'Bilingual export-ready packaging']
        },
        {
          id: 'horeca',
          title: 'Foodservice & Ho.Re.Ca.',
          tagline: 'Calibrated cuts, pre-sliced logs, and formats for professional chefs',
          description: 'High-yield practical formats engineered for hotels, gourmet paninoteche, fast-casual chains, and catering services.',
          badge: 'Ho.Re.Ca.',
          features: ['Consistent portion control', 'Clean trimmed ready-to-slice logs', 'Cold chain delivery guarantees']
        },
        {
          id: 'industry',
          title: 'B2B Food Industry Ingredients',
          tagline: 'Diced, julienne, and processed meat ingredients for ready meals and pizza',
          description: 'Bespoke bulk supplies for manufacturers of filled pastas, frozen pizzas, gourmet sandwiches, and prepared dishes.',
          badge: 'Industrial B2B',
          features: ['Precision diced cubes & julienne strips', 'Stringent microbiological specs', 'Continuous high-volume lots']
        }
      ]
    },
    innovation: {
      label: 'Industrial Technology',
      title: 'Where Tradition Meets',
      titleHighlight: 'Modern Innovation.',
      description: 'We continuously invest in robotic automation, AI vision quality checks, and energy-efficient facilities for sustainable output.',
      captionTitle: 'Gazoldo Packaging Complex',
      captionDesc: 'Over 100 million packs sliced and sealed yearly under sterile cleanroom air conditions.',
      badgeTitle: 'Sub-Zero Blades',
      badgeDesc: 'Cooled blade technology avoiding fat melting and preserving authentic texture.',
      discoverBtn: 'Discover Our Facilities'
    },
    recipes: {
      label: 'Culinary Inspiration',
      title: 'Traditional Taste in',
      titleHighlight: 'Your Everyday Life.',
      description: 'Discover regional Italian pairings and chef recipes showcasing the versatility of our cured meats, from gourmet paninis to classic pasta.',
      viewAllBtn: 'View All Recipes',
      orderSample: 'Order Sample / Inquire',
      ingredientsTitle: 'Ingredients',
      pairingTitle: 'Chef\'s Pairing',
      closeRecipe: 'Close Recipe',
      categories: {
        all: 'All',
        panini: 'Gourmet Paninis',
        boards: 'Aperitivo Boards',
        pasta: 'Pasta & Entrees'
      }
    },
    sustainability: {
      label: 'Responsible Food Manufacturing',
      title: 'Good Food for a',
      titleHighlight: 'Better Tomorrow.',
      description: 'Our sustainability roadmap is engineered directly into our plants and packaging lines, prioritizing plastic reduction, clean solar power, and certified welfare.',
      viewCharterBtn: 'Read Our Sustainability Charter',
      pillars: [
        {
          title: 'Eco-Tray Paper Innovation',
          description: 'FSC-certified paper bottom tray eliminating 75% of fossil plastics while maintaining 90-day shelf life.',
          metric: '-75% Plastic'
        },
        {
          title: 'Solar & Renewable Power',
          description: 'Extensive photovoltaic installations across our Gazoldo and Busseto plants powering refrigeration.',
          metric: '100% Renewable'
        },
        {
          title: 'Certified Animal Welfare',
          description: 'Rigorous husbandry protocols audited through ClassyFarm criteria across entire supply chains.',
          metric: '100% Traceable'
        },
        {
          title: 'Circular Zero Waste',
          description: 'Complete recovery of organic production by-products and fully recyclable packaging streams.',
          metric: 'Zero Waste'
        }
      ]
    },
    cta: {
      label: 'Partnerships & Inquiries',
      title: 'Let\'s Create Something',
      titleHighlight: 'Exceptional.',
      description: 'We are always open to new partnerships, distributor arrangements, and private label projects with retailers worldwide.',
      contactBtn: 'Contact Us Now',
      careersBtn: 'Work With Us',
      headquarters: 'Operating Headquarters'
    },
    footer: {
      companyType: 'Single-member company',
      registeredHeadquarters: 'Registered headquarters: Via Europa, 14 – 43011 Busseto (PR) Italy',
      adminOffices: 'Admin headquarters & offices: Via Marconi, 3 – 46040 Gazoldo degli Ippoliti (MN) Italy',
      rea: 'REA of Parma no. 231972 – Business Register no. 00415710342',
      vat: 'VAT no. IT 01797570205 – Tax Code 00415710342',
      inalcaCoordination: 'Company subject to the management and coordination of Inalca S.p.A.',
      tollFreeLabel: 'Customer Toll-Free Hotline',
      siteNav: 'Site Navigation',
      searchPlaceholder: 'Search products, recipes or corporate details...',
      directService: 'Direct Customer Service',
      sendDirectMessage: 'Send Direct Message',
      allRights: 'All rights reserved'
    },
    contactsPage: {
      badge: 'Contacts & Facilities',
      title: 'Contacts',
      clientiTitle: 'Clients & Retailers',
      clientiSub: 'Connect with our commercial sales directors for orders, export distribution, and wholesale.',
      consumatoriTitle: 'Consumers',
      consumatoriSub: 'For product inquiries, nutrition feedback, or quality customer support.',
      lavoraTitle: 'Careers & Talent',
      lavoraSub: 'Join our team in the heart of the Italian Food Valley and build your career with us.',
      scrivici: 'Contact Us',
      formBadge: 'Direct Contact Form',
      formHeading: 'Send us an Inquiry',
      fullName: 'Full Name *',
      company: 'Company / Organization *',
      email: 'Corporate Email *',
      phone: 'Phone Number',
      department: 'Department',
      message: 'Inquiry Details *',
      submitBtn: 'Submit Inquiry',
      successTitle: 'Inquiry Successfully Received!',
      successMsg: 'Your message has been routed to the relevant department. Our team will respond within 24 to 48 business hours.',
      sendAnother: 'Send Another Inquiry',
      gdpr: 'Your data is processed in strict compliance with EU GDPR 2016/679.',
      tollFreeTitle: 'Customer Toll-Free Support',
      tollFreeSub: 'Available Monday to Friday from 8:30 to 17:30 (CET).'
    }
  },

  DE: {
    nav: {
      home: 'Startseite',
      company: 'Unternehmen',
      products: 'Produkte',
      channels: 'Kanäle',
      quality: 'Qualität',
      recipes: 'Rezepte',
      contacts: 'Kontakte',
      getInTouch: 'Kontaktieren',
      aboutUs: 'Über Uns',
      facilities: 'Standorte',
      brands: 'Marken'
    },
    hero: {
      label: 'Italienischer Lebensmittelhersteller',
      title1: 'Italienische Spezialitäten,',
      title2: 'Für Genuss',
      titleHighlight: 'Gemacht.',
      description: 'Traditionelle italienische Wurstwaren, frische Aufschnitt-Spezialitäten und innovative Fertigprodukte mit zertifizierten Rohstoffen und modernster Verpackung.',
      exploreCta: 'Italienische Exzellenz Entdecken',
      storyCta: 'Unsere Geschichte',
      trust1: 'Echter Italienischer Geschmack',
      trust2: 'Zertifizierte Spitzenqualität',
      trust3: 'Weltweites Vertrauen'
    },
    excellence: {
      label: 'Der Wert Unserer Herkunft',
      title: 'Ein Geschmack, der',
      titleHighlight: 'Italien Weltweit Vertritt.',
      description: 'Im Herzen des italienischen Food Valley vereinen wir jahrhundertealtes Metzgerhandwerk mit höchsten Lebensmittelsicherheitsstandards.',
      metric1Val: '100% Lieferkette',
      metric1Label: 'Vollständig kontrollierte Rohstoffe vom Bauernhof bis zur Packung.',
      metric2Val: '4 Standorte',
      metric2Label: 'Spezialisierte Werke in Busseto, Gazoldo, Postalesio und Mandatoriccio.',
      metric3Val: '50+ Exportländer',
      metric3Label: 'Präsent in führenden europäischen und weltweiten Supermarktketten.',
      exploreBtn: 'Qualität Entdecken'
    },
    process: {
      label: 'Unser Produktionsprozess',
      title: 'Von der Auswahl bis zur',
      titleHighlight: 'Perfektion.',
      description: 'Jede Scheibe durchläuft einen fünfstufigen Präzisionsprozess, der italienische Reifetradition mit keimfreier Reinraumtechnologie vereint.',
      steps: [
        {
          step: '01',
          title: 'Fleischauswahl',
          shortDesc: 'Strenge Selektion von Qualitätsfleisch mit lückenloser tierärztlicher Rückverfolgbarkeit.',
          detailHighlight: '100% Herkunftskontrolle'
        },
        {
          step: '02',
          title: 'Langsame Reifung',
          shortDesc: 'Optimale Luftfeuchtigkeit und natürliche emilianische Luft für vollmundiges Aroma.',
          detailHighlight: 'Bis zu 24 Monate natürliche Reife'
        },
        {
          step: '03',
          title: 'Steriles Schneiden',
          shortDesc: 'ISO 7 Reinräume mit gekühlten Klingen zur Vermeidung von Fettoxidation.',
          detailHighlight: 'Null Oxidation der Edelfette'
        },
        {
          step: '04',
          title: 'MAP-Schutzgas',
          shortDesc: 'Verpackung unter Schutzgas in recycelbaren Eco-Tray Papierschalen für 90 Tage Frische.',
          detailHighlight: '75% weniger fossiles Plastik'
        },
        {
          step: '05',
          title: 'Doppelte Kontrolle',
          shortDesc: 'Eigene akkreditierte Labore mit täglich über 500 Analysen auf höchstem Niveau.',
          detailHighlight: 'BRCGS & IFS zertifiziert'
        }
      ]
    },
    quality: {
      label: 'Sicherheit & Qualitätsstandards',
      title: 'Qualität Ohne',
      titleHighlight: 'Kompromisse.',
      description: 'Von der Rohstoffannahme bis zur gekühlten Auslieferung garantieren unsere modernen Labore und Qualitätsprüfer absolute Sicherheit.',
      viewCertificationsBtn: 'Zertifizierungen & Audits Anzeigen',
      exploreSolutionsBtn: 'Vertriebskanäle Erkunden',
      labLabel: 'Spektrometrie- & Mikrobiologielabor',
      labDesc: 'Hochmodernes internes Labor für lückenlose Chargenprüfung.',
      standards: [
        {
          title: 'BRCGS & IFS Zertifizierungen',
          description: 'Höchste Konformitätsstufen für unkomplizierten Export in internationale Handelsketten.'
        },
        {
          title: 'Inalca Vertikal Integrierte Kette',
          description: 'Lückenlose Rückverfolgbarkeit der Cremonini-Gruppe von der Zucht bis ins Verkaufsregal.'
        },
        {
          title: 'Reinraum-MAP-Verpackung',
          description: 'Kontrollierte sterile Atmosphäre für maximale Frische und natürliche Farbe ohne künstliche Zusätze.'
        }
      ]
    },
    solutions: {
      label: 'Vertriebskanäle & Partnerschaften',
      title: 'Maßgeschneiderte Lösungen für Ihr',
      titleHighlight: 'Geschäft.',
      description: 'Ob Lebensmitteleinzelhandel, anspruchsvolle Gastronomie oder industrielle Weiterverarbeitung – wir entwickeln das passende Format.',
      viewSpecs: 'Technische Daten',
      requestProposal: 'Kanalangebot Anfordern',
      privateLabelBadge: 'Private Label & Co-Packing',
      privateLabelTitle: 'Ihre Marke mit authentischer italienischer Spitzenqualität',
      privateLabelDesc: 'Wir steuern Rezeptur, Scheibendicke, MAP-Gasmischungen, Papierverpackungen und internationale Etikettierungsvorgaben.',
      privateLabelBtn: 'Private Label Berater Kontaktieren',
      items: [
        {
          id: 'retail',
          title: 'Lebensmitteleinzelhandel (LEH / Retail)',
          tagline: 'SB-Aufschnittschalen, Snacks und frische Selbstbedienungsformate',
          description: 'Umfassendes Sortiment italienischer Spezialitäten in recycelbaren Eco-Tray Papierschalen.',
          badge: 'Handel & Retail',
          features: ['Eco-Tray Papierschalen (FSC-zertifiziert)', '90 Tage garantierte Frische', 'Zweisprachige Export-Verpackung']
        },
        {
          id: 'horeca',
          title: 'Gastronomie & Großverbraucher (HoReCa)',
          tagline: 'Kalibrierte Zuschnitte und Aufschnitte für Profiköche',
          description: 'Praktische und wirtschaftliche Wurst-Spezialitäten für Hotels, Systemgastronomie und Catering.',
          badge: 'Ho.Re.Ca.',
          features: ['Genaue Portionskontrolle', 'Gereinigte Stücke sofort schneidbereit', 'Garantierte Kühlkettenlogistik']
        },
        {
          id: 'industry',
          title: 'Industrielle Rohstoffe (B2B)',
          tagline: 'Würfel, Streifen und Vorprodukte für Fertiggerichte und Pizza',
          description: 'Passgenaue Belieferung von Tiefkühlpizza-, Pasta- und Sandwich-Herstellern.',
          badge: 'B2B Industrie',
          features: ['Präzise Würfel- und Streifenschnitte', 'Strenge mikrobiologische Toleranzen', 'Kontinuierliche Großchargen']
        }
      ]
    },
    innovation: {
      label: 'Industrielle Spitzentechnologie',
      title: 'Wo Tradition auf Moderne',
      titleHighlight: 'Technologie Trifft.',
      description: 'Wir investieren kontinuierlich in robotergestützte Fertigung, optische KI-Qualitätsprüfungen und energiesparende Kälteanlagen.',
      captionTitle: 'Verpackungskomplex Gazoldo',
      captionDesc: 'Über 100 Millionen Packungen jährlich unter sterilen Reinraumbedingungen geschnitten und versiegelt.',
      badgeTitle: 'Gekühlte Klingen',
      badgeDesc: 'Schnitttechnik bei kontrollierten Temperaturen zur Erhaltung der edlen Fettstruktur.',
      discoverBtn: 'Unsere Standorte Entdecken'
    },
    recipes: {
      label: 'Kulinarische Inspiration',
      title: 'Italienischer Genuss in',
      titleHighlight: 'Ihrem Alltag.',
      description: 'Entdecken Sie regionale Rezepturen und Rezeptideen unserer Köche für den unnachahmlichen Geschmack echter Wurstspezialitäten.',
      viewAllBtn: 'Alle Rezepte',
      orderSample: 'Muster Bestellen / Anfragen',
      ingredientsTitle: 'Zutaten',
      pairingTitle: 'Chefkoch-Empfehlung',
      closeRecipe: 'Rezept Schließen',
      categories: {
        all: 'Alle',
        panini: 'Gourmet-Panini',
        boards: 'Antipasti-Platten',
        pasta: 'Pasta & Hauptgerichte'
      }
    },
    sustainability: {
      label: 'Verantwortungsvolle Produktion',
      title: 'Gutes Essen für eine',
      titleHighlight: 'Bessere Zukunft.',
      description: 'Unsere Nachhaltigkeitsstrategie ist fester Bestandteil unserer Werke: Reduzierung von Kunststoff, Sonnenstrom und zertifiziertes Tierwohl.',
      viewCharterBtn: 'Nachhaltigkeitscharta Lesen',
      pillars: [
        {
          title: 'Eco-Tray Papier-Innovation',
          description: 'FSC-zertifizierter Papierboden spart 75% Kunststoff bei vollen 90 Tagen Frische.',
          metric: '-75% Plastik'
        },
        {
          title: 'Solarenergie & Kältetechnik',
          description: 'Große Photovoltaikanlagen auf den Dächern in Gazoldo und Busseto für CO2-arme Kälteerzeugung.',
          metric: '100% Erneuerbar'
        },
        {
          title: 'Zertifiziertes Tierwohl',
          description: 'Strenge Tierwohlkriterien nach ClassyFarm-Standards entlang der gesamten Haltung.',
          metric: '100% Geprüft'
        },
        {
          title: 'Kreislaufwirtschaft',
          description: 'Vollständige Verwertung von Nebenprodukten und leicht trennbare, recycelbare Materialien.',
          metric: 'Null Abfall'
        }
      ]
    },
    cta: {
      label: 'Partnerschaften & B2B-Anfragen',
      title: 'Lassen Sie uns Gemeinsam',
      titleHighlight: 'Erfolgreich Sein.',
      description: 'Wir sind jederzeit offen für neue Partnerschaften mit Händlern, Gastronomiegruppen und Herstellern weltweit.',
      contactBtn: 'Jetzt Kontaktieren',
      careersBtn: 'Karriere & Jobs',
      headquarters: 'Betriebssitz'
    },
    footer: {
      companyType: 'Gesellschaft mit beschränkter Haftung und alleinigem Gesellschafter',
      registeredHeadquarters: 'Hauptsitz: Via Europa, 14 – 43011 Busseto (PR) Italien',
      adminOffices: 'Verwaltung und Betrieb: Via Marconi, 3 – 46040 Gazoldo degli Ippoliti (MN) Italien',
      rea: 'Handelsregister Parma Nr. 231972 – Steuernummer 00415710342',
      vat: 'USt-IdNr. IT 01797570205',
      inalcaCoordination: 'Unterliegt der Leitung und Koordinierung der Inalca S.p.A.',
      tollFreeLabel: 'Kostenlose Servicenummer',
      siteNav: 'Website-Navigation',
      searchPlaceholder: 'Produkte, Rezepte oder Firmeninfos suchen...',
      directService: 'Direkter Kundenservice',
      sendDirectMessage: 'Direktanfrage Senden',
      allRights: 'Alle Rechte vorbehalten'
    },
    contactsPage: {
      badge: 'Kontakte & Standorte',
      title: 'Kontakte',
      clientiTitle: 'Handelskunden & B2B',
      clientiSub: 'Kontaktieren Sie unser Vertriebs- und Exportteam für Angebote, Konditionen und Sortimente.',
      consumatoriTitle: 'Verbraucher & Kunden',
      consumatoriSub: 'Für Produktfragen, Nährwertinformationen und Feedback zu unseren Spezialitäten.',
      lavoraTitle: 'Karriere & Jobs',
      lavoraSub: 'Werden Sie Teil unseres Teams im italienischen Food Valley und gestalten Sie Ihre berufliche Zukunft.',
      scrivici: 'Schreiben Sie Uns',
      formBadge: 'Direktes Kontaktformular',
      formHeading: 'Senden Sie uns eine Nachricht',
      fullName: 'Vor- und Nachname *',
      company: 'Firma / Unternehmen *',
      email: 'Geschäftliche E-Mail *',
      phone: 'Telefonnummer',
      department: 'Zuständige Abteilung',
      message: 'Nachricht & Details *',
      submitBtn: 'Nachricht Absenden',
      successTitle: 'Nachricht Erfolgreich Erhalten!',
      successMsg: 'Ihre Anfrage wurde an das zuständige Team weitergeleitet. Wir antworten innerhalb von 24 bis 48 Geschäftsstunden.',
      sendAnother: 'Weitere Nachricht Senden',
      gdpr: 'Ihre Daten werden gemäß EU-DSGVO 2016/679 vertraulich behandelt.',
      tollFreeTitle: 'Kostenlose Kundenservicenummer',
      tollFreeSub: 'Montag bis Freitag von 8:30 bis 17:30 Uhr (MEZ) erreichbar.'
    }
  },

  FR: {
    nav: {
      home: 'Accueil',
      company: 'Entreprise',
      products: 'Produits',
      channels: 'Canaux',
      quality: 'Qualité',
      recipes: 'Recettes',
      contacts: 'Contacts',
      getInTouch: 'Contactez-nous',
      aboutUs: 'À Propos',
      facilities: 'Établissements',
      brands: 'Marques'
    },
    hero: {
      label: 'Fabricant de Charcuterie Italienne',
      title1: 'Spécialités Italiennes,',
      title2: 'Faites Pour',
      titleHighlight: 'Ravir.',
      description: 'Charcuteries authentiques de la tradition italienne, barquettes tranchées ultra-fraîches et solutions prêtes à l\'emploi élaborées avec des matières premières certifiées.',
      exploreCta: 'Découvrir l\'Excellence Italienne',
      storyCta: 'Notre Histoire',
      trust1: 'Goût Italien Authentique',
      trust2: 'Qualité Supérieure Certifiée',
      trust3: 'Confiance Mondiale'
    },
    excellence: {
      label: 'La Richesse de Notre Terroir',
      title: 'Une Saveur Qui Représente',
      titleHighlight: "l'Italie dans le Monde.",
      description: 'Au cœur de la Food Valley d\'Émilie-Romagne, nous allions le savoir-faire des maîtres charcutiers aux exigences d\'hygiène les plus strictes.',
      metric1Val: '100% Filière Contrôlée',
      metric1Label: 'Viandes et recettes suivies de l\'élevage jusqu\'au produit fini.',
      metric2Val: '4 Sites de Production',
      metric2Label: 'Usines spécialisées à Busseto, Gazoldo, Postalesio et Mandatoriccio.',
      metric3Val: '50+ Pays à l\'Export',
      metric3Label: 'Présents sur les étals des grands distributeurs et tables gastronomiques.',
      exploreBtn: 'Découvrir la Qualité'
    },
    process: {
      label: 'Notre Savoir-Faire Industriel',
      title: 'De la Sélection à la',
      titleHighlight: 'Perfection.',
      description: 'Chaque tranche honore un protocole rigoureux en 5 étapes où l\'artisanat italien rencontre des salles blanches à atmosphère stérile.',
      steps: [
        {
          step: '01',
          title: 'Sélection des Viandes',
          shortDesc: 'Choix minutieux d\'élevages porcins certifiés assurant une traçabilité sanitaire absolue.',
          detailHighlight: 'Traçabilité vétérinaire à 100%'
        },
        {
          step: '02',
          title: 'Affinage Lent',
          shortDesc: 'Climat maîtrisé et microclimat de la plaine du Pô pour un profil aromatique d\'exception.',
          detailHighlight: 'Jusqu\'à 24 mois d\'affinage naturel'
        },
        {
          step: '03',
          title: 'Tranchage Stérile',
          shortDesc: 'Salles blanches ISO 7 et lames réfrigérées évitant toute altération des lipides nobles.',
          detailHighlight: 'Zéro oxydation des graisses nobles'
        },
        {
          step: '04',
          title: 'Technologie MAP',
          shortDesc: 'Conditionnement sous atmosphère protectrice en barquettes Eco-Tray pour 90 jours de fraîcheur.',
          detailHighlight: '75% de plastique fossile en moins'
        },
        {
          step: '05',
          title: 'Contrôles Doublés',
          shortDesc: 'Laboratoires internes accrédités effectuant quotidiennement plus de 500 analyses.',
          detailHighlight: 'Certifications BRCGS & IFS niveau supérieur'
        }
      ]
    },
    quality: {
      label: 'Normes de Sécurité Alimentaire',
      title: 'Une Qualité Sans',
      titleHighlight: 'Compromis.',
      description: 'De la sélection rigoureuse des viandes à la logistique du froid, chaque lot fait l\'objet d\'analyses et d\'audits permanents.',
      viewCertificationsBtn: 'Consulter Certifications & Audits',
      exploreSolutionsBtn: 'Découvrir nos Solutions par Métier',
      labLabel: 'Laboratoire Spectrométrique & Microbiologique',
      labDesc: 'Plateau technique interne de haute précision analysant chaque étape de production.',
      standards: [
        {
          title: 'Certifications Internationales BRCGS & IFS',
          description: 'Notes de conformité maximales pour l\'accès aux grands distributeurs européens et mondiaux.'
        },
        {
          title: 'Filière Intégrée Inalca',
          description: 'Intégration complète du Groupe Cremonini, de l\'élevage jusqu\'aux linéaires.',
          },
        {
          title: 'Conditionnement Stérile en Salle Blanche',
          description: 'Atmosphère stérile préservant couleur, fraîcheur et texture sans conservateurs superflus.'
        }
      ]
    },
    solutions: {
      label: 'Canaux de Distribution & Partenariats',
      title: 'Des Solutions Adaptées à Votre',
      titleHighlight: 'Activité.',
      description: 'Que vous pilotiez des enseignes de grande distribution, des restaurants gastronomiques ou une industrie agroalimentaire, nous adaptons le format.',
      viewSpecs: 'Fiche Technique',
      requestProposal: 'Demander une Proposition',
      privateLabelBadge: 'Marques de Distributeurs (MDD)',
      privateLabelTitle: 'Votre Marque avec l\'Authentique Qualité Italienne',
      privateLabelDesc: 'Nous gérons la formulation des recettes, l\'épaisseur des tranches, les atmosphères gazeuses, les barquettes papier et les normes réglementaires.',
      privateLabelBtn: 'Contacter le Responsable MDD',
      items: [
        {
          id: 'retail',
          title: 'Grande Distribution (GMS / Retail)',
          tagline: 'Barquettes tranchées libre-service, snacks et formats familiaux',
          description: 'Gamme complète de charcuterie italienne tranchée en barquettes fraîcheur Eco-Tray pour les rayons frais.',
          badge: 'GMS & Retail',
          features: ['Barquettes carton Eco-Tray FSC', 'DLC étendue à 90 jours', 'Packaging multilingue export']
        },
        {
          id: 'horeca',
          title: 'Restauration & Foodservice (HoReCa)',
          tagline: 'Morceaux calibrés, pièces entières et fentes pour chefs',
          description: 'Formats professionnels à haut rendement pour l\'hôtellerie, les brasseries, les traiteurs et les chaînes de restauration.',
          badge: 'Ho.Re.Ca.',
          features: ['Maîtrise parfaite du coût portion', 'Pièces parées prêtes au tranchage', 'Garantie absolue de la chaîne du froid']
        },
        {
          id: 'industry',
          title: 'Ingrédients Industriels Agroalimentaires',
          tagline: 'Dés, allumettes et viandes élaborées pour plats cuisinés et pizzas',
          description: 'Approvisionnements sur mesure pour fabricants de pâtes farcies, pizzas surgelées et sandwichs industriels.',
          badge: 'Industrie B2B',
          features: ['Dés et allumettes calibrés au millimètre', 'Critères microbiologiques stricts', 'Lots volumiques réguliers']
        }
      ]
    },
    innovation: {
      label: 'Technologie Industrielle',
      title: 'Quand la Tradition Rencontre',
      titleHighlight: "l'Innovation.",
      description: 'Nous investissons sans relâche dans la robotisation, le contrôle optique par IA et des installations éco-énergétiques.',
      captionTitle: 'Centre de Conditionnement de Gazoldo',
      captionDesc: 'Plus de 100 millions de barquettes tranchées et scellées chaque année en environnement stérile.',
      badgeTitle: 'Lames Réfrigérées',
      badgeDesc: 'Tranchage à température négative préservant la texture et le fondant des graisses nobles.',
      discoverBtn: 'Découvrir nos Usines'
    },
    recipes: {
      label: 'Inspiration Culinaire',
      title: 'Le Goût de la Tradition dans',
      titleHighlight: 'Votre Assiette.',
      description: 'Découvrez des accords régionaux et des recettes imaginées par nos chefs pour sublimer la finesse de nos charcuteries.',
      viewAllBtn: 'Toutes les Recettes',
      orderSample: 'Commander un Échantillon',
      ingredientsTitle: 'Ingrédients',
      pairingTitle: 'Conseil du Chef',
      closeRecipe: 'Fermer la Recette',
      categories: {
        all: 'Toutes',
        panini: 'Paninis Gourmet',
        boards: 'Planches Apéritives',
        pasta: 'Pâtes & Plats'
      }
    },
    sustainability: {
      label: 'Fabrication Responsable',
      title: 'Une Bonne Alimentation pour un',
      titleHighlight: 'Avenir Meilleur.',
      description: 'Notre plan d\'action durable est au cœur de nos usines : réduction drastique du plastique, énergie solaire et bien-être animal.',
      viewCharterBtn: 'Lire Notre Charte de Durabilité',
      pillars: [
        {
          title: 'Barquette Eco-Tray en Carton',
          description: 'Fond en papier certifié FSC réduisant de 75% l\'usage du plastique pour 90 jours de conservation.',
          metric: '-75% Plastique'
        },
        {
          title: 'Énergie Solaire & Propre',
          description: 'Installations photovoltaïques sur les toitures de Gazoldo et Busseto alimentant les réseaux frigorifiques.',
          metric: '100% Renouvelable'
        },
        {
          title: 'Bien-Être Animal Garanti',
          description: 'Normes strictes et audits d\'élevage selon les critères européens ClassyFarm.',
          metric: '100% Tracé'
        },
        {
          title: 'Économie Circulaire',
          description: 'Valorisation intégrale des coproduits organiques et emballages facilement recyclables.',
          metric: 'Zéro Déchet'
        }
      ]
    },
    cta: {
      label: 'Partenariats & Contacts Commerciaux',
      title: 'Créons Ensemble Quelque Chose',
      titleHighlight: "d'Exceptionnel.",
      description: 'Nous sommes à l\'écoute de nouveaux partenariats avec distributeurs, chaînes de supermarchés et professionnels du monde entier.',
      contactBtn: 'Contactez-nous',
      careersBtn: 'Rejoignez-nous',
      headquarters: 'Siège Opérationnel'
    },
    footer: {
      companyType: 'Société à associé unique',
      registeredHeadquarters: 'Siège social : Via Europa, 14 – 43011 Busseto (PR) Italie',
      adminOffices: 'Siège opérationnel et bureaux : Via Marconi, 3 – 46040 Gazoldo degli Ippoliti (MN) Italie',
      rea: 'Registre des entreprises de Parme n° 231972 – N° d\'entreprise 00415710342',
      vat: 'N° TVA IT 01797570205',
      inalcaCoordination: 'Société soumise à la direction et à la coordination d\'Inalca S.p.A.',
      tollFreeLabel: 'Numéro Vert Gratuit',
      siteNav: 'Navigation du Site',
      searchPlaceholder: 'Rechercher un produit, une recette...',
      directService: 'Service Clientèle Direct',
      sendDirectMessage: 'Envoyer une Demande Directe',
      allRights: 'Tous droits réservés'
    },
    contactsPage: {
      badge: 'Contacts & Établissements',
      title: 'Contacts',
      clientiTitle: 'Clients & Distributeurs',
      clientiSub: 'Contactez notre direction commerciale et export pour vos commandes, tarifs et référencements.',
      consumatoriTitle: 'Consommateurs',
      consumatoriSub: 'Pour toute question, information nutritionnelle ou retour sur nos produits.',
      lavoraTitle: 'Recrutement & Carrières',
      lavoraSub: 'Rejoignez nos équipes au cœur de la Food Valley italienne et construisez votre avenir.',
      scrivici: 'Écrivez-nous',
      formBadge: 'Formulaire de Contact Direct',
      formHeading: 'Envoyez-nous un Message',
      fullName: 'Nom et Prénom *',
      company: 'Société / Organisation *',
      email: 'Email Professionnel *',
      phone: 'Téléphone',
      department: 'Service Destinataire',
      message: 'Détails de Votre Demande *',
      submitBtn: 'Envoyer le Message',
      successTitle: 'Message Transmis avec Succès !',
      successMsg: 'Votre demande a été transmise au service concerné. Notre équipe vous répondra sous 24 à 48 heures ouvrées.',
      sendAnother: 'Envoyer un Autre Message',
      gdpr: 'Vos données sont protégées conformément au RGPD UE 2016/679.',
      tollFreeTitle: 'Numéro Vert Clientèle',
      tollFreeSub: 'Disponible du lundi au vendredi de 8h30 à 17h30 (CET).'
    }
  }
};

