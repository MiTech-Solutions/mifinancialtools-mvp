export function formatCurrency(value) {
  const safeValue = Number.isFinite(value) ? value : 0;

  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 2,
  }).format(safeValue);
}
