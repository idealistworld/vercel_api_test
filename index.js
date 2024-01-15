const express = require ('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT, () => console.log(`The API is ready on https://localhost:${PORT}`));


app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'cool shirt bro!',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const {id} =  req.params;
    const {logo} = req.body;

    if (!logo) {
        res.status(418).send('we need a logo good sir!')
    }

    res.send({
        response: `${id} is the ID of your shirt and the logo is ${logo}`,
    })
});