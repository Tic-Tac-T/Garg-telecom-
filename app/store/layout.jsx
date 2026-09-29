import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Garg Telecom - Store & Vendor Portal",
    description: "Garg Telecom Pvt. Ltd. - Authorized Vendor & Store Management Portal",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
