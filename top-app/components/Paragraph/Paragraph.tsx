import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({
  children,
  className,
  appearance = "big",
}: ParagraphProps) => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.big]: appearance === "big",
        [styles.medium]: appearance === "medium",
        [styles.small]: appearance === "small",
      })}
    >
      {children}
    </p>
  );
};
