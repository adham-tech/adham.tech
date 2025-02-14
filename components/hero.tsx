"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { useTheme } from "next-themes";

import { Emoji } from "./emoji";

const HeroComponent = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <div
      className={
        "grid min-h-[500]  justify-center lg:grid-cols-2 xl:min-h-[700px]"
      }
    >
      <div className={"flex flex-col lg:pt-16 "}>
        <h1
          className={
            "text-primary-500 dark:text-primary-400 pt-4 text-center text-lg font-bold md:text-4xl lg:pt-16 "
          }
        >
          Hi!
          <Emoji
            symbol={"👋"}
            label={"waving hand"}
            className={"animate-wave origin-70 inline-block px-1 "}
          />
          I am Adham, a Web Developer
        </h1>
        <h2
          className={
            "text-secondary pt-4 text-center font-semibold italic md:text-2xl dark:text-white"
          }
        >
          Welcome to my online home!
        </h2>
      </div>
      {mounted && (
        <>
          <Image
            width={"700"}
            height={"500"}
            alt={"3D me, Adham"}
            src={"/light-3D-me.webp"}
            sizes="50vw"
            className={"aspect-auto object-contain dark:hidden"}
          />
          <Image
            width={"700"}
            height={"500"}
            alt={"3D me, Adham"}
            src={"/dark-3D-me.webp"}
            sizes="50vw"
            className={`${
              theme === "light" || resolvedTheme === "light" ? "hidden" : " "
            } aspect-auto object-cover`}
          />
        </>
      )}
    </div>
  );
};

export default HeroComponent;
