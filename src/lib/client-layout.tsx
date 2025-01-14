"use client";

import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/components/globalstyle";

type ProviderProps = {
  children: React.ReactNode;
};

const ClientLayout = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ClientLayout;
