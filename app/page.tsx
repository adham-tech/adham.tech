//Packages

import type { NextPage } from "next";
import Head from "next/head";

import { PocketKnife } from "lucide-react";

import Wrapper from "@/components/ui/wrapper";

import HeroComponent from "@/components/hero";
import SectionHeaderComponent from "@/components/section-header";
import LandingSkillsComponent from "@/components/skills";
import SkillsBoxComponent from "@/components/skills-box";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>adham.tech - Home</title>
        <meta
          name="description"
          content="Personal webpage for Adham Abo Hasson a web developer"
        />
      </Head>
      <HeroComponent />
      <Wrapper id="home">
        <LandingSkillsComponent />
        <section id={"coding-skills"} className={"mt-24"}>
          <SectionHeaderComponent
            icon={<PocketKnife size={35} />}
            h1={"Tech Skills"}
          />
          <SkillsBoxComponent />
        </section>
      </Wrapper>
    </div>
  );
};

export default Home;
