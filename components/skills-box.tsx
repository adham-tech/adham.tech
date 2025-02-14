import Image from "next/image";

const SkillsBoxComponent = (): JSX.Element => {
  return (
    <div
      className={
        "bg-BG-bg2 dark:bg-dark-500 flex flex-wrap  items-center justify-center rounded-2xl shadow-2xl"
      }
    >
      <Image
        width={"70"}
        height={"70"}
        src={"/tools/javascript.svg"}
        alt={"javascript"}
        className={"m-4 max-w-[70px]"}
      />
      <Image
        width={"70"}
        height={"70"}
        src={"/tools/html.svg"}
        alt={"html"}
        className={"m-4 max-w-[60px]"}
      />
      <Image
        width={"95"}
        height={"95"}
        src={"/tools/css.svg"}
        alt={"CSS"}
        className={"m-4"}
      />
      <Image
        width={"70"}
        height={"70"}
        src={"/tools/react.svg"}
        alt={"React.js"}
        className={"m-4 max-w-[70px]"}
      />
      <Image
        width={"70"}
        height={"70"}
        src={"/tools/next-js.svg"}
        alt={"next.js"}
        className={"m-4 max-w-[70px]"}
      />
      <Image
        width={"70"}
        height={"70"}
        src={"/tools/node.svg"}
        alt={"node.js"}
        className={"m-4 max-w-[70px]"}
      />
      <Image
        width={"70"}
        height={"70"}
        src={"/tools/graphql.svg"}
        alt={"GraphQL"}
        className={"m-4 max-w-[70px]"}
      />
      <Image
        width={"70"}
        height={"70"}
        src={"/tools/php.svg"}
        alt={"PHP"}
        className={"m-4 max-w-[70px]"}
      />
      <Image
        width={"70"}
        height={"70"}
        src={"/tools/mysql.svg"}
        alt={"MySQL"}
        className={"m-4 max-w-[70px]"}
      />
    </div>
  );
};

export default SkillsBoxComponent;
