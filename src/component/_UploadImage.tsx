import upload from "@/lib/assets/images/icon-upload.svg";
import { CircleAlert } from "lucide-react";
import { motion as m } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { IFormValues } from "Types";

interface IUploadProps {
  setValue: UseFormSetValue<IFormValues>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const UploadImage = ({ setValue, setError, error }: IUploadProps) => {
  const inputUpload = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  useEffect(() => {
    console.log('error:', error);
  }, [error])


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file.");
        return;
      }

      const fileSizeInKB = file.size / 1024;
      if (fileSizeInKB > 500) {
        setError("Image size should be less than 500KB.");
        return;
      }
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreviewImage(base64String);
        setValue("avatarSrc", base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setPreviewImage(null);
    setValue("avatarSrc", "");
    if (inputUpload.current) {
      inputUpload.current.value = "";
    }
  };

  const handleUpload = () => {
    inputUpload.current?.click();
  };

  return (
    <>
      <label htmlFor="avatar" className="text-white">
        Upload Avatar
      </label>
      <div className="group flex flex-col items-center justify-center gap-2 border-[1px] border-dashed rounded-lg p-4 mt-2 bg-opacity-80 hover:bg-neutral-800 transition-all">
        {previewImage ? (
          <>
            <img
              src={previewImage}
              alt="Preview"
              className="w-12 h-12 rounded-full object-cover mb-2"
            />
            <div className="flex gap-2">
              <m.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={handleClear}
                className="text-white bg-neutral-700 py-0.5 px-2 rounded underline"
              >
                Remove Image
              </m.button>
              <m.button
                type="button"
                whileTap={{ scale: 0.9 }}
                className="text-white bg-neutral-700 py-0.5 px-2 rounded"
                onClick={handleUpload}
              >
                Change Image
              </m.button>
            </div>
          </>
        ) : (
          <m.button
            type="button"
            onClick={handleUpload}
            className="p-2 bg-neutral-700 rounded-lg"
            whileTap={{ scale: 0.9 }}
          >
            <img src={upload} alt="upload" />
          </m.button>
        )}

        <input
          ref={inputUpload}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
        <p className="text-neutral-500 group-hover:text-white">
          Drag and drop or click to upload
        </p>
      </div>
      <div className="h-4">
        {error ? (
          <div className="flex items-center gap-2 mt-2">
            <CircleAlert color="red" size={15} />
            <m.p
              className="text-red-500 text-sm"
              initial={{ translateX: -100 }}
              animate={{ translateX: 0 }}
            >
              {error}
            </m.p>
          </div>
        ) : (
          <div className="flex items-center gap-2 mt-2">
            <CircleAlert color="white" size={15} />
            <p className="text-neutral-500 text-xs">
              Upload your photo (JPG or PNG, max size: 500KB).
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadImage;
