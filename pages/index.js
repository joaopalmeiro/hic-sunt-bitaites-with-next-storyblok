import random from 'just-random';
import Link from 'next/link';

import Container from '../components/container';
import Header from '../components/header';
import { getAllPostsWithSlug } from '../lib/api';
import { ARROWS, DATE_FORMATTER } from '../lib/constants';

// https://tailwindcss.com/docs/guides/nextjs
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/index.js
export default function Home({ allPosts, postArrows }) {
  // console.log(allPosts);
  // console.log(postArrows);

  // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/post-preview.js#L19
  // https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
  return (
    <Container>
      <Header />
      <main className='flex flex-col gap-6'>
        {allPosts.map((post, index) => (
          <Link href={post.full_slug} key={post.slug}>
            {/* https://github.com/delbaoliveira/website/blob/main/ui/Navigation.tsx#L17 */}
            <a className='group flex flex-row justify-between border-b-2 border-white hover:cursor-alias hover:border-slate-100'>
              <div>
                <h2 className='text-2xl text-slate-800'>
                  {post.content.Title}
                </h2>
                <span className='text-slate-500'>
                  A partir de um {post.content.Local} •{' '}
                  <time dateTime={post.first_published_at}>
                    {DATE_FORMATTER.format(new Date(post.first_published_at))}
                  </time>
                </span>
              </div>
              <span className='flex items-center p-4 text-xl text-slate-500 group-hover:bg-slate-100 group-hover:text-slate-800'>
                {postArrows[index]}
              </span>
            </a>
          </Link>
        ))}
      </main>
      {/* https://radu.link/make-footer-stay-bottom-page-tailwind-css/ */}
      {/* <footer className='mt-auto'>João Palmeiro</footer> */}
    </Container>
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
