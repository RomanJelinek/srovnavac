import { getPragueProductById } from "@/app/actions/productStatic";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { id } = params;
  const product = await getPragueProductById(id);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="col-span-1">
          <Image
            src={product.image}
            alt={product.product_name}
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.product_name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-gray-900 mr-2">
                {product.price.toFixed(2)} Kč
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold mt-8 mb-4">Podrobnosti</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Kategorie:</strong> {product.category}
                </li>
                <li>
                  <strong>Kde:</strong> {product.city}
                </li>
              </ul>
            </div>
            <Link href={product.url}>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4">
                Objednat
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Další ukázky</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Product Image ${index + 1}`}
              width={200}
              height={200}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
