const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

function hello(req, res) {
    console.log("/")
    res.send('This is NodeLab')
}

function showBody(req, res) {
    console.log("/showBody")
    console.log(req.body)
    res.end(JSON.stringify(req.body))
}

app.get('/', hello)
app.use('/images', express.static('public/images'))

app.post('/body', showBody)

app.listen(3000)
