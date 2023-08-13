import Link from 'next/link';

import "../styles/globals.css"
import {SearchProvider} from "@/context/searchContext";
import SearchBar from "@/components/SearchBar";

const App = ({Component, pageProps}) => {
    return (
        <>
            <SearchProvider>
                <header>
                    <Link href="/">
                        <h3>ClassPass</h3>
                    </Link>
                    <SearchBar/>
                </header>
                <Component {...pageProps}/>
            </SearchProvider>
        </>
    );
}
export default App;