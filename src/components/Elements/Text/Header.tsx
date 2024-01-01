export default function Header(
  props: React.HTMLAttributes<HTMLParagraphElement>
) {
  return (
    <span {...props} id="HEADER">
      {props.children}
    </span>
  );
}
