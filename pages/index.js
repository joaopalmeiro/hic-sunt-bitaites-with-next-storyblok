import random from 'just-random';
import Link from 'next/link';

import { getAllPostsWithSlug } from '../lib/api';
import { ARROWS, DATE_FORMATTER } from '../lib/constants';

// https://tailwindcss.com/docs/guides/nextjs
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/index.js
export default function Home({ allPosts, postArrows }) {
  // console.log(allPosts);
  // console.log(postArrows);

  // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/post-preview.js#L19
  // https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
  // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/container.js
  // https://tailwindcss.com/docs/container
  // https://next-blog-storyblok.vercel.app/
  return (
    <div className='container mx-auto flex min-h-screen flex-col px-5'>
      <header>
        <h1>Hic Sunt Bitaites</h1>
      </header>
      <main>
        {allPosts.map((post, index) => (
          <Link href={post.full_slug} key={post.slug}>
            <div className='group hover:cursor-alias'>
              <h2 className='group-hover:underline'>{post.content.Title}</h2>
              <span>A partir de um {post.content.Local} • </span>
              <time dateTime={post.first_published_at}>
                {DATE_FORMATTER.format(new Date(post.first_published_at))}
              </time>
              <span className='p-2 group-hover:bg-slate-100'>
                {postArrows[index]}
              </span>
            </div>
          </Link>
        ))}
      </main>
      {/* https://radu.link/make-footer-stay-bottom-page-tailwind-css/ */}
      <footer className='mt-auto'>João Palmeiro</footer>
    </div>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props#when-should-i-use-getstaticprops
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
// https://www.storyblok.com/docs/api/content-delivery
// https://github.com/PedroEdu6786/personal-blog/blob/develop/src/lib/storyblok.ts#L4
// https://github.com/PedroEdu6786/personal-blog/blob/develop/src/lib/storyblok-config.ts
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/index.js#L38
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
export async function getStaticProps() {
  const data = await getAllPostsWithSlug('posts/');
  // console.log(data);

  return {
    props: {
      allPosts: data.stories,
      postArrows: Array(data.stories.length)
        .fill()
        .map(() => random(ARROWS)),
    },
  };
}
