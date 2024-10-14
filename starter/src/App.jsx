import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

// const myAccessKey(API_KEY)= 'u5-cS902fIoqpYNrmyh6ZSsoBnjVLXtqp_s5Bs_Dlhw'

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
