export type Project = {
  title: string;
  description: string;
  // Optional SEO fields for later metadata injection
  metaTitle?: string;
  metaDescription?: string;
  image: string;
  stack: string[];
  slug: string;
  liveUrl?: string;
  longDescription?: string;
};

export const projects: Project[] = [
  {
    title: "NovaHost",
    description:
      "Effortless, secure, and dynamic web hosting for creators and businesses.",
    image: "/projects/nova-hosting.png",
    stack: ["HTML", "CSS", "JavaScript", "Node.js"],
    slug: "novahost",
    liveUrl: "https://nova-hosting.onrender.com/",
    longDescription: `NovaHost is a modern web hosting solution designed to streamline the process of launching websites. It offers dynamic page routing, sleek templates, and secure deployment, all built using HTML, CSS, JavaScript, and a Node.js backend. NovaHost is optimized for creators and small businesses looking for an affordable and reliable hosting platform.`,
  },
  {
    title: "Esaaka Clothing",
    description:
      "A stylish clothing store template with a modern design and smooth animations.",
    image: "/projects/esaaka-clothing.png",
    stack: ["React", "Redux", "Stripe", "Firebase"],
    slug: "esaaka-clothing",
    liveUrl: "https://esaaka-clothing.netlify.app/",
    longDescription: `Esaaka Clothing is a responsive eCommerce store built with React and Redux for state management. It features dynamic routing, Stripe integration for secure payments, Firebase for authentication and data storage, and smooth animations throughout the UI. It's ideal for fashion brands or boutique stores.`,
  },
  {
    title: "Face Detection App",
    description:
      "Smart face recognition powered by Clarifai in a React-based platform.",
    image: "/projects/face-detection-app.png",
    stack: ["React", "CSS", "Clarifai API"],
    slug: "face-detection-app",
    liveUrl: "https://detectfacesonimage.netlify.app/",
    longDescription: `The Face Detection App leverages the Clarifai API to analyze images and detect faces in real-time. Built with React and custom CSS, the app includes interactive image input, dynamic bounding boxes, and API response visualization. It serves as a foundational project for learning computer vision in the browser.`,
  },
  {
    title: "Mission Control",
    description:
      "A powerful SpaceX mission manager built with React, Node.js, and AWS scalability.",
    image: "/projects/mission-control.png",
    stack: ["React", "Node.js", "AWS", "Docker"],
    slug: "mission-control",
    liveUrl: "http://34.238.40.225:8000/",
    longDescription: `Mission Control is a full-stack dashboard that tracks and manages rocket launches, inspired by real SpaceX data. Built with React on the front end and Node.js on the backend, it includes API integration, launch scheduling, and Docker-based deployment on AWS EC2, providing hands-on experience with scalable infrastructure.`,
  },
  {
    title: "Discover Cafe",
    description:
      "A sleek Next.js platform for finding and upvoting coffee shops using geolocation and API integrations.",
    image: "/projects/discover-cafe.png",
    stack: ["Next.js", "Airtable API", "Foursquare API"],
    slug: "discover-cafe",
    liveUrl: "https://discover-cafes-chi.vercel.app/",
    longDescription: `Discover Cafe is a location-based app built with Next.js, using static site generation and server-side rendering to fetch cafes nearby. It pulls data from Foursquare and stores user favorites in Airtable. Users can vote for cafes, explore by city, and enjoy a smooth, modern interface with location-aware features.`,
  },
  {
    title: "Blog App",
    description:
      "A Next.js-powered hub for insightful articles on web development, computer science, and tech trends.",
    image: "/projects/blog-app.png",
    stack: ["Next.js", "CSS", "Regeneration"],
    slug: "blog-app",
    liveUrl: "https://blog-app-sigma-pink.vercel.app/",
    longDescription: `The Blog App is a lightweight and SEO-optimized platform for publishing articles and tutorials. Built with Next.js using incremental static regeneration (ISR), the app delivers fast performance and up-to-date content without full rebuilds. It's styled with clean CSS and supports post previews, tags, and categories.`,
  },
  {
    title: "Monster Search",
    description:
      "A dynamic React app for discovering and filtering monsters with real-time API data.",
    image: "/projects/monster-search.png",
    stack: ["React", "CSS", "JSX"],
    slug: "monster-search",
    liveUrl: "https://demosus.github.io/monster-search/",
    longDescription: `Monster Search is a fun React application that displays and filters a collection of monster characters using public API data. Users can search in real-time with a dynamic input field. It’s styled with custom CSS and built using JSX components, showcasing list rendering, props usage, and functional state updates.`,
  },
  {
    title: "Esaaka Template Store",
    description:
      "A curated collection of premium templates for stunning designs and seamless functionality.",
    image: "/projects/template-store.png",
    stack: ["Next.js", "Tailwind", "JSX"],
    slug: "esaaka-template-store",
    liveUrl: "https://esaaka-templates-store.vercel.app/",
    longDescription: `The Esaaka Template Store is a Next.js application that showcases a gallery of beautifully crafted web templates across multiple categories like SaaS, Agency, Portfolio, and more. Built with Tailwind CSS and dynamic routing, the store features responsive layouts, interactive previews, and metadata-rich template listings for developers and designers alike.`,
  },
];
