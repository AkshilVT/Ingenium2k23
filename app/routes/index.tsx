import { motion } from "framer-motion";
import React, { Suspense } from "react";
import ParticleBackground from "../../components/particles/ParticleBackground";
import { Player } from "@lottiefiles/react-lottie-player";
import logo from "../../public/logo.json";

// import Loading from './loading';
const demo = () => {
  return (
    <>
      {/* <motion.div
        // ref={boxRef}
        className='max-w-2xl'
        initial={{ opacity: 0, scale: 3 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1, delay: 1 }}
      > */}
      {/* <img src="Full-Logo.svg" /> */}
      <div className="h-screen w-screen">
        <Player
          autoplay
          // loop
          keepLastFrame
          // className="rotate-90"
          className="block mx-auto my-auto"
          src={logo}
          style={{ height: "600px", width: "600px" }}
        ></Player>
        {/* </motion.div> */}
        <ParticleBackground />
      </div>
    </>
  );
};

export default demo;
