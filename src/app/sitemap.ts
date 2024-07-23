import { MetadataRoute } from "next/types";
import { getPragueProducts } from "./actions/product";
import { categories } from "@/constants/categories";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getPragueProducts();

  const categoryLinks = categories.map((category) => ({
    url: `${process.env.WEB_URL}/${category.url}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const productPages = products.map((product) => ({
    url: `${process.env.WEB_URL}/product/${product.id}`,
    lastModified: product.updated_at,
  }));
  return [...categoryLinks, ...productPages];
}
