export function Output() {
  return (
    <div className="w-12/12 m-5">
      <label
        htmlFor="readonly-output"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
      Here's your code with a little SPARK:
      </label>
      <textarea
        readOnly
        id="readonly-output"
        rows="30"
        placeholder="The result will been shown here."
        className="w-11/12 h-5/6 p-4 text-sm text-white bg-slate-800	 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
      ></textarea>
    </div>
  );
}

export default Output;
