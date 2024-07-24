import { supabase } from "@/libs/supabase/supabase.client";
import { Product } from "@/libs/supabase/supabase.types";

type Filters = {
  type?: string;
  subtype?: string;
  page?: string;
  start?: number;
  end?: number;
};

export const getProducts = async ({ type, subtype, start, end }: Filters) => {
  let query = supabase
    .from("exp_prg")
    .select("*", { count: "exact", head: false });

  if (typeof start === "number" && typeof end === "number") {
    query = query.range(start, end);
  }

  if (type) {
    query = query.eq("type", type);
  }

  if (subtype) {
    query = query.eq("subtype", subtype);
  }

  return query.returns<Product[]>();
};
