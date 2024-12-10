import { MenuItem } from "@/interfaces/menu.interface";
import { API } from "../api";

export const getMenu = async (firstCategory: number): Promise<MenuItem[]> => {
  const res = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ "content-type": "application/json" }),
  });
  return res.json();
};
