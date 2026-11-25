import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ML Playground | Learn by experimenting",
  description: "Explore machine learning through interactive simulations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
