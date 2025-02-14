import Image from "next/image";

const AboutMeComponent = (): JSX.Element => {
  return (
    <section
      id={"short-about-me"}
      className={
        "m-auto mt-10 flex max-w-4xl flex-col items-center justify-center lg:flex-row"
      }
    >
      <Image
        width={"150"}
        height={"150"}
        src={"/me.webp"}
        alt={"adham"}
        className={" bg-BG-bg2 rounded-full shadow-2xl dark:bg-stone-900 "}
      />
      <div
        className={
          "bg-BG-bg2 dark:bg-dark-500 m-4 rounded-2xl px-4 py-5 shadow-lg"
        }
      >
        <p className={"p-4  text-lg leading-8"}>
          <b>A Full stack developer. </b>I love learning new technologies and
          how things made. Coding was a hobby that turned into work. I am based
          in the Netherlands but open to work anywhere.
        </p>
      </div>
    </section>
  );
};

export default AboutMeComponent;
