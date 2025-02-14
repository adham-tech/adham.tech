interface Props {
  label: string;
  symbol: string;
  className?: string;
}
/**
 * A component to display an emoji
 * @param props `{label: string, symbol: string, className?: string}`
 * @returns JSX.Element
 */
export const Emoji = (props: Props): JSX.Element => {
  return (
    <span
      className={props.className}
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
};
