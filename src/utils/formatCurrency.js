const CONVERSION_RATE_USD_TO_CLP = 900

export function toCLP(amountUSD) {
    const clp = Math.round(amountUSD * CONVERSION_RATE_USD_TO_CLP)
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(clp)
}

export default toCLP
