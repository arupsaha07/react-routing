import { createContext, useContext } from "react";

interface ThemeContextType {
    theme: string;
    darkTheme: (theme: string) => void;
    lightTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    darkTheme: () => { },
    lightTheme: () => { }
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}