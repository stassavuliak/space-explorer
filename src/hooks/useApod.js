import { useState, useEffect } from "react";
import { getApod } from "../api/apod";

export default function useApod() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Protection against installing state after unmount
    let mounted = true;

    // Вызов API
    getApod()
      .then((result) => {
        if (!mounted) return;
        setData(result);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    // Cleaning: marking that the component is unmounted
    return () => {
      mounted = false;
    };
  }, []); // empty array - the effect runs once when mounted

  return { data, loading, error };
}
