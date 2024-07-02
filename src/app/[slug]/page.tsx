import ProductList from '@/components/ProductList';
import { getCategory } from '../utility/categories';

export default async function Category({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { category } = getCategory(slug);
  if (!category) return <>Kategorie nenalezena</>;
  return (
    <main>
      <ProductList filters={{ type: category.type }} />
    </main>
  );
}
