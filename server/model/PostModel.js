import mongoo from 'mongoose';

const schema = new mongoo.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true  
    },
    author: {
        type: String,
        required: true,
        default: 'Tuấn Anh'
    },
    attackment: String,
    likeCount: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

export const PostModel = mongoo.model('Post', schema);