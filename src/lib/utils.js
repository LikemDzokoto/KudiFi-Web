import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines Tailwind CSS classes with utility libraries
 * @param  {...string} inputs - Class names to be combined
 * @returns {string} - Combined class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a random ID
 * @param {number} length - Length of the ID
 * @returns {string} - Random ID
 */
export function generateId(length = 8) {
  return Math.random().toString(36).substring(2, length + 2);
}

/**
 * Formats a number with comma separators
 * @param {number} number - Number to format
 * @returns {string} - Formatted number
 */
export function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}