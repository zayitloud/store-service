const express = require('express')
const service = require('./service.js')
const app = express()
const port = 3000

app.get('/machines', (req, res) => {
    res.send(service.getMachines())
})

app.get('/machines/:id', (req, res) => {
    console.log(req.params['id'])
    res.send(service.getMachine(req.params['id']))
    res.s
})

app.post('/machines/:id/status', (req, res) => {
    console.log(req.params['id'], req.params['status'])
    res.send(service.changeStatus(id, status))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))