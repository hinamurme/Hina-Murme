import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

import "./globals.css";

export const metadata = {
  title: "Hina Murme | Portfolio",
  description: "Python Backend Developer, Data Analyst & Frontend Developer",

  // Google Search Console Verification
  verification: {
    google: "1K4BMrgpcvAw97_RZciXI-1LKNfrDgYOuzVIbjYVQo8",
  },

  // SEO Metadata
  keywords: [
    "Hina Murme",
    "Portfolio",
    "Python Developer",
    "Backend Developer",
    "Data Analyst",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Hina Murme",
    },
  ],

  creator: "Hina Murme",
  publisher: "Hina Murme",

  metadataBase: new URL("https://hina-murme.vercel.app"),

  // Open Graph
  openGraph: {
    title: "Hina Murme | Portfolio",
    description:
      "Portfolio of Python Backend Developer, Data Analyst & Frontend Developer",
    url: "https://hina-murme.vercel.app",
    siteName: "Hina Portfolio",
    images: [
      {
        url: "/pic.png",
        width: 1200,
        height: 630,
        alt: "Hina Murme Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Hina Murme | Portfolio",
    description:
      "Portfolio of Python Backend Developer, Data Analyst & Frontend Developer",
    images: ["/pic.png"],
  },

  // Icons
  icons: {
    icon: "/H-logo.png",
    shortcut: "/H-logo.png",
    apple: "/H-logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* <Chatbot /> */}
      </body>
    </html>
  );
}