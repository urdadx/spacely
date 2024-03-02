import '@/styles/globals.css';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
      <Analytics />
    </>
  );
}
