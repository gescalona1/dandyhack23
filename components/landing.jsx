import { getSession } from '@auth0/nextjs-auth0';
import { connect, UserData } from '../lib/redis'

export default async function Landing() {
    const session = await getSession();
    if (session == null) {
        return (
            <> sign up NOW </>
        );
    }
    const user = session["user"];
    const id = user.email;
    
    await connect();
    
    const fetch = await UserData.fetch(id);
    const loc = fetch.location;
    const ptype = fetch.personality_type;
    const c = fetch.communication_t;
    const a = fetch.appearance_t;
    const s = fetch.sound_t;
    const tags = fetch.tags;

    //console.log(loc, ptype, c, a, s, tags);
    return (
        user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>User: {user.name}</h2>
            <p>Email: {id}</p>
            <p>Location: {loc}</p>
            <p>Personality Type: {ptype}</p>
            <p>Communication: {c}</p>
            <p>Appearance: {a}</p>
            <p>Sound: {s}</p>
            <p>{tags}</p>
          </div>
        )
  );
}