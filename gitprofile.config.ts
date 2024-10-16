// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AmaranAlexander', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'hamiAntiIRLTrader',
          description: 'Led a team of four developers to create HamiAntiIRLTrader, a Discord bot that tracked and reported black-market item transactions on a server with over 1,000 members. Implemented a reporting system and developed a React-based website for live tracking of reported traders. Managed bot functionality, database reliability, and seamless integration across platforms, ensuring real-time updates for the community. Tools used included Python, React, Next.js, Repl.it, and Vercel.',
          imageUrl:
            'https://cdn.discordapp.com/attachments/847275130987347971/1296231321944985620/anti_irl_trader.png?ex=671188fd&is=6710377d&hm=585b875ee506a8ed6eafb72968fe022bd5e575f09fe4bdcb8b681e288550ae1e&',
          link: '',
        },
        {
          title: 'Simple 1v1 TicTacToe',
          description: '◦ Developed a Simple Tic Tac Toe game using React, focusing on a clean and interactive user experience. ◦ Hosted the game on Vercel, making it accessible as a web application for easy access and play. ◦ Tools Used: React, Next.js, Vercel',
          imageUrl:
            'https://cdn.discordapp.com/attachments/847275130987347971/1296236969759866952/image.png?ex=67118e40&is=67103cc0&hm=e2ca9ca8ef2aa8dee4f6b2aba5cd068fb3e24e977d97e8a3dc91b2241297ea8d&',
          link: 'https://1v1tactoe.vercel.app/',
        },
        {
          title: 'Supreme Lube Website',
          description: 'Led a two-person development team to create and manage a website using WordPress and C++, ensuring seamless integration of features and functionality. ◦ Worked closely with the website owner on a 1-on-1 basis to understand their specific needs, goals, and vision, ensuring the site reflected their brand identity and business objectives. ◦ Conducted in-depth SEO research and analysis to identify high-impact keywords, optimize on-page elements (titles, meta descriptions, etc.), and improve the website’s search engine rankings.',
          imageUrl:
            'https://cdn.discordapp.com/attachments/847275130987347971/1296238095762718793/image.png?ex=67118f4c&is=67103dcc&hm=01c4651bbf01d549972cfd4dd614b30d5599017cd1d5a5f7e13dbbe9151c11ed&',
          link: 'https://supremelube.ca/',
        },
      ],
    },
  },
  seo: {
    title: 'Amaran Alexander Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'amaran_guapo',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'tba',
    phone: '416-553-1359',
    email: 'amaran.alexander@gmail.com',
  },
  resume: {
    fileUrl:
      'https://crimson-ira-30.tiiny.site/', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'C++',
    'C',
    'Java',
    'Next.js',
    'SQL',
    'Wordpress',
    'Python',
    'Bash(Linux Commands)'
  ],
  experiences: [
    {
      company: 'Supreme Lube',
      position: 'Customer Service Representative & Administrative Assistant',
      from: 'May 2023',
      to: 'Sept 2024',
      companyLink: 'http://supremelube.ca/',
    },
    {
      company: 'Supreme Lube',
      position: 'Full-Stack Development and SEO Optimization',
      from: 'May 2024',
      to: 'Sept 2024',
      companyLink: 'http://supremelube.ca/',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Western Ontario',
      degree: 'BS in Computer Science',
      from: '2023',
      to: '2027',
    }
  ],
  publications: [
    {
      title: 'KNN Algorithm Vs SVM Algorithm In the Detection of Breast Cancer',
      conferenceName: '',
      journalName: '',
      authors: 'Amaran Alexander',
      link: 'https://github.com/AmaranAlexander/KNN-SVM-Breast-Cancer-Detection-Comparison/blob/main/KNN-SVM-Breast-Cancer-Detection.pdf',
      description: 'Breast cancer is one of the leading causes of death among women globally. Accurate and early detection is critical in increasing survival rates. This project compares the accuracy of two supervised machine learning algorithms—KNN and SVM—to see which algorithm is more effective in detecting malignant breast cancer cells. The paper accompanying this repository explores the implementation, performance, and evaluation of these two algorithms on the breast cancer dataset.'
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
