import { Player } from "@lottiefiles/react-lottie-player";
import { useLoaderData } from "@remix-run/react";
import DotRing from "components/DotRing/DotRing";
import { AnimatePresence, motion } from "framer-motion";
import { MouseContext } from "../../context/mouse-context";
import { useContext } from "react";
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

  // const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <main className="bg-black text-white w-screen">
      <DotRing />
      <motion.div
        className="w-40 h-96 rotate-45 blur-xl opacity-40 rounded-full fixed top-60 right-20 bg-gradient-to-tr from-purple-500 to-blue-500"
        initial={{ x: -120, y: 100 }}
        animate={{ x: 40, rotate: 100, y: -100 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="w-40 h-40 blur-xl rounded-md fixed bottom-60 left-20 bg-gradient-to-tr from-red-500 to-yellow-500"
        initial={{ x: -200, y: -50 }}
        animate={{ x: 200, rotate: 360, y: 180 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="w-40 h-40 rotate-45 blur-xl opacity-40 rounded-full fixed top-0 left-0 bg-gradient-to-tr from-green-500 to-cyan-500"
        initial={{ x: 0, y: 140 }}
        animate={{ x: 40, rotate: -200, y: 30, scale: 2 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
      <AnimatePresence>
        <motion.div
          className="w-full h-screen flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 3 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* <div
            // @ts-ignore
            onMouseEnter={() => cursorChangeHandler("hovered")}
            // @ts-ignore
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <h1>Hover over me</h1>
          </div> */}
          <img src="/image 2.1.png" alt="ingenium logo" />
          <Player
            autoplay
            loop
            className="absolute bottom-0 inset-x-0"
            src="https://lottie.host/8b269248-2f24-46ae-a1f7-65ada6ce262d/BtfeV6hkGc.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </motion.div>
      </AnimatePresence>

      {/*  ---------------------------------------------------------2nd section */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="relative h-screen w-screen text-center"
      >
        <motion.div
          initial={{ y: -100, x: 100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-10 right-10 z-10"
        >
          <Player
            autoplay
            loop
            className="rotate-45"
            src="https://assets8.lottiefiles.com/private_files/lf30_gvdwzaoj.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </motion.div>
        <motion.div
          initial={{ y: -100, x: 100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-36 left-10"
        >
          <Player
            autoplay
            loop
            className="rotate-90"
            src="https://assets9.lottiefiles.com/private_files/lf30_nb0dznaf.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </motion.div>
        <div className="absolute w-full flex flex-col items-center justify-center top-5 space-y-7">
          <p className="text-6xl">Glimpse of TechFest!</p>
          <video autoPlay muted loop className="w-11/12">
            <source src="/bg-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </motion.div>
    </main>
  );
}
