import { theme } from "@/app/assets/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
