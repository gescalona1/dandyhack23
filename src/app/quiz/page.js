"use server"

import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation'
import { Form } from './form'


export default async function Questions() {
    const session = await getSession();
    if (session == null) {
        redirect("/")
        return
    }

    return (<>
        <Form user={session["user"]}/>
    </>)
}