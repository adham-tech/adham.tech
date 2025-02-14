"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header
      className={"mb-2 flex flex-wrap items-center px-4 xl:px-32 2xl:px-40"}
    >
      <div
        id={"logo-container"}
        className={"flex grow justify-center lg:justify-start"}
      >
        <Link href={"/"} passHref>
          <Image
            width={"300"}
            height={"50"}
            src={"/full-logo.webp"}
            alt={"logo"}
            className={
              " my-4 max-h-[150px] max-w-[150px] cursor-pointer md:max-w-[300px]"
            }
          />
        </Link>
      </div>
      <nav className={"m-auto my-4 flex items-center "}>
        <Link
          href={"/"}
          className={clsx("btn-header mr-6 ", {
            ["btn-active"]: pathname === "/",
          })}
        >
          home
        </Link>
        <Link
          href={"/about"}
          className={clsx("btn-header  mr-6 ", {
            ["btn-active"]: pathname === "/about",
          })}
        >
          about
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
