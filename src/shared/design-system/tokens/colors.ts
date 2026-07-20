export const colors = {
  background: {
    primary: '#020406',
    elevated: '#07101D',
  },
  surface: {
    primary: '#0C1C35',
    secondary: '#13294A',
    icon: '#203B64',
  },
  text: {
    primary: '#F8FAFC',
    secondary: '#9AAAC4',
    inverse: '#061108',
  },
  accent: {
    cyan: '#58D5FF',
    blue: '#348FDE',
    green: '#64DD72',
    greenPressed: '#4DCB60',
  },
  border: {
    subtle: '#29466F',
  },
  semantic: {
    error: '#FF7676',
  },
  transparent: 'transparent',
} as const;

export const gradients = {
  card: ['#142A4D', '#07111F'] as const,
  primaryAction: ['#79E381', '#55D86B'] as const,
} as const;
