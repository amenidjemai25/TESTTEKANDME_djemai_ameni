export default function Text(
  props: React.HTMLAttributes<HTMLParagraphElement>
) {
  return (
    <p {...props} id="TEXT">
      {props.children}
    </p>
  );
}
