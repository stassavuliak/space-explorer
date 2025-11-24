import { useState, useEffect } from "react"
import { getLatestRoverPhotos } from "../api/rovers"

const useRovers = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true

    getLatestRoverPhotos()
      .then((result) => {
        if (!mounted) return
        setData(result)
      })
      .catch((err) => {
        if (!mounted) return
        setError(err)
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })
    
    return () => {
      mounted = false
    }
  }, [])

  return { data, loading, error }
}

export default useRovers