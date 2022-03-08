import express from 'express'
import bodyParser from 'body-parser'

const port = process.env.PORT || 1337;

const app = express()
app.use( bodyParser.json() )


app.get('/', (req, res) => {
    res.send('API is running OK')
});


app.listen(port, ()=> {
    console.log("APi is running on port " + port)
})