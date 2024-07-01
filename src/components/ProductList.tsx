import { FC } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/libs/supabase/supabase.types';


type ProductListProps = {
  products: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
