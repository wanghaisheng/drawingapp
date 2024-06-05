import React from "react";
import UploadImgForm from "./UploadImgForm";
import ImageHistoryConatiner from "./ImageHistoryConatiner";
import { drawing } from "@/lib/types";
import { redis } from "@/server/middleware";
import GenerateAiImage from "./GenerateAiImage";

export default async function RightPanelData() {
  const allDrawings: drawing[] = await redis.lrange("drawings", -5, -1);
  const generatedAi: string | null = await redis.get("generatedAi");

  return (
    <>
      {/* <div className="flex flex-row items-center gap-1 justify-center">
      </div> */}
      {allDrawings && <ImageHistoryConatiner userData={allDrawings} />}
      {generatedAi && <GenerateAiImage generatedAi={generatedAi} />}
    </>
  );
}
