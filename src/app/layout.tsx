import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "learner",
  description: "nextjs 16 learning project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
