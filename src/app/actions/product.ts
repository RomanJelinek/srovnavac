import { supabase } from "@/libs/supabase/supabase.client";
import { Product } from "@/libs/supabase/supabase.types";

export const getPragueProducts = async (): Promise<Product[]> => {
  const { data: products } = await supabase
    .from("exp_prg")
    .select()
    .returns<Product[]>();
  return products;
};
