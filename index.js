import express from "express";
import LoginRoutes from "./src/routes/LoginRoute";
import {config} from 'dotenv'
import cors from "cors"

config()

const app = express();
app.disable("x-powered-by")
app.use(cors())
app.use(express.json({ limit: '60mb'}))

let port = process.env.PORT || 4000

app.use('/login/v1.0', LoginRoutes)
app.get('/develop/health', (_req, res) => res.status(200).send({
    message: 'Welcome to this api login'
}))

app.listen(port, () => {
    console.log('The server is run in port' + port)
})


export default app;