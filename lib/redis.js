import UserSchema from './schema/UserSchema'

import { createClient } from 'redis'
import { Entity, Schema, Repository } from 'redis-om';


if (!global._redisClientPromise) {
    let redisClient = createClient({
        password: process.env.REDIS_PASSWORD,
        socket: {
            host: process.env.REDIS_URL,
            port: process.env.REDIS_PORT
        }
    });
    redisClient.connect().then((p) => {
        console.log(p);
        console.info(`NextJS Redis client connected..`);
        const repository = new Repository(UserSchema, redisClient);
        return repository.createIndex();
    }).catch((error) => {
        console.error(`[ERROR] Couldn't connect to Redis client: ${error}`);
    });
    global._redisClientPromise = redisClient;
}
let redisClientPromise = global._redisClientPromise


const getUserRepository = async () => {
    let client = await redisClientPromise;
    return new Repository(UserSchema, client);
};

const uploadUser = async (fetch) => {
    const userRepository = await getUserRepository();
    const id = fetch.id;
    console.log("Updating " + id);
    const obj = {
        "email": id,
        "location": fetch.location,
        "personality_type": fetch.personality_type,
        "job_type": fetch.job_type,
        "communication_t": fetch.communication_t,
        "appearance_t": fetch.appearance_t,
        "sound_t": fetch.sound_t,
        "tags": fetch.tags
    };
    return await userRepository.save(id, obj);
};

export async function createIndex() {
    let client = await redisClientPromise;
    const repository = client.fetchRepository(UserSchema);
    await repository.createIndex();
  }

module.exports = {
    "updateUser": uploadUser,
    "UserData": getUserRepository
};