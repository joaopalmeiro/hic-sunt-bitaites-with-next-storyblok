// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/posts/%5Bslug%5D.js
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/hero-post.js
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/post-body.js
// https://github.com/storyblok/storyblok-js-client#using-the-richtextresolver-separately
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/lib/api.js#L84
import RichTextResolver from 'storyblok-js-client/dist/richTextResolver';

import { getAllPostsWithSlug, getPostBySlug } from '../../lib/api';

import styles from './posts.module.css';

export default function Post({ post }) {
  console.log(styles);

  // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/markdown-styles.module.css
  // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/post-body.js#L7
  // https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className={styles['post']}
      />
      <p>{JSON.stringify(post)}</p>
    </>
  );
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
    props: {
      post: {
        ...data.story,
        html: new RichTextResolver().render(data.story.content.Body),
      },
    },
  };
}
