"use client";

interface IProps {
  children: React.ReactNode;
}

import { ThemeProvider } from "next-themes";

export function Providers({ children }: IProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
