export async function getAsteroids() {
  const apiKey = import.meta.env.VITE_NASA_API_KEY
  
  const today = new Date().toISOString().split("T")[0];
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${apiKey}`
  
  const response = await fetch(url)
  const data = await response.json()

  if (data.error) {
    throw new Error(data.error.message)
  }

  return data.near_earth_objects[today]
}
