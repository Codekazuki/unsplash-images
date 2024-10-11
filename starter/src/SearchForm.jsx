import React, { useState } from "react";
// import { useGlobalContext } from "./context";

const SearchForm = () => {
  // const { search, setSearch, handleSubmit } = useGlobalContext();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };
  return (
    <section className='title'>
      <h1>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
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
    </section>
  );
};

export default SearchForm;
