import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import { QuoteProvider } from "@/context/QuoteContext";
import "./globals.css";

export const metadata = {
    title: "Garg Telecom Pvt. Ltd. – Telecommunications & Digital Solutions",
    description: "Connecting People. Powering Businesses. Premier enterprise telecommunications, optical fiber, networking infrastructure, CCTV surveillance & structured cabling based in Karol Bagh, New Delhi (110007). Official GST Invoicing & GeM Registered.",
    icons: {
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" }
        ],
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
                <StoreProvider>
                    <QuoteProvider>
                        <Toaster position="bottom-right" />
                        {children}
                    </QuoteProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
