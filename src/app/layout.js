import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

import "./globals.css";

export const metadata = {
  title: "Hina Murme | MERN Stack Developer | Python Developer | LLM Developer",

  description:
    "Hina Murme is a MERN Stack Developer, Python Developer, and LLM Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, Python, Generative AI, and Large Language Models.",

  verification: {
    google: "1K4BMrgpcvAw97_RZciXI-1LKNfrDgYOuzVIbjYVQo8",
  },

  keywords: [
    "Hina Murme",
    "MERN Stack Developer",
    "Python Developer",
    "LLM Developer",
    "Generative AI",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "Full Stack Developer",
    "OpenAI",
    "LangChain",
    "RAG",
    "Vector Database",
    "AI Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Hina Murme",
      url: "https://www.linkedin.com/in/hina-murme/",
    },
  ],

  creator: "Hina Murme",
  publisher: "Hina Murme",

  metadataBase: new URL("https://hina-murme.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Hina Murme | MERN Stack Developer | Python Developer | LLM Developer",

    description:
      "Portfolio of MERN Stack Developer, Python Developer and LLM Developer specializing in modern web applications and Generative AI.",

    url: "https://hina-murme.vercel.app",

    siteName: "Hina Murme Portfolio",

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

  twitter: {
    card: "summary_large_image",

    title:
      "Hina Murme | MERN Stack Developer | Python Developer | LLM Developer",

    description:
      "Portfolio of MERN Stack Developer, Python Developer and LLM Developer.",

    images: ["/pic.png"],
  },

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

  category: "Technology",
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hina Murme",
    url: "https://hina-murme.vercel.app",
    image: "https://hina-murme.vercel.app/pic.png",

    jobTitle:
      "MERN Stack Developer | Python Developer | LLM Developer",

    description:
      "MERN Stack Developer, Python Developer and LLM Developer specializing in React.js, Next.js, Node.js, MongoDB, Python and Generative AI.",

    sameAs: [
      "https://www.linkedin.com/in/hina-murme/",
      "https://github.com/hinamurme",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <Navbar />

        {children}

        {/* <Chatbot /> */}
      </body>
    </html>
  );
}