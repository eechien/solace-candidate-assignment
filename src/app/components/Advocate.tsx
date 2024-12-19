export default function Advocate({advocate}) {
  const formattedPhoneNumber = advocate.phoneNumber.replace(
    /(\d{3})(\d{3})(\d{4})/,
    '$1-$2-$3'
 )

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{advocate.firstName}</td>
      <td className="px-6 py-4">{advocate.lastName}</td>
      <td className="px-6 py-4">{advocate.city}</td>
      <td className="px-6 py-4">{advocate.degree}</td>
      <td className="px-6 py-4">
        {advocate.specialties.map((s) => (
          <div key={s}>{s}</div>
        ))}
      </td>
      <td className="px-6 py-4">{advocate.yearsOfExperience}</td>
      <td className="px-6 py-4">{formattedPhoneNumber}</td>
    </tr>
  )
}