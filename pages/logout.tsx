import React, {useEffect} from 'react';
import {logOutCurrentUser} from "services/UserService";
import {useRouter} from "next/router";

const Logout: () => void = () => {
    const router = useRouter();

    // @ts-ignore
    const redirectUrl: string = router.query?.["redirect"] || window.location.hostname;

    useEffect(() => {
        logOutCurrentUser();
        router.replace(redirectUrl);
    }, [])

}

export default Logout;