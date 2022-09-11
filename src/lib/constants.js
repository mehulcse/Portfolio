import logoTech9 from '@/images/logos/tech9.png';
import logoRCM from '@/images/logos/rcm.jpeg';
import logoPackt from '@/images/logos/packt.jpeg';
import logoMerkleSokrati from '@/images/logos/merkleSokrati.jpeg';
import logoCognizant from '@/images/logos/cognizant.jpeg';
import logoBits from '@/images/logos/bits.jpeg';
import logoGTU from '@/images/logos/gtu.jpeg';
import logoAWS from '@/images/logos/aws.jpeg';

export const WORK = [
  {
    company: 'Tech9',
    title: 'Software Engineer',
    logo: logoTech9,
    start: 'Aug 2016',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Red Canyon Media',
    title: 'Software Engineer',
    logo: logoRCM,
    start: 'Jul 2019',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Packt',
    title: 'Technical Reviewer',
    logo: logoPackt,
    start: 'Oct 2018',
    end: 'Jan 2019',
  },
  {
    company: 'Merkle Sokrati',
    title: 'Software Engineer | FED',
    logo: logoMerkleSokrati,
    start: 'Oct 2015',
    end: 'Aug 2016',
  },
  {
    company: 'Cognizant',
    title: 'Programmer Analyst',
    logo: logoCognizant,
    start: 'Feb 2014',
    end: 'Oct 2015',
  },
  {
    company: 'Xcellance Techno Labs Pvt. Ltd.',
    title: 'Intern',
    start: 'Jul 2012',
    end: 'May 2013',
  },
];

export const EDUCATION = [
  {
    company: 'Birla Institute of Technology and Science, Pilani',
    title: 'M.Tech, Data Science & Engineering',
    logo: logoBits,
    start: 'Mar 2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Gujarat Technological University, Ahmedabad',
    title: 'B.E, Computer Science & Engineering',
    logo: logoGTU,
    start: '2009',
    end: '2013',
  },
];

export const CERTIFICATIONS = [
  {
    company: 'AWS Certified Solutions Architect - Associate',
    title: 'Amazon Web Services',
    logo: logoAWS,
    start: 'Mar 2021',
    end: 'Mar 2024',
    href: 'https://aw.certmetrics.com/amazon/public/verification.aspx',
    credential: '0K1KG49B1M14QMW8',
  },
  {
    company: 'AWS Certified Cloud Practitioner',
    title: 'Amazon Web Services',
    logo: logoAWS,
    start: 'Aug 2019',
    end: 'Mar 2024',
    href: 'https://aw.certmetrics.com/amazon/public/verification.aspx',
    credential: 'RKHXX4WCMEE1QDWW',
  },
];

export const TOOLS_AND_TECH = [
  {
    id: 1,
    title: 'Frontend Technologies / Skills',
    technologies: [
      {
        id: 1,
        title: 'Javascript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        description:
          'As Jeff Atwood said in 2007, &quot;Any application that can be\n' +
          '              written in JavaScript, will eventually be written in\n' +
          '              JavaScript.&quot; I couldn&apos;t agree more. I&apos;ve been using\n' +
          '              Javascript for <b>over 10 years</b> now and I&apos;m still\n' +
          '              learning new things every day.',
      },
      {
        id: 2,
        title: 'React JS',
        href: 'https://reactjs.org/',
        description:
          ' It&apos;s not the newest kid on the block anymore, but it&apos;s\n' +
          '              one of the best out there, I&apos;ve been using React for\n' +
          '              <b>over 7 years</b> now and I&apos;ve built a lot of apps with it.\n' +
          '              The comfort and familiarity of React makes it a joy to work with.',
      },
      {
        id: 3,
        title: 'Next',
        href: 'https://nextjs.org/',
        description:
          'Next is taking the React ecosystem to the Next* level by storm.\n' +
          '              It&apos;s a great tool for building static and server-rendered\n' +
          '              applications using React. I have been using Next for\n' +
          '              <b>over 4 years.</b>',
      },
      {
        id: 4,
        title: 'Angular JS',
        href: 'https://angularjs.org/',
        description:
          'AngularJS was a revolutionary framework for frontend development.\n' +
          '              I have used AngularJS for <b>over 2 years.</b>',
      },
    ],
  },
  {
    id: 2,
    title: 'Backend Technologies / Skills',
    technologies: [
      {
        id: 1,
        title: 'NodeJS',
        href: 'https://nodejs.org/',
        description:
          'NodeJS is a great framework for building server-side applications.\n' +
          '              I&apos;ve been using NodeJS for <b>over 7 years</b> with REST and\n' +
          '              GraphQL APIs.',
      },
      {
        id: 2,
        title: 'GraphQL',
        href: 'https://graphql.org/',
        description:
          'After using REST APIs for a long time, I felt like there should be\n' +
          '              a better way to fetch only the data that I need. GraphQL is that\n' +
          '              better way. I&apos;ve been using GraphQL for <b>over 5 years</b>\n' +
          '              now.',
      },
      {
        id: 3,
        title: 'GoLang',
        href: 'https://go.dev/',
        description:
          'NodeJS is great for building server-side applications, but I\n' +
          '              struggled with performance and scaling. Go came to my rescue to\n' +
          '              help me build performant and scalable applications. I&apos;ve been\n' +
          '              using Go for <b>around 2 years</b> now.',
      },
      {
        id: 4,
        title: 'Rust / Wasm',
        href: 'https://www.rust-lang.org/',
        description:
          'I&apos;ve recently started learning Rust and WebAssembly. This\n' +
          '              combination is game changer, At times I feel like I&apos;m writing\n' +
          '              C code in Javascript which puts front-end performance on steroid.\n' +
          '              I&apos;ve been using Rust for <b>around 1 year</b> now.',
      },
    ],
  },
  {
    id: 3,
    title: 'Fullstack Framework? (Maybe)',
    technologies: [
      {
        id: 1,
        title: 'Remix',
        href: 'https://remix.run/',
        description:
          'Since initial discussions about React Server Components I was very\n' +
          '              excited to see how it would change the way we build web\n' +
          '              applications, but before it was released Remix made a grand entry\n' +
          '              into the scene. Remix looks like a fullstack framework for\n' +
          '              building server-rendered applications using React. I&apos;ve been\n' +
          '              using Remix for my pet projects to learn more about it.',
      },
    ],
  },
  {
    id: 4,
    title: 'Database Technologies / Skills',
    technologies: [
      {
        id: 1,
        title: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        description:
          'PostgreSQL is a great RDBMS with extensibility and SQL compliance.\n' +
          '              I&apos;ve been using PostgreSQL for <b>over 7 years</b> now.',
      },
      {
        id: 2,
        title: 'MongoDB',
        href: 'https://www.mongodb.com/',
        description:
          'MongoDB is a great NoSQL database. I&apos;ve been using MongoDB\n' +
          '              for <b>over 5 years</b> now.',
      },
      {
        id: 3,
        title: 'DynamoDB',
        href: 'https://aws.amazon.com/dynamodb/',
        description:
          'While working on AWS, I&apos;ve used DynamoDB when I needed a\n' +
          '              NoSQL database. Though I&apos;ve used it for a short period of\n' +
          '              time, I&apos;ve found it to be a useful one.',
      },
    ],
  },
  {
    id: 5,
    title: 'DevOps / Cloud Technologies',
    technologies: [
      {
        id: 1,
        title: 'AWS',
        href: 'https://aws.amazon.com/',
        description:
          ' I&apos;ve extensively used AWS for building and deploying\n' +
          '              applications with several AWS services. I&apos;m an\n' +
          '              <b>AWS Certified Solutions Architect - Associate.</b>',
      },
      {
        id: 2,
        title: 'Serverless Architecture',
        href: 'https://sst.dev/',
        description:
          ' I&apos;ve used serverless architecture to build and deploy variety\n' +
          '              of application including my pet projects and Alexa skills. These\n' +
          '              days I&apos;m getting familiar with CDK to build serverless\n' +
          '              applications.',
      },
      {
        id: 3,
        title: 'Netlify',
        href: 'https://www.netlify.com/',
        description:
          ' Netlify is a great tool for building and deploying static\n' +
          '              websites. My primary usage includes deployment of static websites\n' +
          '              to netlify.',
      },
      {
        id: 4,
        title: 'Vercel',
        href: 'https://vercel.com/',
        description:
          'My primary usage of Vercel is deployment of NextJS applications\n' +
          '              and my own portfolio website.',
      },
    ],
  },
  {
    id: 6,
    title: 'Headless CMS',
    technologies: [
      {
        id: 1,
        title: 'Contentful',
        href: 'https://www.contentful.com/',
        description:
          'My first interaction with a headless CMS was with Contentful.\n' +
          '              I&apos;ve fallen in to love with the ease of use and the\n' +
          '              flexibility it provides. I&apos;ve used contentful for several\n' +
          '              marketing websites for my clients.',
      },
      {
        id: 2,
        title: 'Strapi',
        href: 'https://strapi.io/',
        description:
          'Strapi is an open-source headless CMS. It&apos;s a great\n' +
          '              alternative to Contentful. I&apos;ve used Strapi for my pet\n' +
          '              projects.',
      },
      {
        id: 3,
        title: 'Swell',
        href: 'https://www.swell.is/',
        description:
          'Swell is a headless e-commerce platform. I&apos;ve used Swell for\n' +
          '              my pet projects.',
      },
    ],
  },
  {
    id: 7,
    title: 'Design',
    technologies: [
      {
        id: 1,
        title: 'Figma',
        href: 'https://www.figma.com/',
        description:
          'We started using Figma as just a design tool, but now it&apos;s\n' +
          '              become our virtual whiteboard for the entire company. Never would\n' +
          '              have expected the collaboration features to be the real hook.',
      },
    ],
  },
  {
    id: 8,
    title: 'Source Control',
    technologies: [
      {
        id: 1,
        title: 'GitHub',
        href: 'https://github.com/',
        description:
          'GitHub is my stop solution for all professional and personal\n' +
          '              projects. With the grand entry of GitHub Copilot, I&apos;m looking\n' +
          '              forward to see how it&apos;s going to change the way I code.',
      },
      {
        id: 2,
        title: 'Bitbucket',
        href: 'https://bitbucket.org/product',
        description:
          'I have used bitbucket for numerous client projects, but I&apos;ve\n' +
          '              found GitHub more useful for me.',
      },
    ],
  },
  {
    id: 9,
    title: 'Tools',
    technologies: [
      {
        id: 1,
        title: 'IntelliJ IDEA',
        href: 'https://www.jetbrains.com/idea/',
        description:
          'IntelliJ IDE is one stop solution for most of my development\n' +
          '              needs.',
      },
      {
        id: 2,
        title: 'iTerm2',
        href: 'https://iterm2.com/',
        description:
          'I&apos;m honestly not even sure what features I get with this that\n' +
          '              aren&apos;t just part of the macOS Terminal but it&apos;s what I\n' +
          '              use. Though I would like to give a try to Warp.',
      },
      {
        id: 3,
        title: 'Notion',
        href: 'https://www.notion.so/',
        description:
          'Notion is a lifesaver app for me with so many features. Shout out\n' +
          '              to the Notion team for building such a great app.',
      },
    ],
  },
];

export const PATENT_DATE = '2022-05-31';
