import { useLocalStorage } from "./useLocalStorage";
import "./styles.css";
export const LightDark = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};
