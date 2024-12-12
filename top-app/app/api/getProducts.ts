import { TopPageModel } from "@/interfaces/menu.interface";
import { API } from "../api";
import { ProductModel } from "@/interfaces/product.interface";

export const getProducts = async (
  category: TopPageModel["category"]
): Promise<ProductModel[] | null> => {
  const res = await fetch(API.product.find, {
    method: "POST",
    body: JSON.stringify({ category, limit: 10 }),
    headers: new Headers({ "content-type": "application/json" }),
    next: { revalidate: 10 },
  });

  if (res.ok) {
    return res.json();
  }

  return null;
};
