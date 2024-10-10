import { ComponentPropsWithoutRef } from "react";

export default function Spinner({
  className,
  ...rest
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span className={`relative block opacity-[.65] ${className}`} {...rest}>
      {Array.from(Array(8).keys()).map((i) => (
        <span
          key={i}
          className="absolute left-[calc(50%-12.5%/2)] top-0 h-[100%] w-[12.5%"
          style={{
            transform: `rotate(${45 * i}deg)`,
            animationDelay: `calc(-${8 - i} / 8 * 800ms)`,
          }}
        />
      ))}
    </span>
  );
}
