import { Briefcase, GraduationCap } from "lucide-react";

import { education, workExperience } from "@/config/constant";

import Wrapper from "@/components/ui/wrapper";

import AboutMeComponent from "@/components/about-me";
import SectionHeaderComponent from "@/components/section-header";
import WorkAndEduComponent from "@/components/work-and-edu";

const About = (): JSX.Element => {
  return (
    <div>
      <header>
        <title>adham.tech | About</title>
      </header>
      <Wrapper id={"about"}>
        <AboutMeComponent />
        <section id={"work-experience"} className="mt-20 ">
          <SectionHeaderComponent
            icon={<Briefcase size={35} />}
            h1={"Work Experience"}
          />
          {workExperience.map((experience) => {
            return (
              <WorkAndEduComponent
                key={experience.id}
                link={experience.link}
                date={experience.date}
                active={experience.active}
                location={experience.company}
                content={experience.content}
                title={experience.jobTitle}
              />
            );
          })}
        </section>
        <section id="education" className="mt-20">
          <SectionHeaderComponent
            icon={<GraduationCap size={35} />}
            h1={"Education"}
          />
          {education.map((education) => {
            return (
              <WorkAndEduComponent
                key={education.id}
                link={education.link}
                date={education.date}
                active={education.active}
                location={education.institution}
                content={education.content}
                title={education.eduTitle}
              />
            );
          })}
        </section>
      </Wrapper>
    </div>
  );
};

export default About;
