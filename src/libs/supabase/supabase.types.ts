export type Product = {
  id: number;
  item_id: string;
  item_group_id: string;
  category: string;
  delivery_date: number;
  url: string;
  product_name: string;
  images: string[];
  image: string;
  product: string;
  description: string;
  price: number;
  manufacturer: string;
  params: string[];
  created_at: string;
  updated_at: string;
  city: string;
  type: string;
  subtype: string;
  exp_prg_variants: Variant[];
};

export type Variant = {
  id: string;
  product_id: string;
  variant_id: string;
  product_name_ext?: string;
  price?: number;
  price_vat?: number,
  location?: string,
  updated_at: string;
}