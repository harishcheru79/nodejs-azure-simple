const express = require('express');
const app = express();

const people = [
    {id: 1 ,name: 'harry'},
    {id: 2 ,name: 'potter'},
    {id: 3 ,name: 'john'},
    {id: 4 ,name: 'wick'}

];

app.get('/',(req,res) => {
    res.send('Hello world!!');
});

app.get('/people', (req,res) => {
    res.send(people);

});

const port = process.env.PORT || 3000;

app.listen(port , () => console.log(`server is running on port ${port}....` ));