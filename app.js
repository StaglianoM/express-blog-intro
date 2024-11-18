const express = require('express')
const bacheca = require('./post')

const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send( `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Blog</title>
            </head>
            <body>
                <h1>Server del mio blog</h1>
                <img src="./images/ciambellone.jpeg" alt="" />
            </body>
        </html>
        `)
})

app.get('/bacheca', (req, res) => {
	res.json(bacheca)
})

app.listen(port, () => {
	console.log(`Server log: ${port}`)
})