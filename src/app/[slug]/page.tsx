import ProductList from '@/components/ProductList';
import { getCategory } from '../utility/categories';
import CategoryLinkCard from '@/components/CategoryLinkCard';

export default async function Category({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { category, subtype } = getCategory(slug);
  const chosenCategory = subtype || category;
  if (!category) return <>Kategorie nenalezena</>;
  return (
    <main>
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">{chosenCategory.headline}</h1>
        <p className="text-gray-600 mb-12">{chosenCategory.description}</p>
        <div className="flex gap-2 mb-12 justify-center flex-wrap">
          {category.subtypes.map((sub) => (
            <CategoryLinkCard title={sub.headline} link={sub.url} />
          ))}
        </div>
        <ProductList
          filters={{ subtype: subtype?.subtype, type: category.type }}
        />
      </div>
    </main>
  );
}
