import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"], // Only 400 weight included
  variable: "--font-poppins",
});

export const metadata = {
  icons: {
    icon: "/my-app/public/logo.png",
  },
  title: "  Irvine Hospitality Group ",
  description: "Irvine Hospitality Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/my-app/public/logo.png" />
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer/>


      </body>
    </html>
  );
}
