export default function HomeContainer(
  props: React.HTMLAttributes<HTMLParagraphElement>
) {
  const styles = "mx-28 ".concat(props.className ? props.className : "");
  return (
    <div {...props} className={styles}>
      {props.children}
    </div>
  );
}
