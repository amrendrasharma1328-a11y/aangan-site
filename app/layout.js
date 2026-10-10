
// import "./globals.css";


// <meta name="google-site-verification" content="TgA4o5hYgV20QUA2BB-AvWhmdFDmNhS_glDL6fj2608" />
// const TITLE = "Aangan – India's Experiential Entertainment Company";
// const DESCRIPTION =
//   "Aangan is an experiential entertainment company based in Bhopal and Indore, creating live experiences across music, culture and youth.";

// export const metadata = {
//   metadataBase: new URL("https://aanganlive.in"),
//   title: TITLE,
//   description: DESCRIPTION,
//   keywords: [
//     "Aangan",
//     "Aangan live",
//     "experiential entertainment",
//     "live events Bhopal",
//     "live events Indore",
//     "music events",
//   ],
//   alternates: { canonical: "/" },
//   robots: { index: true, follow: true },
//   openGraph: {
//     title: TITLE,
//     description: DESCRIPTION,
//     url: "https://aanganlive.in",
//     siteName: "Aangan",
//     images: [{ url: "/images/logo.webp" }],
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary",
//     title: TITLE,
//     description: DESCRIPTION,
//     images: ["/images/logo.webp"],
//   },
//   // Search Console "HTML tag" method se verify karna ho to yahan code daalo:
//   // verification: { google: "YAHAN_APNA_CODE" },
// };

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   viewportFit: "cover",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Jost:wght@300;400;500&family=Caveat:wght@500&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
import "./globals.css";

const TITLE = "Aangan – India's Experiential Entertainment Company";

const DESCRIPTION =
  "Aangan is an experiential entertainment company based in Bhopal and Indore, creating live experiences across music, culture and youth.";

export const metadata = {
  metadataBase: new URL("https://aanganlive.in"),

  title: TITLE,
  description: DESCRIPTION,

  verification: {
    google: "TgA4o5hYgV20QUA2BB-AvWhmdFDmNhS_glDL6fj2608",
  },

  keywords: [
    "Aangan",
    "Aangan live",
    "experiential entertainment",
    "live events Bhopal",
    "live events Indore",
    "music events",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://aanganlive.in",
    siteName: "Aangan",
    images: [
      {
        url: "/images/logo.webp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/logo.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Jost:wght@300;400;500&family=Caveat:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
