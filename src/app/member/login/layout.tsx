import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - Point App",
    description: "Login for service"
};

export default function LoginPageLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )
};
