import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const isProduction = () => {
  // Check for Vercel environment variables
  const isVercel = process.env.VERCEL === '1';
  return isVercel || process.env.NODE_ENV === 'production';
};
