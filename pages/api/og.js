import { ImageResponse } from '@vercel/og';
import truncate from 'just-truncate';

import { BLOG_TITLE } from '../../lib/constants';

export const config = {
  runtime: 'experimental-edge',
};

const MARGIN = '48px';

const albertFont = fetch(
  new URL('../../assets/AlbertSans-Medium.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const grapeFont = fetch(
  new URL('../../assets/GrapeNuts-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

// http://localhost:3000/api/og?title=Gamificar%20comboios
// https://og-playground.vercel.app/
// https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation#getting-started
// https://vercel.com/docs/concepts/functions/edge-functions/og-image-examples#dynamic-text-generated-as-image
// https://github.com/vercel/satori#css
// https://vercel.com/docs/concepts/functions/edge-functions/og-image-examples#using-tailwind-css---experimental
export default async function handler(req) {
  const albertFontData = await albertFont;
  const grapeFontData = await grapeFont;

  const { searchParams } = new URL(req.url);

  // ?title=<title>
  // const title = searchParams.get('title');
  // https://tailwindcss.com/docs/max-width
  const title = truncate(searchParams.get('title'), 65);
  // console.log(title);

  // https://tailwindcss.com/docs/font-size
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          color: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          // justifyContent: 'center',
          justifyContent: 'space-between',
          padding: MARGIN,
        }}
      >
        <hr tw='m-0 h-px w-full border-0 bg-slate-200' />
        <span
          style={{ fontFamily: '"Albert Sans"' }}
          tw='text-8xl text-slate-900'
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: '"Grape Nuts"',
            // position: 'absolute',
            // top: MARGIN,
            // bottom: MARGIN,
          }}
          tw='rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-2xl text-slate-900'
        >
          {BLOG_TITLE}
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Albert Sans',
          data: albertFontData,
          style: 'normal',
        },
        {
          name: 'Grape Nuts',
          data: grapeFontData,
          style: 'normal',
        },
      ],
    }
  );
}
