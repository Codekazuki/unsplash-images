import { useQuery } from "@tanstack/react-query";
import React from "react";
const url =
  "https://api.unsplash.com/search/photos?client_id=u5-cS902fIoqpYNrmyh6ZSsoBnjVLXtqp_s5Bs_Dlhw&query=office";
const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response);
  return <h2>Gallery</h2>;
};

export default Gallery;
