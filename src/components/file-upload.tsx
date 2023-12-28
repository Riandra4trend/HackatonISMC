"use client";

import { UploadButton, UploadDropzone } from "@/app/lib/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "profileImage" | "productImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {

  if (value && endpoint === "productImage") {
    return (
      <div className="relative w-4/5 aspect-square mx-auto">
        <Image
          src={value}
          fill
          alt="Upload"
          className="object-cover w-full h-full"
        />
        <button
          className="absolute w-7 aspect-square rounded-full bg-red-500 text-white flex justify-center items-center -right-2 -top-2"
          onClick={() => onChange("")}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <>
      {endpoint === "profileImage" ? (
        <UploadButton
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            onChange(res?.[0].url);
          }}
          onUploadError={(err) => {
            console.error(err);
          }}
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            onChange(res?.[0].url);
          }}
          onUploadError={(err) => {
            console.error(err);
          }}
        />
      )}
    </>
  );
};
