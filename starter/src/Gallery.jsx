import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
const url =
  "https://api.unsplash.com/search/photos?client_id=u5-cS902fIoqpYNrmyh6ZSsoBnjVLXtqp_s5Bs_Dlhw&query=cat";
const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>Error occured</h4>
      </section>
    );
  }
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No result found</h4>
      </section>
    );
  }
  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            className='img'
            key={item.id}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
