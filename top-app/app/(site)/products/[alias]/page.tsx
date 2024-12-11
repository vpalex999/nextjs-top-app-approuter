import { getMenu } from "@/app/api/getMenu";
import { getPage } from "@/app/api/getPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Страница",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);

  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}

export default async function PageProducts({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;
  const page = await getPage(alias);

  if (!page) {
    notFound();
  }
  return <div>{page.title}</div>;
}
