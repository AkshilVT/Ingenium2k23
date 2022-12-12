import { motion } from "framer-motion";
import React, { Suspense } from "react";
import ParticleBackground from "../../components/particles/ParticleBackground";
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
      <img src="Full-Logo.svg" />
      {/* </motion.div> */}
      <ParticleBackground />
    </>
  );
};

export default demo;
