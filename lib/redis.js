import UserSchema from './schema/UserSchema'

import { createClient } from 'redis'
import { Entity, Schema, Repository } from 'redis-om';


const redis = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_URL,
        port: process.env.REDIS_PORT
    }
});

let load = false;

const connect = async () => {
    if (load) {
        return redis;
    } else {
        load = true;
        redis.on('error', (err) => console.log('Redis Client Error', err));
        await redis.connect();
        return redis;
    }
}

const userRepository = new Repository(UserSchema, redis);

const uploadUser = async (fetch) => {
    const id = fetch.id;
    console.log("Updating " + id);
    const obj = {
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
module.exports = {
    "connect": connect,
    "updateUser": uploadUser,
    "UserData": userRepository
};