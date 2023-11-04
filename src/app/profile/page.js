import ProfileClient from "../../../components/profile"
import Landing from "../../components/landing"

import { getSession } from '@auth0/nextjs-auth0';
import { connect, updateUser, UserData } from '../lib/redis'

export default async function ProfilePage() {
    const session = await getSession();
    if (session == null) {
        return (
            <>
            <Landing />
            </>
        )
    }
    

    return (
        <>
        <ProfileClient user={userObj} />
        </>
    )
}