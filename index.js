const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');


// midleware
app.use(cors());
app.use(express.json());

// connect to mongodb cluster

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ocm0z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const query = {};
    const cursor = serviceCollecton.find(query);
    const services = await cursor.toArray();
    res.send(services);
});


app.get('/', (req, res) => {
    res.send('Running Genius Server');
});

app.listen(port, () => {
    console.log('Listening to port');
});



async function run() {
    try {
        await client.connect();
        const serviceCollecton = client.db('geniusCar').collection('service');

        app.get('/service', async (req, res) => {
            const query = {};
            const cursor = serviceCollecton.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

    }
    finally {

    }
}

run().catch(console.dir);