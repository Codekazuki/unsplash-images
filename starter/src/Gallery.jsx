import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { useGlobalContext } from "./context";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Fetching Image...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>An Error Occured</h4>
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
        const url = item?.urls?.full;
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
