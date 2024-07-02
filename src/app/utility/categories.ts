import { categories } from '@/constants/categories';

export const getCategory = (slug: string) => {
  for (const category of categories) {
    for (const subtype of category.subtypes) {
      if (subtype.url === slug) {
        return { category, subtype };
      }
    }

    if (category.url === slug) {
      return { category, subtype: null };
    }
  }
  return null;
};

function groupByTypeAndSubtype(items) {
  const result = [];
  const typeMap = new Map();
  items.forEach((item) => {
    const { type, subtype } = item;
    if (!typeMap.has(type)) {
      typeMap.set(type, []);
    }
    const subtypes = typeMap.get(type);
    if (!subtypes.some((s) => s.subtype === subtype)) {
      subtypes.push({ subtype });
    }
  });
  typeMap.forEach((subtypes, type) => {
    result.push({ type, subtypes });
  });

  return result;
}
