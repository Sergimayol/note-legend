import { useState } from "react";

const FileSelector = () => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [fileContents, setFileContents] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Reset the state
    setFileNames([]);
    setFileContents([]);

    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFileNames(files.map((file) => file.name));
      // Set the contents of the files
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            setFileContents((prev) => [...prev, e.target.result as string]);
          }
        };
        reader.readAsText(file);
      });
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <ul>
        {fileNames.map((fileName) => (
          <div>
            <li key={fileName}>{fileName}</li>
            <p>{fileContents}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FileSelector;
