import { Paragraph } from "@/components/Paragraph";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type SidebarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Sidebar = (props: SidebarProps) => {
  return (
    <div {...props}>
      <Paragraph>Sidebar</Paragraph>
    </div>
  );
};
