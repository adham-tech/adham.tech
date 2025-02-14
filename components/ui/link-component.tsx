//Packages
import Link from "next/link";

interface Props {
  href: string;
  className?: string;
  content: string;
  blank?: boolean;
}
/**
 * Next link to be used in the app
 * @param props `{href: string, className?: string, content:string}`
 * @returns JSX.Element
 */
const LinkComponent = (props: Props): JSX.Element => {
  return (
    <Link
      href={props.href}
      target={props.blank ? "_blank" : ""}
      className={props.className}
    >
      {` ${props.content} `}
    </Link>
  );
};

export default LinkComponent;
