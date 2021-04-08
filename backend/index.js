const express = require('express')
const data = require('./public/data.js')
const app = express()
const path = require('path')



app.get('/api/products', (req, res) => {
    res.send(data.products)
})
app.get('/', (req, res) => {
    res.send('Node')
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running port ${port}`)
})