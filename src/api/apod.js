export async function getApod() {
  const apiKey = import.meta.env.VITE_NASA_API_KEY
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

  const response = await fetch(url)
  const data = await response.json()

  if (data.error) {
    throw new Error(data.error.message)
  }

  return data
}
