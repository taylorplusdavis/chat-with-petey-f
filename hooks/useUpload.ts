"use client";

import { generateEmbeddings } from "@/actions/generateEmbeddings";
import { db, storage } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export enum StatusText {
  UPLOADING = "Uploading file..",
  UPLOADED = "File uploaded successfully",
  SAVING = "Saving file to database..",
  GENERATING = "Generating AI embeddings. This will only take a few seconds.",
}

export type Status = StatusText[keyof StatusText];

function useUpload() {
  const [progress, setProgress] = useState<number | null>(null);
  const [fileId, setFileId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const { user } = useUser();
  const router = useRouter();

  const handleUpload = async (file: File) => {
    if (!file || !user) return;

    //TODO: FREE/PRO Limitation

    // Generates random ID string
    const fileIdToUploadTo = uuidv4();

    // Ref to Firebase Storage target
    const storageRef = ref(
      storage,
      `users/${user.id}/files/${fileIdToUploadTo}`
    );

    // Function that sends blob to Firebase Storage target
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Start tracking upload task
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Snapshot (on change) function
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setStatus(StatusText.UPLOADING);
        setProgress(percent);
      },
      (error) => {
        // Error
        console.error("Error uploading file", error);
      },
      async () => {
        // Complete - Get the download URL
        setStatus(StatusText.UPLOADED);
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

        // Storage is complete. Create a doc that has the metadata and download URL
        setStatus(StatusText.SAVING);
        await setDoc(doc(db, "users", user.id, "files", fileIdToUploadTo), {
          name: file.name,
          size: file.size,
          type: file.type,
          downloadUrl: downloadUrl,
          ref: uploadTask.snapshot.ref.fullPath,
          createdAt: new Date(),
        });

        // Generate some AI
        setStatus(StatusText.GENERATING);
        await generateEmbeddings(fileIdToUploadTo);

        // Return fileID
        setFileId(fileIdToUploadTo);
      }
    );
  };

  return { progress, status, fileId, handleUpload };
}

export default useUpload;
