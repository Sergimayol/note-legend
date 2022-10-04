import { useState } from "react";
import ViewNote from "./viewnote";

const Main = () => {
  const [filename, setFilename] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<string | undefined>(undefined);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Reset the state
    setFilename(undefined);
    setContent(undefined);

    // Get the filename and content
    const file = e.target.files[0];
    if (file) {
      setFilename(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setContent(e.target.result as string);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <div className="fixed w-full z-20 top-0 left-0 pt-3 mt-3">
        <div className="flex flex-row justify-center">
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>
      <div className="mt-2 pt-6">
        {filename && content && (
          <ViewNote filename={filename} content={content} />
        )}
      </div>
    </>
  );
};

export default Main;
