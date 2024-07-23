"use client";

import ProductCard from "./ProductCard";
import { getProducts } from "@/app/actions/product";
import { Product } from "@/libs/supabase/supabase.types";
import { useState } from "react";

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
      {products.length < totalProducts && (
        <button
          onClick={loadMore}
          disabled={loading}
          className="mt-12 inline-flex h-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Načíst další zážitky
        </button>
      )}
    </>
  );
};

export default ProductList;
