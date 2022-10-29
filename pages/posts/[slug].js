// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/posts/%5Bslug%5D.js
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/hero-post.js
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/post-body.js
// https://github.com/storyblok/storyblok-js-client#using-the-richtextresolver-separately
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/lib/api.js#L84
import Head from 'next/head';
import RichTextResolver from 'storyblok-js-client/dist/richTextResolver';

import Container from '../../components/container';
import DateComponent from '../../components/date';
import Header from '../../components/header';
import { getAllPostsWithSlug, getPostBySlug } from '../../lib/api';
import { BLOG_TITLE } from '../../lib/constants';
import { genLocalString } from '../../lib/utils';

export default function Post({ post }) {
  // console.log(styles);
  // console.log(post.html);

  // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/markdown-styles.module.css
  // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/post-body.js#L7
  // https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css
  return (
    <Container>
      <Head>
        <title>
          {post.name} | {BLOG_TITLE}
        </title>
        <meta
          property='og:image'
          content={`https://hic-sunt-bitaites-with-next-storyblok.vercel.app/api/og?title=${post.name}`}
        />
      </Head>

      <Header />

      <article
        dangerouslySetInnerHTML={{ __html: post.html }}
        // https://tailwindcss.com/docs/typography-plugin#basic-usage
        // https://tailwindcss.com/docs/customizing-colors
        className='prose prose-slate mt-4 lg:mt-12 lg:prose-xl'
      />

      {/* https://flowbite.com/docs/typography/hr/ */}
      <hr className='my-6 h-px border-0 bg-slate-200' />

      <span className='mb-12 inline-block text-sm text-slate-500 lg:text-base'>
        {genLocalString(post.content.Local)}
        <DateComponent dt={post.first_published_at} />
      </span>
    </Container>
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
