import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import posts from './routers/posts.js';
import notificationRouter from './routers/notification.js';
import mongoo from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI ='mongodb+srv://admin:khongcomatkhau@clusterta.djcrj.mongodb.net/myBlogs?retryWrites=true&w=majority';

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(cors());

app.use('/posts', posts);
app.use('/notification', notificationRouter);


mongoo.connect(URI, { 
    useNewUrlParser: true, useUnifiedTopology: true, 
}).then(()=> {
    app.listen(PORT,()=>{
        console.log('Connect to DB'); //kết nối thành công thì chạy server
        console.log(`Server is running on port ${PORT}`)
    });

}).catch((err) => {
    console.log('err:', err);
});


// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// });