export default function Title(
  props: React.HTMLAttributes<HTMLParagraphElement>
) {
  return (
    <span {...props} id="TITLE">
      {props.children}
    </span>
  );
}
