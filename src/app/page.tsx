import ProductList from '@/components/ProductList';
import { getPragueProducts } from './actions/product';

export default async function Home() {
  const products = await getPragueProducts()
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
