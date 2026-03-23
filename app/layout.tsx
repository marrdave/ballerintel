import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ballerintel.com"),
  title: "Baller — Football Intelligence for 299 Leagues",
  description:
    "Baller delivers football intelligence across 299 leagues with injuries, form ratings, fixtures, vulnerability flags and predicted XIs. Available on Virtuals ACP for $1.50 per query.",
  keywords: [
    "football intelligence",
    "world cup 2026",
    "fantasy football",
    "sports betting",
    "virtuals acp",
    "football data",
    "predicted xi",
  ],
  openGraph: {
    title: "Baller — Football Intelligence for 299 Leagues",
    description:
      "299 leagues. 4,685 teams. 40,000+ injury records. Football intelligence on Virtuals ACP.",
    url: "https://ballerintel.com",
    siteName: "Baller",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baller — Football Intelligence for 299 Leagues",
    description:
      "Football intelligence across 299 leagues with injuries, form, fixtures, vulnerabilities and predicted XIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
