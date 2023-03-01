import express, { response } from 'express'

const app = express()

const port = 3000

app.get("/", (request, response ) => {
    response.send('Hello World - FEMA')
});

app.listen(port, () => {
    console.log("Server Running!!! ✅");
})