import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/cauldron.svg" />
        <meta name="description" content="Your one-stop shop for glass art, macrames, and hand-crafted arts." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin  />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/flowbite@1.4.2/dist/flowbite.js"></script>
      </body>
    </Html>
  )
};