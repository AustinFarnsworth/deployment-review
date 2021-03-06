const express = require('express')
const path = requre('path')

const app = express()

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))

})

app.get("/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../styles.css"))
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})