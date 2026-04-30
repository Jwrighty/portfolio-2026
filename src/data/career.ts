export interface CareerRole {
  title: string;
  dates: string;
  location: string;
  headline: string;
  achievements: readonly string[];
  stack: readonly string[];
}

export interface CareerCompany {
  id: string;
  company: string;
  dates: string;
  location: string;
  summary: string;
  roles: readonly CareerRole[];
}

export const career = [
  {
    id: "vimeo",
    company: "Vimeo",
    dates: "2021 - 2026",
    location: "Tokyo, Japan (Remote)",
    summary:
      "Frontend architecture and delivery across high-traffic viewing surfaces, workflow products, and platform systems for globally distributed teams.",
    roles: [
      {
        title: "Principal Engineer",
        dates: "November 2024 - January 2026",
        location: "Tokyo, Japan (Remote)",
        headline:
          "Led frontend architecture and delivery across Vimeo's core viewing platform and product workflows, improving performance, simplifying legacy systems, and enabling faster execution across globally distributed teams.",
        achievements: [
          "Rebuilt Vimeo's primary video viewing surface for 1.5M daily users and 45M monthly visits with a modular architecture of composable layouts, reusable UI primitives, and data-layer hooks, enabling rollout across core video pages, Showcase 2.0, and a bespoke China experience.",
          "Served as Technical Lead for Showcase 2.0 across teams in the US, Europe, and India, pivoting the technical approach mid-project after major requirement changes and delivering on time with strong product reception.",
          "Led a self-initiated multi-quarter audit and improvement roadmap for Video Settings, removing 13,293 lines of code, reducing page load from 8.16s to 4.67s (-42.77%), and cutting bundle size from 1.68MB to 1.42MB (-15.5%).",
          "Improved key workflow surfaces including Upload, Video Settings, Global Navigation, Embed, and Distribution, addressing issues in quota limiting and upsell logic to strengthen conversion-related flows.",
          "Contributed 50% of capacity to Frontend Platform and Design System work, supporting Vimeo's Chakra-based system through components, documentation, implementation guidance, and adoption support.",
          "Mentored engineers across teams and contributed to the Frontend Reviewers group, producing prototypes, walkthroughs, and structured documentation to improve reuse and onboarding.",
          "Integrated AI-assisted and agentic workflows into engineering practice for planning, scoping, prototyping, and delivery support, while maintaining strong human review and code quality standards.",
        ],
        stack: [
          "React",
          "TypeScript",
          "Next.js",
          "Chakra UI",
          "GraphQL",
          "Performance",
          "Design Systems",
        ],
      },
      {
        title: "Consultant Engineer - Senior frontend",
        dates: "2021 - 2024",
        location: "Kanagawa, Japan (Remote)",
        headline:
          "Joined Vimeo following the acquisition of WIREWAX and led the rebuilding of the Interactive Studio platform for Vimeo customers, establishing architectural foundations, tooling, and engineering practices for a key product area.",
        achievements: [
          "Scaffolded a greenfield frontend platform with tooling, code style, localisation, testing foundations, and engineering best practices for a complex interactive video product featuring timeline-based editing and visual design tooling.",
          "Led the Create React App to Next.js migration, including routing redesign, authentication simplification, SSR compatibility updates, and build pipeline reconfiguration, delivering with zero production issues.",
          "Partnered closely with product and design through discovery, prototyping, and implementation to improve UX quality and reduce delivery risk.",
          "Operated across engineering, QA, planning, and product delivery responsibilities to maintain momentum and hit strict post-acquisition deadlines with limited resources.",
        ],
        stack: [
          "React",
          "TypeScript",
          "Next.js",
          "Jest",
          "Storybook",
          "Localisation",
          "SSR",
        ],
      },
    ],
  },
  {
    id: "wirewax",
    company: "WIREWAX",
    dates: "2017 - 2022",
    location: "London, United Kingdom / Kanagawa, Japan",
    summary:
      "Interactive video SaaS work across authoring tools, asset management, player experiences, and the public marketing site.",
    roles: [
      {
        title: "Lead Front End Developer",
        dates: "February 2019 - January 2022",
        location: "Kanagawa, Japan",
        headline:
          "Led frontend development for an interactive video SaaS platform spanning digital asset management, timeline-based editing, and visual design tooling.",
        achievements: [
          "Owned frontend architecture, tooling decisions, coding standards, and best practices across a complex React and Redux application.",
          "Led development of the overlay editor, an infinite-canvas web editor allowing users to add shapes, text, images, video galleries, and animations to their interactive videos.",
          "Sole developer for wirewax.com, the company's front-of-house site and blog, built with Gatsby and a WordPress headless CMS with a strong focus on design, performance, SEO, and customer acquisition.",
          "Core contributor to the interactive video player using React, Redux, Jest, Storybook, and video.js.",
          "Helped establish more maintainable frontend workflows through improved tooling, testing practices, and reusable UI patterns.",
        ],
        stack: [
          "React",
          "Redux",
          "JavaScript",
          "Gatsby",
          "WordPress",
          "Jest",
          "Storybook",
          "video.js",
        ],
      },
      {
        title: "Junior Front End Developer",
        dates: "October 2017 - January 2019",
        location: "London, United Kingdom",
        headline:
          "First professional engineering role, contributing to a live interactive video platform while building strong production foundations in React, Redux, and JavaScript.",
        achievements: [
          "Shipped features into a production SaaS application while developing strong habits around component structure, state management, and release quality.",
          "Worked alongside senior engineers on interactive video tooling, customer-facing product surfaces, and platform maintenance.",
        ],
        stack: ["React", "Redux", "JavaScript", "HTML", "CSS"],
      },
    ],
  },
  {
    id: "general-assembly",
    company: "General Assembly",
    dates: "2017",
    location: "London, United Kingdom",
    summary:
      "Full-stack web development training followed by teaching support for Web Development and UX students.",
    roles: [
      {
        title: "Teaching Assistant",
        dates: "September 2017 - October 2017",
        location: "London Area, United Kingdom",
        headline:
          "Supported Web Development and UX courses at General Assembly, teaching HTML, CSS, and JavaScript fundamentals shortly after completing the immersive programme.",
        achievements: [
          "Helped new developers build practical HTML, CSS, and JavaScript foundations through code reviews, troubleshooting, and one-to-one guidance.",
          "Reinforced modern web fundamentals by explaining programming concepts in plain language for early-career learners.",
        ],
        stack: ["HTML", "CSS", "JavaScript", "Teaching", "UX"],
      },
      {
        title: "Web Development Immersive",
        dates: "May 2017 - September 2017",
        location: "London, United Kingdom",
        headline:
          "Twelve-week full-time web development immersive covering the programming essentials needed to launch full-stack web apps in a collaborative, industry-aligned environment.",
        achievements: [
          "Built full-stack projects while learning programming fundamentals, collaborative workflows, and industry delivery practices.",
          "Secured a developer role within one month of graduating.",
        ],
        stack: ["JavaScript", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
      },
    ],
  },
  {
    id: "amazon-lovefilm",
    company: "Amazon / LOVEFiLM",
    dates: "2009 - 2016",
    location: "London, United Kingdom / Gothenburg, Sweden",
    summary:
      "Commercial leadership across UK, German, and Nordic film markets before moving into software engineering.",
    roles: [
      {
        title: "Buying Manager UK & DE - LOVEFiLM ByPost",
        dates: "October 2013 - November 2016",
        location: "London Area, United Kingdom",
        headline:
          "Progressed from Assistant Buyer to European Buying Manager across LOVEFiLM and Amazon post-acquisition, with leadership responsibility across vendor strategy, budgeting, and marketing initiatives for the UK and German markets.",
        achievements: [
          "Managed UK and German buying teams and led negotiations with major film studios and independent distributors.",
          "Designed and executed customer campaigns including a print insert reaching 1M+ Amazon retail customers.",
          "Held GBP25m+ budget and P&L responsibility, contributing to business planning, roadmap development, and leadership reviews.",
        ],
        stack: ["P&L", "Forecasting", "Negotiation", "Leadership", "Roadmapping"],
      },
      {
        title: "Buying Manager Nordics - LOVEFiLM By Post",
        dates: "May 2012 - December 2012",
        location: "Gothenburg, Sweden",
        headline:
          "International assignment in Gothenburg leading buying operations and supplier relationships across the Nordic film market.",
        achievements: [
          "Managed regional buying activity while adapting planning, communication, and negotiation practices across markets.",
        ],
        stack: ["Market Planning", "Supplier Management", "Forecasting"],
      },
      {
        title: "Buyer / Assistant Buyer",
        dates: "December 2009 - May 2012",
        location: "London, United Kingdom",
        headline:
          "Early commercial career at LOVEFiLM, progressing from Assistant Buyer to Buyer through data-driven purchasing decisions and stronger studio relationships.",
        achievements: [
          "Owned relationships with three major film studios and the ten largest independent distributors.",
          "Developed forecasting models to reduce costs and consistently improve KPI performance.",
        ],
        stack: ["Forecasting", "Data Analysis", "Vendor Management", "KPI Reporting"],
      },
    ],
  },
] as const satisfies readonly CareerCompany[];
