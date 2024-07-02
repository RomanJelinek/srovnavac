import { supabase } from "@/libs/supabase/supabase.client";
import { Product } from "@/libs/supabase/supabase.types";

export const getPragueProducts = async (filters?: {type?: string, subtype?: string}): Promise<Product[]> => {
  let query = supabase
    .from("exp_prg")
    .select();

  if (filters?.type) {
    query = query.eq("type", filters.type);
  }

  if (filters?.subtype) {
    query = query.eq("subtype", filters.subtype);
  }

  const { data: products } = await query.returns<Product[]>();
  return products;
};
