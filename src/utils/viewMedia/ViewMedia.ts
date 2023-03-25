import React from "react";

export interface IViewMedia {
  linkView: string;
  uploadFile: string | File;
}

const viewMedia = (
  files: File[],
  setInputValue: React.Dispatch<React.SetStateAction<IViewMedia[]>>
) => {
  
  if (Array.isArray(files)) {
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = {
          linkView: reader.result.toString(),
          uploadFile: file,
        };
        setInputValue((state) => [...state, result]);
      };

      reader.readAsDataURL(file);
    });
  }
};

export default viewMedia;
