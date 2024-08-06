import { type ClassValue, clsx } from "clsx";
import { twMerge as twMergeInternal } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMergeInternal(clsx(inputs));
}

// If you need a separate function for `twMerge`, rename it to avoid conflicts.
export function customTwMerge(value: string): string {
  return twMergeInternal(value);
}
