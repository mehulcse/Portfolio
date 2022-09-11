import Head from 'next/head';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import Link from 'next/link';
import { PatentIcon } from '@/components/Icons';
import { formatDate } from '@/lib/formatDate';
import { PATENT_DATE } from '@/lib/constants';

export default function Patent() {
  return (
    <>
      <Head>
        <title>Patent - Mehul Thakkar</title>
        <meta
          name="description"
          content="I'm fortunate to be a part of team that have been granted a patent on a jewelry design tool."
        />
      </Head>
      <SimpleLayout title="I'm fortunate to be a part of team that have been granted a patent on a jewelry design tool.">
        <div className="space-y-50">
          <h2 className="flex text-sm text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:items-start md:items-end">
            <PatentIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">
              Step through process of generating custom jewelry
            </span>
          </h2>
          <p className="mt-8 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <span>United States Patent</span>
            <span className="ml-auto">11,348,155</span>
          </p>
          <p className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <span>Isaacson , et al.</span>
            <span className="ml-auto">{formatDate(PATENT_DATE)}</span>
          </p>
          <p className="mt-8 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <span>Abstract</span>
          </p>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            A server for generating custom jewelry through a step-by-step
            customization process can be configured to send display instructions
            over a network to display a plurality of available selections for a
            first customization option at a remote computer system. The server
            can also access a first product photo based on a user selection at
            the remote computer system of an available selection for the first
            customization option. Further, the server can send display
            instructions over a network to display a plurality of available
            selections for a second customization option at the remote computer
            system. The server can then access an updated product photo based on
            a user selection at the remote computer system of an available
            selection for the second customization option. Finally, the server
            can send over the network display instructions to the remote
            computer system for the updated product photo.
          </p>
          <Card as="blog" className="mt-2">
            <Link
              href="https://uspto.report/patent/grant/11348155"
              target="_blank"
            >
              <Card.Cta>Read more about patent</Card.Cta>
            </Link>
          </Card>
        </div>
      </SimpleLayout>
    </>
  );
}
