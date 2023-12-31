import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {services} from "@wix/bookings";
import Link from "next/link";
import {createClient, OAuthStrategy} from "@wix/api-client";
import Card from "@/components/Card";

const myWixClient = createClient({
    modules: { services },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
        tokens: JSON.parse(Cookies.get('session') || '{}'),
    })
})

const Search = ({service}) => {
    const [serviceList, setServiceList] = useState([]);

    const fetchServices = async () => {
        const serviceList = await myWixClient.services.queryServices().find();
        setServiceList(serviceList.items)
    }

    useEffect(() => {
        fetchServices();
    }, [])

    console.log(serviceList)

    return (
        <div className="search-container">
            <div className="search-results__container">
                <h2>Choose Class:</h2>
                <ul>
                    {serviceList.map((service) => (
                        <li key={service._id}>
                            <Link className="card-link" href={`/services/${encodeURIComponent(service.mainSlug.name)}`}>
                                <Card service={service}/>
                            </Link>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Search