import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
      <div className="bg-slate-900 text-white">
        {/* Header */}
        <Header />
        <div>{children}</div>
      </div>
    </ClerkLoaded>
  );
}

export default DashboardLayout;
