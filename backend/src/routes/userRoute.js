import { Router } from "express";

//controller layer

const router = new Router();

router.get('/', (req, res) =>
{
    res.send('User route with get method')
});

export default router;