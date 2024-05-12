import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bitgeese.io/", // replace this with your deployed domain
  author: "Maciej Janowski",
  desc: "Maciej Janowski | Backend Python Developer",
  title: "BitGeese",
  ogImage: "astropaper-og.jpg",
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

export const SKILLS = [
  {
    name: "Programming and Web Development",
    skills: [
      {
        "name": "🐍 Python",
        "years": 7
      },
      {
        "name": "🏗️ JavaScript",
        "years": 7
      },
      {
        "name": "🌍 HTML",
        "years": 8
      },
      {
        "name": "✨ CSS",
        "years": 8
      },
      {
        "name": "🧭 Django",
        "years": 5
      },
      {
        "name": "🧪 Flask",
        "years": 5
      },
      {
        "name": "⚡️ FastAPI",
        "years": 4
      },
      {
        "name": "Rest API",
        "years": 5
      },
      {
        "name": "🧹 Web Scraping",
        "years": 7
      },
      {
        "name": "💨 TailwindCSS",
        "years": 5
      },
      {
        "name": "🐲 Vue.js",
        "years": 4
      },
      {
        "name": "🏔️ Alpine.js",
        "years": 4
      },
      {
        "name": "🛡️ Angular",
        "years": 1
      }
    ]
  },
  {
    name: "Databases and Task Processing",
    skills: [
      {
        "name": "🗄️ MySQL",
        "years": 7
      },
      {
        "name": "🗄️ PostgreSQL",
        "years": 7
      },
      {
        "name": "🔮 MongoDB",
        "years": 4
      },
      {
        "name": "🥬 Celery",
        "years": 5
      },
      {
        "name": "⌛️ Redis",
        "years": 5
      }
    ]
  },
  {
    name: "DevOps and Other Skills",
    skills: [
      {
        "name": "🐳 Docker",
        "years": 4
      },
      {
        "name": "☸️ Kubernetes",
        "years": 2
      },
      {
        "name": "🔄 Github Workflow",
        "years": 3
      },
      {
        "name": "📝 Technical writing",
        "years": 6
      },
      {
        "name": "🛍️ Shopify",
        "years": 5
      },
      {
        "name": "☁️ Cloud",
        "years": 4
      },
      {
        "name": "🐞 Testing",
        "years": 5
      }
    ]
  },
  {
    "name": "Languages",
    "skills": [
      {
        "name": "🇺🇸 English",
        "years": "Fluent"
      },
      {
        "name": "🇵🇱 Polish",
        "years": "Native"
      },
      {
        "name": "🇪🇸 Spanish",
        "years": "Fluent"
      },
      {
        "name": "🇧🇷 Portugese",
        "years": "Advanced"
      }
    ]
  }
];
