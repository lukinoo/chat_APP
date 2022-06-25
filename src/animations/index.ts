import { sineOut } from "svelte/easing";

export const swoop = (node: HTMLElement, params: any) => {
  return {
    duration: 1000,
    easing: sineOut,
    css: (t: number) => `transform: scale(${t})`,
  };
};
