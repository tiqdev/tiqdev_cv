import Navbar from "@/components/Navbar";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-6JZ2SWK6KN"></Script>
        <Script id="ga-script" strategy="lazyOnload">
          {
            `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-6JZ2SWK6KN');
       
          `
          }
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
