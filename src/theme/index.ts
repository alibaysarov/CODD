import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const theme = extendTheme({
    colors,
    ...fonts,
    breakpoints
}) 