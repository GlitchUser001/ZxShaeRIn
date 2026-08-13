import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sheron | Student, Developer & Creator",
  description:
    "Sheron is a student, developer, and creator building innovative digital projects, exploring technology, and sharing his work, ideas, and journey online.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sheron Oliver Khoya",
  url: "https://zx-shae-r-in.vercel.app",
  jobTitle: "Student, Developer & Creator",
  description:
    "Sheron Oliver Khoya is a student, developer, and creator exploring technology, design, and creative work.",
  sameAs: [
    "https://www.linkedin.com/in/sheron-oliver-khoya-23a46b417/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}