import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Point App",
  description: "Sign up for service",
};

export default function JoinPageLayout({
    children, // will be a page or nested layout
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>   
        {children}
      </>
    )
  }
