import { Paragraph } from "@/components/Paragraph";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Footer.module.css";
import { format } from "date-fns";

type FooterProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <Paragraph size="l">
        OwlTop 2020- {format(new Date(), "yyyy")} Все права защищены
      </Paragraph>
      <a href="#" target="_blank">
        <Paragraph size="l">Пользовательское соглашение</Paragraph>
      </a>
      <a href="#" target="_blank">
        <Paragraph size="l">Политика конфиденциальности</Paragraph>
      </a>
    </footer>
  );
};
