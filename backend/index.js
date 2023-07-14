const express = require('express')
const cors= require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const port = 5000;

app.use('/api/employees', require('./routes/employees'))

app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`)
})