

import { useUser } from '@auth0/nextjs-auth0/client';

const Profile = async (user) => {
  user = user["user"];
  return (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>User: {user.name}</h2>
          <p>Email: {user.id}</p>
          <p>Location: {user.loc}</p>
          <p>Job Type: {user.job_type}</p>
          <p>Personality Type: {user.ptype}</p>
          <p>Communication: {user.c}</p>
          <p>Appearance: {user.a}</p>
          <p>Sound: {user.s}</p>
          <p>{user.tags}</p>
        </div>   
  );
}

export default Profile;