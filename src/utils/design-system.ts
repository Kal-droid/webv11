// Design system constants for consistent styling
export const borderRadius = {
  sm: 'rounded-lg', // 8px
  md: 'rounded-xl', // 12px
  lg: 'rounded-2xl', // 16px
  full: 'rounded-full'
};

export const cardStyles = {
  base: `${borderRadius.md} bg-white shadow-lg hover:shadow-xl transition-all duration-300`,
  glass: `${borderRadius.md} bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300`,
  dark: `${borderRadius.md} bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300`
};

export const navigationStyles = {
  item: `${borderRadius.sm} px-4 py-2 transition-all duration-300`,
  mobile: `${borderRadius.md} w-full px-4 py-3 transition-all duration-300`
};

export const buttonStyles = {
  base: `${borderRadius.md} px-6 py-3 font-semibold transition-all duration-300`,
  icon: `${borderRadius.full} p-2 transition-all duration-300`
};