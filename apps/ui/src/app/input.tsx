export function Input() {
  return (
    <form className="w-12/12 m-5">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Type your code here and submit for an improvement:
      </label>
      <textarea
        id="code-snippet"
        rows="30"
        placeholder="Write your code here..."
        className="w-11/12 h-5/6 p-4 text-sm text-white bg-slate-800 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
      ></textarea>
      <br />
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Submit Code
        </span>
      </button>
    </form>
  );
}

export default Input;
