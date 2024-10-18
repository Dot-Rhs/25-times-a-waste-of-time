import { useState } from "react";
import { Card } from "./card";
import { IProfile } from "../../interfaces/IProfile";
import "./styles.css";

export const GitHubProfile = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState<IProfile | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(() => true);
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      setUserData(() => data);
      setUserName(() => "");
    } catch (error: unknown) {
      if (error instanceof Error) setErrorMsg(() => error?.message);
    }
    setLoading(() => false);
  };

  return (
    <div className="profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-name"
          type="text"
          placeholder="Search Github Users..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      {loading && <h2>Loading...</h2>}
      {errorMsg && <h2>{errorMsg}</h2>}
      {userData !== null && (!loading || errorMsg) ? (
        <Card user={userData} />
      ) : null}
    </div>
  );
};
