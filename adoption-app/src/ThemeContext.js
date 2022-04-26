import { createContext } from "react";

// use hook mimic
// const [theme, setTheme] = useState("xx");
const ThemeContext = createContext(["dark", () => {}]);
// prevents prop drilling / considred global prop for a tree

export default ThemeContext;
