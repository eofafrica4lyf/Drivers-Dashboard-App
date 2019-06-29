import { useState, useEffect } from 'react';

function useFetchWholeData(url) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrips() {
      let response = await fetch(url);
      let json = await response.json();
      setData(json.data);
      setLoading(false);
    }

    fetchTrips();
    // eslint-disable-next-line
  }, [url]);

  return [data, loading];
}

export { useFetchWholeData };
