import Router, {Request, Response} from 'express';

const v1 = Router();

v1.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        message: '/v1/ endpoint is available',
        time: new Date().toISOString(),
        status: 'ok',
    });
});

v1.head('/', (req: Request, res: Response) => {
    res.status(204);
});

v1.options('/', (req: Request, res: Response) => {
    res.status(204).header('Accept', 'application/json').header('Allow', 'HEAD, OPTIONS, GET');
});

export default v1;