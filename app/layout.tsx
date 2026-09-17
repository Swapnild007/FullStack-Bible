import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FullStack Bible | Learn to Build",
  description: "A structured, project-first path from web fundamentals to production full-stack engineering."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
