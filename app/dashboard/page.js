import List from '../ui/list';

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="username"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="What is closure in JavaScript ?"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={null}
        >
          {'Create'}
        </button>
      </div>
      <List />
    </div>
  );
}
