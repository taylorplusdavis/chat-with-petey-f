import PdfView from "@/components/PdfView";
import { adminDb } from "@/firebaseAdmin";
import { auth } from "@clerk/nextjs/server";

async function ChatToFilePage({ params: { id } }: { params: { id: string } }) {
  auth().protect();
  const { userId } = await auth();

  const ref = await adminDb
    .collection("users")
    .doc(userId!)
    .collection("files")
    .doc(id)
    .get();

  const url = ref.data()?.downloadUrl;

  return (
    <div className="grid lg:grid-cols-5 h-full">
      {/* Right */}
      <div className="col-span-5 lg:col-span-2 overflow-y-auto">
        {/* Chat */}
      </div>

      {/* Left */}
      <div className="col-span-5 lg:col-span-3 bg-slate-950 lg:border-l-indigo-400 lg:-order-1">
        {/* PDF */}
        <PdfView url={url} />
      </div>
    </div>
  );
}

export default ChatToFilePage;
