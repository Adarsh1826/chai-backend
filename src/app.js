import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// for body data
app.use(express.json({limit:"16kb"}))
// for url data
app.use(express.urlencoded({extended : true , limit:"16kb"}))
// for public assets image , fabricon
app.use(express.static("public"))

app.use(cookieParser())


export { app }