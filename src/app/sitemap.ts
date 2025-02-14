import { MetadataRoute } from "next/types";
import { getProducts } from "./actions/product";
import { categories } from "@/constants/categories";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: products } = await getProducts({});

  const categoryLinks = categories.map((category) => ({
    url: `${process.env.WEB_URL}/${category.url}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const productPages = products.map((product) => ({
    url: `${process.env.WEB_URL}/zazitek/${product.product
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, "-")}/${product.item_id}`,
    lastModified: new Date(product.updated_at),
  }));
  return [...categoryLinks, ...productPages];
}
