import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

import "./globals.css";

export const metadata = {
  title: "Hina Murme | Project Engineer | Full Stack Developer",

  description:
    "Project Engineer with 1+ year of experience in MERN Stack and Next.js development. Specializing in full-stack web applications, REST APIs, and secure authentication.",

  icons: {
    icon: "/logo.png",
  },

  verification: {
    google: "1K4BMrgpcvAw97_RZciXI-1LKNfrDgYOuzVIbjYVQo8",
  },

  keywords: [
    "Hina Murme",
    "Project Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "REST API Developer",
    "Portfolio",
    "Dexterous Technology",
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
    title: "Hina Murme | Project Engineer | Full Stack Developer",
    description:
      "Project Engineer with 1+ year experience in Full Stack and Next.js. Building scalable full-stack web applications with secure authentication and responsive UIs.",

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

    title: "Hina Murme | Project Engineer | Full Stack Developer",
    description:
      "Project Engineer specializing in MERN Stack, Next.js, and full-stack development.",

    images: ["/pic.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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

    jobTitle: "Project Python Developer | LLM Developer",

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
