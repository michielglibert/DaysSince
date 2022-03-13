import { extendTheme } from "@chakra-ui/react";
import styles from "./foundations/styles";

const extendedTheme = extendTheme({
  styles,
});

// We explicitly override the breakpoints here because the combination of
// our own breakpoints and the built-in ones causes clashes
const baseTheme = { ...extendedTheme };

export type CustomTheme = typeof extendedTheme & typeof baseTheme;

export default baseTheme;
