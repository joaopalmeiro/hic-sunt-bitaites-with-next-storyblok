// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// https://github.com/storyblok/storyblok-js-client/blob/main/src/index.ts#L548
// https://github.com/PedroEdu6786/personal-blog/blob/develop/src/lib/storyblok.ts
import StoryblokClient from 'storyblok-js-client';

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
export async function getStaticProps() {
  const Storyblok = new StoryblokClient({
    accessToken: process.env.STORYBLOK_API_KEY,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  });

  // https://github.com/PedroEdu6786/personal-blog/blob/develop/src/lib/api.ts#L16
  // https://www.storyblok.com/docs/api/content-delivery#core-resources/stories/retrieve-multiple-stories
  const { data } = await Storyblok.get('cdn/stories', {
    token: process.env.STORYBLOK_TOKEN,
    version: 'published',
    starts_with: 'posts/',
    // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/lib/api.js#L56
    // sort_by: 'published_at:desc',
    sort_by: 'first_published_at:desc',
    // https://www.storyblok.com/docs/api/content-delivery#topics/cache-invalidation
    cv: Date.now(),
  });
  // console.log(data);

  return {
    props: {
      allPosts: data.stories,
    },
    // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    revalidate: 3600,
  };
}
