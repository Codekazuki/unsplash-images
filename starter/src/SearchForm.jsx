import React, { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section className='title'>
      <h1>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          placeholder='cat'
          type='text'
          name='search'
          className='form-input search-input'
        />
        <button type='submit'> search </button>
      </form>
    </section>
  );
};

export default SearchForm;
