import { ReactNode } from "react";

import { AppWindow, Brain, Laptop, Server } from "lucide-react";

import LinkComponent from "./ui/link-component";

interface LandingSkillsProps {
  children: ReactNode;
  icon: ReactNode;
}

const Skill = (props: LandingSkillsProps): JSX.Element => {
  return (
    <div className={" justify-center "}>
      <div
        className={
          "bg-BG-bg2  dark:bg-dark-500 mb-12 mt-6  flex flex-col items-center rounded-2xl p-12 shadow-lg lg:flex-row"
        }
      >
        <div className="text-primary-500 mr-4">{props.icon}</div>
        <div className={"grow-1 dark:text-BG-bg2 px-2 text-lg  leading-8"}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export const LandingSkillsComponent = (): JSX.Element => {
  return (
    <section id="who-and-what">
      <Skill icon={<Laptop size={40} />}>
        I am a self-taught{" "}
        <b className={"text-primary-600 dark:text-primary-300"}>
          fullstack developer
        </b>
        . I am always trying to learn new technologies, I am what you can call a
        life-long learner
      </Skill>
      <Skill icon={<AppWindow size={40} />}>
        For the <i className={"font-bold"}>frontend</i> I like working with
        <LinkComponent
          href="https://reactjs.org/"
          className="links"
          content="React.js"
          blank
        />
        using
        <LinkComponent
          href="https://www.typescriptlang.org/"
          className="links"
          content="TypeScript"
          blank
        />
        and its tools and ecosystem like
        <LinkComponent
          href="https://nextjs.org/"
          className="links"
          content="Next.js"
          blank
        />
        . Also have good knowledge using Angular.
      </Skill>
      <Skill icon={<Server size={40} />}>
        For the <i className={"font-bold"}>backend</i> I use
        <LinkComponent
          href="https://nodejs.org/en/"
          className="links"
          content="Node.js"
          blank
        />
        with
        <LinkComponent
          href="https://expressjs.com/"
          className="links"
          content="Express.js"
          blank
        />
        . I also use
        <LinkComponent
          href="https://www.java.com/en/"
          className="links"
          content="Java"
          blank
        />
        with Spring Boot.
      </Skill>
      <Skill icon={<Brain size={40} />}>
        I am at my best when I am challenged and have to search and learn new
        technology and new ways to build and solve the app needs.
      </Skill>
    </section>
  );
};

export default LandingSkillsComponent;
