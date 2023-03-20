const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json([
        {
            id:1,
            title: 'Title one..........s'
        },
        {
            id:5  ,
            title: 'Title two'
        },
        {
            id:3,
            title: 'Title three'
        },
    ])
})

app.listen(4000, () => console.log('server runnin...'))