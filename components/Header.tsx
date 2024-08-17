import { SignedIn, UserButton } from "@clerk/nextjs";
import { FilePlus2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <Link href="/dashboard">
        Chat to <span className="text-indigo-400">Petey F.</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button
            asChild
            variant="link"
            className="hidden md:flex text-indigo-300"
          >
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button
            asChild
            className="hidden md:flex bg-indigo-300 text-slate-900 hover:bg-indigo-200"
          >
            <Link href="/dashboard">My Documents</Link>
          </Button>

          <Button
            asChild
            className="hidden md:flex bg-indigo-300 text-slate-900 hover:bg-indigo-200"
          >
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-slate-900" />
            </Link>
          </Button>
          {/* Upgrade Button */}
          <UserButton appearance={{ elements: {} }} />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
