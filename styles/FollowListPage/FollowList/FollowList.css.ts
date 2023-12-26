import { style } from "@vanilla-extract/css";

export const FollowListWrapper = style({
  display: "flex",

  textAlign: "center",

  gap: "5rem",
});

export const ListDetailWrapper = style({
  display: "flex",
  flexDirection: "column",

  fontSize: "3rem",

  gap: "2rem",
});

export const LoginId = style({
  fontSize: "1.5rem",
});

export const ListTitle = style({
  padding: "1rem 2rem",
  borderRadius: "1.5rem",

  backgroundColor: "#DD9CD4",

  color: "white",
});
