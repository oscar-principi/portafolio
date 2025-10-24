import { useEffect } from "react";

export default function CursorNeon() {
  useEffect(() => {
    const cursor = document.getElementById("neon-cursor")!;
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Lerp: suaviza el movimiento
      currentX += (mouseX - currentX) * 0.3;
      currentY += (mouseY - currentY) * 0.3;
      cursor.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div id="neon-cursor"></div>;
}
