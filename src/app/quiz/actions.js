'use server'

import { redirect } from 'next/navigation'
import { connect, updateUser, UserData } from '../../../lib/redis'

export async function handle(prevState, formData) {
    
    if (prevState === undefined) {
        console.log("prev state  = null");
        return 
    }

    console.log(prevState);
    const iter = [
        "casq1",
        "casq2",
        "casq3",
        "casq4",
        "casq5",
        "casq6",
        "casq7",
        "casq8",
        "casq9",
        "casq10"
    ];

    const m = {
        "a": 0,
        "c": 0,
        "s": 0
    };

    for (const key of iter) {
        const v = formData.get(key);
        m[v]++;
    }


    const user_email = prevState["user"]["user"]["email"];
    const obj = {
        "id": user_email,
        "location": "",
        "personality_type": "",
        "job_type": "",
        "communication_t": m["c"],
        "appearance_t": m["a"],
        "sound_t": m["s"],
        "tags": []
    }
    const client = await connect();
    updateUser(obj);
    
    redirect("/results");
}