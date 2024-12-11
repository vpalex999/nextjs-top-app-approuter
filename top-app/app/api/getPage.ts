import { API } from "../api";

export const getPage = async (alias: string): Promise<TopPageModel | null> => {
  const res = await fetch(API.topPage.byAlias + `/${alias}`, {
    method: "GET",
    next: { revalidate: 10 },
  });

  if (res.ok) {
    return res.json();
  }

  return null;
};
