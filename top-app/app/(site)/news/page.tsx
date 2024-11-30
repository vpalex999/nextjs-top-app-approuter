import { Paragraph } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function News() {
  return (
    <div>
      <Paragraph>Новости</Paragraph>
    </div>
  );
}
