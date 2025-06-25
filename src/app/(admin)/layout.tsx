import DashboardHeader from "@/components/admin/layout/DashboardHeader";
import DashboardSidebar from "@/components/admin/layout/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
