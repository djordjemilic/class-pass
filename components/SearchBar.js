import {useContext} from "react";
import {searchContext} from "@/context/searchContext";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useContext(searchContext)

    console.log("searchTerm", searchTerm)

    return (
        <div className="item-container">
            <div className="search-bar__container">
                <input className="search-input" type="search" placeholder="Yoga, pilates, massage..."
                       onChange={e => setSearchTerm(e.target.value)}
                       value={searchTerm}
                />
            </div>
        </div>
    )
}

export default SearchBar;