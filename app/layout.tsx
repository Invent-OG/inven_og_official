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

// import NavBar from "@/components/NavBar";
// import "./globals.css";
// import Footer from "@/components/Footer";
// import { ReactNode } from "react";
// import PageTransition from "@/components/PageTransition";

// // Create a client component wrapper for the transition
// function TransitionWrapper({ children }: { children: ReactNode }) {
//   return (
//     <>
//       {/* Page transition overlay */}
//       <PageTransition />

//       {/* Your page content */}
//       <main>{children}</main>
//     </>
//   );
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="relative overflow-x-hidden">
//         <NavBar />

//         {/* Wrap content with transition */}
//         <TransitionWrapper>{children}</TransitionWrapper>

//         <Footer />
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import { ReactNode } from "react";
import { League_Spartan } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Metadata } from "next";

// ✅ Import Google Font: League Spartan
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "InventOG | Innovation in Every Pixel",
    template: "%s | InventOG",
  },
  description:
    "InventOG is a leading digital agency specializing in web development, design, and AI solutions. We build the future of the web.",
  keywords: [
    "Web Development",
    "UI/UX Design",
    "AI Solutions",
    "Digital Agency",
    "Next.js",
    "React",
    "InventOG",
  ],
  authors: [{ name: "InventOG Team" }],
  creator: "InventOG",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inventog.com",
    title: "InventOG | Innovation in Every Pixel",
    description:
      "InventOG is a leading digital agency specializing in web development, design, and AI solutions.",
    siteName: "InventOG",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "InventOG - Innovation in Every Pixel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InventOG | Innovation in Every Pixel",
    description:
      "InventOG is a leading digital agency specializing in web development, design, and AI solutions.",
    images: ["/og-image.jpg"],
    creator: "@inventog",
  },
  metadataBase: new URL("https://inventog.com"),
};

// ✅ Client-side transition wrapper
function TransitionWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Page transition overlay */}
      <PageTransition />

      {/* Page content */}
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
    <html lang="en" className={leagueSpartan.className}>
      <body className="relative overflow-x-hidden">
        <NavBar />

        {/* Page transition wrapper */}
        <TransitionWrapper>{children}</TransitionWrapper>

        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "InventOG",
              url: "https://inventog.com",
              logo: "https://inventog.com/logo.png",
              sameAs: [
                "https://twitter.com/inventog",
                "https://linkedin.com/company/inventog",
                "https://instagram.com/inventog",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-555-5555",
                contactType: "customer service",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
