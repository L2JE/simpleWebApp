import 'dotenv/config';
import express, {Application, Request, Response} from 'express';

const app: Application = express();
const PORT: number = parseInt(process.env.WEBSITE_PORT as string);

app.get('/', (req: Request, res: Response)=>{
    res.send("<a href=\"/example-route\">HELLO!</a>");
});

app.get('/example-route', (req: Request, res: Response)=>{
    res.send("<a href=\"/\">HELLO! FROM EXAMPLE ROUTE</a>");
});

app.listen(PORT, ()=>console.log(`Listening on port ${PORT} :v/`));