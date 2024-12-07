import cn from "classnames";
import styles from "./Grid.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grid CSS",
};

export default function Grid() {
  return (
    <section className={cn(styles.section)}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.header)}>header</div>
        <div className={cn(styles.body)}>body</div>
        <div className={cn(styles.sidebar)}>sidebar</div>
        <div className={cn(styles.footer)}>footer</div>
      </div>
    </section>
  );
}
