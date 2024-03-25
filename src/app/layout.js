// import { Inter } from "next/font/google";
import "./globals.css";
import '../styles/font.css'
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solfit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/SolFit Flavicon color.png" sizes="any" />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
