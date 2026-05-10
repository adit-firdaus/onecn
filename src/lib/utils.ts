import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mergeProps<T extends Record<string, unknown>>(defaults: Partial<T>, props: T): T {
  const merged = { ...defaults } as T;
  for (const key of Object.keys(props) as Array<keyof T>) {
    const defaultValue = defaults[key];
    const propValue = props[key];
    if (key === "className" && typeof defaultValue === "string" && typeof propValue === "string") {
      merged[key] = cn(defaultValue, propValue) as T[keyof T];
    } else if (
      key === "style" &&
      typeof defaultValue === "object" &&
      typeof propValue === "object"
    ) {
      merged[key] = { ...defaultValue, ...propValue } as T[keyof T];
    } else {
      merged[key] = propValue;
    }
  }
  return merged;
}
