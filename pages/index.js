import Layout from '@/components/shared/layout';
import { ThemeProvider } from '@/components/ui/theme-provider';

export default function Home() {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <Layout />
      </ThemeProvider>
    </>
  );
}
