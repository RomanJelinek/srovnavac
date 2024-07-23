import ProductList from '@/components/ProductList';
import { getCategory } from '../utility/categories';
import CategoryLinkCard from '@/components/CategoryLinkCard';

export default async function Category({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const cat = getCategory(slug);
  const chosenCategory = cat?.subtype || cat?.category;
  if (!chosenCategory) return <>Kategorie nenalezena</>;
  return (
    <main>
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">{chosenCategory.headline}</h1>
        <p className="text-gray-600 mb-12">{chosenCategory.description}</p>
        <div className="flex gap-2 mb-12 justify-center flex-wrap">
          {cat.category.subtypes.map((sub) => (
            <CategoryLinkCard title={sub.headline} key={sub.url} link={sub.url} />
          ))}
        </div>
        <ProductList
          filters={{ subtype: cat.subtype?.subtype, type: cat.category.type }}
        />
      </div>
    </main>
  );
}
