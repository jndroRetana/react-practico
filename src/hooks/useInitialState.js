import { useState, useEffect } from "react";

export const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.log(error.message));
  }, []);
  return videos;
};
