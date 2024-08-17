import { Button } from "@/components/ui/button";
import {
  BlocksIcon,
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  TextSearchIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description:
      "Experience lightning-fast answers to your queries, ensuring you get the informaton you need instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Our intelligent chatbot remembers interaction, providing a seamless and perosnalized experience.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "The ability to extract text, images, and other data from PDF files. This feature allows the chatbot to analyze the contents of a PDF and respond to user queries about specific sections or elements within the document.",
    icon: EyeIcon,
  },
  {
    name: "Integration Capabilities",
    description:
      "The ability to integrate with external PDF management systems, databases, and APIs. This feature enables the chatbot to perform advanced actions such as converting PDFs to other formats.",
    icon: BlocksIcon,
  },
  {
    name: "Search and Summarization",
    description:
      "The ability to search for specific keywords or phrases within a PDF and provide concise summaries of the found content.",
    icon: TextSearchIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-bl from-slate-800 to-slate-700 overflow-scroll p-2 lg:p-5">
      <div className="bg-slate-900 py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center m-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-200">
              Your Interactive Document Companion
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl">
              Transform Your PDFs into Ineractive Conversations
            </h1>
            <br />
            <p className="text-base text-white">
              Introducing{" "}
              <span className="text-indigo-400 font-extrabold">Petey F.</span>
            </p>
            <br />
            <br />
            <p className="text-base text-white">
              Upload your document, and Petey F. will answer your questions,
              summarize content, and answer all your questions. Ideal for
              everyone,{" "}
              <span className="text-indigo-400 font-extrabold">Petey F.</span>{" "}
              turns your static documents into{" "}
              <span className="font-extrabold">dynamic conversations</span> to
              enhance productivity 10x fold effortlessly.
            </p>
            <Button
              asChild
              className="mt-10 bg-indigo-300 text-slate-900 hover:bg-indigo-200"
            >
              <Link href="/dashboard">Get Started</Link>
            </Button>

            <div className="relative overflow-hidden pt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Image
                  alt="Hero img"
                  src="https://i.imgur.com/VciRSTI.jpg"
                  width={2432}
                  height={1442}
                  className="mt-10 rounded-xl shadow-2xl ring-1 ring-white shadow-indigo-200"
                />
                <div aria-hidden="true" className="relative">
                  <div className="absolute -inset-x-32 bottom-0 bg-gradient-to-t from-slate-900/95 pt-[5%]" />
                </div>
              </div>
            </div>
            <div>
              <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg-:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 pt-10">
                {features.map((feature) => (
                  <div
                    className="p-4 pt-10 rounded-md shadow-2xl shadow-indigo-500/20 flex flex-col place-items-center gap-4"
                    key={feature.name}
                  >
                    <dt className="inline font-semibold text-indigo-400">
                      <feature.icon aria-hidden="true" className="h-8 w-8 " />
                    </dt>
                    <dd className="text-white">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
