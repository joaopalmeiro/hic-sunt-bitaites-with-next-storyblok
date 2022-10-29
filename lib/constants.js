export const ARROWS = ['→', '⇢'];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/date.js
export const DATE_FORMATTER = new Intl.DateTimeFormat('pt-PT', {
  dateStyle: 'long',
});

export const BLOG_TITLE = 'Hic Sunt Bitaites';
