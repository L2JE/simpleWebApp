import express, {Application, Request, Response} from 'express';

const app: Application = express();
const PORT: number = 5000;


app.get('/', (req: Request, res: Response)=>{
    res.send("<a href=\"/tuvieja\">HELLO!</a>");
});

app.get('/example-route', (req: Request, res: Response)=>{
    res.send("<a href=\"/\">HELLO! FROM EXAMPLE ROUTE</a>");
});

app.listen(PORT, ()=>console.log(`Listening on port ${PORT} :v/`));