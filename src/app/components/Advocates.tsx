import { useContext, useEffect } from "react"

import Advocate from "./Advocate"
import { AdvocateContext } from "../store/advocates-context.jsx"
import { fetchAdvocates } from "../http"

export default function Advocates() {
  const { advocates, updateAdvocates } = useContext(AdvocateContext)

  useEffect(() => {
    async function getAdvocates() {
      try {
        updateAdvocates(await fetchAdvocates());
      } catch (error) {
        console.log("Issue getting advocates") // FIXME
      }
    }
    getAdvocates()
  }, []);

  const columns = [
    "First Name",
    "Last Name",
    "City",
    "Degree",
    "Specialties",
    "Years of Experience",
    "Phone Number",
  ]

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((columnName) => {
              return (
                <th key={columnName} className="px-6 py-3">{columnName}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {advocates.map((advocate) => {
            return (
              <Advocate advocate={advocate} key={advocate.id} />
            );
          })}
        </tbody>
      </table>
    </div>
  )
}