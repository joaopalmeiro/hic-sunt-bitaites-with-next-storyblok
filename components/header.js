import { Twitter } from 'lucide-react';
import Link from 'next/link';

// https://tailwindcss.com/docs/position#sticky-positioning-elements
// https://www.dhairyashah.dev/posts/lets-make-a-stickyfixed-navbar-in-both-vanilla-and-tailwind-css
export default function Header() {
  return (
    <header className='sticky top-0 bg-white/30 py-12'>
      <nav className='flex flex-row items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5'>
        {/* https://github.com/delbaoliveira/website/blob/main/ui/Layout.tsx#L73 */}
        <Link href='/'>
          <a>
            <h1 className='font-cursive text-2xl font-medium text-slate-900'>
              Hic Sunt Bitaites
            </h1>
          </a>
        </Link>

        {/* https://github.com/delbaoliveira/website/blob/main/ui/Navigation.tsx#L59 */}
        <a
          target='_blank'
          href='https://twitter.com/joaompalmeiro'
          className='rounded p-2 text-slate-500 hover:bg-blue-200 hover:text-blue-500'
          rel='noreferrer'
        >
          <Twitter />
        </a>
      </nav>
    </header>
  );
}
