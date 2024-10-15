import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    e.target.elements.search.value = "";
  };
  return (
    <section className='title'>
      <h1 className='title'>Search and download High Quality Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          placeholder='lion'
          type='text'
          name='search'
          className='form-input search-input'
        />
        <button className='btn' type='submit'>
          {" "}
          search{" "}
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
