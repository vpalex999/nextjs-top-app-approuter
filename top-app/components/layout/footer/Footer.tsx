import { Paragraph } from "@/components/Paragraph";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = (props: FooterProps) => {
  return (
    <div {...props}>
      <Paragraph>Footer</Paragraph>
    </div>
  );
};
