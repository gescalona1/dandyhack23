import { createClient } from 'redis'
import { Entity, Schema, Repository } from 'redis-om';

const redis = createClient({
    url: process.env.REDIS_URL
})
const connect = async () => {
    redis.on('error', (err) => console.log('Redis Client Error', err));
    await redis.connect();
}
await connect();

const userSchema = new Schema("user-pref", {
    test: {type: 'string'}
}); 

const userRepository = new Repository(userSchema, redis)