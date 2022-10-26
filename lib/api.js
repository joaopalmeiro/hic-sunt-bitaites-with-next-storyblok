// Source: https://github.com/PedroEdu6786/personal-blog/blob/develop/src/lib/api.ts
import Storyblok from './storyblok';

const URL = 'cdn/stories';

const fetchApi = async (slug, config) => {
  try {
    const { data } = await Storyblok.get(slug, config);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllPostsWithSlug = async (slug) => {
  const config = {
    version: 'published',
    starts_with: slug,
    // https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/lib/api.js#L56
    // sort_by: 'published_at:desc',
    sort_by: 'first_published_at:desc',
    // https://www.storyblok.com/docs/api/content-delivery#topics/cache-invalidation
    cv: Date.now(),
  };

  // https://github.com/PedroEdu6786/personal-blog/blob/develop/src/lib/api.ts#L16
  // https://www.storyblok.com/docs/api/content-delivery#core-resources/stories/retrieve-multiple-stories
  const data = await fetchApi(URL, config);

  return data;
};

// https://www.storyblok.com/docs/api/content-delivery#core-resources/stories/retrieve-one-story
export const getPostBySlug = async (slug) => {
  const config = {
    version: 'published',
    cv: Date.now(),
  };
  const fullSlug = `${URL}/${slug}`;

  const data = await fetchApi(fullSlug, config);

  return data;
};
