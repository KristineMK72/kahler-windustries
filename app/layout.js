import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Kahler Windustries — Wind Turbine Field Services",
    template: "%s · Kahler Windustries",
  },
  description:
    "Professional wind turbine installation, inspection, mechanical and electrical service across rural Minnesota and the Upper Midwest. Owner-operated by Tom Kahler.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    title: "Kahler Windustries — Wind Turbine Field Services",
    description:
      "Installation, inspection, mechanical & electrical service for commercial wind systems. Owner-operated across rural Minnesota and the Upper Midwest.",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Kahler Windustries — wind turbine field services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahler Windustries",
    description: "Wind turbine field services · Upper Midwest",
    images: ["/og.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
