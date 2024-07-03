import ProductCard from "./ProductCard";
import { getPragueProducts } from "@/app/actions/product";

type ProductListProps = {
  filters?: {
    type?: string;
    subtype?: string;
  };
};

const ProductList = async ({ filters }: ProductListProps) => {
  const products = await getPragueProducts(filters);

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
