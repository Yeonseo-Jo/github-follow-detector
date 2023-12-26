import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import { reset } from "./reset.css";

export const GlobalStyle = [
  ...reset,
  globalFontFace("insungitCutelivelyjisu", {
    src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/insungitCutelivelyjisu.woff2') format('woff2')",
    fontWeight: "normal",
    fontStyle: "normal",
  }),

  globalStyle("*, *:before, *:after", {
    boxSizing: "border-box",
    WebkitTapHighlightColor: "rgba(255,255,255,0)",
    userSelect: "none",
    WebkitTouchCallout: "none",
    fontFamily: "insungitCutelivelyjisu",
  }),

  globalStyle("input, textarea, button", {
    appearance: "none",
    MozAppearance: "none",
    WebkitAppearance: "none",
    borderRadius: 0,
    WebkitBorderRadius: 0,
    MozBorderRadius: 0,
  }),

  globalStyle("focus", {
    outline: "none",
    border: "none",
  }),
];
