
"use server"

import { Space_Grotesk } from 'next/font/google';
import React from 'react';

import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation'
import Results from "../../../components/results"
import { updateUser, UserData } from '../../../lib/redis'

export default async function Home() {
    const session = await getSession();
    if (session == null) {
        redirect("/")
        return
    }
    const repo = await UserData();
    const data = await repo.fetch(session["user"].email);

    const people = await repo.search().return.all();
    
    let a = [];
    for (const person of people) {
        if (person.email == session["user"].email) continue;
        a.push(person);
    }
    data["people"] = a;
    
    return (
        <>
            <Results results={data} />
        </>
    );
}
