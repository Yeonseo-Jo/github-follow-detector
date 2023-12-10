import { globalStyle } from "@vanilla-extract/css";
import { reset } from "./reset.css";

export const GlobalStyle = [
  ...reset,
  globalStyle("*, *:before, *:after", {
    boxSizing: "border-box",
    WebkitTapHighlightColor: "rgba(255,255,255,0)",
    userSelect: "none",
    WebkitTouchCallout: "none",
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
