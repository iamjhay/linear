import classNames from "classnames";
import { CSSProperties, useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroPics from "../public/img/hero.webp";
import { useInView } from "react-intersection-observer";

//Generate Random Number Between
const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Line {
  id: string;
  direction: "to top" | "to left";
  size: number;
  duration: number;
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (_id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== _id));
  };

  // This useEffect adds a single new line between 800 and 2500
  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to top" : "to left",
            duration: randomNumber(1300, 3500),
            size: randomNumber(10, 30),
            id: Math.random().toString(36).substring(7),
          },
        ]);
        renderLine(randomNumber(800, 2500));
      }, timeout);
    };
    renderLine(randomNumber(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

  return (
    <div ref={ref} className="[perspective:2000px] mt-[12.8rem]">
      <div
        className={classNames(
          "relative rounded-lg border border-transparent-white bg-white bg-hero-gradient bg-opacity-[0.01] ",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0",
          inView && " before:animate-image-glow"
        )}
      >
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          {lines.map((line) => (
            <span
              key={line.id}
              onAnimationEnd={() => removeLine(line.id)}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                "absolute top-0 block h-[1px] w-[10rem] bg-glow-lines",
                line.direction === "to left" &&
                  `left-0 h-[1px] w-[calc(var(--size)*0.5rem)] animate-glow-line-horizontal md:w-[calc(var(--size)*1rem)]`,
                line.direction === "to top" &&
                  `right-0 h-[calc(var(--size)*0.5rem)] w-[1px] animate-glow-line-vertical md:h-[calc(var(--size)*1rem)]`
              )}
            />
          ))}
        </div>

        {/* Svg Strokes */}
        <svg
          className={classNames(
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            inView && "[&_path]:animate-sketch-lines"
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        <Image
          className={classNames(
            "relative z-10 transition-opacity delay-[680ms] object-cover",
            inView ? "opacity-100" : "opacity-0"
          )}
          src={HeroPics}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};
