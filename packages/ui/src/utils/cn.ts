import { type ClassValue, clsx } from 'clsx';
import { cva } from 'class-variance-authority';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export { cva };