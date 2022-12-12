import { Player } from "@lottiefiles/react-lottie-player";
import { useLoaderData } from "@remix-run/react";
import DotRing from "components/DotRing/DotRing";
import { AnimatePresence, motion } from "framer-motion";
import { MouseContext } from "../../context/mouse-context";
import { useContext, useRef, useState } from "react";
import NavBar from "components/NavBar";
async function getLoader() {
  const resp = await fetch(
    "https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"
  );
  // console.log(resp);
  return resp;
}

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: window.innerHeight,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

export async function loader() {
  return await getLoader();
}
export default function Index() {
  const res = useLoaderData();
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
    // mousePosition[hh] = mousePosition.x / 10;
  };
  // const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <main
      className="bg-black text-white w-screen"
      ref={boxRef}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      {/* <DotRing /> */}

      <motion.div
        className="h-10 w-10 bg-red-500 mix-blend-exclusion rounded-full fixed !z-50"
        animate={{
          x: mousePosition.x,
          y:
            mousePosition.y > mousePosition.height
              ? mousePosition.y % mousePosition.height
              : mousePosition.y || 0,
        }}
        transition={{ type: "spring" }}
      ></motion.div>
      <motion.div
        className="h-10 w-10 bg-yellow-500 mix-blend-exclusion rounded-full fixed !z-50"
        animate={{
          x: mousePosition.x,
          y:
            mousePosition.y > mousePosition.height
              ? mousePosition.y % mousePosition.height
              : mousePosition.y || 0,
        }}
        transition={{ type: "tween" }}
      ></motion.div>
      <motion.div
        className="h-10 w-10 bg-green-500 mix-blend-exclusion rounded-full fixed !z-50"
        animate={{
          x: mousePosition.x,
          y:
            mousePosition.y > mousePosition.height
              ? mousePosition.y % mousePosition.height
              : mousePosition.y || 0,
        }}
      />
      {/* <NavBar /> */}
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
          // ref={boxRef}
          className="w-full h-screen flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 3 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
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
          <motion.div
            animate={{
              rotateZ: mousePosition.centerX * 10 || 0,
              // rotateY: mousePosition.centerY * 20 || 0,
            }}
          >
            <img src="/image 2.1.png" alt="ingenium logo" />
          </motion.div>
          <Player
            autoplay
            loop
            className="absolute bottom-0 inset-x-0"
            src="https://lottie.host/8b269248-2f24-46ae-a1f7-65ada6ce262d/BtfeV6hkGc.json"
            style={{ height: "200px", width: "200px" }}
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
          {/* <Player
            autoplay
            loop
            className='rotate-45'
            src='https://assets8.lottiefiles.com/private_files/lf30_gvdwzaoj.json'
            style={{ height: '300px', width: '300px' }}
          ></Player> */}
        </motion.div>
        <motion.div
          initial={{ y: -100, x: 100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-36 left-10"
        >
          {/* <Player
            autoplay
            loop
            className="rotate-90"
            src="https://assets9.lottiefiles.com/private_files/lf30_nb0dznaf.json"
            style={{ height: "300px", width: "300px" }}
          ></Player> */}
        </motion.div>
        <div className="absolute w-full flex flex-col items-center justify-center top-5 space-y-7">
          <p className="text-6xl">Glimpse of TechFest!</p>
          <video autoPlay muted loop className="w-11/12">
            <source src="/bg-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </motion.div>

      {/*  ------------------------------3rd section */}

      {/* <motion.div className='h-screen'>
        <div className=' w-full h-full flex justify-center items-center'>
          <h1 className='text-4xl'>INge</h1>
          <div className=" bg-[url('https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg')] bg-cover w-[50%] h-[50%] aspect-[5/3] rounded-xl bg-cover bg-center bg-fixed"></div>
        </div>
      </motion.div> */}
    </main>
  );
}
