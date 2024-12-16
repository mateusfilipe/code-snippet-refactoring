import ReactMarkdown from 'react-markdown';

interface OutputProps {
  result: string;
}

export function Output({ result }: OutputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="readonly-output"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Here's your code with a little SPARK:
      </label>
      <div
        id="readonly-output"
        className="w-full p-4 text-sm text-white bg-slate-800 rounded-lg border border-gray-300 shadow-sm mb-4"
      >
        <ReactMarkdown
          className="prose prose-invert max-w-none"
          components={{
            code({ node, inline, className, children, ...props }) {
              return (
                <code className="bg-gray-700 rounded px-1" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {result}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Output;
