import ReactDOMServer from 'react-dom/server';
import { Feed } from 'feed';
import { mkdir, writeFile } from 'fs/promises';

import { getAllBlogs } from './getAllBlogs';

export async function generateRssFeed() {
  let blogs = await getAllBlogs();
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  let author = {
    name: 'Mehul Thakkar',
    email: 'mehulthakkar02@gmail.com',
  };

  let feed = new Feed({
    title: author.name,
    description:
      'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  });

  for (let blog of blogs) {
    let url = `${siteUrl}/blogs/${blog.slug}`;
    let html = ReactDOMServer.renderToStaticMarkup(
      <blog.component isRssFeed />
    );

    feed.addItem({
      title: blog.title,
      id: url,
      link: url,
      description: blog.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(blog.date),
    });
  }

  await mkdir('./public/rss', { recursive: true });
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ]);
}
