import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {services} from "@wix/bookings";
import Link from "next/link";
import {createClient, OAuthStrategy} from "@wix/api-client";

const myWixClient = createClient({
    modules: { services },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
        tokens: JSON.parse(Cookies.get('session') || '{}'),
    })
})

const Search = () => {
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
        <div>
            <h1>Search</h1>
        </div>
    )
}

export default Search