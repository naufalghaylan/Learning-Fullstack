import { createContext, useState, type ReactNode } from "react";

interface IThemeContext {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

type Props = {
    children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<"light" | "dark">("light")
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeContext;