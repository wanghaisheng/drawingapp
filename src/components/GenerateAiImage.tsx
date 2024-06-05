"use client";

import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import { generateAI } from "@/server/actions";
import { useCanvasContextProvider } from "@/contextProviders/useCanvasProvider";
import Image from "next/image";

type GenerateAiImageType = {
  generatedAi: string | null;
};

export default function GenerateAiImage({ generatedAi }: GenerateAiImageType) {
  const { canvasRef } = useCanvasContextProvider();
  return (
    <div className="flex flex-col gap-2 justify-center items-center p-1 ">
      <form
        className="bg-slate-100 p-1  flex flex-row gap-2  rounded-sm"
        action={(formdata) => {
          let image = "";

          if (canvasRef.current) {
            image = canvasRef.current.toDataURL("image/png");
          }
          generateAI(formdata, image);
        }}
      >
        <ButtonSubmit />
        <input
          className="bg-slate-600 px-2  text-white text-xl"
          name="prompt"
          type="text"
          placeholder="Enter image description"
        />
      </form>

      {generatedAi && (
        <Image width={300} height={300} src={generatedAi} alt="safasf" />
      )}
    </div>
  );
}
