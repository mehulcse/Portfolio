import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Mehul Thakkar</title>
        <meta
          name="description"
          content="Software I use, tools I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, tools I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Frontend Technologies / Skills">
            <Tool title="Javascript">
              As Jeff Atwood said in 2007, &quot;Any application that can be
              written in JavaScript, will eventually be written in
              JavaScript.&quot; I couldn&apos;t agree more. I&apos;ve been using
              Javascript for <b>over 10 years</b> now and I&apos;m still
              learning new things every day.
            </Tool>
            <Tool title="React JS">
              It&apos;s not the newest kid on the block anymore, but it&apos;s
              one of the best out there, I&apos;ve been using React for{' '}
              <b>over 7 years</b> now and I&apos;ve built a lot of apps with it.
              The comfort and familiarity of React makes it a joy to work with.
            </Tool>
            <Tool title="Next">
              Next is taking the React ecosystem to the Next* level by storm.
              It&apos;s a great tool for building static and server-rendered
              applications using React. I have been using Next for{' '}
              <b>over 4 years.</b>
            </Tool>
            <Tool title="AngularJS">
              AngularJS was a revolutionary framework for frontend development.
              I have used AngularJS for <b>over 2 years.</b>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Backend Technologies / Skills">
            <Tool title="NodeJS">
              NodeJS is a great framework for building server-side applications.
              I&apos;ve been using NodeJS for <b>over 7 years</b> with REST and
              GraphQL APIs.
            </Tool>
            <Tool title="GraphQL">
              After using REST APIs for a long time, I felt like there should be
              a better way to fetch only the data that I need. GraphQL is that
              better way. I&apos;ve been using GraphQL for <b>over 5 years</b>{' '}
              now.
            </Tool>
            <Tool title="GoLang">
              NodeJS is great for building server-side applications, but I
              struggled with performance and scaling. Go came to my rescue to
              help me build performant and scalable applications. I&apos;ve been
              using Go for <b>around 2 years</b> now.
            </Tool>
            <Tool title="Rust / Wasm">
              I&apos;ve recently started learning Rust and WebAssembly. This
              combination is game changer, At times I feel like I&apos;m writing
              C code in Javascript which puts front-end performance on steroid.
              I&apos;ve been using Rust for <b>around 1 year</b> now.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Fullstack Framework? (Maybe)">
            <Tool title="Remix">
              Since initial discussions about React Server Components I was very
              excited to see how it would change the way we build web
              applications, but before it was released Remix made a grand entry
              into the scene. Remix looks like a fullstack framework for
              building server-rendered applications using React. I&apos;ve been
              using Remix for my pet projects to learn more about it.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Database Technologies / Skills">
            <Tool title="PostgreSQL">
              PostgreSQL is a great RDBMS with extensibility and SQL compliance.
              I&apos;ve been using PostgreSQL for <b>over 7 years</b> now.
            </Tool>
            <Tool title="MongoDB">
              MongoDB is a great NoSQL database. I&apos;ve been using MongoDB
              for <b>over 5 years</b> now.
            </Tool>
            <Tool title="DynamoDB">
              While working on AWS, I&apos;ve used DynamoDB when I needed a
              NoSQL database. Though I&apos;ve used it for a short period of
              time, I&apos;ve found it to be a useful one.
            </Tool>
          </ToolsSection>
          <ToolsSection title="DevOps / Cloud Technologies">
            <Tool title="AWS">
              I&apos;ve extensively used AWS for building and deploying
              applications with several AWS services. I&apos;m an{' '}
              <b>AWS Certified Solutions Architect - Associate.</b>
            </Tool>
            <Tool title="Serverless Architecture">
              I&apos;ve used serverless architecture to build and deploy variety
              of application including my pet projects and Alexa skills. These
              days I&apos;m getting familiar with CDK to build serverless
              applications.
            </Tool>
            <Tool title="Netlify">
              Netlify is a great tool for building and deploying static
              websites. My primary usage includes deployment of static websites
              to netlify.
            </Tool>
            <Tool title="Vercel">
              My primary usage of Vercel is deployment of NextJS applications
              and my own portfolio website.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Headless CMS">
            <Tool title="Contentful">
              My first interaction with a headless CMS was with Contentful.
              I&apos;ve fallen in to love with the ease of use and the
              flexibility it provides. I&apos;ve used contentful for several
              marketing websites for my clients.
            </Tool>
            <Tool title="Strapi">
              Strapi is an open-source headless CMS. It&apos;s a great
              alternative to Contentful. I&apos;ve used Strapi for my pet
              projects.
            </Tool>
            <Tool title="Swell">
              Swell is a headless e-commerce platform. I&apos;ve used Swell for
              my pet projects.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool, but now it&apos;s
              become our virtual whiteboard for the entire company. Never would
              have expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Source Control">
            <Tool title="GitHub">
              GitHub is my stop solution for all professional and personal
              projects. With the grand entry of GitHub Copilot, I&apos;m looking
              forward to see how it&apos;s going to change the way I code.
            </Tool>
            <Tool title="Bitbucket">
              I have used bitbucket for numerous client projects, but I&apos;ve
              found GitHub more useful for me.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Tools">
            <Tool title="IntelliJ IDE">
              IntelliJ IDE is one stop solution for most of my development
              needs.
            </Tool>
            <Tool title="iTerm2">
              I&apos;m honestly not even sure what features I get with this that
              aren&apos;t just part of the macOS Terminal but it&apos;s what I
              use. Though I would like to give a try to Warp.
            </Tool>
            <Tool title="Notion">
              Notion is a lifesaver app for me with so many features. Shout out
              to the Notion team for building such a great app.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
