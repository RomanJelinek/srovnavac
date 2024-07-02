import ProductCard from "./ProductCard";
import { getPragueProducts } from "@/app/actions/product";

const ProductList = async () => {
  const products = await getPragueProducts();

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
