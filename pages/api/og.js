import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

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
export default async function handler(req) {
  const albertFontData = await albertFont;
  const grapeFontData = await grapeFont;
  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const title = searchParams.get('title');

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
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: 60, fontFamily: '"Albert Sans"' }}>
          {title}
        </span>
        <span
          style={{
            fontSize: 16,
            padding: 10,
            background: 'red',
            fontFamily: '"Grape Nuts"',
            position: 'absolute',
            bottom: '24px',
          }}
        >
          Hic Sunt Bitaites
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
