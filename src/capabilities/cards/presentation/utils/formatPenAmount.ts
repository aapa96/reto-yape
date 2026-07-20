const penFormatter = new Intl.NumberFormat('es-PE', {
  currency: 'PEN',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 2,
  style: 'currency',
});

export function formatPenAmount(value: number) {
  return penFormatter.format(value).replace('PEN', 'S/');
}
