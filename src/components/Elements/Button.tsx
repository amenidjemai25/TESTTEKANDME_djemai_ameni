import { HTMLAttributes } from "react";

export default function Button({
  name,
  size = "reg",
  color = "bg-white",
  onClick = () => null,
  className,
}: {
  name: string;
  size?: "sm" | "reg";
  color?: "bg-white" | "bg-yellow" | "bg-transparent" | "bg-black-100";
  className?: HTMLAttributes<HTMLDivElement>["className"];
  onClick?: () => void;
}) {
  const sizeClass = size === "sm" ? "p-2 text-sm" : "px-4 py-3 text-base";
  const textColor = color === "bg-black-100" ? "text-white" : "text-black-100";
  return (
    <div
      onClick={onClick}
      className={`${sizeClass} ${color} ${textColor} uppercase font-extrabold border-[1px] border-black-12  border-b-[3px] cursor-pointer w-fit ${className}`}
    >
      {name}
    </div>
  );
}
