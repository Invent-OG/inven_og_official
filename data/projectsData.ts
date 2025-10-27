// data/projectsData.ts

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping experience with product search, cart, and payment integration using Stripe. Includes a modern dashboard for sellers, analytics, and inventory tracking.",
    image: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg",
    secondimage:
      "https://images.pexels.com/photos/8849282/pexels-photo-8849282.jpeg",
    thirdimage:
      "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
    category: "fullstack",
    status: "completed",
    duration: "6 months",
    team: "4 developers",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    overview:
      "We developed a robust e-commerce platform aimed at delivering a smooth and fast shopping experience. The dashboard allowed sellers to monitor inventory, track performance, and access real-time analytics. Our team focused on speed, security, and delightful design consistency.",
    client: "ShopEase Global",
    clientFeedback:
      "The platform exceeded our expectations — load times dropped by 45%, and customer conversions increased dramatically.",
    results: "45% faster checkout flow and 30% higher customer retention.",
    liveUrl: "https://example.com/ecommerce",
    sourceUrl: "https://github.com/yourname/ecommerce-platform",
  },
  {
    id: 2,
    title: "Weather Analytics Dashboard",
    description:
      "An interactive dashboard visualizing global weather data in real time with ML-based predictions. Designed for researchers and meteorologists.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
    secondimage:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900",
    thirdimage:
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=900",
    category: "frontend",
    status: "completed",
    duration: "3 months",
    team: "2 developers",
    technologies: ["React", "D3.js", "Python", "Chart.js"],
    overview:
      "This project focused on making climate insights visually intuitive. Using D3.js and Chart.js, we built highly responsive visualizations. Real-time data pipelines were established using APIs to show live conditions across the globe.",
    client: "Global Climate Institute",
    clientFeedback:
      "The dashboard transformed how we visualize and communicate our data. It's a blend of accuracy and aesthetic simplicity.",
    results: "Reduced report preparation time by 60%.",
    liveUrl: "https://example.com/weather-dashboard",
    sourceUrl: "https://github.com/yourname/weather-dashboard",
  },
  {
    id: 3,
    title: "TaskFlow Productivity Suite",
    description:
      "A collaborative SaaS productivity app featuring Kanban boards, task tracking, chat, and real-time notifications.",
    image: "https://images.pexels.com/photos/4050323/pexels-photo-4050323.jpeg",
    secondimage:
      "https://images.unsplash.com/photo-1611078483367-0e59c943c9a0?w=900",
    thirdimage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900",
    category: "webapp",
    status: "in-progress",
    duration: "4 months",
    team: "3 developers",
    technologies: ["React", "Redux", "Firebase", "Framer Motion"],
    overview:
      "TaskFlow is designed to help teams plan, assign, and track work in a unified platform. We leveraged Firebase for real-time sync and Framer Motion for fluid UX animations. Currently optimizing performance for enterprise-scale teams.",
    client: "Productivity Labs",
    clientFeedback:
      "Early testers reported a 50% improvement in daily planning efficiency. The interface feels incredibly fast and intuitive.",
    results: "Reduced project management time by 50%.",
    liveUrl: "https://example.com/taskflow",
    sourceUrl: "https://github.com/yourname/taskflow-suite",
  },
  {
    id: 4,
    title: "AI Portfolio Generator",
    description:
      "An AI-powered web app that builds portfolio websites from user input, using OpenAI APIs and GSAP animations.",
    image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg",
    secondimage:
      "https://images.unsplash.com/photo-1633356122102-9b4b1e4abf1d?w=900",
    thirdimage:
      "https://images.unsplash.com/photo-1559027615-cd4628902d24?w=900",
    category: "ai",
    status: "completed",
    duration: "2 months",
    team: "2 developers",
    technologies: ["Next.js", "OpenAI API", "GSAP", "TailwindCSS"],
    overview:
      "This project leverages generative AI to automate personal website creation. Users input details, and the system generates a styled, ready-to-deploy portfolio with motion-enhanced sections.",
    client: "Freelancer Hub",
    clientFeedback:
      "The AI-driven process saves days of manual setup. It’s an absolute game-changer for freelancers.",
    results: "Reduced portfolio creation time from days to minutes.",
    liveUrl: "https://example.com/ai-portfolio",
    sourceUrl: "https://github.com/yourname/ai-portfolio-generator",
  },
  {
    id: 5,
    title: "Crypto Tracker & Wallet",
    description:
      "A secure app for tracking cryptocurrencies, portfolio values, and wallet transactions in real time.",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&h=500&fit=crop",
    secondimage:
      "https://images.unsplash.com/photo-1620121500000-91fd0a37eec2?w=900",
    thirdimage:
      "https://images.unsplash.com/photo-1620121700000-9a8efb9e0efb?w=900",
    category: "fullstack",
    status: "completed",
    duration: "5 months",
    team: "5 developers",
    technologies: ["React", "Node.js", "Firebase", "CoinGecko API"],
    overview:
      "Crypto Tracker helps users monitor live cryptocurrency prices and manage wallets with real-time sync. We integrated CoinGecko’s API for accuracy and Firebase for authentication.",
    client: "CryptoFlow Inc.",
    clientFeedback:
      "Smooth, reliable, and fast — exactly what crypto enthusiasts need. Great UX polish!",
    results: "Enabled 100K+ live requests/day with 99.9% uptime.",
    liveUrl: "https://example.com/crypto-tracker",
    sourceUrl: "https://github.com/yourname/crypto-tracker-wallet",
  },
  {
    id: 6,
    title: "EduSphere LMS",
    description:
      "An advanced Learning Management System for managing courses, assignments, and video-based learning.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop",
    secondimage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900",
    thirdimage:
      "https://images.unsplash.com/photo-1606761568499-6c1d7a2b1a6e?w=900",
    category: "fullstack",
    status: "in-progress",
    duration: "8 months",
    team: "6 developers",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Node.js"],
    overview:
      "EduSphere provides a seamless digital education experience. It includes interactive lessons, student dashboards, grading automation, and instructor analytics.",
    client: "Modern Academy",
    clientFeedback:
      "The LMS is shaping our online programs beautifully. Easy to manage and visually stunning.",
    results: "Improved student engagement by 65%.",
    liveUrl: "https://example.com/edusphere",
    sourceUrl: "https://github.com/yourname/edusphere-lms",
  },
];
