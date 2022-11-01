import dragonIcon from '@iconify/icons-fluent-emoji-high-contrast/dragon';
import random from 'just-random';
import Head from 'next/head';
import Link from 'next/link';

import Container from '../components/container';
import DateComponent from '../components/date';
import Header from '../components/header';
import { getAllPostsWithSlug } from '../lib/api';
import { ARROWS, BLOG_TITLE } from '../lib/constants';
import { genFavicon, genLocalString } from '../lib/utils';

// https://tailwindcss.com/docs/guides/nextjs
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/index.js

// https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/
// https://gist.github.com/iansinnott/2e8fe9d9e4c6c7c55793d38f81c999a3
// https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
// https://web.dev/building-an-adaptive-favicon/
export default function Home({ allPosts, postArrows }) {
  // console.log(allPosts);
  // console.log(postArrows);
  // console.log(dragonIcon);

  // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/post-preview.js#L19
  // https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state

  // https://austingil.com/svg-favicons/
  // https://fav.farm/
  // https://emojicon.dev/
  // https://docs.iconify.design/icon-components/react/#offline-use
  // https://docs.iconify.design/icon-components/react/offline.html
  // https://icon-sets.iconify.design/fluent-emoji-high-contrast/dragon/
  // https://docs.iconify.design/icon-components/react/offline.html#modules
  // https://www.npmjs.com/package/mini-svg-data-uri
  return (
    <Container>
      <Head>
        <title>{BLOG_TITLE}</title>
        <link rel='icon' href={genFavicon(dragonIcon)} />
      </Head>

      <Header />

      <main className='mt-4 flex flex-col gap-8 lg:mt-12'>
        {allPosts.map((post, index) => (
          <Link href={post.full_slug} key={post.slug}>
            {/* https://github.com/delbaoliveira/website/blob/main/ui/Navigation.tsx#L17 */}
            <a className='group flex flex-row justify-between border-b-2 border-white hover:cursor-alias hover:border-slate-100'>
              <div>
                <h2 className='text-2xl text-slate-900'>{post.name}</h2>
                <span className='text-sm text-slate-500 lg:text-base'>
                  {genLocalString(post.content.Local)}
                  <DateComponent dt={post.first_published_at} />
                </span>
              </div>
              <span className='flex items-center p-4 text-xl text-slate-500 group-hover:bg-slate-100 group-hover:text-slate-900'>
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
