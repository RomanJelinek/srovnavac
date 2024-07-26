import ProductList from "@/components/product-list/ProductList";
import { homepageCategories } from "@/constants/categories";
import { getProducts } from "@/app/actions/product";

export default async function Home() {
  const { data: initialProducts, count: totalProducts } = await getProducts({
    start: 0,
    end: 9,
  });

  return (
    <>
      <header className="py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Co dělat v Praze</h1>
          <p className="text-justify">
            Praha nabízí širokou škálu aktivit pro každého. Toto nádherné město
            v srdci Evropy je plné historických památek, kulturních akcí,
            gastronomických požitků a příležitostí k relaxaci i dobrodružství.
            Ať už jste milovník historie, nadšenec do sportu, gurmán nebo
            hledáte adrenalinové zážitky, Praha má co nabídnout. Pro ty, kteří
            mají rádi klidnější aktivity, je zde množství parků, zahrad a míst
            pro relaxaci, kde si můžete odpočinout od ruchu města. Pokud hledáte
            kulturní obohacení, pražské galerie, muzea a divadla vás určitě
            nezklamou. Pro rodiny s dětmi je zde také mnoho zábavných parků,
            interaktivních výstav a dětských hřišť. Praha je také rájem pro
            milovníky dobrého jídla a pití. Od tradičních českých hospod až po
            moderní restaurace a kavárny – každý si zde najde to své. Místní
            trhy a festivaly jídla nabízejí autentické zážitky a možnost
            ochutnat místní speciality. Prozkoumejte naše doporučení v
            jednotlivých kategoriích a objevte to nejlepší, co Praha nabízí.
            Každá kategorie je pečlivě vybrána, aby vám poskytla ty
            nejzajímavější a nejzábavnější zážitky. Ať už hledáte dobrodružství,
            kulturu, sport nebo relaxaci, náš průvodce vám pomůže najít ty
            nejlepší aktivity pro váš pobyt v Praze.
          </p>
        </div>
      </header>
      <main>
        <div className="min-h-screen bg-white">
          <main className="container mx-auto my-12 p-4">
            <h1 className="text-4xl font-bold text-center mb-6">
              Tipy na aktivity v Praze
            </h1>
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {homepageCategories.map((category) => (
                  <div
                    key={category.id}
                    className="w-full flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 p-5"
                  >
                    <div className="flex flex-col">
                    <h3 className="text-2xl text-stone-900 font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="mb-4 text-stone-900 text-justify">{category.description}</p>
                    </div>
                    <a
                      href={category.link}
                      className="text-blue-600 hover:underline"
                    >
                      Více informací
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
        <h1 className="text-4xl font-bold text-center mb-6">Zážitky v Praze</h1>
        <ProductList
          initialProducts={initialProducts}
          totalProducts={totalProducts}
        />
      </main>
    </>
  );
}
