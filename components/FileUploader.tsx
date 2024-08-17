"use client";

import { CircleArrowDown, RocketIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
    });
  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      <div
        {...getRootProps()}
        className={`p-10 cursor-pointer border-indigo-200 text-indigo-200 border-2 border-dashed mt-10 w-[90%] mx-auto rounded-lg h-96 flex items-center justify-center ${
          isFocused || isDragAccept ? "bg-indigo-400" : "bg-indigio-500"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center justify-center">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>Drag &apos;n drop some files here, or click to select files</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
