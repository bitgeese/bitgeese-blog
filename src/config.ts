import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bitgeese.io/",
  author: "Maciej Janowski",
  desc: "Maciej Janowski | Backend Python Developer",
  title: "BitGeese",
  ogImage: "bitgeese-og.png",
  lightAndDarkMode: true,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/druidmaciek",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/bitgeese",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "http://linkedin.com/in/maciej-janowski-57755a149/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:maciekjanowski42@icloud.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "http://twitter.com/maciejjanowski",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  // {
  //   name: "Twitch",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Twitch`,
  //   active: false,
  // },
  // {
  //   name: "YouTube",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on YouTube`,
  //   active: false,
  // },
  // {
  //   name: "WhatsApp",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on WhatsApp`,
  //   active: false,
  // },
  // {
  //   name: "Snapchat",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Snapchat`,
  //   active: false,
  // },
  // {
  //   name: "Pinterest",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Pinterest`,
  //   active: false,
  // },
  // {
  //   name: "TikTok",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on TikTok`,
  //   active: false,
  // },
  // {
  //   name: "CodePen",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on CodePen`,
  //   active: false,
  // },
  // {
  //   name: "Discord",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Discord`,
  //   active: false,
  // },
  // {
  //   name: "GitLab",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on GitLab`,
  //   active: false,
  // },
  // {
  //   name: "Reddit",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Reddit`,
  //   active: false,
  // },
  // {
  //   name: "Skype",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Skype`,
  //   active: false,
  // },
  // {
  //   name: "Steam",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Steam`,
  //   active: false,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Telegram`,
  //   active: false,
  // },
  // {
  //   name: "Mastodon",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Mastodon`,
  //   active: false,
  // },
];

export const EXPERIENCE = [
  {
    position: "Backend Engineer, DDOS",
    company: "G-Core 🇱🇺",
    website: "https://gcore.com",
    country: "Luxembourg",
    start: "2022",
    end: "Present",
    stack: [
      "🐍 Python",
      "🧭 Django",
      "⚡️ FastApi",
      "🐘 PostgreSQL",
      "🥬 Celery",
      "⌛️ Redis",
      "🐰 RabbitMQ",
      "🐳 Docker",
      "☸️ Kubernetes",
      "📊 Grafana",
    ],
    description: [
      "Created a tool to better track errors, making it easier to fix bugs.",
      "Made new data collection points using FastAPI in REST API work.",
      "Led the creation of a REST API for a new product, offering advanced AI features for clients.",
      "Improved the workflow with new checks and task monitoring using Grafana and Flower.",
      "Helped new team members settle in, improving teamwork and efficiency.",
      "Assessed a new company's product, helping with important decisions.",
    ],
  },
  {
    position: "Backend Engineer",
    company: "LeadSherpa 🇺🇸",
    website: "https://leadsherpa.com",
    country: "United States",
    start: "May 2022",
    end: "Dec 2022",
    stack: [
      "🐍 Python",
      "🧭 Django",
      "⚡️ FastAPI",
      "🐘 PostgreSQL",
      "🤸 ElasticSearch",
      "🥬 Celery",
      "⌛️ Redis",
      "🐳 Docker",
      "☁️ AWS",
    ],
    description: [
      "Created new Django REST API endpoints, improving app functionality.",
      "Optimized slow components, enhancing app performance and user satisfaction.",
      "Updated outsourced legacy code, enhancing code quality.",
      "Developed features for internal tools, reducing ticket resolution time.",
      "Led new feature implementation in flagship product, aiding market success.",
      "Improved product quality by increasing test coverage.",
    ],
  },
  {
    position: "Full Stack Developer (Freelance)",
    company: "Various Clients 🌍",
    website: "https://bitgeese.io",
    country: "Multiple Countries",
    start: "2017",
    end: "2022",
    stack: [
      "🐍 Python",
      "🏗️ JavaScript",
      "🧭 Django",
      "💨 TailwindCSS",
      "🔨 11ty",
      "🖊️ Sanity",
      "🛍️ Shopify API",
      "🐘 Postgres",
      "⚒️ HTMX",
      "🏔️ Alpine.js",
      "🐳 Docker",
      "🥬 Celery",
      "⌛️ Redis",
      "🐲 Vue.js",
      "🧪 Flask",
      "🔺 Pyramid",
      "🗄️ MySQL",
      "🐰 RabbitMQ",
    ],
    description: [
      "Developed key website components, boosting user engagement and increasing sales conversions with Shopify API.",
      "Assisted in building robust back-ends with 11ty and Sanity, enhancing content management.",
      "Created custom REST APIs and designed databases using Django, improving functionality and data handling.",
      "Enhanced data management and app functionality with efficient database models and Django Rest Framework REST API.",
      "Improved code quality, test coverage, and CI/CD pipelines, leading to better operational efficiency.",
      "Created unique web applications and web scraping systems for international clients, expediting initial product versions.",
    ],
  },
];

export const SKILLS = [
  {
    name: "Programming Languages",
    skills: [
      {
        name: "🐍 Python",
        years: "7 years",
      },
      {
        name: "🏗️ JavaScript",
        years: "7 years",
      },
      {
        name: "🌍 HTML",
        years: "8 years",
      },
      {
        name: "✨ CSS",
        years: "8 years",
      },
    ],
  },
  {
    name: "Libraries & Frameworks",
    skills: [
      {
        name: "🧭 Django",
        years: "5 years",
      },
      {
        name: "🧪 Flask",
        years: "5 years",
      },
      {
        name: "⚡️ FastAPI",
        years: "4 years",
      },
      {
        name: "🐲 Vue.js",
        years: "4 years",
      },
      {
        name: "🏔️ Alpine.js",
        years: "4 years",
      },
      {
        name: "🛡️ Angular",
        years: "1 year",
      },
      {
        name: "💨 TailwindCSS",
        years: "5 years",
      },
      {
        name: "🛠️ Rest API",
        years: "5 years",
      },
      {
        name: "🧹 Web Scraping",
        years: "7 years",
      },
      {
        name: "🥬 Celery",
        years: "5 years",
      },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      {
        name: "🐳 Docker",
        years: "4 years",
      },
      {
        name: "☸️ Kubernetes",
        years: "2 years",
      },
      {
        name: "🔄 Github Workflow",
        years: "3 years",
      },
      {
        name: "🛍️ Shopify",
        years: "5 years",
      },
      {
        name: "☁️ Cloud",
        years: "4 years",
      },
      {
        name: "🐞 Testing",
        years: "5 years",
      },
      {
        name: "🗄️ MySQL",
        years: "7 years",
      },
      {
        name: "🐘 PostgreSQL",
        years: "7 years",
      },
      {
        name: "🔮 MongoDB",
        years: "4 years",
      },
      {
        name: "⌛️ Redis",
        years: "5 years",
      },
    ],
  },
  {
    name: "Languages",
    skills: [
      {
        name: "🇺🇸 English",
        years: "Fluent",
      },
      {
        name: "🇵🇱 Polish",
        years: "Native",
      },
      {
        name: "🇪🇸 Spanish",
        years: "Fluent",
      },
      {
        name: "🇧🇷 Portuguese",
        years: "Advanced",
      },
    ],
  },
];
