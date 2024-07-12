import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "@/utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function twMerge(value: string): string {
  return twMerge(value);
}
