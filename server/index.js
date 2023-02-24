const express = require('express')
const path = require('path')

const app = express()


const buildPath = path.resolve(__dirname, '../build')

app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
})

app.listen(5500, () => [
    console.log(`Server listen on http://localhost:5500`)
])
