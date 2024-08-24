"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Loader2,
  Loader2Icon,
  RotateCw,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";

// gsutil cors set cors.json gs://<app-name>.appspot.com
// gsutil cors set cors.json gs://chat-with-petey-f.appspot.com
// go here >>> https://console.cloud.google.com/
// create new file in editor calls cors.json
// run >>>> gsutil cors set cors.json gs://chat-with-petey-f.appspot.com
// https://firebase.google.com/docs/storage/web/download-files#cors_configuration

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfView({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [file, setFile] = useState<Blob | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [scale, setScale] = useState<number>(0.5);

  useEffect(() => {
    const fetchFile = async () => {
      const response = await fetch(url);
      const file = await response.blob();

      setFile(file);
    };

    fetchFile();
  }, [url]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-auto">
      <div className="sticky top-0 z-50 bg-slate-950 p-2">
        <div className="max-w-6xl px-2 grid grid-cols-6 mt-4 gap-2">
          <Button
            className="text-slate-950 disabled:bg-indigo-200 bg-indigo-300 hover:bg-indigo-200"
            disabled={pageNumber === 1}
            onClick={() => {
              if (pageNumber > 1) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            Previous
          </Button>

          <p className="flex items-center justify-center">
            {pageNumber} of {numPages}
          </p>

          <Button
            className="text-slate-950 disabled:bg-indigo-200 bg-indigo-300 hover:bg-indigo-200"
            disabled={pageNumber === numPages}
            onClick={() => {
              if (numPages && pageNumber < numPages) {
                setPageNumber(pageNumber + 1);
              }
            }}
          >
            Next
          </Button>

          <Button
            className="text-slate-950 disabled:bg-indigo-200 bg-indigo-300 hover:bg-indigo-200"
            onClick={() => {
              setRotation((rotation + 90) % 360);
            }}
          >
            <RotateCw />
          </Button>

          <Button
            className="text-slate-950 disabled:bg-indigo-200 bg-indigo-300 hover:bg-indigo-200"
            disabled={scale >= 1.5}
            onClick={() => {
              setScale(scale * 1.2);
            }}
          >
            <ZoomInIcon />
          </Button>

          <Button
            className="text-slate-950 disabled:bg-indigo-200 bg-indigo-300 hover:bg-indigo-200"
            disabled={scale <= 0.25}
            onClick={() => {
              setScale(scale / 1.2);
            }}
          >
            <ZoomOutIcon />
          </Button>
        </div>
      </div>
      {!file ? (
        <Loader2Icon className="animate-spin h-20 w-20 text-indigo-400 my-20" />
      ) : (
        <Document
          loading={null}
          file={file}
          rotate={rotation}
          onLoadSuccess={onDocumentLoadSuccess}
          className="m-4 overflow-auto"
        >
          <Page className="shadow-lg" scale={scale} pageNumber={pageNumber} />
        </Document>
      )}
    </div>
  );
}

export default PdfView;
