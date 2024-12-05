import { Paragraph } from "@/components/Paragraph";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  return (
    <div {...props}>
      <Paragraph>Header</Paragraph>
    </div>
  );
};
