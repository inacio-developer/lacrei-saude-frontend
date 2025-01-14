import ClientLayout from "@/lib/client-layout";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { Nunito } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <ClientLayout>
            <Header />
            {children}
            <Footer />
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
