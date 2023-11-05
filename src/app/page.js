import Landing from "../../components/landing"
import Profile from "../../components/profile"
import Image from 'next/image'
import { getSession } from '@auth0/nextjs-auth0';
import { connect, updateUser, UserData } from '../../lib/redis'

import { redirect } from 'next/navigation';
export const metadata = {
  title: 'MatchYa!',
}
export default async function Home() {
  const session = await getSession();
  if (session == null) {
      return (
          <>
          <Landing />
          </>
      )
  }
  const client = await connect();

  const user = session["user"];
  const id = user.email;

  const fetch = await UserData.fetch(id);
  const loc = fetch.location;
  const job_type = fetch.job_type;
  const ptype = fetch.personality_type;
  const c = fetch.communication_t;
  const a = fetch.appearance_t;
  const s = fetch.sound_t;
  const tags = fetch.tags;

  
  if (c === undefined) {
    console.log(c);
    
    redirect("/quiz")
    return
  }
  const userObj = {
      "name": user.name,
      "picture": user.picture,
      "email": id,
      "location": loc,
      "jobType": job_type,
      "personalityType": ptype,
      "communication": c,
      "appearance": a,
      "sound": s,
      "tags": tags
    };
    
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Profile user={userObj} />
  </main>
    );
  }
