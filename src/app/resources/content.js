import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Bima",
  lastName: "Dev",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "FullStack Developer",
  // avatar: "/images/avatar.jpg",
  avatar: "/images/logo-color.png",
  location: "Asia/Pontianak", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/bimadevs",
  // },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/biimaa_jo",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/6282254044783",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:bimadev06@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "FullStack Developer",
  subline: (
    <>
      I'm Bima, a FullStack Developer from <InlineCode>Indonesia</InlineCode>, where I craft Modern
      <br /> Website. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a FullStack Developer from Indonesia. I possess a keen interest and enthusiasm for technology. This enthusiasm is a key aspect of my professional approach.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Bimadev Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SMK Mudita Singkawang",
        description: <>Studied Network and Technology</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      // {
      //   title: "Figma",
      //   description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-02.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //     {
      //       src: "/images/projects/project-01/cover-03.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/BimsUI.png",
            alt: "BimsUI - Modern React component library with TypeScript and Tailwind CSS",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/BimSC.png",
            alt: "BimSC - Full stack web application built with Next.js and Supabase",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/url-shortener.png",
            alt: "URL Shortener - Link shortening service with analytics built with Next.js",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Artificial Intelegent",
        description: <>Creating useful and interesting AI</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/3d-builder.png",
            alt: "3D Builder AI - AI-powered 3D model generation and visualization tool",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/deep-talk-ai.png",
            alt: "Deep Talk AI - Advanced conversational AI chatbot with natural language processing",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about programming and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "Developer workspace with dual monitors showing code editor and terminal",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "Modern web development setup with MacBook and accessories",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "Code snippet showing Next.js React component implementation",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "Clean minimalist desk setup for programming and development",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "BimaDev at tech meetup discussing full stack development",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "Terminal window showing Node.js and npm commands",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "Modern web application UI design on large display",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Code editor with TypeScript and React syntax highlighting",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "Developer tools and debugging interface in browser",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Project planning board with development workflow diagram",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "Mobile responsive design testing on multiple devices",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "Git version control workflow visualization and branching strategy",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "API documentation and REST endpoint testing in Postman",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "Database schema design and relationship diagram",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
