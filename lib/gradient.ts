export const gradients = {
  light: {
    primary: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)',
    primaryHover: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    card: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
  },
  dark: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1e3a8a 100%)',
    primaryHover: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    card: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
  },
};

export const getGradient = (mode: 'light' | 'dark', type: keyof typeof gradients.light) => {
  return gradients[mode][type];
};