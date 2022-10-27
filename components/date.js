import { DATE_FORMATTER } from '../lib/constants';

// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/date.js
export default function DateComponent({ dt }) {
  console.log(dt);
  return <time dateTime={dt}>{DATE_FORMATTER.format(new Date(dt))}</time>;
}
