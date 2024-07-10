import { useCallback, useRef } from "react";

import { useMousePosition } from "../../../hooks/use-mouse-position";
import { cn } from "../../../lib/utils";

export default function CursorTracker({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    // We need to offset the position to center the info div
    const offsetX = (infoRef.current?.offsetWidth || 0) / 2;
    const offsetY = (infoRef.current?.offsetHeight || 0) / 2;

    // Use CSS variables to position the info div instead of state to avoid re-renders
    infoRef.current?.style.setProperty("--x", `${x - offsetX}px`);
    infoRef.current?.style.setProperty("--y", `${y - offsetY}px`);
  }, []);

  useMousePosition(divRef, update);

  return (
    <div
      ref={divRef}
      className={cn(
        "group relative w-64 z-30 cursor-none rounded-3xl bg-gray-600 p-6 text-gray-200",
        className
      )}
    >
      {/* Actual content */}
      <h1 className="mb-4 text-3xl font-semibold leading-none">
        <span className="underline underline-offset-4 flex justify-center decoration-yellow-500">
          {title}
        </span>
      </h1>
      <div className="mb-8">{description}</div>

      {/* Cursor tracker */}
      <div
        ref={infoRef}
        style={{
          transform: "translate(var(--x), var(--y))",
        }}
        className="0 pointer-events-none absolute left-0 top-0 z-50 rounded-full bg-green-400/80 px-4 py-2 text-sm font-bold text-white opacity-0 duration-0 group-hover:opacity-100"
      >
        View &rarr;
      </div>
    </div>
  );
}
