// src/context/UserContext.ts
import React from "react";

interface UserContextType {
    user: { userName: string; password: string; } | null;
    setUser: (user: { userName: string; password: string; }) => void;
}

const UserContext = React.createContext<UserContextType>({
    user: null,
    setUser: () => { }
});

export default UserContext;