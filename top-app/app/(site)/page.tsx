import { Paragraph } from "@/components";

import { Metadata } from "next";
import { Menu } from "@/components/Menu";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ComputedMeta",
  };
}

export default async function Home() {
  return (
    <main>
      <Paragraph>Главная страница</Paragraph>
      <Menu />
    </main>
  );
}
