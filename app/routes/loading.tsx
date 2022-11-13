import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function loading() {
  return (
    <div className="h-screen bg-black">
      {/* <div className='h-screen grid place-content-center'> */}
      <div className="h-screen flex justify-center items-center">
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_t9gkkhz4.json"
          style={{ height: "300px", width: "300px" }}
        >
          {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
        </Player>
      </div>
    </div>
  );
}

export default loading;
