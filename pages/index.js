import Link from "next/link";

const Home = () => {
    const handleLogIn = () => {
        console.log("Log in")
    }

    return (
        <div className="main">
            <article className="main-info__container">
                <h1 className="main-info__title">One App for all things fitness, wellness & beauty</h1>
                <p className="main-info__text">Book classes anywhere with one monthly fee – no class packs required. Plus, one app, flexible plans and dynamic pricing make managing (and maximizing) your schedule easy.</p>
                <div className="main-button__container">
                    <button className="main-button__primary" onClick={handleLogIn}>Try for free</button>
                    <button className="main-button__secondary" onClick={handleLogIn}>Tell me more about ClassPass</button>
                </div>

                <Link href="/search">Browse classes & appointments</Link>
                <p className="main-disclaimer">Offer is available to new trialers only. Spa and salon appointments are available after tiral. </p>
            </article>
        </div>
    )
}

export default Home