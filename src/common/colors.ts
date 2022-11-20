export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export const white: Color = "#fff";
export const black: Color = "#000";
export const red: Color = "#f00";
export const highlight: Color = "#b3d4fc";
export const gray: Color = "#222";
export const lightGray: Color = "#ccc";
export const linkColor: Color = "#0000cd";
