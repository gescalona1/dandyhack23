
import { Space_Grotesk } from 'next/font/google';
import React from 'react';

import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation'
import Results from "../../../components/results"
import { connect, updateUser, UserData } from '../../../lib/redis'

export default async function Home() {
    const session = await getSession();
    if (session == null) {
        redirect("/")
        return
    }
    const client = await connect(); 
    const data = await UserData.fetch(session["user"].email);

    return (
        <>
            <Results results={data} />
        </>
    );
}
