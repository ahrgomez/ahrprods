import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
    guid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    aka: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.model('User', userSchema);