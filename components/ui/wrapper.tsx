//Packages
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
}
/**
 * a Page wrapper component with max width 1200 and margin auto.
 * @param props `{children: ReactNode, id: string}`
 * @returns JSX.Element with tag `<main id='id'>`
 */
const Wrapper = (props: Props): JSX.Element => {
  return (
    <main
      id={props.id}
      className="animate-in zoom-in mx-auto max-w-[1200px] p-5 duration-500"
    >
      {props.children}
    </main>
  );
};

export default Wrapper;
