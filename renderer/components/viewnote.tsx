import { useState } from "react";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import { ViewNoteProps } from "../utils/types";

const ViewNote: React.FC<ViewNoteProps> = ({ filename, content }) => {
  const [note, setNote] = useState<string | undefined>(content);

  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {note}
      </ReactMarkdown>
    </div>
  );
};

export default ViewNote;
