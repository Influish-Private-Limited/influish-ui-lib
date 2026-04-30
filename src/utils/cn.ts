import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using clsx and tailwind-merge.
 * This is essential for building Tailwind-based component libraries.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
