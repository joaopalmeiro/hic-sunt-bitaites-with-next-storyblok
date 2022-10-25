import '../styles/globals.css'

// https://nextjs.org/docs/advanced-features/custom-app
// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
// https://github.com/vercel/next.js/blob/canary/examples/with-tailwindcss/pages/_app.tsx
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
