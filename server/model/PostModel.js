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
    attackment: {
        type: String,
        required: false,
        default: '',
    },
    likeCount: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true
});

export const PostModel = mongoo.model('Post', schema);