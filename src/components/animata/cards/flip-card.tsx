import { cn } from "../../../lib/utils";
import { motion, MotionProps } from "framer-motion";
import CursorTracker from "../container/cursor-tracker";

interface FlipCardProps extends MotionProps {
  image: string;
  title: string;
  description: string;
  link: string;
  className?: string;
  rotate?: "x" | "y";
  key: string;
}

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function FlipCard({
  image,
  title,
  description,
  link,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <motion.div
      className={cn("group z-30 h-72 w-60 [perspective:1000px]", className)}
      {...props}
      variants={gridSquareVariants}
      onClick={() => window.open(link, "_blank")}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <img
            src={image}
            alt="image"
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
          <div className="absolute bottom-4 left-4 text-xl font-bold text-white">
            {title}
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80  text-slate-200 [backface-visibility:hidden]",
            self[1]
          )}
        >
          <CursorTracker
            title={title}
            description={description}
            className="min-h-full w-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
