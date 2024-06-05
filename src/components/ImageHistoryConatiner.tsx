import React from "react";
import ImageClientComponent from "./ImageClientComponent";
import { drawing } from "@/lib/types";
import UploadImgForm from "./UploadImgForm";

export default function ImageHistoryConatiner({
  userData,
}: {
  userData: drawing[];
}) {
  return (
    <div className="text-slate-50 flex flex-col bg-red-400/90  gap-2 justify-center items-center rounded-md py-1 px-1">
      <div className="flex flex-row">
        {userData?.map((drawing: drawing, index: number) => (
          <div
            className="flex flex-col  truncate  justify-start items-center text-center p-1 gap-2 "
            key={index}
          >
            <p className=" underline text-xl truncate ">{drawing.name}</p>
            <ImageClientComponent drawing={{ ...drawing }} />
          </div>
        ))}
      </div>
      <UploadImgForm />
    </div>
  );
}
