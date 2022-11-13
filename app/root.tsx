import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import registers from "./styles/register.css";
// import styles2 from "../styles/index.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
<<<<<<< HEAD
    { rel: "stylesheet", href: registers },
=======
>>>>>>> 3ac8b82794ab608161a8d3211dc456c986148979
    // { rel: "stylesheet", href: styles2 },
  ];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
