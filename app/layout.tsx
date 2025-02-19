import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "Sharthak Sp",
  authors: {
    name: "sharthak",
  },

  description:
    "Get your business vision go door to door with cool website with lots of organically accumulated data. This is my personal portfolio. See my projects to help you know my work and i am available any time you want to give me call.",
  openGraph: {
    title: "Sharthak Sp",
    description:
      "Get your business vision go door to door with cool website with lots of organically accumulated data. This is my personal portfolio. See my projects to help you know my work and i am available any time you want to give me call.",
    url: "http://localhost:3000",
    siteName: "Sharthak SP Personal Portfolio",
    images: "/sp.png",
    type: "website",
  },
  keywords: [
    "mobile application developer",
    "sharthak.s.p",
    "full stack developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${spaceGrotesk.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
