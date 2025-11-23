import { useState, useEffect } from "react"
import { getAsteroids } from "../api/asteroids"

const useAsteroids = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true

    getAsteroids()
      .then((result) => {
        if (!mounted) return
        setData(result)
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      })

    return () => {
      mounted = false
    }
  }, [])

  return { data, loading, error }
}

export default useAsteroids
