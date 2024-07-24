"use client";

import ProductCard from "./ProductCard";
import { getProducts } from "@/app/actions/product";
import { Product } from "@/libs/supabase/supabase.types";
import { useState } from "react";
import TriggerLoading from "./TriggerLoading";

type ProductListProps = {
  filters?: {
    type?: string;
    subtype?: string;
    page?: string;
  };
  initialProducts: Product[];
  totalProducts: number;
};

const ITEMS_PER_PAGE = 10;

const ProductList = ({
  filters,
  initialProducts,
  totalProducts,
}: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);

    const { data: newProducts } = await getProducts({
      type: filters?.type,
      subtype: filters?.subtype,
      start: products.length,
      end: products.length + ITEMS_PER_PAGE - 1,
    });

    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      {products.length < totalProducts && !loading && (
        <TriggerLoading loadMore={loadMore} />
      )}
      {loading && <div className='text-center'>Načítání...</div>}
    </>
  );
};

export default ProductList;
