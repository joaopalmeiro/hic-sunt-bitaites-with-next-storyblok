// https://tailwindcss.com/docs/guides/nextjs
export default function Home() {
  return <h1 className='text-3xl font-bold underline'>Hello world!</h1>;
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props#when-should-i-use-getstaticprops
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/index.js
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
// https://github.com/PedroEdu6786/personal-blog/blob/develop/src/lib/api.ts#L16
// https://www.storyblok.com/docs/api/content-delivery
export async function getStaticProps() {}
