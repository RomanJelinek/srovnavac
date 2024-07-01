export const createSlug = (text: string): string => {
  // Normalize the text to decompose combined letters and diacritics
  const normalizedText = text.normalize("NFD");

  // Remove diacritics and special characters, keep alphanumeric characters and spaces
  const sanitizedText = normalizedText
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "");

  // Convert to lowercase
  const lowerCaseText = sanitizedText.toLowerCase();

  // Replace spaces with hyphens
  return lowerCaseText.trim().replace(/\s+/g, "-");
};
