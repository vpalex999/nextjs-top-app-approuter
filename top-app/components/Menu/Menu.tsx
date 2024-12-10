import { getMenu } from "@/app/api/getMenu";

export const Menu = async () => {
  const menu = await getMenu(0);
  return <div>{JSON.stringify(menu)}</div>;
};
