import LinkComponent from "./ui/link-component";

type Props = {
  date: string;
  title: string;
  location: string;
  content: string;
  active?: boolean;
  link?: string;
};
const WorkAndEduComponent = (props: Props): JSX.Element => {
  return (
    <div className={"work-skill-wrapper"}>
      <div className={"flex items-center"}>
        <div
          className={`bg-primary-500 mr-2 size-3 rounded-full ${
            props.active && "animate-pulse"
          }`}
        />
        <h2>{props.date}</h2>
      </div>
      <h1
        className={
          "text-primary-500 dark:text-primary-400 text-2xl font-semibold"
        }
      >
        {props.title}
      </h1>
      {props.link?.length ? (
        <LinkComponent
          href={props.link}
          className="links-sub-headers"
          content={props.location}
          blank
        />
      ) : (
        <p
          className={
            "links-sub-headers hover:text-gray-700 dark:hover:text-gray-400"
          }
        >
          {props.location}{" "}
        </p>
      )}
      <p className={"text-lg"}>{props.content}</p>
    </div>
  );
};

export default WorkAndEduComponent;
