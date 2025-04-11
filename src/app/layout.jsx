import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SearchProvider } from "@/context/SearchContext";


export const metadata = {
  title: "E-Store",
  description: "All your needs at one place !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <SearchProvider>
          <Header />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
