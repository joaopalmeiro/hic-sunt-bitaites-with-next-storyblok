import { getAllPostsWithSlug } from '../lib/api';

// https://tailwindcss.com/docs/guides/nextjs
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/index.js
export default function Home({ allPosts }) {
  return (
    <>
      <h1>Hic Sunt Bitaites</h1>
      <p>{JSON.stringify(allPosts)}</p>
    </>
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
    },
  };
}
