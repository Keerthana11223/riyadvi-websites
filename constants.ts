import type { Service, Project, Testimonial, Job, BlogPost } from './types';
// FIX: Replaced non-existent `Cube` icon with `Cuboid`.
import { Code, Smartphone, Megaphone, Box, Cuboid, PenTool } from 'lucide-react';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Crafting high-performance websites that drive business growth and user engagement.',
    icon: Code,
    problem: "Your online presence isn't converting visitors into customers. Your website is slow, outdated, or not mobile-friendly, causing you to lose potential business.",
    solution: "We build fast, secure, and scalable web applications tailored to your business goals. From e-commerce platforms to complex SaaS products, our solutions are designed for performance and growth.",
    features: ["Responsive Design", "Scalable Architecture", "SEO Optimization", "CMS Integration", "Secure Payment Gateways"],
    useCases: ["E-commerce Stores", "Corporate Websites", "SaaS Platforms", "Marketing Landing Pages"],
    techStack: ["React.js", "Next.js", "Node.js", "TailwindCSS", "PostgreSQL", "Vercel"],
  },
  {
    id: 'app-development',
    title: 'App Development',
    shortDescription: 'Building intuitive and powerful mobile apps for iOS and Android platforms.',
    icon: Smartphone,
    problem: "You're missing a direct channel to engage with your customers on their most-used devices. You need a mobile app to increase loyalty and provide on-the-go services.",
    solution: "Our team develops native and cross-platform mobile applications that offer a seamless user experience. We handle the entire lifecycle, from ideation and design to deployment and maintenance.",
    features: ["iOS & Android Native Dev", "Cross-Platform with React Native", "Push Notifications", "In-App Purchases", "Offline Capabilities"],
    useCases: ["Social Networking Apps", "On-demand Service Apps", "Internal Business Tools", "Mobile Gaming"],
    techStack: ["Swift (iOS)", "Kotlin (Android)", "React Native", "Firebase", "MongoDB"],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Data-driven strategies to amplify your brand’s reach and impact online.',
    icon: Megaphone,
    problem: "You have a great product, but you're struggling to reach your target audience. Your marketing efforts aren't generating the leads and sales you need.",
    solution: "We create and execute comprehensive digital marketing strategies that connect you with your customers. From SEO and content marketing to paid advertising, we drive measurable results.",
    features: ["SEO & SEM", "Social Media Management", "Content Marketing", "PPC Campaigns", "Email Marketing Automation"],
    useCases: ["Lead Generation", "Brand Awareness Campaigns", "E-commerce Sales Growth", "Customer Retention"],
    techStack: ["Google Analytics", "Meta Ads", "SEMrush", "Mailchimp", "HubSpot"],
  },
  {
    id: 'ar-vr',
    title: 'AR/VR',
    shortDescription: 'Creating immersive augmented and virtual reality experiences that captivate users.',
    icon: Box,
    problem: "You want to offer innovative, interactive experiences that set your brand apart, but lack the technical expertise to enter the world of immersive tech.",
    solution: "We design and develop AR/VR applications that transform how users interact with your products and brand. From virtual showrooms to interactive training simulations, the possibilities are endless.",
    features: ["ARKit & ARCore", "VR for Oculus/Vive", "WebAR Experiences", "3D Asset Creation", "Interactive Simulations"],
    useCases: ["Virtual Try-On for Retail", "Immersive Product Demos", "Employee Training Modules", "Architectural Visualization"],
    techStack: ["Unity", "Unreal Engine", "Blender", "Vuforia", "8th Wall"],
  },
  {
    id: '3d-modeling',
    title: '3D Modeling',
    shortDescription: 'High-quality 3D models for visualization, animation, and real-time applications.',
    // FIX: Replaced non-existent `Cube` icon with `Cuboid`.
    icon: Cuboid,
    problem: "Static 2D images are no longer enough to showcase your products effectively. You need realistic 3D assets for marketing, development, or visualization.",
    solution: "Our 3D artists create detailed, optimized models for a variety of use cases. We produce everything from product renders and architectural visualizations to character models for games and animation.",
    features: ["Photorealistic Rendering", "Low-poly Game Assets", "Product Visualization", "Architectural Walkthroughs", "Character Design"],
    useCases: ["E-commerce Product Catalogs", "Real Estate Marketing", "Game Development", "Industrial Design Prototypes"],
    techStack: ["Blender", "Autodesk Maya", "ZBrush", "Substance Painter", "Marmoset Toolbag"],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'Designing user-centric digital products that are both beautiful and easy to use.',
    icon: PenTool,
    problem: "Your digital product is functional but not intuitive. Users are dropping off because of a confusing interface and poor user experience.",
    solution: "We put your users at the center of the design process. Through research, wireframing, and prototyping, we create interfaces that are intuitive, engaging, and aligned with your brand identity.",
    features: ["User Research & Personas", "Wireframing & Prototyping", "Interaction Design", "Design Systems", "Usability Testing"],
    useCases: ["Mobile App Interfaces", "Web Application Dashboards", "E-commerce Checkout Flows", "Landing Page Optimization"],
    techStack: ["Figma", "Sketch", "Adobe XD", "InVision", "Maze"],
  },
];

export const PROJECTS_DATA: Project[] = [
    { id: 'proj-1', title: 'E-commerce Platform "ShopSphere"', category: 'Web Development', imageUrl: 'https://picsum.photos/seed/shopsphere/600/400', client: 'Global Retail Inc.', problem: 'Client needed a scalable e-commerce solution to handle high traffic and provide a seamless shopping experience.', solution: 'Developed a custom platform with React and Node.js, featuring personalized recommendations and a one-click checkout process.', result: 'Increased conversion rates by 35% and improved page load times by 50%.', tools: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'] },
    { id: 'proj-2', title: 'Mobile Banking App "FinSecure"', category: 'App Development', imageUrl: 'https://picsum.photos/seed/finsecure/600/400', client: 'Metro Bank', problem: 'An outdated mobile app with poor UX was leading to customer churn.', solution: 'Redesigned and rebuilt the native iOS and Android apps with a focus on simplicity, security, and speed. Added biometric login and P2P transfers.', result: 'Achieved a 4.8-star rating on app stores and reduced customer support calls by 40%.', tools: ['Swift', 'Kotlin', 'Firebase', 'Figma'] },
    { id: 'proj-3', title: 'VR Training Simulation', category: 'AR/VR', imageUrl: 'https://picsum.photos/seed/vrtraining/600/400', client: 'AeroSpace Corp', problem: 'High costs and risks associated with training technicians on complex machinery.', solution: 'Created a realistic VR simulation allowing trainees to practice maintenance procedures in a safe, controlled virtual environment.', result: 'Reduced training time by 30% and eliminated on-the-job accidents during the training phase.', tools: ['Unity', 'Blender', 'Oculus SDK'] },
    { id: 'proj-4', title: 'Brand Identity & Website for "Innovate AI"', category: 'UI/UX Design', imageUrl: 'https://picsum.photos/seed/innovateai/600/400', client: 'Innovate AI', problem: 'A tech startup needed a strong brand identity and a professional website to attract investors and early adopters.', solution: 'Crafted a modern logo, comprehensive brand guidelines, and designed a visually stunning website that clearly communicates their value proposition.', result: 'Successfully helped the client secure their first round of funding within 3 months of launch.', tools: ['Figma', 'Webflow', 'Adobe Illustrator'] },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    { name: 'Sarah L., CEO of Global Retail Inc.', photoUrl: 'https://picsum.photos/seed/sarah/100/100', quote: 'Riyadvi Software Technologies transformed our digital presence. Their team is not just a vendor, but a true partner in our success. The results speak for themselves.' },
    { name: 'Michael B., CTO of Metro Bank', photoUrl: 'https://picsum.photos/seed/michael/100/100', quote: 'The professionalism and technical expertise of the Riyadvi team are unmatched. They delivered a world-class mobile app ahead of schedule and under budget.' },
    { name: 'Dr. Emily Carter, Head of R&D at AeroSpace Corp', photoUrl: 'https://picsum.photos/seed/emily/100/100', quote: 'Their innovative approach to our VR training problem was a game-changer. Riyadvi is at the forefront of immersive technology.' },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
    { id: 'blog-1', title: 'The Future of Web Development: Trends to Watch in 2024', excerpt: 'From AI-powered code generation to the rise of meta-frameworks, we explore the key trends shaping the future of the web.', imageUrl: 'https://picsum.photos/seed/blog1/600/400', category: 'Web Development', tags: ['React', 'AI', 'Performance'] },
    { id: 'blog-2', title: 'Why User Experience (UX) is Your Most Valuable Asset', excerpt: 'A deep dive into how investing in UX can lead to higher conversion rates, increased customer loyalty, and a stronger brand.', imageUrl: 'https://picsum.photos/seed/blog2/600/400', category: 'UI/UX Design', tags: ['Design', 'Business', 'Strategy'] },
    { id: 'blog-3', title: 'iOS vs. Android: Choosing the Right Platform for Your App', excerpt: 'We break down the pros and cons of developing for iOS and Android, helping you make an informed decision for your business.', imageUrl: 'https://picsum.photos/seed/blog3/600/400', category: 'App Development', tags: ['Mobile', 'Strategy', 'iOS', 'Android'] },
];

export const CAREERS_DATA: Job[] = [
    { id: 'job-1', title: 'Senior React Developer', department: 'Engineering', designation: 'Senior', description: 'We are looking for an experienced React developer to lead the development of our next-generation web applications. Must have 5+ years of experience.' },
    { id: 'job-2', title: 'UI/UX Designer', department: 'Design', designation: 'Mid-Level', description: 'Join our creative team to design intuitive and beautiful user interfaces for web and mobile. Proficiency in Figma is a must.' },
    { id: 'job-3', title: 'Digital Marketing Specialist', department: 'Marketing', designation: 'Mid-Level', description: 'Drive our online growth through strategic SEO, SEM, and content marketing campaigns. Proven track record of generating leads is required.' },
    { id: 'job-4', title: 'Project Manager', department: 'Management', designation: 'Senior', description: 'Oversee the entire project lifecycle, from client communication to team coordination and final delivery. Agile/Scrum experience is essential.' },
    { id: 'job-5', title: 'Junior Frontend Developer', department: 'Engineering', designation: 'Junior', description: 'A great opportunity for a budding developer to learn and grow. You will work with our senior engineers on exciting new projects.'},
];