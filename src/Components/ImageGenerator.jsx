import React from "react";
import { useOutletContext } from "react-router-dom";
import PromptInput from "./PromptInput";
import ImageDisplay from "./ImageDisplay";
import Gallery from "./Gallery";

const ImageGenerator = () => {
  const { generateImage, inputRef, isLoading, imageUrl, errorMessage } =
    useOutletContext();

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      {errorMessage && (
        <p className="text-red-500 font-medium">{errorMessage}</p>
      )}
      <PromptInput
        generateImage={generateImage}
        inputRef={inputRef}
        isLoading={isLoading}
      />
      <ImageDisplay imageUrl={imageUrl} isLoading={isLoading} />
      <Gallery images={imageUrl ? [imageUrl] : []} />
    </div>
  );
};

export default ImageGenerator;