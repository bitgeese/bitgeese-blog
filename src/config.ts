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

export const EXPERIENCE = [
  {
    "position": "Backend Engineer, DDOS",
    "company": "G-Core",
    "website": "https://gcore.com",
    "country": "Luxembourg",
    "start": "2022",
    "end": "Present",
    "stack": ["🐍 Python", "🧭 Django", "⚡️ FastApi", "🐘 PostgreSQL", "🥬 Celery", "⌛️ Redis", "🐰 RabbitMQ", "🐳 Docker", "☸️ Kubernetes", "📊 Grafana"],
    "description": [
      "Created a tool to better track errors, making it easier to fix bugs.",
      "Made new data collection points using FastAPI in REST API work.",
      "Led the creation of a REST API for a new product, offering advanced AI features for clients.",
      "Improved the workflow with new checks and task monitoring using Grafana and Flower.",
      "Helped new team members settle in, improving teamwork and efficiency.",
      "Assessed a new company's product, helping with important decisions."
    ]
  },
  {
    "position": "Backend Engineer",
    "company": "LeadSherpa",
    "country": "United States",
    "start": "May 2022",
    "end": "Dec 2022",
    "stack": ["🐍 Python", "🧭 Django", "⚡️ FastAPI", "🐘 PostgreSQL", "🤸 ElasticSearch", "🥬 Celery", "⌛️ Redis", "🐳 Docker", "☁️ AWS"],
    "description": [
      "Created new Django REST API endpoints, improving app functionality.",
      "Optimized slow components, enhancing app performance and user satisfaction.",
      "Updated outsourced legacy code, enhancing code quality.",
      "Developed features for internal tools, reducing ticket resolution time.",
      "Led new feature implementation in flagship product, aiding market success.",
      "Improved product quality by increasing test coverage."
    ]
  },
  {
    "position": "Full Stack Developer",
    "company": "Losource LTD",
    "country": "United Kingdom",
    "start": "May 2021",
    "end": "May 2022",
    "stack": ["🏗️ JavaScript", "💨 TailwindCSS", "🔨 11ty", "🖊️ Sanity", "🛍️ Shopify API", "🐍 Python", "🧭 Django", "🐘 Postgres"],
    "description": [
      "Developed key website components, boosting user engagement.",
      "Integrated e-commerce features using Shopify Cart API, increasing sales conversions.",
      "Assisted in building robust back-ends with 11ty and headless CMS systems like Sanity, enhancing content management.",
      "Created custom REST APIs with Django, improving website functionality and user experience."
    ]
  },
  {
    "position": "Full Stack Developer",
    "company": "NextPower Capital Advisors",
    "country": "United States",
    "start": "Jan 2021",
    "end": "May 2021",
    "stack": ["🐍 Python", "🧭 Django", "🐘 Postgres", "⚒️ TMX", "🏗️ JavaScript", "🏔️ Alpine.js", "💨 TailwindCSS", "🐳 Docker"],
    "description": [
      "Developed new parts of the website using Bootstrap, HTMX, and Alpine.js, which greatly improved the look and feel.",
      "Designed databases and REST APIs using Django and the Django Rest Framework, which made handling data more efficient.",
      "Improved code quality, increased test coverage, and simplified CI/CD pipelines, which led to better operational efficiency."
    ]
  },
  {
    "position": "Full Stack Developer",
    "company": "GigB GmbH",
    "country": "Germany",
    "start": "Mar 2020",
    "end": "Jan 2021",
    "stack": ["🐍 Python", "🧭 Django", "🐘 Postgres", "🥬 Celery", "⌛️ Redis", "🏗️ JavaScript", "🐲 Vue.js", "💨 TailwindCSS", "🐳 Docker"],
    "description": [
      "Developed a CRM/CMS for the music/events industry.",
      "Created a tool for easy professional band website construction.",
      "Expedited project timelines with a quickly implemented Application Dashboard.",
      "Enhanced data management with efficient database models.",
      "Improved app functionality/compatibility with a Django Rest Framework REST API."
    ]
  },
  {
    "position": "Full Stack Developer",
    "company": "CrowdEngage",
    "country": "United Kingdom",
    "start": "Aug 2019",
    "end": "Mar 2020",
    "stack": ["🐍 Python", "🧭 Django", "🐘 Postgres", "🥬 Celery", "⌛️ Redis", "🏗️ JavaScript", "🐲 Vue.js", "💨 TailwindCSS", "🐳 Docker"],
    "description": [
      "Developed an Application Dashboard with TailwindCSS and Alpine.js for enhanced UI/UX.",
      "Improved data management with effective database models.",
      "Increased app functionality with a robust REST API using Django Rest Framework.",
      "Introduced testing coverage, CI/CD pipeline with code checks and tests."
    ]
  },
  {
    "position": "Full Stack Developer",
    "company": "Freelance",
    "country": "Poland",
    "start": "Aug 2017",
    "end": "Aug 2019",
    "stack": ["🐍 Python", "🧭 Django", "🧪 Flask", "🔺 Pyramid", "🗄️ MySQL", "🐘 Postgres", "🥬 Celery", "⌛️ Redis", "🐰 RabbitMQ", "🏗️ JavaScript", "🐲 Vue.js"],
    "description": [
      "Created unique web applications and REST APIs for international clients.",
      "Expedited initial product versions for quicker market testing.",
      "Established advanced web scraping systems for efficient data collection."
    ]
  }
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
        "name": "🐘 PostgreSQL",
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
