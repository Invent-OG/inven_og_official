// import NavBar from "@/components/NavBar";
// import "./globals.css";
// import Footer from "@/components/Footer";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <NavBar /> {/* ✅ Now correctly nested */}
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import PageTransition from "@/components/PageTransition";

// Create a client component wrapper for the transition
function TransitionWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Page transition overlay */}
      <PageTransition />

      {/* Your page content */}
      <main>{children}</main>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <NavBar />

        {/* Wrap content with transition */}
        <TransitionWrapper>{children}</TransitionWrapper>

        <Footer />
      </body>
    </html>
  );
}
