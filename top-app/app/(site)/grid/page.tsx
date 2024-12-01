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
        <div style={{ justifySelf: "right", alignSelf: "start" }}>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </section>
  );
}
