import type { AppProps /*, AppContext */ } from 'next/app'
import React from 'react';
import NextNprogress from 'nextjs-progressbar';

import '../styles/main.css';

export default function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition="0.3"
        stopDelayMs="200"
        height="3"
      />
      <Component {...pageProps} />
    </>
    )
}