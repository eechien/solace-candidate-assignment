export async function fetchAdvocates(searchTerm) {
  let url = "/api/advocates"
  if (searchTerm !== undefined) {
    url = `${url}?searchTerm=${searchTerm}`
  }
  const response = await fetch(url);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch advocates")
  }

  return resData.data
}
