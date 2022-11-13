import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/app.css';
import styles2 from '../styles/index.css';
import dotringcss from '../components/DotRing/DotRing.css';
import MouseContextProvider from 'context/mouse-context';
import registers from './styles/register.css';
// import styles2 from "../styles/index.css";

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: dotringcss },

    { rel: 'stylesheet', href: registers },
    // { rel: "stylesheet", href: styles2 },
  ];
}
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        <link
          href='https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        ></link>
      </head>
      <body className=''>
        <MouseContextProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MouseContextProvider>
      </body>
    </html>
  );
}
