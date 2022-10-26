// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/container.js
// https://tailwindcss.com/docs/container
// https://next-blog-storyblok.vercel.app/
export default function Container({ children }) {
  return <div className='mx-auto max-w-2xl px-4'>{children}</div>;
}
