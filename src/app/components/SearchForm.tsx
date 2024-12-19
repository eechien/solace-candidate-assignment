import { useContext, useState, useRef } from 'react';

import { AdvocateContext } from "../store/advocates-context.jsx"
import { fetchAdvocates } from "../http"

export default function SearchForm() {
  const searchTerm = useRef();
  const [enteredSearchTerm, setEnteredSearchTerm] = useState(null);
  const { updateAdvocates } = useContext(AdvocateContext)

  const onChangeSearchTerm = (event) => {
    const newSearchTerm = event.target.value

    setEnteredSearchTerm(newSearchTerm);

    console.log("filtering advocates...");
    async function getAdvocates() {
      try {
        updateAdvocates(await fetchAdvocates(newSearchTerm))
      } catch (error) {
        console.log("Issue filtering advocates");
      }
    }
    getAdvocates();
  };

  const onResetSearchClick = () => {
    async function getAdvocates() {
      try {
        updateAdvocates(await fetchAdvocates())
      } catch (error) {
        console.log("Issue filtering advocates");
      }
    }
    getAdvocates();
    setEnteredSearchTerm(undefined)
    searchTerm.current.value = null
  };

  return (
    <div className="flex flex-column sm:flex-row flex-wrap items-center pb-4 space-x-4">
      <div className="relative">
          <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for advocates"
            ref={searchTerm}
            onChange={onChangeSearchTerm}
          />
      </div>
      <div className="relative">
        <button
          onClick={onResetSearchClick}
          className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-50 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          Reset Search
        </button>
      </div>
    </div>
  )
}