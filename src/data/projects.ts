export type Project = {
  title: string;
  slug: string;
  client: string;
  year: string;
  categories: string[];
  services: string[];
  shortDescription: string;
  overview: string;
  challenge: string;
  direction: string;
  deliverables: string[];
  outcome: string;
  coverImage: string;
  galleryImages: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Maison Originals",
    slug: "maison-originals",
    client: "Maison Originals",
    year: "2022–2025",
    categories: ["Social Media", "E-commerce", "Campaigns", "Web Design"],
    services: ["Campaign graphics", "Social media graphics", "E-commerce graphics", "Shopify/web design", "Product launch graphics"],
    shortDescription: "Campaign, e-commerce, and social visuals for a timeless workwear brand.",
    overview: "Maison Originals is a timeless workwear brand creating high-quality workwear, accessories, and lifestyle essentials for cultural and creative professionals. Thandolwethu worked with the brand as a part-time graphic designer, creating campaign graphics, e-commerce layouts, social media graphics, product launch visuals, and digital assets.",
    challenge: "Build consistent digital communication for a culture-led workwear label while keeping each product launch sharp, premium, and conversion-focused.",
    direction: "A restrained editorial system with monochrome foundations, modular product-led layouts, bold launch typography, and social assets that feel direct and elevated.",
    deliverables: ["Campaign graphics", "Product launch visuals", "Social media graphics", "E-commerce layouts", "Shopify/web assets", "Digital promotional assets"],
    outcome: "A flexible visual language for ongoing product storytelling across social channels, web moments, and campaign drops.",
    coverImage: "/images/projects/maison-originals/cover.jpg",
    galleryImages: ["/images/projects/maison-originals/01.jpg", "/images/projects/maison-originals/02.jpg", "/images/projects/maison-originals/03.jpg"],
    featured: true,
  },
  {
    title: "Safe Space Africa",
    slug: "safe-space-africa",
    client: "Safe Space Africa",
    year: "2023–2024",
    categories: ["Brand Identity", "Social Media", "Posters", "Web Design", "Product Photography"],
    services: ["Brand identity support", "Social media graphics", "Posters", "Flyers", "Website design", "Product/lifestyle photo editing"],
    shortDescription: "Brand identity support and digital assets for a youth-led social enterprise.",
    overview: "Safe Space Africa is a youth-led social enterprise enabling a digitally inclusive future for underserved youth in Africa. The brand manufactures laptop sleeves and laptop bags for students and young professionals, with 50% of profits contributing toward its social mission. Thandolwethu assisted with brand identity, digital assets, social media graphics, website design, and product/lifestyle image editing.",
    challenge: "Communicate a product offer and a social impact mission with clarity, warmth, and credibility for students and young professionals.",
    direction: "A clean digital-first identity system balancing product photography, confident messaging, accessible layouts, and repeatable social templates.",
    deliverables: ["Brand identity support", "Social posts", "Campaign posters", "Flyers", "Website layouts", "Product and lifestyle editing"],
    outcome: "A stronger digital presence that connects product utility with the brand's inclusion-focused mission.",
    coverImage: "/images/projects/safe-space-africa/cover.jpg",
    galleryImages: ["/images/projects/safe-space-africa/01.jpg", "/images/projects/safe-space-africa/02.jpg", "/images/projects/safe-space-africa/03.jpg"],
    featured: true,
  },
  {
    title: "XEDI",
    slug: "xedi",
    client: "XEDI (Pty) Ltd",
    year: "2025",
    categories: ["Web Design", "WordPress", "Digital Design"],
    services: ["Website design", "Digital layout", "Visual communication"],
    shortDescription: "WordPress website design for a streamlined medical practice-support platform.",
    overview: "XEDI is a streamlined practice-support platform that helps medical practitioners manage, submit, and track medical aid claims. Thandolwethu designed a WordPress website to communicate the company’s value proposition, services, and platform benefits to its target audience.",
    challenge: "Translate a claims-management offer into a website that feels reliable, understandable, and easy to navigate.",
    direction: "Structured content hierarchy, direct benefit-led copy zones, clear information blocks, and a professional interface-inspired visual rhythm.",
    deliverables: ["Website structure", "WordPress page design", "Digital layout system", "Service communication sections"],
    outcome: "A clear platform-facing website experience designed to help medical practitioners quickly understand the service value.",
    coverImage: "/images/projects/xedi/cover.jpg",
    galleryImages: ["/images/projects/xedi/01.jpg", "/images/projects/xedi/02.jpg"],
    featured: true,
  },
  {
    title: "Archive Central",
    slug: "archive-central",
    client: "Archive Central",
    year: "2025",
    categories: ["Brand Identity", "Social Media", "Templates", "Merchandise"],
    services: ["Brand strategy", "Brand guide", "Social media templates", "Banners", "Email signature", "Merchandise mockups"],
    shortDescription: "Identity system and client-facing materials for an archival media company.",
    overview: "Archive Central is an archival and media company focused on capturing and preserving cultural moments through video content and creative media. Thandolwethu helped develop the brand and visual identity across social media and client-facing materials, including brand strategy, a brand guide, social templates, banners, email signatures, and merchandise mockups.",
    challenge: "Create a visual system that could preserve cultural memory while remaining adaptable for digital channels and client presentations.",
    direction: "Archival structure, bold typography, grid-led templates, and minimal brand assets that frame video and media content as cultural documentation.",
    deliverables: ["Brand strategy", "Brand guide", "Social templates", "Banners", "Email signature", "Merchandise mockups"],
    outcome: "A cohesive identity toolkit that supports storytelling across internal, social, and client-facing touchpoints.",
    coverImage: "/images/projects/archive-central/cover.jpg",
    galleryImages: ["/images/projects/archive-central/01.jpg", "/images/projects/archive-central/02.jpg", "/images/projects/archive-central/03.jpg"],
    featured: true,
  },
  {
    title: "Other Projects",
    slug: "other-projects",
    client: "Freelance / Various",
    year: "2021–2025",
    categories: ["Posters", "Digital Graphics", "Illustration", "Campaigns"],
    services: ["Event posters", "Email banners", "T-shirt graphics", "Digital campaign assets"],
    shortDescription: "A mixed archive of posters, graphics, illustration, and campaign collateral.",
    overview: "A selection of freelance projects including event posters, virtual junket collateral, T-shirt graphics, illustrations, and various digital graphics.",
    challenge: "Move between different briefs, audiences, and formats without losing clarity or visual impact.",
    direction: "Bold compositions, expressive typography, graphic contrast, and format-specific assets shaped around each campaign or event context.",
    deliverables: ["Event posters", "Virtual junket collateral", "Email banners", "T-shirt graphics", "Illustrations", "Digital campaign assets"],
    outcome: "A broad visual archive showing versatility across print-inspired digital graphics and fast-turnaround freelance briefs.",
    coverImage: "/images/projects/other-projects/cover.jpg",
    galleryImages: ["/images/projects/other-projects/01.jpg", "/images/projects/other-projects/02.jpg", "/images/projects/other-projects/03.jpg"],
    featured: false,
  },
  {
    title: "Fashion Photography",
    slug: "fashion-photography",
    client: "Freelance / Personal",
    year: "2021–2025",
    categories: ["Photography", "Retouching", "Creative Direction"],
    services: ["Photography", "Editing", "Retouching", "Visual direction"],
    shortDescription: "Fashion and creative photography with styling, editing, and visual storytelling.",
    overview: "A selection of fashion and creative photography projects focused on styling, composition, editing, and visual storytelling.",
    challenge: "Create images that feel intentional and story-led while balancing styling, composition, light, and post-production polish.",
    direction: "Editorial framing, strong negative space, considered retouching, and styling-led image sequences that can stand alone or support brand narratives.",
    deliverables: ["Photography", "Creative direction", "Editing", "Retouching", "Visual sequencing"],
    outcome: "A visual body of work that extends Thandolwethu's design practice into image-making and art direction.",
    coverImage: "/images/projects/fashion-photography/cover.jpg",
    galleryImages: ["/images/projects/fashion-photography/01.jpg", "/images/projects/fashion-photography/02.jpg"],
    featured: false,
  },
];

export const categories = ["All", "Brand Identity", "Social Media", "Web Design", "Posters", "Campaigns", "Merchandise", "Photography", "Digital Graphics"];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
