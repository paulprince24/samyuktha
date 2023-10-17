import { createContext, useState } from "react";

export const AdminNavSelectContext = createContext({});

export function AdminNavSelectContextProvider({ children }) {
    const [selectedAdminNavMenu, setSelectedAdminNavMenu] = useState('Home');
    return (
        <AdminNavSelectContext.Provider value={{ selectedAdminNavMenu, setSelectedAdminNavMenu }}>
            {children}
        </AdminNavSelectContext.Provider>
    );
}