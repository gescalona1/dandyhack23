import { Entity, Schema, Repository } from 'redis-om';

const UserSchema = new Schema("user-data", {
    email: {type: 'string', indexed: true},
    location: {type: 'string'},
    personality_type: {type: 'string'},
    job_type: {type: 'string'},
    communication_t: {
        type: 'number', 
        path: '$.user-data.cas.communication'
    },
    appearance_t: {
        type: 'number', 
        path: '$.user-data.cas.appearance'
    },
    sound_t: {
        type: 'number', 
        path: '$.user-data.cas.sound'
    },
    tags: {type: 'string[]'}
}); 

export default UserSchema;