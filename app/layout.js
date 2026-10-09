
import "./globals.css";

export const metadata = {
  title: "Aangan – India's Experiential Entertainment Company",
  description:
    "Aangan is an experiential entertainment company based in Bhopal and Indore, creating live experiences across music, culture and youth.",
  metadataBase: new URL("https://aanganlive.in"),
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Jost:wght@300;400;500&family=Caveat:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
