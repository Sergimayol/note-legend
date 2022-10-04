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
    <div>
      <input type="file" onChange={handleFileChange} />
      {filename && content && (
        <ViewNote filename={filename} content={content} />
      )}
    </div>
  );
};

export default Main;
