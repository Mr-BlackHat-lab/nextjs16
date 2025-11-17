import type { Metadata } from "next";
import "./globals.css";
import { ErrorWrapper } from "./error-wrapper";

export const metadata: Metadata = {
  title: {
    default: "learner",
    template: "%s | learner",
  },
  description: "nextjs 16 learning project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "16px" }}>
          <p>header</p>
        </header>
        <ErrorWrapper>{children}</ErrorWrapper>
        <footer style={{ backgroundColor: "ghostwhite", padding: "16px" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
