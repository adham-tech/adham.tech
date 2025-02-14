//Packages

import { ReactNode } from "react";

interface Props {
  h1: string;
  icon: ReactNode;
}
/**
 * A Section Header with an icon
 * @param props `{h1: string, icon: IconProp}`
 * @returns JSX.Element
 */
const SectionHeaderComponent = (props: Props): JSX.Element => {
  return (
    <div className={"text-primary-600 dark:text-primary-400 mb-10 flex"}>
      <h1 className={" text-4xl font-bold"}>{props.h1}</h1>
      <div className="animate-bounce p-2 ">{props.icon}</div>
    </div>
  );
};

export default SectionHeaderComponent;
