import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Linear - A better way to build products 🤔</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicons.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header />
        <main className="pt-[var(--navigation-height)] bg-page-gradient">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
