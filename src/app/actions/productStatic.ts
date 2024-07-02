import { Product } from "@/libs/supabase/supabase.types";
import { supabase } from "@/libs/supabase/supabase.client";

export const getPragueProductById = async (id: string): Promise<Product> => {
  const { data: products } = await supabase
    .from("exp_prg")
    .select()
    .eq("item_id", id)
    .single<Product>();
  return products;
};
