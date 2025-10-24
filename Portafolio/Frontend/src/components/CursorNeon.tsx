import { useEffect } from "react";

export default function CursorNeon() {
  useEffect(() => {
    const cursor = document.getElementById("neon-cursor")!;
    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div id="neon-cursor"></div>;
}
