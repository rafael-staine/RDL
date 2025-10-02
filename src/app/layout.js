import "./globals.css"
import Header from "@/components/Header";

export const metadata = {
  title: "RDL Vendas",
  description: "site de vendas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
