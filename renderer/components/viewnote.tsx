import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { ViewNoteProps } from "../types/types";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import "katex/dist/katex.min.css";

const ViewNote: React.FC<ViewNoteProps> = ({ filename, content }) => {
  const [note, setNote] = useState<string | undefined>(content);

  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={oneDark as any}
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
