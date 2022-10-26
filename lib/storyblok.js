// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// https://github.com/storyblok/storyblok-js-client/blob/main/src/index.ts#L548
// https://github.com/PedroEdu6786/personal-blog/blob/develop/src/lib/storyblok.ts
import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_API_KEY,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

export default Storyblok;
