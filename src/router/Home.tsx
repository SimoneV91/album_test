import SearchBar from "../Components/SearchBar";
import DataTable from "../Components/Table";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full p-2 ">
      <SearchBar />
      <DataTable />
    </div>
  );
};
export default Home;
