import { ThemeContext } from "@/context";
import { use } from "react";

/**
 * Returns the theme context
 * @see {@link ThemeContext}
 */
function useTheme() {
  return use(ThemeContext);
}

export default useTheme;
