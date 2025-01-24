interface IProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

export const Search = ({ search, setSearch, handleSearch }: IProps) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(e) => setSearch(() => e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
