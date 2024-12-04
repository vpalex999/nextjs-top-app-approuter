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
        <div className={cn(styles.c1)}>1</div>
        <div className={cn(styles.c2)}>2</div>
        <div className={cn(styles.c3)}>3</div>
        <div className={cn(styles.c4)}>4</div>
        <div className={cn(styles.c5)}>5</div>
        <div className={cn(styles.c6)}>6</div>
        <div className={cn(styles.c7)}>7</div>
        <div className={cn(styles.c8)}>8</div>
        <div className={cn(styles.c9)}>9</div>
      </div>
    </section>
  );
}
