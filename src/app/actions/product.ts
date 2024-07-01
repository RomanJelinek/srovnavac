import { supabase } from "@/libs/supabase/supabase.server";
import { Product } from "@/libs/supabase/supabase.types";

export const getPragueProducts = async (): Promise<Product[]> => {
  const { data: products } = await supabase
    .from("exp_prg")
    .select()
    .filter("city", "eq", "Praha")
    .returns<Product[]>();
  return products;
};
