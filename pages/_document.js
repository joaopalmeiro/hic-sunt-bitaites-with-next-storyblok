import { Html, Head, Main, NextScript } from 'next/document';

// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/_document.js
// https://github.com/PedroEdu6786/personal-blog/blob/develop/pages/_document.tsx
// https://fonts.google.com/specimen/Albert+Sans
// https://fonts.google.com/specimen/Grape+Nuts
// https://nextjs.org/docs/basic-features/font-optimization

// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin (crossorigin or crossorigin="")
export default function Document() {
  return (
    <Html lang='pt-PT'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500&family=Grape+Nuts&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
