import { Montserrat } from "next/font/google";
import "./globals.css";
import './style.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Apna Career - Your Path to Success",
  description: "Apna Career is your trusted education consultant, guiding you to achieve academic and professional success.",
  keywords: "education, consultancy, career guidance, academic success, professional development",
  author: "Apna Career Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}