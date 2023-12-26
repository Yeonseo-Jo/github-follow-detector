import { style } from "@vanilla-extract/css";

export const UserProfileWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",

  fontSize: "3rem",

  gap: "2rem",
});

export const CurrentFollowInfo = style({
  marginBottom: "2rem",

  fontSize: "3rem",
});
