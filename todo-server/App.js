const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const todos = [
    {
        id: 1,
        title: 'React Hooks',
    },
    {
        id: 2,
        title: 'GraphQL',
    },
    {
        id: 3,
        title: 'Apollo',
    },
];

app.use(cors());
app.options('*', cors());

app.get('/', (req, res)=>res.send('Hello world'));
app.get('/todo', (req, res)=>{
    // 2초간 지연, loading test
    res.write('');
    setTimeout(()=>res.end(JSON.stringify(todos)), 2000)
})

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`));