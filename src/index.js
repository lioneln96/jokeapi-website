const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        const joke = response.data;
        res.render('index', { joke });
    } catch (error) {
        console.error(error);
        res.render('index', { joke: null });
    }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
