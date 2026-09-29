import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Garg Telecom - Enterprise Admin Portal",
    description: "Garg Telecom Pvt. Ltd. - Enterprise Management & Operations Administration Portal",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
