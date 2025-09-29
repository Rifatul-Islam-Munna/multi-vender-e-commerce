import type { Metadata } from "next";
import { Geist, Geist_Mono ,Poppins} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/Navbar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Poppins({
 weight:["100","200","300","400","500","600","700","800","900"],
 variable:"--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Itaydi Store",
  description: "Itaydi Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider 
        attribute="class"
            defaultTheme="light"
            enableSystem
          disableTransitionOnChange>
            <NavBar/>
             {children}
        </ThemeProvider>
     
      </body>
    </html>
  );
}
