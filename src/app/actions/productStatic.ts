import { Product } from "@/libs/supabase/supabase.types";
import { supabase } from "@/libs/supabase/supabase.client";
import * as console from "node:console";

export const getPragueProductById = async (id: string): Promise<Product> => {
  const { data: product } = await supabase
      .from("exp_prg")
      .select(`
    *,
    exp_prg_variants(
      id,
      product_id,
      variant_id,
      product_name_ext,
      price,
      price_vat,
      location,
      updated_at
    )
  `)
      .eq("item_id", id)
      .single<Product>();

  return product;
};
