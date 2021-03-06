const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/graphql-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open',() => {
  console.log('Connected to database');
}); 

const app = express();

// Allow cross-origin requests
app.use(cors());

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000,() => {
  console.log('🚀Server listening on port 3000!');
});