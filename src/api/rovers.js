export async function getLatestRoverPhotos() {
  const apiKey = import.meta.env.VITE_NASA_API_KEY
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${apiKey}`

  const response = fetch(url)
  const data = response.json()

  if(data.error) {
    throw new Error(data.error.message)
  }

  return data.latest_photos
}