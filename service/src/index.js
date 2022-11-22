import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouters from './routes/users.js';

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/users", userRouters);

const CONNECTION_URL = "mongodb+srv://auth-mastery:mastery123@cluster0.rt6qf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}` )))
.catch((err) => console.error(err));