import Documents from "@/components/Documents";

function Dashboard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 bg-slate-950 rounded-t-lg font-extralight">
        My Documents
      </h1>
      <Documents />
    </div>
  );
}

export default Dashboard;
