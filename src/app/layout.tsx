import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "RunTech",
  description: "RunTech digital entertainment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <main className="site-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}