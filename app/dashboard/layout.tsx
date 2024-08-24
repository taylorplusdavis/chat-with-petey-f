import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
      <div className="bg-slate-900 text-white max-h-screen h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <Header />
        <div className="h-full">{children}</div>
      </div>
    </ClerkLoaded>
  );
}

export default DashboardLayout;
