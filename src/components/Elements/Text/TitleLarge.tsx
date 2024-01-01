export default function TitleLarge(
  props: React.HTMLAttributes<HTMLParagraphElement>
) {
  return (
    <span {...props} id="TITLE-LARGE">
      {props.children}
    </span>
  );
}
