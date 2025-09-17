import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Employee Experience | Future of Work | Leadership Keynote Speaker | Jacob Morgan",
  description: "Jacob Morgan is a professionally trained futurist, best-selling author, and keynote speaker. He creates future-ready organizations, leaders, and employees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (prefers-color-scheme: dark) {
              body {
                color-scheme: light !important;
                background-color: white !important;
                color: rgb(17, 24, 39) !important;
              }
            }
          `
        }} />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
