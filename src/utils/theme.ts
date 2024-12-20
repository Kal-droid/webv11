export const typography = {
  hero: {
    headline: {
      size: 'text-4xl md:text-5xl lg:text-6xl',
      weight: 'font-bold',
      height: 'leading-tight',
      spacing: 'tracking-tight'
    },
    subheading: {
      size: 'text-lg md:text-xl lg:text-2xl',
      weight: 'font-medium',
      height: 'leading-relaxed'
    }
  },
  colors: {
    primary: {
      light: '#ffffff',
      DEFAULT: '#000080', // Navy Blue
      dark: '#00006b'
    },
    accent: {
      light: '#b4ffb4',
      DEFAULT: '#98FF98', // Mint Green - WCAG AA compliant with navy background
      dark: '#7cff7c'
    }
  }
} as const;