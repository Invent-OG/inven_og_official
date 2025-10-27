import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar /> {/* ✅ Now correctly nested */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

