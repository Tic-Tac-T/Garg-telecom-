import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import { QuoteProvider } from "@/context/QuoteContext";
import "./globals.css";

export const metadata = {
    title: "Garg Telecom – Telecom, Networking & Surveillance Solutions",
    description: "Connecting Businesses. Securing Spaces. Powering Networks. Trusted dealership in Karol Bagh, New Delhi for Wi-Fi routers, network switches, CCTV, EPABX, intercoms & structured cabling.",
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
