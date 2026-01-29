"use client";

import React, { useEffect, useState } from "react";

export function InteractiveGridPattern({
  width = 50,
  height = 50,
}: {
  width?: number;
  height?: number;
}) {
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const [lastMove, setLastMove] = useState(0);
  const [, setTick] = useState(0); // 👈 forces redraw

  // 🔧 CONFIG
  const RADIUS = 100;
  const DURATION = 200;
  const COLOR = "238, 100, 54";
  const GRAY = "150,150,150";

  // Grid size
  useEffect(() => {
    const update = () => {
      setGrid({
        cols: Math.ceil(window.innerWidth / width),
        rows: Math.ceil(window.innerHeight / height),
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [width, height]);

  // 🔁 Animation loop (fix)
  useEffect(() => {
    let raf: number;

    const animate = () => {
      setTick((t) => t + 1); // trigger re-render
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  const total = grid.cols * grid.rows;

  return (
    <svg
      className="fixed inset-0 bg-black"
      viewBox={`0 0 ${grid.cols * width} ${grid.rows * height}`}
      preserveAspectRatio="none"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
        setLastMove(Date.now());
      }}
      onMouseLeave={() => setMouse(null)}
    >
      {Array.from({ length: total }).map((_, i) => {
        const col = i % grid.cols;
        const row = Math.floor(i / grid.cols);

        const x = col * width;
        const y = row * height;

        const cx = x + width / 2;
        const cy = y + height / 2;

        let intensity = 0;

        if (mouse) {
          const dx = mouse.x - cx;
          const dy = mouse.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const spatial = Math.max(0, 1 - dist / RADIUS);
          // eslint-disable-next-line react-hooks/purity
          const elapsed = Date.now() - lastMove;
          const timeFade = Math.max(0, 1 - elapsed / DURATION);

          intensity = spatial * timeFade;
        }

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={width}
            height={height}
            className="fill-transparent transition-all duration-75"
            style={{
              stroke:
                intensity > 0
                  ? `rgba(${COLOR}, ${0.9 + intensity})`
                  : `rgba(${GRAY}, 0.20)`,
              strokeWidth: intensity > 0 ? 1 + intensity * 1 : 1,
              filter:
                intensity > 0
                  ? `drop-shadow(0 0 ${5 * intensity}px rgba(${COLOR},0.7))`
                  : undefined,
            }}
          />
        );
      })}
    </svg>
  );
}
