import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/LanguageContext";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "FinancersLot | 116+ Precision Financial Calculators Suite",
    description: "116+ professional finance calculators and printable PDF generators for loans, investments, mortgages, retirement, taxes, and business tools.",
    keywords: ["finance calculator", "auto loan calculator", "fire calculator", "dividend calculator", "sip calculator", "mortgage calculator", "ti-84 tvm solver", "zakat calculator", "invoice generator", "seller financing"],
    authors: [{ name: "FinancersLot Team" }],
    openGraph: {
        title: "FinancersLot | 116+ Precision Financial Calculators",
        description: "Master your money with our suite of 116+ precision financial tools with 100% in-browser client-side privacy.",
        type: "website",
        url: "https://financerslot.com",
        siteName: "FinancersLot",
    },
    twitter: {
        card: "summary_large_image",
        title: "FinancersLot | 116+ Precision Financial Tools",
        description: "The complete 116+ financial calculator and document generator suite.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8363910904534967"
                    crossOrigin="anonymous"
                />
            </head>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.variable
            )}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <LanguageProvider>
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
