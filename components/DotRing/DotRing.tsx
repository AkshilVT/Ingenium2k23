import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePosition";
import { useContext } from "react";
import { MouseContext } from "context/mouse-context";

const DotRing = () => {
  // 1.
  const { x, y } = useMousePosition();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      {/* 3. */}
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
