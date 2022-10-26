// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/posts/%5Bslug%5D.js
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/hero-post.js
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/post-body.js
// https://github.com/storyblok/storyblok-js-client#using-the-richtextresolver-separately
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/lib/api.js#L84
import { getAllPostsWithSlug, getPostBySlug } from '../../lib/api';

export default function Post({ post }) {
  return <p>{JSON.stringify(post)}</p>;
}

// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/posts/%5Bslug%5D.js#L70
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
// https://github.com/PedroEdu6786/personal-blog/blob/develop/pages/blogs/%5BblogId%5D.tsx#L32
export async function getStaticPaths() {
  const data = await getAllPostsWithSlug('posts/');
  const posts = data.stories;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  // console.log(paths);

  return {
    paths,
    // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  const slug = params.slug;
  // console.log(slug);

  const data = await getPostBySlug(`posts/${slug}`);
  // console.log(data);

  return {
    props: { post: data.story },
  };
}
