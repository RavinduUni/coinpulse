import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine arbitrary class value inputs into a single class string, removing duplicates and merging Tailwind utility classes.
 *
 * @param inputs - Class values (strings, arrays, objects, etc.) to be combined
 * @returns The resulting class string with duplicates removed and Tailwind-style utilities merged
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as a localized currency or plain numeric string.
 *
 * If `value` is `null`, `undefined`, or `NaN`, returns `'$0.00'` when `showSymbol` is not explicitly `false`, otherwise returns `'0.00'`.
 *
 * @param value - The numeric value to format.
 * @param digits - Number of fraction digits to show (used as both minimum and maximum); defaults to 2.
 * @param currency - ISO currency code to use when showing a currency symbol; defaults to `'USD'`.
 * @param showSymbol - Whether to include the currency symbol; when `true` or `undefined` formats as currency, when `false` formats as a plain number.
 * @returns A localized string representing `value`; includes a currency symbol when `showSymbol` is `true` or `undefined`, otherwise a plain numeric string with the specified fraction digits.
 */
export function formatCurrency(
  value: number | null | undefined,
  digits?: number,
  currency?: string,
  showSymbol?: boolean,
) {
  if (value === null || value === undefined || isNaN(value)) {
    return showSymbol !== false ? '$0.00' : '0.00';
  }

  if (showSymbol === undefined || showSymbol === true) {
    return value.toLocaleString(undefined, {
      style: 'currency',
      currency: currency?.toUpperCase() || 'USD',
      minimumFractionDigits: digits ?? 2,
      maximumFractionDigits: digits ?? 2,
    });
  }
  return value.toLocaleString(undefined, {
    minimumFractionDigits: digits ?? 2,
    maximumFractionDigits: digits ?? 2,
  });
}