import dotenv from "dotenv";
dotenv.config();
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import v1 from "./routes/v1.router";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use('/api/v1', v1);

app.all('/{*splat}', async (req: Request, res: Response) => {
    res.status(404).send({
        message: "The route or resource you were looking for does not exist or could not be found",
        time: new Date().toISOString(),
        status: 'not_found',
    });
});

app.listen(process.env.PORT || 3306, () => {
    console.error(`Fuck you. It's alive`);
});