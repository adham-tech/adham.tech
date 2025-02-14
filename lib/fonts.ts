import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Libre_Caslon_Display as FontSerif,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const frontSerif = FontSerif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});
