const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas');
const cors = require('cors');

const app = express();
const PORT = 6969;

app.use(cors());
app.use(express.json());
app.use(
    '/graphql/',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })

)

app.listen(PORT, () => {
    console.log('Listening...');
    }
)