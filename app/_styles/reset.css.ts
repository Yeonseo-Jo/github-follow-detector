import { globalStyle } from "@vanilla-extract/css";

export const reset = [
  globalStyle(
    "html, body, div, sapn, applet, object, ifram, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video",
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: "62.5%",
      verticalAlign: "baseline",
    }
  ),

  /* HTML5 display-role reset for older browsers */
  globalStyle(
    "article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section",
    {
      display: "block",
    }
  ),

  /* HTML5 hidden-attribute fix for newer browsers */
  globalStyle("*[hidden]", {
    display: "none",
  }),

  globalStyle("body", {
    lineHeight: "1",
  }),

  globalStyle("menu, ol, ul", {
    listStyle: "none",
  }),

  globalStyle("blockquote, q", {
    quotes: "none",
  }),

  globalStyle("blockquote:before,blockquote:after, q:before,q:after", {
    content: "none",
  }),

  globalStyle("table", {
    borderCollapse: "collapse",
    borderSpacing: 0,
  }),

  globalStyle("button", {
    cursor: "pointer",
    background: "transparent",
    border: "none",
  }),
];
