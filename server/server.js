import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js';
import session from "express-session"
import MongoStore from "connect-mongo"
import AuthRouter from './routes/AuthRoutes.js';
import ThumbnailRouter from './routes/ThumbnailRoutes.js';
import UserRouter from './routes/UserRoutes.js';

await connectDB()

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', process.env.CLIENT_URL],
    credentials: true
}))

app.set('trust proxy', 1);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        path: '/'
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: 'sessions'
    })
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is Live!');
});

app.use('/api/auth', AuthRouter)
app.use('/api/thumbnail', ThumbnailRouter);
app.use('/api/user', UserRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
