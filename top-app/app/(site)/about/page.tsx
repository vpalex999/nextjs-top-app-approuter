import { Paragraph } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div>
      <Paragraph>О нас</Paragraph>
    </div>
  );
}
