import { cn } from "../../../lib/utils";

export default function DoubleUnderline({
  className,
  children,
  ...props
}: React.HTMLProps<HTMLSpanElement>) {
  const common =
    "absolute h-[2px] w-full bg-slate-200 transition-all duration-200 group-hover:opacity-50 ";
  return (
    <span
      {...props}
      className={cn("group relative inline-block cursor-pointer ", className)}
    >
      {children}
      <span
        className={cn(
          common,
          "left-0 top-[calc(100%_+_4px)] group-hover:top-0 "
        )}
      />
      <span className={cn(common, "-bottom-[2px] left-0 ")} />
    </span>
  );
}
