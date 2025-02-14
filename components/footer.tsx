import Link from "next/link";

import { Code, Github, Linkedin, Twitter } from "lucide-react";

import { Emoji } from "./emoji";

const FooterComponent = (): JSX.Element => {
  return (
    <footer>
      <div
        className={""}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="text-primary-500 mr-2">
          <Code />
        </div>
        <p>
          with{" "}
          <Emoji
            label={"heart"}
            symbol={"❤"}
            className={"text-primary-500 animate-pulse"}
          />{" "}
          by Adham Abo Hasson &#169; {new Date().getFullYear()}
        </p>
      </div>
      <div className="text-primary-500 m-auto grid max-w-[150px] grid-flow-col p-2">
        <Link
          aria-label="Link to linkedin profile"
          href={"https://www.linkedin.com/in/adhamah/"}
          target="_blank"
        >
          <Linkedin />
        </Link>
        <Link
          aria-label="Link to twitter profile"
          href={"https://twitter.com/adhamah_"}
          target="_blank"
        >
          <Twitter />
        </Link>
        <Link
          aria-label="Link to github profile"
          href={"https://github.com/adhamah"}
          target="_blank"
        >
          <Github />
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
