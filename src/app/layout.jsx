import "./globals.css";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";

import Header from "@/app/components/Header";
import A11ySkip from "@/app/components/A11ySkip";
import StickyWhatsapp from "@/app/components/StickyWhatsapp";
import Footer from "@/app/components/Footer";

import { getCatalogMenu } from "@/app/lib/categories";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const catalogMenu = await getCatalogMenu();

  return (
    <html lang="en">
      <body className={`${roboto.className} bg-secondary`}>
        <A11ySkip />
        <Header catalogMenu={catalogMenu} />
        <Providers>{children}</Providers>
        <StickyWhatsapp />
        <Footer catalogMenu={catalogMenu} />
      </body>
    </html>
  );
}
