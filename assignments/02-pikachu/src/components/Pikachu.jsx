import { useEffect, useState } from "react";
import "../styles/pikachu.css";

const Pikachu = () => {
  const [position, setPosition] = useState({ x: 4, y: 4 });
  const [direction, setDirection] = useState("right");
  const [jump, setJump] = useState(false);

  const handleKeyDown = (e) => {
    if (jump) return;

    switch (e.key) {
      case "ArrowUp":
        setPosition((pos) => ({ ...pos, y: Math.max(pos.y - 1, 0) }));
        break;
      case "ArrowDown":
        setPosition((pos) => ({ ...pos, y: Math.min(pos.y + 1, 9) }));
        break;
      case "ArrowLeft":
        setDirection("left");
        setPosition((pos) => ({ ...pos, x: Math.max(pos.x - 1, 0) }));
        break;
      case "ArrowRight":
        setDirection("right");
        setPosition((pos) => ({ ...pos, x: Math.min(pos.x + 1, 9) }));
        break;
      case " ":
        setJump(true);
        setTimeout(() => setJump(false), 500);
        setPosition((pos) => ({ ...pos, y: Math.max(pos.y - 1, 0) }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jump]);

  return (
    <div
      className={`pikachu ${direction} ${jump ? "jump" : ""}`}
      style={{
        top: `${position.y * 50}px`,
        left: `${position.x * 50}px`,
      }}
    />
  );
};

export default Pikachu;
