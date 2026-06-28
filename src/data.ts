import { Project, Service } from './types';

export const BRAND_STORY = {
  title: "Kàmer, House of Design",
  subtitle: "Beyond Design",
  tagline: "Great spaces are born from genuine passion and realized through uncompromising craftsmanship.",
  history: "Great spaces are born from genuine passion and realized through uncompromising craftsmanship. Kàmer, House of Design is a full service design and build firm that brings architecture, interior design, and construction under one roof. Every project is approached through a unified process that carries a single vision from the first sketch to the final finish, ensuring every detail is executed to the highest standard. Guided by a dedication to quality, precision, and enduring design, Kàmer creates spaces where thoughtful ideas, skilled craftsmanship, and seamless execution come together to deliver timeless environments with lasting value.",
  philosophy: "Every commission begins as an intimate dialogue between context, materiality, and light. We believe that true luxury is not loud; it is felt in the silent alignment of grain, the soft path of twilight across raw plaster, and the weight of a custom brass pull. Our work celebrates structural authenticity and enduring craftsmanship.",
  stylePrinciples: [
    {
      title: "Functional Minimalism",
      description: "Reducing a space to its absolute essence to allow breathing room, focusing on structural purity and flow."
    },
    {
      title: "Material Honesty",
      description: "Expressing raw materials—textured concrete, highly figured walnut, unlacquered brass—in their authentic, tactile states."
    },
    {
      title: "Choreographed Light",
      description: "Treating light as our primary building material, sculpting openings to capture soft transitions of sun and shadow."
    },
    {
      title: "Bespoke Precision",
      description: "Ensuring every component of a space, from structural steel to the custom sofa stitch, is crafted with uncompromising detail."
    }
  ]
};

export const OWNER_PROFILE = {
  name: "RISA FIRNANDI",
  role: "Founding Principal & Creative Director",
  portrait: "/images/risa_firnandi_1782609009792.jpg",
  quote: "Design is not a decorative skin applied after the fact. It is a profound search for order, atmosphere, and human harmony. When we build, we build for generations.",
  bio: "With over two decades of international architectural and design practice, Risa Firnandi has defined a design language characterized by quiet elegance, rigorous geometric discipline, and sensory warmth. He established Kàmer, House of Design to bring architecture, interior design, and master-level construction under one roof. His projects have been featured in leading global design publications and have received prestigious accolades worldwide."
};

export const SERVICES_DATA: Service[] = [
  {
    id: "design",
    name: "Architectural & Interior Design",
    tagline: "The Poetry of Proportion and Light",
    description: "We orchestrate complete design schemes from spatial master planning to microscopic material pairings, ensuring cohesive narrative flow across every square millimeter.",
    image: "/images/hero_luxury_lounge_1782603846816.jpg",
    subServices: [
      {
        name: "Concept Design & Master Planning",
        description: "The conceptual foundation. We conduct rigorous contextual analysis, spatial relationship zoning, and atmospheric sketches to define the creative thesis of the project.",
        details: [
          "Contextual & site alignment analysis",
          "Initial spatial zoning & architectural volumes",
          "Atmospheric mood boards & textural palettes",
          "Cinematic schematic renders"
        ]
      },
      {
        name: "Schematic & Detailed Design",
        description: "Translating concepts into precise dimensional layouts, establishing structural parameters, and refining user circulation paths.",
        details: [
          "Precise dimensioned spatial plans",
          "Volumetric sections and facade designs",
          "Acoustic and thermal performance strategies",
          "Custom millwork joinery schematics"
        ]
      },
      {
        name: "Design Development",
        description: "Full integration of materials, engineering systems, and customized features to establish a robust, implementable design document.",
        details: [
          "Complete architectural specification documents",
          "3D parametric rendering & VR spatial walkthroughs",
          "Fine material selection & stone slab matching",
          "Bespoke hardware design integration"
        ]
      },
      {
        name: "Structural Design & Engineering Coordination",
        description: "Ensuring structural integrity matches design elegance. We engineer spaces that support gravity-defying cantilevers and floating glass structures.",
        details: [
          "Load-bearing calculations and system designs",
          "Slab and column optimization for open-plan layouts",
          "Advanced seismic and wind-resistant framing",
          "Seamless integration of steel and structural glazing"
        ]
      },
      {
        name: "Mechanical, Electrical & Lighting Design",
        description: "Concealing modern complex infrastructure within pristine surfaces to preserve the purity of architectural lines.",
        details: [
          "Invisible HVAC diffuser and return integration",
          "Circadian architectural lighting schemes and automation",
          "Integrated soundscape and high-fidelity acoustic layouts",
          "Smart-home automated electrical distribution"
        ]
      }
    ]
  },
  {
    id: "construction",
    name: "General Construction & Engineering",
    tagline: "Rigorous Precision, Flawless Execution",
    description: "We act as master builders, bridging the gap between digital vision and heavy raw materials. Our dedicated builders and structural engineers execute projects to sub-millimeter tolerances.",
    image: "/images/minimalist_villa_1782603863668.jpg",
    subServices: [
      {
        name: "Architectural Construction",
        description: "Erecting structural volumes with structural concrete, cantilevered glass, and heavy-gauge steel frameworks under rigorous oversight.",
        details: [
          "Site excavation and foundation stabilization",
          "Precision architectural off-form board-marked concrete pouring",
          "Heavy steel structural framing & timber framing",
          "Floor-to-ceiling minimal profile glass curtain wall installations"
        ]
      },
      {
        name: "Interior Construction & Finishes",
        description: "Deploying master masons, plasterers, and finishing crews to realize hyper-refined interior surfaces with seamless transitions.",
        details: [
          "Bookmatched marble cladding and stone joinery",
          "Multi-layered acoustic wall framing and custom Venetian plastering",
          "Screed-leveling and wide-plank hardwood floor installations",
          "Integrated recessed architectural detailing (shadow-line skirting)"
        ]
      },
      {
        name: "Mechanical & Electrical Installation",
        description: "Implementing state-of-the-art climate, ventilation, and lighting power grids with complete clean-room precision.",
        details: [
          "Zoned variable-refrigerant-flow (VRF) climate systems",
          "Low-voltage luxury lighting controls & main panel setups",
          "Concealed high-end security and AV cabling backbones",
          "Eco-conscious heat recovery ventilation (HRV) loops"
        ]
      }
    ]
  },
  {
    id: "furniture",
    name: "Bespoke Custom Furniture",
    tagline: "Artisanal Joinery for Enduring Character",
    description: "In our private wood and metallurgy atelier, we craft custom, high-end furniture designed specifically for each architectural context, matching timber grain and brass luster perfectly.",
    image: "/images/bespoke_credenza_1782603874686.jpg",
    subServices: [
      {
        name: "Custom Residential Furniture",
        description: "Crafting standalone furniture items that anchor a residence, designed to gracefully age and develop a unique hand-rubbed patina.",
        details: [
          "Solid dining tables using rare, air-seasoned single-slab walnut",
          "Low-slung solid oak bed frames with hand-stitched leather panels",
          "Sculptural natural stone coffee tables with custom brass bases",
          "Ergonomic, tailor-made lounge seating structures"
        ]
      },
      {
        name: "Built-in Architectural Millwork",
        description: "Seamless wood cabinetry and panels that melt directly into the walls, creating a clean monolithic architectural presence.",
        details: [
          "Floor-to-ceiling pocket-door wardrobes and hidden dressing rooms",
          "Floating wall-mounted media systems with integrated wire channels",
          "Custom entry doors with magnetic latches and pivot hinge mounts",
          "Fluted timber wall cladding matching ceiling grain perfectly"
        ]
      },
      {
        name: "Bespoke Kitchens & Baths",
        description: "Merging highly detailed functional workspaces with luxury craftsmanship, featuring hidden appliances, solid stone sinks, and touchless luxury metals.",
        details: [
          "Monolithic quartzite kitchen islands with integrated storage drawers",
          "Solid oak custom cabinets with invisible finger-pull grooves",
          "Solid stone vanity consoles with hand-chiseled raw edges",
          "Integrated LED mood lighting within custom wooden vanity drawers"
        ]
      }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "obsidian-pavilion",
    title: "The Obsidian Pavilion",
    category: "Interior Design",
    location: "Kyoto, Japan",
    year: "2025",
    services: ["Architectural Design", "General Construction", "Bespoke Joinery"],
    description: "A striking, low-slung residence that merges the quiet elegance of Japanese traditional timber frame engineering with modern, board-formed concrete and expansive structural glass sheets. Designed to frame the changing seasonal colors of the Kyoto mountainside, the pavilion features custom dark-stained cedar panels and custom floating ceiling profiles.",
    thumbnail: "/images/minimalist_villa_1782603863668.jpg",
    gallery: [
      "/images/minimalist_villa_1782603863668.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    clientQuote: {
      text: "Kàmer, House of Design did not just build a house; they structured a sanctuary of light. Every morning, the way the dawn hits the concrete living wall takes our breath away.",
      author: "Kenzo & Mariko Tanaka",
      role: "Private Collectorship Owners"
    },
    featured: true,
    architects: ["Azel Firnandi", "Koji Hashimoto"],
    squareFootage: "4,200 sq ft"
  },
  {
    id: "sovereign-credenza",
    title: "The Sovereign Credenza",
    category: "Furniture",
    location: "Copenhagen, Denmark",
    year: "2024",
    services: ["Bespoke Joinery", "Furniture Design", "Metal Crafting"],
    description: "A signature statement of artisanal furniture craft. This bespoke credenza features selected figured walnut boards with grain matched horizontally across all five sliding drawers. Supported by a custom cast-bronze pedestal frame, it incorporates hand-finished organic brass handles and integrated soft-close structural runner engineering.",
    thumbnail: "/images/bespoke_credenza_1782603874686.jpg",
    gallery: [
      "/images/bespoke_credenza_1782603874686.jpg",
      "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    clientQuote: {
      text: "This furniture piece is a true sculpture in our foyer. The wood feels soft to the touch, and the custom brass joinery is an absolute masterpiece.",
      author: "Hanne Lindqvist",
      role: "Architectural Collector"
    },
    featured: true,
    architects: ["Azel Firnandi", "Sven Sorensen"],
    squareFootage: "L: 240cm x H: 75cm"
  },
  {
    id: "zenith-penthouse",
    title: "The Zenith Penthouse",
    category: "Construction",
    location: "New York, USA",
    year: "2025",
    services: ["Interior Design", "General Construction", "Acoustic Engineering"],
    description: "A sprawling duplex penthouse floating high above the Manhattan skyline. Designed with massive monolithic blocks of Nero Marquina marble, wire-brushed cedar ceilings, and dynamic indirect warm LED arrays. Acoustic glass isolates urban hum, transforming this high-rise space into a deeply quiet, contemplative cloud-level retreat.",
    thumbnail: "/images/hero_luxury_lounge_1782603846816.jpg",
    gallery: [
      "/images/hero_luxury_lounge_1782603846816.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    clientQuote: {
      text: "The sheer scale of the marble fireplace is striking, yet the room feels incredibly warm, quiet, and intimately functional. Risa has a rare sense of scale.",
      author: "David & Sarah Stone",
      role: "Founders, Stone Equity Holdings"
    },
    featured: true,
    architects: ["Azel Firnandi", "Marcus Vance"],
    squareFootage: "5,800 sq ft"
  },
  {
    id: "timber-ridge-villa",
    title: "The Timber Ridge Retreat",
    category: "Interior Design",
    location: "Zurich, Switzerland",
    year: "2024",
    services: ["Architectural Design", "General Construction", "Bespoke Furniture"],
    description: "Nestled into a steep Alpine slope, this concrete and dark pine structure captures sweeping, unobstructed views of Lake Zurich. The home features structural cast board-marked walls, sustainable timber insulation, and minimalist luxury interiors with warm neutral linen accents.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "/images/minimalist_villa_1782603863668.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    clientQuote: {
      text: "Living here feels like floating in nature. The thermal comfort and physical detailing are completely extraordinary.",
      author: "Dr. Albert Weber",
      role: "Ecology Research Scientist"
    },
    featured: false,
    architects: ["Azel Firnandi", "Sven Glarus"],
    squareFootage: "3,900 sq ft"
  },
  {
    id: "marina-boutique",
    title: "The Marina Executive Lounge",
    category: "Construction",
    location: "Singapore",
    year: "2025",
    services: ["Interior Design", "Acoustic Engineering", "Bespoke Millwork"],
    description: "A private club catering to elite founders and business leaders in Singapore. Featuring floor-to-ceiling glass, custom curved brass pillars, soundproof pod spaces lined with warm camel leather, and bespoke stone meeting tables with integrated flush connectivity ports.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "/images/boutique_hotel_lounge_1782603900111.jpg",
      "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80"
    ],
    clientQuote: {
      text: "The acoustics in our meeting rooms are outstanding, and the spatial flow between networking areas and quiet desks is brilliantly planned.",
      author: "Sheryl Goh",
      role: "VP of Operations, Marina Executive Network"
    },
    featured: false,
    architects: ["Azel Firnandi", "Lin Wei"],
    squareFootage: "8,200 sq ft"
  },
  {
    id: "sculptural-walnut-table",
    title: "Sculptural Dining Monolith",
    category: "Furniture",
    location: "Kyoto, Japan",
    year: "2025",
    services: ["Furniture Design", "Bespoke Joinery", "Slab Curation"],
    description: "An extraordinary solid dining table sourced from a single, sustainably harvested 350-year-old Japanese walnut tree. The natural live-edge top is preserved in its raw textural form, while the supporting base consists of hand-forged bronze pillars that reflect light dynamically.",
    thumbnail: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
      "/images/bespoke_credenza_1782603874686.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    clientQuote: {
      text: "Every person who dines with us comments on this table. It's not just a surface; it's a living piece of history that anchors our home.",
      author: "Hiroshi Sato",
      role: "Arts & Cultural Patron"
    },
    featured: false,
    architects: ["Azel Firnandi", "Koji Hashimoto"],
    squareFootage: "L: 320cm x W: 110cm"
  }
];
