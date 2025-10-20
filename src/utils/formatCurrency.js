/**
 * Formatea un monto en pesos chilenos (CLP)
 * @param {number} amountCLP - Monto en pesos chilenos
 * @returns {string} Monto formateado con símbolo de moneda
 */
export function toCLP(amountCLP) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amountCLP)
}

export default toCLP
