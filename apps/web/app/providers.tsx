'use client';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { LazyMotion, domAnimation } from 'framer-motion';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  );
}
