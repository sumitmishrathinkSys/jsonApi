const express = require('express');
const app = express();
const posts = require('./posts')
const PORT = process.env.PORT || 3000

app.get('/posts', (req,res) => res.json(posts))

app.get('/', (req,res) => {
    res.send( 'Api is running.')
})

app.listen(PORT, () => console.log("Server is running"))