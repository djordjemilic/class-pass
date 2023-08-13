import {createContext, useState} from "react";

export const searchContext = createContext(null);

export const SearchProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <searchContext.Provider value={[searchTerm, setSearchTerm]}>
            {children}
        </searchContext.Provider>
    )
}