export const slugify = (text: string): string => {
  // ridiculous that I needed to add lower case
  return text.toString().replace(/\s+/g, '-').replace(/^-+/, '').replace(/-+$/, '').toLowerCase();
};

export const deslugify = (text: string): string => {
  return text.toString().replace(/-/g, ' ');
};
