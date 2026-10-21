import { ProjectItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Vrushti Lakhupota',
  firstName: 'VRUSHTI',
  lastName: 'LAKHUPOTA',
  role: 'UI/UX Designer',
  education: 'M.Design student in UI/UX',
  email: 'vrushtilakhupota@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vrushti-lakhupota-a86768389',
  behance: 'https://www.behance.net/gallery/250526161/Women-Safety-UX-Case-Study',
  shortIntro:
    'Code taught me how things work. Design taught me how they feel. Now, as an M.Design student in UI/UX, I make the two meet.',
  photoUrl: '/assets/aistudio/WhatsApp_Image_2026-10-11_at_12.54.12_AM_00acee8d.jpeg',
  aboutHeadline:
    'I collaborate with curious minds and forward-thinking teams, translating complex user workflows into clear, human, and intuitive digital experiences.',
  aboutStory:
    "Code taught me how things work. Design taught me how they feel. Now, as an M.Design student in UI/UX, I make the two meet. With a grounding in engineering logic and an obsession with behavioral psychology, I design digital products where functional efficiency and emotional clarity live in harmony.",
  skills: [
    'User Experience (UX) Design',
    'User Interface (UI) Design',
    'User Research & Synthesis',
    'Information Architecture',
    'Wireframing & Prototyping',
    'Design Systems & Usability Testing',
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'safe-her',
    title: 'Women Safety UX Case Study',
    shortTitle: 'Safe Her',
    category: 'UX Case Study · Mobile App Design',
    description:
      'Designing a rapid, discreet, and reliable emergency response companion. Safe Her empowers women in critical situations by streamlining panic triggers, trusted circle notifications, and location sharing with zero friction.',
    image: '/assets/aistudio/Screenshot_2026-10-08_115244_7f21625f.png',
    behanceUrl: 'https://www.behance.net/gallery/250526161/Women-Safety-UX-Case-Study',
    pdfUrl: '/assets/aistudio/Improved_Design_Project_ad386b56.pdf',
    role: 'UX Researcher & Product Designer',
    duration: '6 Weeks',
    process: 'Empathize · User Interviews · Wireframing · High-Fidelity UI',
    highlights: [
      'Rapid-action emergency trigger requiring minimal physical effort',
      'Trusted circles contact management with instantaneous status broadcast',
      'End-to-end encrypted privacy and location controls',
      'Stress-tested micro-interactions tailored for high-anxiety moments',
    ],
  },
  {
    id: 'smart-canteen',
    title: 'Smart Canteen Experience (Indus University)',
    shortTitle: 'Smart Canteen Solutions',
    category: 'UX Case Study · Service Design',
    description:
      'Designing a seamless digital canteen ecosystem to eliminate rush-hour congestion, payment bottlenecks, and pickup delays for thousands of students and faculty members at Indus University.',
    image: '/assets/aistudio/Screenshot_2026-10-18_180005_78aa1da3.png',
    behanceUrl: 'https://www.behance.net/gallery/250523551/Smart-Canteen-Solutions-%28Indus-University%29',
    pdfUrl: '/assets/aistudio/Digital_Canteen_Solutions_de89c8fd.pdf',
    role: 'UX Designer',
    duration: '4 Weeks',
    process: 'Design Thinking · On-Site Observation · Service Blueprint',
    highlights: [
      'Live queue estimations and smart token collection workflow',
      'Integrated meal credit wallet and instant reward redemptions',
      'Categorized visual food discovery optimizing order turnaround',
      'Campus-tested usability flow with student and canteen staff feedback',
    ],
  },
  {
    id: 'blinkit-kids',
    title: 'Blinkit Redesign for Kids',
    shortTitle: 'Blinkit for Kids',
    category: 'UX Research · Gamified UI Design',
    description:
      'A child-friendly reimagining of quick-commerce that transforms routine errands into playful, educational adventures. Built with vibrant visual metaphors, healthy eating encouragement, and parental safety checkpoints.',
    image: '/assets/aistudio/Screenshot_2026-10-08_115418_3c5b7973.png',
    behanceUrl: 'https://www.behance.net/gallery/250526855/Blinkit-Redesign-for-Kids',
    pdfUrl: '/assets/aistudio/3-Blinkit_Kids_7023bd8a.pdf',
    role: 'UX Researcher & UI Designer',
    duration: 'Case Study',
    process: 'Child Cognitive Research · Gamification Loops · Visual System',
    highlights: [
      'Interactive "Healthy Hero" mascot driving nutritional awareness',
      'Simplified, iconography-led visual shopping journey',
      'Robust parental controls and pin-gated checkout verification',
      'Delightful feedback animations celebrating micro-achievements',
    ],
  },
  {
    id: 'edible-cups',
    title: 'Edible Cup Product Design',
    shortTitle: 'Edible Cups',
    category: 'Product & Packaging Design · Sustainable UX',
    description:
      'Addressing the catastrophic environmental waste of single-use disposable hot beverage cups. Re-engineered as a sturdy, thermal-insulating, leak-proof, and 100% edible cup for tea and coffee stalls and university canteens.',
    image: '/assets/aistudio/Screenshot_2026-10-20_232553_78cc6ff4.png',
    behanceUrl: 'https://www.behance.net/gallery/250533413/Edible-Cup-Product-design',
    pdfUrl: '/assets/aistudio/Edible_Cups_56364adc.pdf',
    role: 'Product & Packaging Designer',
    duration: 'Design Project',
    process: 'Material Feasibility · Ergonomics Study · Sustainable Lifecycle',
    highlights: [
      'Ergonomic ribbed sleeve preventing heat transfer to fingertips',
      'Natural grain and crisp biscuit base compatible with boiling beverages',
      'Zero-waste circular consumption with biodegradable footprint',
      'Usability evaluations targeting everyday chai stall habits',
    ],
  },
];
