import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/common/Header";
import StandAloneHeader from "@/components/common/StandAloneHeader";
import Footer from "@/components/common/Footer";
import StyledComponentsRegistry from "@/libs/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import Wrapper from "@/components/common/Wrapper";
import { Provider } from "./Provider";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Point App",
  description: "Point management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Provider>
        <body className={noto.className}>
          <StyledComponentsRegistry>
            <GlobalStyles />
              <Header />
              <Wrapper>{children}</Wrapper>
            <Footer />
          </StyledComponentsRegistry>
        </body>
      </Provider>
    </html>
  );
}
