import { circOut } from "svelte/easing";

export const swoop = (node: HTMLElement, params: any) => {
  return {
    duration: 1000,
    easing: circOut,
    css: (t: number) => `transform: scale(${t})`,
  };
};
