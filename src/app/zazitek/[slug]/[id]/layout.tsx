import { supabase } from "@/libs/supabase/supabase.client";
import { Product } from "@/libs/supabase/supabase.types";
import { createSlug } from "@/app/utility/slug";
import "../../../globals.css";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export async function generateStaticParams() {
  const { data: products } = await supabase
    .from("exp_prg")
    .select()
    .filter("city", "eq", "Praha")
    .returns<Product[]>();

  return products.map((product) => ({
    slug: createSlug(product.product),
    id: product.item_id,
  }));
}
