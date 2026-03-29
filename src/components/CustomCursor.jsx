import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on devices with a fine pointer (no touch)
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const interactive =
        tag === "a" ||
        tag === "button" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.dataset.cursor === "pointer";
      setHovering(interactive);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Smooth ring follow
    let raf;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  // Don't render on touch devices
  if (typeof window !== "undefined") {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return null;
  }

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <div
          className="rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-150"
          style={{
            width: hovering ? 8 : 5,
            height: hovering ? 8 : 5,
            backgroundColor: "#64ffda",
            boxShadow: "0 0 10px rgba(100,255,218,0.8)",
          }}
        />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <div
          className="rounded-full -translate-x-1/2 -translate-y-1/2 border transition-all duration-300"
          style={{
            width: hovering ? 50 : 35,
            height: hovering ? 50 : 35,
            borderColor: hovering
              ? "rgba(100,255,218,0.8)"
              : "rgba(100,255,218,0.35)",
            backgroundColor: hovering
              ? "rgba(100,255,218,0.08)"
              : "transparent",
          }}
        />
      </div>
    </>
  );
}