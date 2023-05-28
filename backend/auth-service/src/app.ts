// Imports
import express, { Application, } from 'express';

// Express App
const app: Application = express();



// Hello World GET API
app.get('/', (req, res) => {
    res.send('Hello World!')
})

export default app;