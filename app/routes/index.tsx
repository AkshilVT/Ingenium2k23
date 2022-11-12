import { Player } from "@lottiefiles/react-lottie-player";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

async function getLoader() {
  const resp = await fetch(
    "https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"
  );
  // console.log(resp);
  return resp;
}

export async function loader() {
  return await getLoader();
}
export default function Index() {
  const res = useLoaderData();

  return (
    <motion.div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      initial={{ opacity: 0, scale: 3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl text-pink-600">Welcome to Remix</h1>
      {/* <img src='Star_Wars_Logo.svg' /> */}
      {/* <img src='star-wars.svg' className='text-yellow-400 ' /> */}
      {/* <Player
        autoplay={true}
        loop={true}
        controls={true}
        src={res}
        style={{ height: '300px', width: '300px' }}
      ></Player> */}
      <ul className="font-StarWars4">
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
