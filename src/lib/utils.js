import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
function formatPrice(
  price,
  options = {
    currency : "USD",
    // notation : "standard",
  } = {}
) {
  const {currency = 'USD', notation = 'standard'} = options
  const numericPrice = price === '' ? parseFloat(price) : price

  // Get all available currencies 
const availableCurrencies = Intl.NumberFormat().resolvedOptions().availableCurrencies;

// check if provided currency is valid otherwise default to 'USD'
const validCurrency = availableCurrencies.includes(currency) ? currency : 'USD';

  return new Intl.NumberFormat('en-us',{
    style : 'currency',
    currency: validCurrency,
    notation: notation === 'compact' ? 'compact' : 'standard',
    maximumFractionDigits: 2
  }).format(numericPrice);

}
 export default formatPrice;