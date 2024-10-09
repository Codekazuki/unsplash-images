import React, { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { search, setSearch, handleSubmit } = useGlobalContext();
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='cat'
        id='id'
        value={search}
        type='text'
        name='search'
        className='form-input search-input'
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'> search </button>
    </form>
  );
};

export default SearchForm;
