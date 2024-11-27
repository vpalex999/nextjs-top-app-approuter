import { Paragraph } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

export default function About() {
  return (
    <div>
      <Paragraph>Команда</Paragraph>
    </div>
  );
}
