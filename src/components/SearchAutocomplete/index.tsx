import { useEffect, useState } from "react";
import { IResponse } from "./interfaces";
import { Suggestions } from "./Suggestions";
import "./styles.css";

export const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();

    setSearchParam(() => query);

    if (query.length > 1) {
      const data = !!users?.length
        ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
        : [];

      setFilteredUsers(() => data);
      setShowDropdown(() => true);
    } else {
      setShowDropdown(() => false);
    }

    console.log("dAAAAA: ", users, filteredUsers);
  };

  const fetchUsers = async () => {
    setLoading(() => true);
    try {
      const res = await fetch(`https://dummyjson.com/users`);
      const data: IResponse = await res.json();

      if (data?.users?.length) {
        const users: string[] = data.users.map((user) => user.firstName);
        setUsers(() => users);
      }
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) setErrorMsg(() => error?.message);
    }

    setLoading(() => false);
  };

  const handleClick = (e) => {
    const text = e.target.innerText;
    setSearchParam(() => text);
    setShowDropdown(() => false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="autocomplete-container">
      {loading ? (
        <h1>Loading Data!</h1>
      ) : (
        <input
          name="search-users"
          placeholder="Search Users here..."
          type="text"
          onChange={handleChange}
          value={searchParam}
        />
      )}
      {showDropdown ? (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      ) : null}
    </div>
  );
};
