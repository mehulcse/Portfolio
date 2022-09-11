import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  StackOverflowIcon,
  BriefcaseIcon,
  PatentIcon,
  EducationIcon,
  CertificateIcon,
} from '@/components/Icons';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllBlogs } from '@/lib/getAllBlogs';
import { formatDate } from '@/lib/formatDate';
import { CERTIFICATIONS, EDUCATION, PATENT_DATE, WORK } from '@/lib/constants';
import clsx from 'clsx';

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Blog({ blog }) {
  return (
    <Card as="blog">
      <Card.Title href={`/blogs/${blog.slug}`}>{blog.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date)}
      </Card.Eyebrow>
      <Card.Description>{blog.description}</Card.Description>
      <Card.Cta>Read blog</Card.Cta>
    </Card>
  );
}

function Patent() {
  return (
    <div className="mt-9 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <PatentIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Patent</span>
        <span className="ml-auto">{formatDate(PATENT_DATE)}</span>
      </h2>
      <h3 className="mt-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        Step through process of generating custom jewelry
      </h3>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        A server for generating custom jewelry through a step-by-step
        customization process can be configured to send display instructions
        over a network to display a plurality of available selections for a
        first customization option at a remote computer system.
      </p>
      <Card as="blog" className="mt-2">
        <Link href="/patent">
          <Card.Cta>Read more</Card.Cta>
        </Link>
      </Card>
    </div>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" target="_blank" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function ResumeListItem({ role }) {
  return (
    <li>
      <Link
        href={role?.href || '#'}
        className={clsx(
          'flex gap-4',
          role?.href ? 'cursor-pointer' : 'cursor-auto'
        )}
      >
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          {role.logo && (
            <Image
              src={role.logo}
              alt=""
              className="h-9 w-9 rounded-full"
              unoptimized
            />
          )}
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.company}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd
            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label={`${role.start.label ?? role.start} until ${
              role.end.label ?? role.end
            }`}
          >
            <time dateTime={role.start.dateTime ?? role.start}>
              {role.start.label ?? role.start}
            </time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={role.end.dateTime ?? role.end}>
              {role.end.label ?? role.end}
            </time>
          </dd>
          {role?.credential && (
            <>
              <br />
              <dt className="sr-only">Credential</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                Credential ID: {role.credential}
              </dd>
            </>
          )}
        </dl>
      </Link>
    </li>
  );
}

function Resume({ resume, title, showDownload }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {title === 'Work' ? (
          <BriefcaseIcon className="h-6 w-6 flex-none" />
        ) : title === 'Education' ? (
          <EducationIcon className="h-6 w-6 flex-none" />
        ) : (
          <CertificateIcon className="h-6 w-6 flex-none" />
        )}
        <span className="ml-3">{title}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume?.map((role, roleIndex) => (
          <ResumeListItem key={roleIndex} role={role} />
        ))}
      </ol>
      {showDownload && (
        <Button
          href="https://drive.google.com/file/d/1RQTPXjf1Bhq_gpMWIBPvz20LNpsApgbe/view?usp=sharing"
          target="_blank"
          variant="secondary"
          className="group mt-6 w-full"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      )}
    </div>
  );
}

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>
          Mehul Thakkar - Inventor, software developer, history buff and a
          budding entrepreneur.
        </title>
        <meta
          name="description"
          content="I'm Mehul, Inventor, software developer, history buff and a budding
            entrepreneur."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Inventor, software developer, history buff and a budding
            entrepreneur.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Mehul, an inventor and a software developer based in Pune.
            I&apos;ve around 10+ years of experience in building apps and
            websites in fast-paced, collaborative environments. Skilled in JS,
            React, Next, Remix, GraphQL, Node, Go and an AWS Certified solution
            architect - associate.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/mehulcse"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/mehulcse/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://stackoverflow.com/users/6888239/mehul-thakkar"
              aria-label="Follow on Stackoverflow"
              icon={StackOverflowIcon}
            />
            <SocialLink
              href="https://twitter.com/mehulcse"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
          </div>
        </div>
        <Patent />
      </Container>
      <Container className="md:mt-18 mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {blogs.map((blog) => (
              <Blog key={blog.slug} blog={blog} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume resume={CERTIFICATIONS} title="Certifications" />
            <Resume resume={WORK} showDownload title="Work" />
            <Resume resume={EDUCATION} showDownload={false} title="Education" />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      blogs: (await getAllBlogs())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
