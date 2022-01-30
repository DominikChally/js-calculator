module.exports = (app) => {
    console.log('Test');
    app.post('/calculator', (req, res) => {
        res.send('yo');
    })
}

