import { FC, useState } from 'react';

interface inputProps {
  callReview: (message: string) => any;
  loading: boolean;
}

const Input: FC<inputProps> = ({ callReview, loading }) => {
  const [code, setCode] = useState<string>('');

  const receiveCode = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex flex-col gap-1">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Type your code here and submit for an improvement:
        </label>
        <textarea
          value={code}
          onChange={receiveCode}
          id="code-snippet"
          rows="10"
          placeholder="Write your code here..."
          className="w-full h-5/6 p-4 text-sm text-white bg-slate-800 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
        ></textarea>
      </div>
      <div>
        <button
          onClick={() => {
            callReview(code);
          }}
          className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {loading ? 'Loading...' : 'Submit Code'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Input;
