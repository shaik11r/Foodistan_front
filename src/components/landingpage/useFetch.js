import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const appdata = await fetch(url);
        const res = await appdata.json();
        setdata(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchdata();
  }, [url]);

  return { data, error };
};
export default useFetch;
