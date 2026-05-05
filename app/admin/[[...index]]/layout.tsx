export const metadata = {
    title: 'Sanity Studio',
    description: 'Content Management System',
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
