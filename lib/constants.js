import trainIcon from '@iconify/icons-fluent-emoji-high-contrast/train';

export const ARROWS = ['→', '⇢'];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/components/date.js
export const DATE_FORMATTER = new Intl.DateTimeFormat('pt-PT', {
  dateStyle: 'long',
});

export const BLOG_TITLE = 'Hic Sunt Bitaites';
export const BASE_URL = 'https://hicsuntbitait.es';

// https://icon-sets.iconify.design/fluent-emoji-high-contrast/
export const LOCAL_ICONS = {
  // https://icon-sets.iconify.design/fluent-emoji-high-contrast/train/
  comboio: trainIcon,
};
