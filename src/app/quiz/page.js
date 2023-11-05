import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation'
import { Form } from './form'
import { connect, updateUser, UserData } from '../../../lib/redis'


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