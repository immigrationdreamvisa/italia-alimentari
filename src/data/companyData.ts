/**
 * Italia Alimentari - Master Data & Corporate Information
 * Verified Italian food manufacturing data, recipes, production process, and facilities.
 * Strictly focused on Italian food, preparation, ingredients, and manufacturing.
 */

export interface ProductItem {
  id: string;
  category: 'traditional' | 'sliced' | 'snacks' | 'bacon';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  formats: string[];
  certifications: string[];
  details: string;
  pairingNote?: string;
}

export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  founded: string;
  description: string;
  specialty: string;
  iconName: string;
  heritage: string;
  productsList: string[];
}

export interface LocationItem {
  id: string;
  name: string;
  type: 'production' | 'commercial';
  location: string;
  coordinates: { x: number; y: number };
  specialization: string;
  certifications?: string[];
  description: string;
  surfaceArea: string;
  capacity: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  badge: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  detailHighlight: string;
}

export interface RecipeItem {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  difficulty: 'Easy' | 'Medium' | 'Chef Level';
  description: string;
  ingredients: string[];
  instructions: string[];
  featuredProduct: string;
  image: string;
  pairingNote?: string;
  servingTemp?: string;
  chefTip?: string;
  curingAge?: string;
  originRegion?: string;
  nutritionalHighlights?: string[];
}

// 5-Step Process Data (Dark Section: "From Selection to Perfection")
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Premium Ingredients',
    shortDesc: '100% certified Italian pork cuts and natural seasonings.',
    fullDesc: 'Strict selection of fresh pork thighs, bellies and lean beef from audited Italian livestock farms with certified animal welfare and non-GMO feed guarantees.',
    image: '/images/traditional_deli_meats_1793428037900.jpg',
    detailHighlight: 'Sea salt from Cervia, cracked black pepper, garlic & Bronte pistachios'
  },
  {
    step: '02',
    title: 'Traditional Recipes',
    shortDesc: 'Centuries-old regional salumi curing formulas.',
    fullDesc: 'Ancestral curing methods refined across decades in Busseto and Lombardy. Hand-salting, patient cellar resting, and gentle wood smoking without haste.',
    image: '/images/artisan_curing_cellar_1793429018781.jpg',
    detailHighlight: 'Long aging up to 24 months in natural microclimates'
  },
  {
    step: '03',
    title: 'Advanced Technology',
    shortDesc: 'ISO certified cleanroom slicing & MAP systems.',
    fullDesc: 'Positive-pressure cleanroom chambers with laminar air flow where deli meats are sliced at controlled low temperatures, preserving fragrance and texture.',
    image: '/images/modern_production_plant_1793428040629.jpg',
    detailHighlight: 'High-speed automated slicing with "fetta mossa" folded presentation'
  },
  {
    step: '04',
    title: 'Quality Control',
    shortDesc: 'Continuous microbiological & laser optical testing.',
    fullDesc: 'Every tray undergoes in-line seal integrity validation, residual oxygen inspection, metal detection, and organoleptic sensory testing by certified master tasters.',
    image: '/images/food_quality_inspection_1793429017795.jpg',
    detailHighlight: 'Over 12,000 internal lab analyses conducted every year'
  },
  {
    step: '05',
    title: 'Exceptional Products',
    shortDesc: 'Delicate aroma, silky texture, and authentic Italian taste.',
    fullDesc: 'Finished charcuterie trays, whole cured logs and snack kits ready for premier global supermarkets, gastronomy counters, and culinary professionals.',
    image: '/images/chef_plating_charcuterie_1793429017594.jpg',
    detailHighlight: 'Enjoyed in Michelin kitchens and family tables across 50+ countries'
  }
];

export interface StatItem {
  number: string;
  label: string;
  subtext: string;
}

export const STATS_DATA: StatItem[] = [
  {
    number: '50+',
    label: 'Export Countries',
    subtext: 'Worldwide distribution spanning 5 continents'
  },
  {
    number: '5',
    label: 'Italian Facilities',
    subtext: 'Specialized production and curing hubs'
  },
  {
    number: '100M+',
    label: 'Packs Per Year',
    subtext: 'Slices prepared under ISO cleanroom conditions'
  },
  {
    number: '100%',
    label: 'Traceability',
    subtext: 'Certified supply chain and strict animal welfare'
  }
];

// Product Data - 12 Comprehensive Italian Specialties
export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prosciutto-di-parma',
    category: 'traditional',
    title: 'Prosciutto di Parma DOP',
    subtitle: 'Consorzio del Prosciutto di Parma · 18–24 Months',
    description: 'Slow cellar-aged dry-cured ham made strictly from selected Italian pork thighs and marine sea salt from Cervia, cured naturally in the fragrant Apennine air.',
    image: '/images/traditional_deli_meats_1793428037900.jpg',
    highlights: [
      'Aged minimum 18 to 24 months in historic Busseto cellars',
      'Ducal Crown fire-branded guarantee of authenticity',
      'Sweet, silky texture with delicate natural marbling',
      '100% additive-free: only selected pork and sea salt'
    ],
    formats: ['Whole bone-in (9–11 kg)', 'Deboned pressed block ("Addobbo")', 'Half cut deli loaf', 'Sliced retail trays (80g–120g)'],
    certifications: ['DOP Certified', 'Parma Consortium', 'Gluten Free', 'Preservative Free'],
    details: 'Cured in our dedicated curing houses in Busseto in the Parma province. The unhurried aging process develops complex nutty undertones and a tender, melt-in-the-mouth consistency.',
    pairingNote: 'Unbeatable with warm torta fritta, Parmigiano Reggiano 24-month chunks, and dry Lambrusco di Sorbara.'
  },
  {
    id: 'mortadella-bologna-igp',
    category: 'traditional',
    title: 'Mortadella Bologna IGP Gran Ibis',
    subtitle: 'Artisan Heritage Since 1962 · Bronte Pistachios',
    description: 'The crowning achievement of Ibis: premium pork shoulder meat, prized throat lardons, delicate aromatic spices, and whole emerald green Bronte pistachios.',
    image: '/images/hero_charcuterie_1793428038233.jpg',
    highlights: [
      'Slow brick-oven gentle dry steaming for over 24 hours',
      'Firm, silky bite with evenly dispersed throat lardons',
      'Whole Sicilian pistachios with protected designation',
      'Consorzio Mortadella Bologna IGP certified recipe'
    ],
    formats: ['Whole oval 30 kg gastronomic trophy', '5 kg & 10 kg deli counter cylinder', 'Half vacuum log', 'Paper-bottom pre-sliced trays (100g)'],
    certifications: ['IGP Guaranteed', 'Gluten Free', 'No Added Polyphosphates', 'Milk Derivative Free'],
    details: 'Cooked slowly in dry air ovens at our Busseto facility. Once cooking finishes, each mortadella undergoes a cold shower and slow stabilization to fix its delicate pink color and fragrant bouquet.',
    pairingNote: 'Serve freshly cut into small dice with toothpicks, or gossamer-thin folded inside hot Roman pizza bianca.'
  },
  {
    id: 'bresaola-valtellina-igp',
    category: 'traditional',
    title: 'Bresaola della Valtellina IGP',
    subtitle: 'Montagna Valtellina · Alpine Air Curing',
    description: 'Lean prime beef cuts ("Punta d\'Anca") dry-cured with mountain salt, juniper berries and alpine botanicals, matured under the cool breezes of Sondrio.',
    image: '/images/artisan_curing_cellar_1793429018781.jpg',
    highlights: [
      'Made exclusively from prime beef topside (Punta d\'Anca)',
      'Dry-salted by hand with juniper, bay leaves and cinnamon',
      'High protein (over 32%), naturally lean (<2% fat)',
      'Cured in high-altitude dry Alpine breeze'
    ],
    formats: ['Whole piece (3–3.5 kg)', 'Half piece vacuum sealed', 'Cleanroom sliced folded trays (70g–100g)'],
    certifications: ['IGP Valtellina Consortium', 'High Protein Certified', 'Non-GMO Feed', 'IFS Higher Level'],
    details: 'Produced at our Postalesio facility nestled between the Rhaetian and Orobic Alps. Natural climatic variations combined with mountain winds give the meat its deep ruby hue and velvety texture.',
    pairingNote: 'Superb dressed with virgin olive oil, fresh lemon drops, wild arugula, and shaved Parmigiano Reggiano.'
  },
  {
    id: 'salame-felino-igp',
    category: 'traditional',
    title: 'Salame Felino IGP & Regional Salamis',
    subtitle: 'Antica Salumeria Parmense · Natural Casing',
    description: 'Iconic Emilian salame made from coarse-ground pork shoulder and pancetta trimmings, seasoned with cracked peppercorns and white wine, and tied by hand.',
    image: '/images/gourmet_recipe_spread_1793429018072.jpg',
    highlights: [
      'Traditional 60-degree diagonal slice presentation',
      'Enriched with Malvasia Colli di Parma dry white wine',
      'Aged slowly in natural cellars with noble mold formation',
      'Delicate, sweet flavor with pleasant rustic consistency'
    ],
    formats: ['Whole stick (800g–1kg)', 'Half vacuum stick', 'Pre-sliced coin trays (80g)'],
    certifications: ['IGP Felino Consortium', '100% Italian Pork', 'Gluten Free'],
    details: 'Crafted according to the historic centuries-old recipe of the Baganza valley. Ground with specialized coarse knives and stuffed only in natural casings to guarantee slow, even drying.',
    pairingNote: 'Essential for traditional antipasto misto paired with fresh figs, walnuts, and sparkling Malvasia.'
  },
  {
    id: 'culatello-con-cotenna',
    category: 'traditional',
    title: 'Culatello con Cotenna & Culatta',
    subtitle: 'King of Busseto Cured Charcuterie',
    description: 'The prized core muscle of the pork leg, cured with its natural rind to protect the meat\'s moisture through 14+ months of misty Po Valley aging.',
    image: '/images/traditional_deli_meats_1793428037900.jpg',
    highlights: [
      'The most aristocratic cured meat of the Parma plains',
      'Aged in natural humidity cellars without forced cooling',
      'Unmatched sweet aroma with velvety melt-in-mouth fat',
      'Hand-trussed in pear shape using natural cord'
    ],
    formats: ['Whole piece on bone (5–6 kg)', 'Deboned block', 'Ultra-thin sliced trays (70g)'],
    certifications: ['Protected Supply Chain', 'Artisan Hand-Tied', 'Zero Allergens'],
    details: 'Originating from the damp lands along the Po river, where dense autumn fogs and hot summers create the precise environment needed to cure the tender inner core of the thigh.',
    pairingNote: 'Enjoy alone at room temperature with artisan breadsticks and lightly salted Alpine butter curls.'
  },
  {
    id: 'sliced-antipasto-misto',
    category: 'sliced',
    title: 'Gran Antipasto Misto Trays',
    subtitle: 'Cleanroom Folded Charcuterie Selection · MAP',
    description: 'A luxurious three-compartment tasting tray presenting Prosciutto di Parma DOP, Salame Milano, and sweet Coppa, pre-folded with airy "fetta mossa" technology.',
    image: '/images/sliced_deli_meats_1793428038740.jpg',
    highlights: [
      'Three iconic Italian cured specialties in one single tray',
      'Airy "fetta mossa" technology prevents slice clumping',
      'Modified Atmosphere Packaging (MAP) preserves fresh aroma',
      'Zero prep needed: ready to flip and serve on antipasti boards'
    ],
    formats: ['120g Tri-pack retail tray', '250g Party board platter', 'FSC Recyclable paper base'],
    certifications: ['BRC Grade AA', 'IFS Food', 'FSC Certified Paper', 'Cleanroom ISO Class 7'],
    details: 'Sliced within laminar-flow cleanrooms in Gazoldo degli Ippoliti. Temperature is strictly held at +2°C to prevent fat smear and preserve gossamer separation.',
    pairingNote: 'Instant appetizer solution for wine bars, dinner parties, and gourmet picnic spreads.'
  },
  {
    id: 'sliced-prosciutto-crudo',
    category: 'sliced',
    title: 'Pre-Sliced Prosciutto Crudo Dolce',
    subtitle: 'Eco-Friendly Paper Tray (-75% Plastic)',
    description: 'Gossamer-thin, velvety slices of sweet Italian dry-cured ham arranged in an innovative peelable paper tray that can be recycled in paper waste bins.',
    image: '/images/chef_plating_charcuterie_1793429017594.jpg',
    highlights: [
      'Reduced virgin plastic footprint by 75%',
      'Effortless peel-apart slices without tearing',
      'Mild, sweet taste profile crafted for everyday dining',
      'Extended shelf life with 100% sensory preservation'
    ],
    formats: ['80g Consumer pack', '100g Everyday family pack', 'Twin 2x70g fresh duo pack'],
    certifications: ['FSC Recyclable Paper', 'BRC Food Grade AA', 'Traceable Supply Chain'],
    details: 'Winner of sustainable packaging awards at Cibus. The tray combines certified sustainable virgin kraft paper with an ultra-thin barrier film that peels off in seconds.',
    pairingNote: 'Wrap around fresh sweet melon wedges, ripe black mission figs, or warm grissini.'
  },
  {
    id: 'sliced-arrosto-tacchino',
    category: 'sliced',
    title: 'Roasted Herb Turkey Breast',
    subtitle: 'Petto di Tacchino Arrosto con Erbe Mediterranee',
    description: 'Whole selected turkey breast, gently steam-baked with rosemary, sage, and thyme, then browned on the surface for a golden roasted crust.',
    image: '/images/food_quality_inspection_1793429017795.jpg',
    highlights: [
      'Over 98% lean poultry meat with low fat (<1.5%)',
      'Delicately seasoned with Italian aromatic herbs',
      'Gluten free, lactose free, no added glutamate',
      'Ideal for wellness diets, fitness nutrition and light dining'
    ],
    formats: ['100g Sliced retail tray', '3 kg Whole roasted deli log', 'Foodservice pre-sliced packs (500g)'],
    certifications: ['Clean Label', 'Low Sodium Options', 'Halal Available', 'BRC Grade AA'],
    details: 'Slowly cooked at low steam temperatures in our Busseto ovens to retain natural moisture and juiciness, followed by quick cleanroom chilling.',
    pairingNote: 'Outstanding in club sandwiches with avocado, heirloom tomatoes, and light lemon mayonnaise.'
  },
  {
    id: 'spanino-gourmet-panini',
    category: 'snacks',
    title: 'Spanino Gourmet Pocket Panini & Focaccine',
    subtitle: 'Artisan Street Food · Filled & Ready to Heat',
    description: 'Soft stone-baked Italian pocket rolls filled generously with prime charcuterie, artisan cheeses, and savory culinary spreads.',
    image: '/images/italian_snacks_panini_1793428039900.jpg',
    highlights: [
      'Stone-baked sourdough pocket bread with crunchy crust',
      'Premium fillings: Prosciutto & Mozzarella, Salame & Pecorino',
      'Ready in 3 minutes on contact grill or toaster oven',
      'No soggy bread: proprietary moisture-barrier technology'
    ],
    formats: ['130g Individually wrapped single pack', 'Dual-pack convenience pack', 'Chilled grab-and-go counter display'],
    certifications: ['Clean Label Bread', 'No Added Palm Oil', 'IFS Food Certified'],
    details: 'Conceived to revolutionize on-the-go lunches. Designed specifically for convenience stores, high-speed rail catering, airport kiosks, and modern cafe bars.',
    pairingNote: 'Heat for 180 seconds until the cheese melts and serve with a chilled Italian Chinotto or craft lager.'
  },
  {
    id: 'aperitivo-snack-kits',
    category: 'snacks',
    title: 'Aperitivo Snack Kits (Taralli, Salami & Parmigiano)',
    subtitle: 'Grab & Go Aperitivo All\'Italiana',
    description: 'Dual and triple compartment snack cups pairing bite-sized dry-cured salami sticks with extra-virgin olive oil Taralli Pugliesi and Parmigiano chunks.',
    image: '/images/hero_charcuterie_1793428038233.jpg',
    highlights: [
      'Complete authentic Italian aperitivo in a portable cup',
      'High natural protein: 12g+ protein per serving',
      'Artisanal hand-twisted Taralli made with olive oil',
      'Shelf-stable and chilled formats available'
    ],
    formats: ['60g Dual snack pack', '85g Party trio cup', 'Multipack (3x60g) box'],
    certifications: ['High Protein', 'No Artificial Colorants', 'DOP Parmigiano Included'],
    details: 'A runaway success across European transport hubs and supermarkets. Perfectly portioned for quick energy boosts during travel or after-work aperitivi.',
    pairingNote: 'The ultimate companion for an Aperol Spritz, classic Negroni, or sparkling Prosecco DOC.'
  },
  {
    id: 'pancetta-arrotolata-tesa',
    category: 'bacon',
    title: 'Italian Pancetta Arrotolata & Cured Cubetti',
    subtitle: 'Pancetta Dolce & Affumicata · Beechwood Smoke',
    description: 'Slow-cured Italian pork bellies, rolled tightly with crushed peppercorns and aromatic bay leaves, or diced into uniform cubetti for culinary perfection.',
    image: '/images/glazed_crisp_bacon_1793428040147.jpg',
    highlights: [
      'Traditional rolled (Arrotolata) and flat cured (Tesa) styles',
      'Diced cubetti cut into precise 6x6mm culinary cubes',
      'Natural cold smoking over debarked beechwood logs',
      'Balanced sweet fat and savory lean meat marbling'
    ],
    formats: ['2x100g Twin retail cubetti packs', '4 kg Whole rolled deli log', '1 kg Foodservice vacuum block'],
    certifications: ['BRC Food', 'IFS Quality', '100% Italian Pork Chain'],
    details: 'Seasoned by hand with coarse Cervia sea salt and mountain herbs. Cured for at least 60 days in temperature-controlled curing chambers in Busseto.',
    pairingNote: 'Essential foundation for genuine Carbonara, Amatriciana, or wrapped around grilled asparagus spears.'
  },
  {
    id: 'crisp-breakfast-bacon',
    category: 'bacon',
    title: 'Beechwood Smoked Streaky Bacon & Guanciale',
    subtitle: 'Culinary Cuts for International Gastronomy & Breakfast',
    description: 'Uniform, lean-streaked rashers of smoked bacon and cured seasoned pork jowl (Guanciale), trimmed to exact restaurant specifications for maximum crispness.',
    image: '/images/modern_production_plant_1793428040629.jpg',
    highlights: [
      'Cured with authentic Italian sea salt and whole herbs',
      'Even crisp-rendering without excess curling or water loss',
      'Available in mild sweet or beechwood smoked profiles',
      'Authentic cured Guanciale for traditional Roman pasta'
    ],
    formats: ['250g Retail rasher pack', '500g Interleaved foodservice shingle pack', '2 kg Food prep bulk block'],
    certifications: ['USDA Approved', 'BRC Food Safety', 'IFS Food Higher Level'],
    details: 'Produced on high-throughput continuous lines at Gazoldo. Precision optical slicing guarantees consistent thickness and slice-count per pack for hotel and restaurant chains.',
    pairingNote: 'Sizzle in a hot skillet for breakfast buffets, artisan smash burgers, or render slowly for pasta.'
  }
];

// Recipes & Culinary Inspiration - 9 Authentic Italian Gastronomy Recipes
export const RECIPES_DATA: RecipeItem[] = [
  {
    id: 'parma-focaccia-panino',
    title: 'Rosemary Focaccia with Prosciutto di Parma & Stracciatella',
    category: 'Gourmet Panini',
    prepTime: '15 mins',
    difficulty: 'Easy',
    description: 'Crispy warm rosemary focaccia filled with 24-month aged Prosciutto di Parma, creamy Pugliese stracciatella, fresh arugula, and green Castelvetrano olives.',
    ingredients: [
      '1 fresh artisanal rosemary focaccia',
      '100g Italia Alimentari Prosciutto di Parma DOP (thinly sliced)',
      '80g fresh stracciatella or burrata',
      'A handful of wild rocket arugula',
      '1 tbsp extra virgin olive oil',
      'A pinch of sea salt flakes'
    ],
    instructions: [
      'Slice the rosemary focaccia horizontally and warm lightly on a cast iron pan.',
      'Drizzle extra virgin olive oil on the base and arrange the wild arugula.',
      'Spoon generous dollops of cool stracciatella cheese over the leaves.',
      'Fold the gossamer slices of Prosciutto di Parma loosely to create airy volume.',
      'Top with sea salt flakes, close the focaccia, and serve immediately.'
    ],
    featuredProduct: 'Prosciutto di Parma DOP',
    image: '/images/italian_snacks_panini_1793428039900.jpg',
    pairingNote: 'Lambrusco di Sorbara DOC or dry Franciacorta Brut',
    servingTemp: 'Room temperature (18°–20°C) to allow prosciutto fat to release aroma',
    chefTip: 'Fold prosciutto loosely like a delicate cloud; never press or compress the cold slices.',
    curingAge: '24-Month Natural Microclimate Aging in Busseto cellars',
    originRegion: 'Parma, Emilia-Romagna (DOP Certified)',
    nutritionalHighlights: ['100% Certified Italian Pork', 'Natural Sea Salt Cured', 'Rich in Essential Amino Acids', 'Gluten & Lactose Free']
  },
  {
    id: 'grand-aperitivo-platter',
    title: 'Grand Italian Charcuterie & Mortadella Platter',
    category: 'Aperitivo Boards',
    prepTime: '20 mins',
    difficulty: 'Easy',
    description: 'A lavish sharing spread showcasing Gran Ibis Mortadella rosettes, Salame Felino coins, aged Parmigiano Reggiano, marinated artichokes, and grissini.',
    ingredients: [
      '120g Mortadella Bologna IGP Gran Ibis',
      '100g Salame Felino IGP (sliced diagonally)',
      '80g Bresaola della Valtellina IGP',
      '150g Parmigiano Reggiano 24-Month DOP chunks',
      'Cerignola green olives & marinated baby artichokes',
      'Artisanal olive oil grissini & Taralli'
    ],
    instructions: [
      'Arrange folded Mortadella ribbons across the center of a chilled marble serving platter.',
      'Fan out slices of Salame Felino in overlapping half-moons around the rim.',
      'Place Bresaola slices next to the Mortadella, dressed with a squeeze of fresh lemon.',
      'Fill small porcelain ramekins with marinated olives and balsamic glaze.',
      'Scatter rustic chunks of Parmigiano Reggiano and fill gaps with crisp grissini.'
    ],
    featuredProduct: 'Mortadella Bologna IGP & Salame Felino',
    image: '/images/gourmet_recipe_spread_1793429018072.jpg',
    pairingNote: 'Prosecco Superiore di Valdobbiadene DOCG or Pignoletto Frizzante',
    servingTemp: 'Slightly chilled board (16°–18°C)',
    chefTip: 'Fan out mortadella into airy accordion folds rather than flat layers for a velvety mouthfeel.',
    curingAge: 'Slow steam cooking for Mortadella, 60-day cellar aging for Salame Felino',
    originRegion: 'Emilia-Romagna & Lombardy (IGP Certified)',
    nutritionalHighlights: ['Artisanal IGP Quality', 'Selected Noble Pork Thighs', 'Natural Spices & Garlic', 'No Added Polyphosphates']
  },
  {
    id: 'crisp-pancetta-carbonara',
    title: 'Authentic Roman Rigatoni with Crisp Cured Pancetta',
    category: 'Classic Regional Pasta',
    prepTime: '25 mins',
    difficulty: 'Medium',
    description: 'Traditional golden carbonara featuring slow-rendered crisp pancetta cubetti, rich egg yolk emulsion, Pecorino Romano DOP, and freshly toasted black pepper.',
    ingredients: [
      '400g Bronze-die Rigatoni or Spaghettoni',
      '150g Italia Alimentari Smoked or Sweet Pancetta Cubetti',
      '4 large organic egg yolks + 1 whole egg',
      '80g finely grated Pecorino Romano DOP',
      'Freshly cracked black peppercorns',
      'Coarse pasta cooking sea salt'
    ],
    instructions: [
      'Gently brown the pancetta cubes in a cold skillet over medium-low heat until golden and crispy. Reserve rendered fat.',
      'Whisk egg yolks, whole egg, Pecorino Romano and cracked black pepper into a thick cream.',
      'Boil rigatoni in salted water until al dente; transfer directly into the skillet with pancetta fat.',
      'Remove pan from direct heat, fold in egg-cheese mixture and a ladle of pasta water, tossing vigorously into a velvety glaze.',
      'Serve in warmed bowls garnished with the crispy pancetta bits and extra Pecorino.'
    ],
    featuredProduct: 'Pancetta Affumicata & Cubetti',
    image: '/images/sizzling_guanciale_skillet.jpg',
    pairingNote: 'Frascati Superiore DOCG or structured Cesanese del Piglio',
    servingTemp: 'Piping hot (freshly tossed off-heat at 75°C)',
    chefTip: 'Render the pancetta in a dry, cold pan over low flame so fat clarifies without burning.',
    curingAge: 'Slow beechwood smoked & marine sea salt cured',
    originRegion: 'Lazio & Lombardy Traditions',
    nutritionalHighlights: ['Slow-Cured Belly Cuts', 'Natural Smoked Beechwood Aroma', 'High Protein Density', 'Zero Artificial Dyes']
  },
  {
    id: 'bresaola-carpaccio-truffle',
    title: 'Alpine Bresaola Carpaccio with Shaved Parmigiano & Truffle',
    category: 'Antipasti & Crudi',
    prepTime: '10 mins',
    difficulty: 'Easy',
    description: 'Silky slices of Montagna Bresaola della Valtellina IGP drizzled with white truffle oil, Sorrento lemon juice, wild arugula, and aged cheese curls.',
    ingredients: [
      '120g Montagna Bresaola della Valtellina IGP (paper-thin slices)',
      '60g baby wild arugula',
      '50g Parmigiano Reggiano 30-Month DOP (shaved)',
      '2 tbsp cold-pressed extra virgin olive oil',
      'Few drops of white truffle oil',
      'Half fresh lemon & pink peppercorns'
    ],
    instructions: [
      'Lay the ruby-red Bresaola slices in a circular rose pattern on large chilled ceramic plates.',
      'Toss wild arugula in extra virgin olive oil and arrange in the center mound.',
      'Use a vegetable peeler to shave generous sheets of Parmigiano over the top.',
      'Drizzle with white truffle oil, lemon juice, and crush whole pink peppercorns over the dish.',
      'Serve chilled with warm artisan carasau flatbread.'
    ],
    featuredProduct: 'Bresaola della Valtellina IGP',
    image: '/images/bresaola_carpaccio_gourmet.jpg',
    pairingNote: 'Valtellina Superiore DOCG or crisp Trentino Pinot Grigio',
    servingTemp: 'Chilled (12°–14°C)',
    chefTip: 'Drizzle truffle oil and lemon at the very last moment to avoid discoloring the tender beef fibers.',
    curingAge: 'Natural alpine breeze dried for 90 days in Valtellina',
    originRegion: 'Valtellina, Lombardy (IGP Certified)',
    nutritionalHighlights: ['97% Fat-Free Lean Beef', 'High Bioavailable Iron & Minerals', 'Zero Added Sugars', 'DOP Certified Cheese Pairing']
  },
  {
    id: 'gourmet-spanino-turkey',
    title: 'Warm Spanino with Herb Roasted Turkey, Fontina & Dijon',
    category: 'Gourmet Panini',
    prepTime: '8 mins',
    difficulty: 'Easy',
    description: 'Crispy pressed stone-baked Spanino roll overflowing with warm herb-roasted turkey breast, melted Valle d\'Aosta Fontina, baby spinach, and grain mustard.',
    ingredients: [
      '2 Italia Alimentari Spanino stone-baked pocket rolls',
      '120g Roasted Herb Turkey Breast (Petto di Tacchino)',
      '80g Italian Fontina DOP or Provolone Dolce (sliced)',
      '1 tbsp whole-grain Dijon mustard',
      'Fresh baby spinach leaves',
      'Salted Italian butter'
    ],
    instructions: [
      'Slice the pocket bread open and coat the interior with grain mustard.',
      'Layer generous folds of roasted turkey breast with Fontina cheese slices and baby spinach.',
      'Brush the crust lightly with melted butter.',
      'Press in a hot panini grill or sandwich maker at 200°C for 3 to 4 minutes until cheese is bubbling.',
      'Cut diagonally and serve piping hot with chips or fresh salad.'
    ],
    featuredProduct: 'Spanino & Roasted Turkey Breast',
    image: '/images/italian_snacks_panini_1793428039900.jpg'
  },
  {
    id: 'pinsa-mortadella-pistachio',
    category: 'Artisan Pizza & Pinsa',
    title: 'Pinsa Romana with Mortadella Bologna, Burrata & Bronte Pistachio',
    prepTime: '20 mins',
    difficulty: 'Medium',
    description: 'Airy, crispy sourdough Pinsa topped with creamy fior di latte, draped with gossamer folds of Gran Ibis Mortadella, tear-apart burrata and toasted pistachios.',
    ingredients: [
      '1 artisanal par-baked Pinsa Romana base',
      '120g Mortadella Bologna IGP Gran Ibis (thinly sliced)',
      '150g fresh Pugliese Burrata cheese',
      '100g Fior di Latte mozzarella',
      '30g roasted Bronte pistachios (roughly crushed)',
      'Fresh basil leaves & extra virgin olive oil'
    ],
    instructions: [
      'Preheat oven to 250°C. Top the Pinsa base with torn Fior di Latte mozzarella.',
      'Bake for 6–8 minutes on a pizza stone until crust is deeply golden and blistered.',
      'Remove from oven; immediately drape velvety ribbons of Mortadella over the hot base.',
      'Tear the Burrata open in the center, letting its rich cream spill onto the Mortadella.',
      'Scatter crushed Bronte pistachios and fresh basil; finish with olive oil and serve.'
    ],
    featuredProduct: 'Mortadella Bologna IGP Gran Ibis',
    image: '/images/pinsa_mortadella_pistachio.jpg'
  },
  {
    id: 'piadina-romagnola-crudo',
    category: 'Gourmet Panini',
    title: 'Traditional Piadina Romagnola with Prosciutto & Squacquerone',
    prepTime: '12 mins',
    difficulty: 'Easy',
    description: 'Warm artisan Romagnola flatbread blistering from the griddle, stuffed with sweet aged Prosciutto Crudo, creamy Squacquerone DOP, and fresh peppery rocket.',
    ingredients: [
      '2 fresh Piadina Romagnola IGP flatbreads',
      '100g Pre-Sliced Prosciutto Crudo Dolce',
      '120g Squacquerone di Romagna DOP cheese',
      'A generous bunch of wild rocket',
      'Cracked black pepper'
    ],
    instructions: [
      'Warm the piadina on a dry cast iron skillet for 1 minute on each side until bubbles brown.',
      'Spread creamy Squacquerone cheese over one half of the warm disc.',
      'Drape folds of sweet Prosciutto Crudo over the melting cheese.',
      'Top with wild rocket, grind fresh pepper, fold the piadina in half into a crescent.',
      'Serve immediately while warm and crispy.'
    ],
    featuredProduct: 'Pre-Sliced Prosciutto Crudo Dolce',
    image: '/images/sliced_deli_meats_1793428038740.jpg'
  },
  {
    id: 'spaghetti-guanciale-amatriciana',
    category: 'Classic Regional Pasta',
    title: 'Bucatini all\'Amatriciana with Cured Guanciale & Pecorino',
    prepTime: '25 mins',
    difficulty: 'Medium',
    description: 'The monumental Roman classic: slowly crisped Italian cured pork belly strips in a rich sauce of peeled San Marzano tomatoes, white wine, and sharp Pecorino Romano.',
    ingredients: [
      '400g bronze-cut Bucatini',
      '150g Italia Alimentari Cured Pancetta or Guanciale strips',
      '400g canned San Marzano whole peeled tomatoes (crushed by hand)',
      '50ml dry white wine',
      '1 small dried red chili pepper',
      '80g freshly grated Pecorino Romano DOP'
    ],
    instructions: [
      'Sauté the guanciale/pancetta in a pan with the chili over medium heat until golden and translucent. Deglaze with white wine.',
      'Remove pork strips and keep crispy. Add hand-crushed tomatoes to the pork fat and simmer for 15 minutes.',
      'Boil bucatini in lightly salted water until al dente.',
      'Return the crispy meat to the sauce, toss pasta into the skillet, and remove from heat.',
      'Stir in abundant Pecorino Romano and serve immediately in warmed bowls.'
    ],
    featuredProduct: 'Pancetta Affumicata & Guanciale',
    image: '/images/glazed_crisp_bacon_1793428040147.jpg'
  },
  {
    id: 'salame-felino-fig-crostini',
    category: 'Antipasti & Crudi',
    title: 'Salame Felino & Caramelized Fig Crostini with Aceto Balsamico',
    prepTime: '15 mins',
    difficulty: 'Easy',
    description: 'Rustic sourdough crostini brushed with garlic oil, layered with sweet creamy goat ricotta, coin slices of Salame Felino IGP, ripe black figs, and aged balsamico glaze.',
    ingredients: [
      '1 artisanal rustic baguette or sourdough loaf (sliced into crostini)',
      '100g Salame Felino IGP (sliced diagonally into coins)',
      '150g fresh sheep or goat milk ricotta',
      '4 ripe fresh black mission figs (sliced)',
      '2 tbsp Modena Aceto Balsamico Tradizionale IGP glaze',
      'Fresh thyme sprigs & honey'
    ],
    instructions: [
      'Toast sourdough slices on a grill until crisp and golden.',
      'Whip ricotta with a drizzle of honey, pinch of salt, and black pepper until fluffy.',
      'Spread a generous layer of whipped ricotta across each warm crostino.',
      'Arrange folded coins of Salame Felino IGP and fresh fig quarters on top.',
      'Drizzle with aged Aceto Balsamico and garnish with fresh thyme leaves.'
    ],
    featuredProduct: 'Salame Felino IGP',
    image: '/images/gourmet_recipe_spread_1793429018072.jpg'
  }
];

// Solutions Data (Large Retail, Food Service, Industry)
export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'large-retail',
    title: 'Large Retail (GDO)',
    tagline: 'High-Volume Precision & Private Label Excellence',
    description: 'Comprehensive cold cut categories and snack assortments for national and international supermarket chains, hypermarkets, and discounters.',
    features: [
      'Full private label brand management and co-packing',
      'Turnkey branded ranges (Ibis, Corte Buona, Montana)',
      'Innovative eco-sustainable paper bottom trays (-75% plastic)',
      'Guaranteed high shelf-life and robust cold chain integrity'
    ],
    icon: 'Store',
    badge: 'Supermarkets & Hypermarkets',
    image: '/images/sliced_deli_meats_1793428038740.jpg'
  },
  {
    id: 'food-service',
    title: 'Food Service (Ho.Re.Ca.)',
    tagline: 'Culinary Formats for Chefs & Hospitality',
    description: 'Specialized packaging, custom cuts, and consistent slice counts engineered for hotels, restaurants, sandwich bars, pizzerias and catering operators.',
    features: [
      'Pre-sliced interleaved trays for zero food waste and fast plating',
      'Bulk deli logs shaped for standard automatic slicers',
      'Cost-controlled portioning for restaurant chains and franchises',
      'Premium regional DOP items for gastronomic tasting menus'
    ],
    icon: 'UtensilsCrossed',
    badge: 'Hotels, Restaurants, Catering',
    image: '/images/chef_plating_charcuterie_1793429017594.jpg'
  },
  {
    id: 'industry',
    title: 'Industrial Partners (B2B)',
    tagline: 'Customized Meat Ingredients for Food Manufacturing',
    description: 'Bespoke semi-finished cured meat components, customized dicing, IQF portions, and formulations for ready meal and pizza manufacturers.',
    features: [
      'Precise cubing and stripping dimensions (from 4mm to 12mm)',
      'Individually Quick Frozen (IQF) or modified atmosphere chilled',
      'Rigorous microbiological and allergen safety guarantees',
      'High-throughput dedicated production lines for continuous supply'
    ],
    icon: 'Factory',
    badge: 'Food Processing & Co-Manufacturing',
    image: '/images/modern_production_plant_1793428040629.jpg'
  }
];

// Brand Portfolio - 8 Authentic Proprietary Brands
export const BRANDS_DATA: BrandItem[] = [
  {
    id: 'ibis-1962',
    name: 'IBIS 1962',
    tagline: 'The Master of Italian Mortadella & Culatello',
    founded: '1962 · Busseto (Parma)',
    description: 'A historic pillar of Italian charcuterie, celebrated worldwide for the legendary "Gran Ibis" Mortadella and exquisite Culatello di Zibello.',
    specialty: 'Mortadella Gran Ibis, Culatello con Cotenna, Salame Felino IGP',
    iconName: 'Crown',
    heritage: 'Over 60 years of artisan passion in the lands of Giuseppe Verdi.',
    productsList: ['Gran Ibis Mortadella', 'Culatello con Cotenna', 'Salame Felino IGP', 'Strolghino di Culatello']
  },
  {
    id: 'corte-buona',
    name: 'CORTE BUONA',
    tagline: 'Everyday Italian Delicacies for the Family',
    founded: 'Lombardy & Emilia Heritage',
    description: 'Honest, flavorful Italian charcuterie crafted for everyday enjoyment. Renowned for pre-sliced trays, cured hams and traditional salamis.',
    specialty: 'Pre-sliced charcuterie trays, Cured Prosciutto, Salami Milanese',
    iconName: 'Award',
    heritage: 'Tradition accessible to families in over 40 countries.',
    productsList: ['Prosciutto Crudo Trays', 'Salame Milano & Ungherese', 'Tacchino Arrosto', 'Pancetta Arrotolata']
  },
  {
    id: 'montagna',
    name: 'MONTAGNA VALTELLINA',
    tagline: 'Alpine Breeze Curing & IGP Bresaola Master',
    founded: 'Postalesio (Sondrio) · Alps',
    description: 'Master of air-cured alpine charcuterie nestled in the Valtellina valley. World-renowned for certified Bresaola della Valtellina IGP Punta d\'Anca.',
    specialty: 'Bresaola della Valtellina IGP, Carpaccio di Manzo, Alpine Cured Cuts',
    iconName: 'ShieldCheck',
    heritage: 'High-altitude microclimate curing under dry Alpine valley breezes.',
    productsList: ['Bresaola Punta d’Anca IGP', 'Bresaola Sottofesa', 'Carpaccio Tartare Trays', 'Alpine Bresaola Strips']
  },
  {
    id: 'spanino',
    name: 'SPANINO',
    tagline: 'Gourmet Italian Pocket Panini & Street Food',
    founded: 'Ready-to-Eat Innovation Hub',
    description: 'Fresh, innovative filled snacks and artisan pocket panini crafted with stone-baked sourdough bread and premium Italia Alimentari charcuterie.',
    specialty: 'Filled gourmet pocket panini, focaccine, and quick lunch solutions',
    iconName: 'HeartHandshake',
    heritage: 'Reinventing authentic Italian street food for contemporary lifestyles on the move.',
    productsList: ['Spanino Prosciutto & Mozzarella', 'Spanino Tacchino & Fontina', 'Focaccina Salame', 'Mini Pocket Aperitivo']
  },
  {
    id: 'vitale-deli',
    name: 'VITALE DELI MEATS',
    tagline: 'Export Heritage for Global Gastronomy',
    founded: 'International Export Branch',
    description: 'Premium international label supplying five-star hotels, luxury cruise liners, and gourmet delis across the Americas, Middle East, and Asia-Pacific.',
    specialty: 'Pre-sliced foodservice shingles, whole charcuterie logs, Halal certified deli',
    iconName: 'Crown',
    heritage: 'Carrying certified Italian taste standards to culinary leaders in 50+ countries.',
    productsList: ['Vitale Prosciutto di Parma', 'Vitale Cooked Deli Ham', 'Vitale Halal Beef Charcuterie', 'Gastronomic Antipasto Platter']
  },
  {
    id: 'corte-buona-usa',
    name: 'CORTE BUONA USA',
    tagline: 'Authentic Italian Charcuterie for North America',
    founded: 'New York & USA Distribution',
    description: 'Tailored specifically for American epicurean grocers, club stores, and restaurant chains, meeting strict USDA-FSIS standards with genuine Italian origin.',
    specialty: 'Retail blister trays, party platters, uncured bacon, charcuterie assortments',
    iconName: 'Award',
    heritage: 'Bridging Emilian tradition directly to American family dining tables.',
    productsList: ['Italian Prosciutto 3oz Tray', 'Charcuterie Trio Tasting Board', 'Sweet Pancetta Cubes', 'Rosemary Ham']
  },
  {
    id: 'cuor-di-terra',
    name: 'CUOR DI TERRA',
    tagline: 'Authentic Regional Terroir & Craft Recipes',
    founded: 'Regional Curing Traditions',
    description: 'Dedicated to regional Italian gastronomic biodiversity, working directly with local agricultural partners and time-honored artisanal recipes.',
    specialty: 'Artisanal regional salamis, Speck Alto Adige style, Pancetta tesa',
    iconName: 'HeartHandshake',
    heritage: 'Celebrating the cultural biodiversity of Italian regional charcuterie.',
    productsList: ['Salame Cacciatore DOP', 'Speck Tradizionale', 'Pancetta Tesa al Pepe', 'Coppa di Parma']
  },
  {
    id: 'shop-ibis',
    name: 'SHOP IBIS SALUMI',
    tagline: 'Direct-to-Consumer Gastronomy & Boutique Gifting',
    founded: 'Busseto Gastronomy Boutique',
    description: 'Our premier online and boutique retail destination offering whole reserve cured hams, rare vintages, festive gift hampers, and chef collections directly to charcuterie lovers.',
    specialty: 'Limited edition reserve hams, whole Culatello, gourmet gift boxes',
    iconName: 'Crown',
    heritage: 'Direct access to the inner aging cellars of Busseto for gastronomy aficionados.',
    productsList: ['Reserve Culatello di Zibello 24M', 'Gran Ibis Trophy Pack', 'Verdi Heritage Gift Box', 'Antica Bottega Tasting Selection']
  }
];

// Production Facilities & International Network
export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: 'busseto',
    name: 'Busseto Production Hub (Parma)',
    type: 'production',
    location: 'Busseto (Parma), Emilia-Romagna',
    coordinates: { x: 48.5, y: 39.8 },
    specialization: 'Prosciutto di Parma DOP, Culatello di Zibello, Mortadella, Traditional Salumi aging cellars',
    certifications: ['BRC Grade AA', 'IFS Food Higher Level', 'DOP Parma Consortium', 'USDA Approved'],
    description: 'Historic curing center in the Italian Food Valley. Specialized in natural cellar ventilation, slow wood smoking, and traditional cooked hams.',
    surfaceArea: '35,000 sqm',
    capacity: '1,200,000 hams cured annually'
  },
  {
    id: 'gazoldo',
    name: 'Gazoldo degli Ippoliti Headquarters (Mantova)',
    type: 'production',
    location: 'Gazoldo degli Ippoliti (Mantova), Lombardy',
    coordinates: { x: 49.2, y: 38.6 },
    specialization: 'Corporate Headquarters, High-Tech Cleanroom Slicing, MAP Packaging & Snacks Unit',
    certifications: ['BRC Grade AA', 'IFS Food', 'ISO 9001', 'ISO 14001', 'FSC Certified'],
    description: 'Ultra-modern complex housing executive offices, cleanroom slicing facilities with laminar airflow, advanced R&D labs, and automated logistics.',
    surfaceArea: '52,000 sqm',
    capacity: '100+ Million pre-sliced trays annually'
  },
  {
    id: 'postalesio',
    name: 'Postalesio Facility (Sondrio)',
    type: 'production',
    location: 'Postalesio (Sondrio), Valtellina, Lombardy',
    coordinates: { x: 47.8, y: 36.2 },
    specialization: 'Bresaola della Valtellina IGP & Alpine Air Curing',
    certifications: ['IGP Bresaola Consortium', 'IFS Food', 'BRC Food'],
    description: 'Situated along the Rhaetian Alps, benefiting from dry mountain breezes and controlled humidity for curing genuine beef Bresaola IGP.',
    surfaceArea: '18,000 sqm',
    capacity: '500,000 kg Bresaola IGP annually'
  },
  {
    id: 'paris-office',
    name: 'Italia Alimentari France',
    type: 'commercial',
    location: 'Paris, France',
    coordinates: { x: 43.5, y: 34.2 },
    specialization: 'Commercial Branch, Western Europe Retail & Ho.Re.Ca. Distribution',
    description: 'Strategic sales subsidiary serving French and Benelux retail chains and gastronomic distributors.',
    surfaceArea: 'Regional Hub',
    capacity: 'Dedicated cold chain network'
  },
  {
    id: 'frankfurt-office',
    name: 'Italia Alimentari DACH',
    type: 'commercial',
    location: 'Frankfurt, Germany',
    coordinates: { x: 46.2, y: 31.8 },
    specialization: 'Central European Distribution, German & Austrian Retail Partners',
    description: 'Direct distribution liaison managing key retail accounts and cold chain logistics across Germany and Austria.',
    surfaceArea: 'Regional Hub',
    capacity: 'Daily express cold dispatch'
  },
  {
    id: 'americas-hub',
    name: 'Italia Alimentari Americas',
    type: 'commercial',
    location: 'New York, USA',
    coordinates: { x: 26.5, y: 37.0 },
    specialization: 'North American Import, USDA Licensed Distribution & Gourmet Retail',
    description: 'Dedicated bridge delivering authentic Italian DOP charcuterie to specialty grocers and food service in North and South America.',
    surfaceArea: 'Americas Hub',
    capacity: 'Weekly air & maritime refrigerated containers'
  },
  {
    id: 'asia-hub',
    name: 'Italia Alimentari Asia-Pacific',
    type: 'commercial',
    location: 'Tokyo & Singapore',
    coordinates: { x: 79.5, y: 44.5 },
    specialization: 'Export Partnerships, Luxury Hospitality & Supermarket Distribution',
    description: 'Fast-growing export representation across Japan, South Korea, Singapore, and Australia.',
    surfaceArea: 'APAC Hub',
    capacity: 'Ultra-low temperature cold routes'
  }
];

// Press & Company Updates - 8 Official Releases & Industry News
export const NEWS_DATA: NewsItem[] = [
  {
    id: 'cibus-eco-packaging',
    title: 'Italia Alimentari at Cibus: Launching the Eco-Tray Charcuterie Line',
    category: 'Innovation & Packaging',
    date: 'October 2026',
    readTime: '3 min read',
    summary: 'A revolutionary paper-bottom MAP tray that reduces plastic usage by 75% while maintaining product shelf life and peak freshness.',
    content: 'Presented during the international Cibus exhibition in Parma, our engineering team revealed the latest generation of recyclable paper trays. Developed in partnership with certified sustainable forestry partners, the new tray features an easily separable film layer, allowing European consumers to recycle the paper component directly in household paper streams.',
    image: '/images/sliced_deli_meats_1793428038740.jpg'
  },
  {
    id: 'gran-ibis-heritage',
    title: 'The Heritage of Mortadella Bologna IGP: 60 Years of Ibis Mastery',
    category: 'Brand Heritage',
    date: 'August 2026',
    readTime: '4 min read',
    summary: 'Reflecting on over six decades of slow brick-oven baking and hand-selected seasonings that make Gran Ibis a true gastronomic legend.',
    content: 'Since 1962 in Busseto, Ibis has upheld the sacred discipline of authentic Mortadella. Using exclusively selected lean pork shoulder, prized lardons from the throat, and slow steaming in traditional dry air stoves, Gran Ibis continues to lead sensory evaluations across Europe.',
    image: '/images/traditional_deli_meats_1793428037900.jpg'
  },
  {
    id: 'cold-chain-quality-expansion',
    title: 'Expanding Our Precision Cold Chain Footprint Across 50+ Nations',
    category: 'Corporate Logistics',
    date: 'June 2026',
    readTime: '4 min read',
    summary: 'Direct cold chain integration guarantees that pre-sliced Prosciutto and Bresaola reach international gourmet counters with zero flavor oxidation.',
    content: 'As demand for certified Italian cured delicacies accelerates globally, Italia Alimentari has deepened its partnership network across the Pacific and Atlantic basins, ensuring that Prosciutto di Parma DOP reaches international tables with unaltered aroma.',
    image: '/images/modern_production_plant_1793428040629.jpg'
  },
  {
    id: 'anuga-cologne-showcase',
    title: 'Showcasing Cleanroom Sliced Innovation at Anuga Cologne',
    category: 'International Trade Fairs',
    date: 'May 2026',
    readTime: '3 min read',
    summary: 'Italia Alimentari welcomes commercial buyers and retail category managers to the Italian Pavilion at Anuga, exhibiting ultra-thin folded slice technology.',
    content: 'At the world\'s largest food and beverage trade fair in Cologne, Italia Alimentari presented its comprehensive B2B co-packing and private label portfolio. Buyers from over 35 countries toured interactive tasting sessions featuring our "fetta mossa" folded slice technology and eco-sustainable paper blister packs.',
    image: '/images/hero_charcuterie_1793428038233.jpg'
  },
  {
    id: 'bresaola-mountain-award',
    title: 'Montagna Valtellina Wins Gold for Alpine Air Curing Excellence',
    category: 'Awards & Recognition',
    date: 'April 2026',
    readTime: '2 min read',
    summary: 'The Italian Charcuterie Guild honors Montagna Punta d\'Anca with top honors for tenderness, ruby clarity, and authentic mountain seasoning.',
    content: 'During the annual Italian Gastronomic Guild judging, Montagna Bresaola della Valtellina IGP was awarded the prestigious Gold Medal for Sensory Purity. Master judges praised the subtle balance of wild mountain juniper, Alpine thyme, and slow cellar drying that yields its velvety, melt-in-the-mouth texture.',
    image: '/images/artisan_curing_cellar_1793429018781.jpg'
  },
  {
    id: 'fsc-certified-paper-milestone',
    title: '100% Recyclable FSC Paper Packaging Milestone Reached Ahead of Schedule',
    category: 'Quality & Food Safety',
    date: 'March 2026',
    readTime: '4 min read',
    summary: 'Transitioning 40 million pre-sliced charcuterie packs to FSC certified recyclable virgin kraft paper, eliminating 280 tons of plastic annually.',
    content: 'Italia Alimentari announced the successful conversion of its primary retail sliced ranges to FSC certified virgin wood fiber trays. Combined with high-barrier mono-material top films, the initiative marks a critical leap toward our goal of full packaging circularity across the European retail footprint.',
    image: '/images/food_quality_inspection_1793429017795.jpg'
  },
  {
    id: 'usda-facility-expansion',
    title: 'Upgrading Gazoldo Cleanrooms for High-Throughput North American Export',
    category: 'Industrial Investment',
    date: 'February 2026',
    readTime: '3 min read',
    summary: 'A €15M investment adds four new ISO Class 7 laminar flow slicing suites certified to strict USDA-FSIS export guidelines.',
    content: 'To support rapid growth in the United States, Canada, and Mexico, our flagship Gazoldo degli Ippoliti headquarters completed a state-of-the-art cleanroom expansion. Equipped with automated robotic loading and real-time gas mass spectrometry, the new facility doubles daily throughput of pre-sliced Parma ham and antipasto boards.',
    image: '/images/modern_production_plant_1793428040629.jpg'
  },
  {
    id: 'gastronomy-masterclass-chef',
    title: 'Partnering with Italian Culinary Federation for B2B Chef Masterclasses',
    category: 'Culinary Masterclasses',
    date: 'January 2026',
    readTime: '3 min read',
    summary: 'Empowering executive chefs and pizzeria maestros with cutting-edge plating techniques, zero-waste portioning, and artisanal pairing protocols.',
    content: 'Italia Alimentari inaugurated a national educational initiative in collaboration with the Federazione Italiana Cuochi. Master Salumiere workshops demonstrate how culinary professionals can maximize profitability and sensory impact through temperature-tempered charcuterie plating and innovative warm Pinsa Romana pairings.',
    image: '/images/chef_plating_charcuterie_1793429017594.jpg'
  }
];

// Quality Standards & Certifications
export const QUALITY_STANDARDS = [
  {
    title: 'Strict Quality Control',
    description: 'Over 12,000 annual laboratory tests covering chemical, physical and microbiological parameters before release.'
  },
  {
    title: 'International Certifications',
    description: 'Certified to BRCGS Food Safety Grade AA, IFS Food Higher Level, ISO 9001 and ISO 14001.'
  },
  {
    title: 'Safe and Sustainable Processes',
    description: 'Full food traceability from partner farms to consumer shelves, backed by Cremonini Group vertical control.'
  },
  {
    title: 'Premium Raw Materials',
    description: '100% selected Italian pork cuts and certified DOP & IGP consortia origins with non-GMO feed.'
  }
];

// Sustainability Commitments (Focus on food manufacturing and eco packaging - NO landscapes)
export const SUSTAINABILITY_PILLARS = [
  {
    title: 'Eco-Packaging & Paper Trays',
    description: 'Introduction of recyclable paper-bottom trays resulting in a 75% reduction in virgin plastic usage across our sliced deli line.',
    metric: '-75% Plastic'
  },
  {
    title: 'Resource & Energy Efficiency',
    description: 'State-of-the-art rooftop photovoltaic installations and heat-recovery exchangers powering chilling loops at Gazoldo.',
    metric: '100% Green Energy'
  },
  {
    title: 'Animal Welfare & Quality Sourcing',
    description: 'All livestock suppliers adhere to strict ClassyFarm animal welfare standards and non-GMO agricultural feed protocols.',
    metric: 'Certified Supply'
  },
  {
    title: 'Circular Waste Valorization',
    description: 'Zero food waste philosophy in production: all high-purity trimmings are valorized in specialized culinary broths and biofuel.',
    metric: 'Zero Waste Aim'
  }
];
