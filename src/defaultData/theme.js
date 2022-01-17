import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    heading: "Open Sans, sans-serif",
    body: "Open Sans, sans-serif",
  },
});

export const scrollbar = {
  "&::-webkit-scrollbar": {
    width: "0.25rem",
    height: "0.25rem",
  },
  "&::-webkit-scrollbar-track": {
    width: "0.25rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "gray",
    borderRadius: "1.5rem",
  },
};
