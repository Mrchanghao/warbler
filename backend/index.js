require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth.js');
const db = require('./models');
const PORT = 8081
const errorHandler = require('./handlers/error.js');
const authRouter = require('./routes/auth.js'); 
const messagesRouter = require('./routes/messages.js');

app.use(cors());
app.use(bodyParser.json())

// routes 
app.use('/api/auth', authRouter);
app.use(
    '/api/users/:id/messages',
    loginRequired, 
    ensureCorrectUser, 
    messagesRouter);
// handler


app.get('/api/messages', loginRequired, async function (req, res, next) {
    try {
        let messages = await db.Message.find().sort({createdAt: 'desc'})
        .populate('user', {
            username: true,
            profileImageUrl: true
        })
        return res.status(200).json(messages);
    } catch (error) {
        return next(error);
    }      
})

app.use((req, res, next) => {
    let err = new Error('Not Found ');
    err.status = 404;
    next(err);
});

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('server is running ' + PORT)
})