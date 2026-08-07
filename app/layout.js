import "./globals.css";

export const metadata = {
  title: "Aila Grace Alquiza | Real Estate Virtual Assistant",
  description: "Portfolio of Aila Grace Alquiza — Real Estate Virtual Assistant, Research & Data Specialist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
