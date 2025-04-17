require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/User");
const loginRoute = require("./routes/Login");
const registerRoute = require("./routes/Register");
const refreshTokenRoute = require("./routes/RefreshToken");

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Your frontend URL
    credentials: true,
}));

const port = process.env.PORT || 8000;

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/refresh-token', refreshTokenRoute);
app.use('/user', userRoutes);

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
});