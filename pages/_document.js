import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/cauldron.svg" />
        <meta name="description" content="Your one-stop shop for glass art, macrames, and hand-crafted arts." />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/flowbite@1.4.2/dist/flowbite.js"></script>
      </body>
    </Html>
  )
};