import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница",
};

export default async function Products({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;
  return <div>Страница с alias: {alias}</div>;
}
