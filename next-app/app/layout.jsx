import localFont from "next/font/local";
import "./globals.css";
import "./assets/fonts/fonts.css";

export const metadata = {
  title: "Строительные решения",
  description:
    "Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
