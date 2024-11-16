import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({
  children,
  className,
  size = "m",
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.l]: size === "l",
        [styles.m]: size === "m",
        [styles.s]: size === "s",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
